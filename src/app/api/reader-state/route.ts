import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { bookmarks, readingProgress } from "@/db/schema";
import { getTopic } from "@/content";

export const dynamic = "force-dynamic";

interface ReaderState {
  completed: string[];
  bookmarks: string[];
}

async function readState(): Promise<ReaderState> {
  try {
    const [progressRows, bookmarkRows] = await Promise.all([
      db
        .select()
        .from(readingProgress)
        .where(eq(readingProgress.completed, true)),
      db.select().from(bookmarks),
    ]);
    return {
      completed: progressRows.map((r) => r.topicSlug),
      bookmarks: bookmarkRows.map((r) => r.topicSlug),
    };
  } catch {
    // Tables may not exist yet on first boot — degrade gracefully.
    return { completed: [], bookmarks: [] };
  }
}

export async function GET() {
  const state = await readState();
  return NextResponse.json(state);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      action?: "complete" | "bookmark";
      slug?: string;
      value?: boolean;
    };
    const { action, slug, value } = body;
    if (!action || !slug || typeof value !== "boolean" || !getTopic(slug)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    if (action === "complete") {
      await db
        .insert(readingProgress)
        .values({ topicSlug: slug, completed: value, updatedAt: new Date() })
        .onConflictDoUpdate({
          target: readingProgress.topicSlug,
          set: { completed: value, updatedAt: new Date() },
        });
    } else if (action === "bookmark") {
      if (value) {
        await db
          .insert(bookmarks)
          .values({ topicSlug: slug, createdAt: new Date() })
          .onConflictDoNothing();
      } else {
        await db.delete(bookmarks).where(eq(bookmarks.topicSlug, slug));
      }
    }

    const state = await readState();
    return NextResponse.json(state);
  } catch {
    return NextResponse.json(
      { completed: [], bookmarks: [] },
      { status: 200 },
    );
  }
}
