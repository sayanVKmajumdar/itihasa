import { boolean, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const readingProgress = pgTable("reading_progress", {
  topicSlug: text("topic_slug").primaryKey(),
  completed: boolean("completed").notNull().default(false),
  updatedAt: timestamp("updated_at", { withTimezone: false })
    .notNull()
    .defaultNow(),
});

export const bookmarks = pgTable("bookmarks", {
  topicSlug: text("topic_slug").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: false })
    .notNull()
    .defaultNow(),
});
