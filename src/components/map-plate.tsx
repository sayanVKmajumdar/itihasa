import type { ChapterMap, MapSite } from "@/content/maps";

/*
 * A styled schematic map of the historical Indian subcontinent.
 * Projection: plain equirectangular over lon 56–99 E, lat 5–38.5 N.
 * Coastline and rivers are simplified by hand for a "vintage plate" look;
 * labels carry a disclaimer in the cartouche.
 */

const LON_MIN = 56;
const LON_MAX = 99;
const LAT_MIN = 5;
const LAT_MAX = 38.5;
const W = 920;
const H = 780;

type Pt = [number, number];

function project([lon, lat]: Pt): Pt {
  return [
    ((lon - LON_MIN) / (LON_MAX - LON_MIN)) * W,
    ((LAT_MAX - lat) / (LAT_MAX - LAT_MIN)) * H,
  ];
}

function polyline(points: Pt[], closed = false): string {
  const d = points
    .map((p, i) => {
      const [x, y] = project(p);
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  return closed ? `${d}Z` : d;
}

/** Simplified external outline of the historical subcontinent (clockwise from the Makran coast). */
const BASE_OUTLINE: Pt[] = [
  [57.6, 25.7], [60.5, 25.3], [62.6, 25.2], [64.8, 25.1], [66.3, 25.3],
  [67.2, 24.6], [67.6, 23.6], [68.2, 23.1], [68.9, 23.6], [70.1, 22.9],
  [69.9, 22.1], [69.6, 21.4], [70.7, 20.7], [71.9, 21.0], [72.5, 21.4],
  [72.8, 20.6], [72.8, 19.1], [73.6, 15.9], [74.4, 13.5], [74.9, 12.9],
  [75.5, 11.6], [76.3, 9.9], [77.0, 8.4], [77.5, 8.1], [77.9, 9.0],
  [79.1, 9.6], [79.9, 10.3], [80.3, 13.3], [81.4, 15.0], [82.3, 16.5],
  [83.5, 18.0], [85.1, 19.7], [86.4, 20.4], [87.0, 21.1], [87.9, 21.7],
  [88.4, 21.9], [89.0, 22.2], [89.9, 22.2], [90.6, 22.45], [91.8, 22.4],
  [92.3, 21.8], [92.9, 22.5], [93.4, 23.6], [94.3, 24.3], [94.8, 25.6],
  [95.2, 26.8], [95.5, 28.0], [96.4, 28.6], [97.2, 28.2], [96.0, 29.3],
  [94.7, 29.4], [93.4, 29.2], [92.1, 27.6], [90.2, 28.1], [88.9, 28.1],
  [88.1, 27.9], [86.7, 28.1], [85.7, 28.3], [84.7, 28.8], [83.7, 29.5],
  [82.2, 30.2], [81.0, 30.7], [80.2, 31.0], [78.9, 32.4], [77.5, 32.7],
  [76.6, 33.4], [75.6, 33.9], [74.9, 34.4], [74.0, 35.3], [75.3, 36.0],
  [76.6, 36.4], [75.4, 36.9], [73.9, 37.0], [72.4, 36.8], [71.7, 36.4],
  [71.2, 35.5], [71.1, 34.8], [70.7, 33.8], [70.2, 33.0], [69.7, 32.5],
  [68.9, 31.8], [68.1, 31.2], [66.4, 29.9], [64.5, 29.4], [62.6, 29.4],
  [61.9, 29.7], [61.3, 28.5], [61.6, 27.0], [60.9, 26.1], [59.2, 25.6],
];

const SRI_LANKA: Pt = [80.7, 7.6];

const RIVERS: Record<string, Pt[]> = {
  indus: [
    [75.8, 34.9], [74.7, 34.4], [73.9, 34.0], [73.0, 33.6], [72.3, 33.9],
    [71.9, 32.9], [71.6, 31.7], [70.9, 30.6], [70.5, 29.3], [69.9, 28.4],
    [68.9, 27.7], [68.5, 26.6], [68.4, 25.4], [68.0, 24.4], [67.6, 23.5],
  ],
  jhelum: [
    [75.0, 34.1], [74.3, 33.8], [73.6, 33.2], [73.0, 32.9], [72.6, 32.4],
    [72.3, 31.6],
  ],
  chenab: [
    [77.0, 32.8], [76.2, 33.1], [75.2, 33.2], [74.4, 32.7], [74.1, 32.4],
    [73.0, 32.1], [72.5, 31.6], [72.2, 31.0], [71.9, 30.4],
  ],
  ravi: [
    [76.3, 32.4], [75.6, 32.4], [74.9, 32.2], [74.3, 31.9], [73.9, 31.4],
    [73.4, 30.9], [72.4, 30.6],
  ],
  sutlej: [
    [77.0, 32.2], [76.3, 31.4], [75.4, 31.2], [74.6, 30.9], [73.6, 30.5],
    [72.9, 29.9], [72.2, 29.4], [71.6, 29.3], [71.1, 29.9], [70.9, 30.6],
  ],
  ganga: [
    [79.1, 30.9], [78.5, 30.3], [78.2, 29.9], [78.8, 29.6], [79.5, 28.8],
    [80.0, 27.6], [80.35, 26.45], [81.0, 25.9], [81.85, 25.4], [82.6, 25.3],
    [83.0, 25.3], [83.9, 25.6], [85.1, 25.6], [86.2, 25.4], [87.0, 25.2],
    [87.9, 24.8], [88.4, 24.4], [88.9, 23.8], [89.4, 23.2], [89.5, 22.6],
  ],
  hooghly: [
    [87.9, 24.8], [88.1, 24.1], [88.4, 23.2], [88.36, 22.57], [88.2, 22.1],
  ],
  yamuna: [
    [78.4, 31.0], [77.9, 30.6], [77.6, 30.4], [77.3, 29.8], [77.5, 29.1],
    [77.2, 28.6], [77.7, 27.9], [78.0, 27.2], [78.5, 27.0], [79.0, 26.8],
    [79.9, 26.5], [80.9, 26.1], [81.85, 25.4],
  ],
  gandak: [
    [83.9, 28.5], [84.4, 27.5], [84.9, 26.7], [85.3, 26.1], [85.6, 25.7],
  ],
  ghaghara: [
    [81.9, 29.4], [82.5, 28.5], [83.0, 27.7], [82.9, 27.1], [82.2, 26.8],
    [83.05, 26.8], [83.6, 26.3], [84.3, 25.9],
  ],
  son: [
    [82.0, 23.5], [82.5, 24.2], [83.2, 24.6], [83.9, 24.9], [84.5, 25.2],
    [84.9, 25.5],
  ],
  chambal: [
    [75.0, 23.6], [75.8, 24.3], [76.6, 25.0], [77.4, 25.8], [78.2, 26.2],
    [78.7, 26.5],
  ],
  brahmaputra: [
    [95.6, 29.5], [95.4, 28.4], [95.2, 27.8], [94.6, 26.6], [93.8, 26.3],
    [92.8, 26.2], [91.8, 25.9], [90.6, 25.5], [89.9, 25.2], [89.85, 24.4],
    [90.3, 23.9], [90.5, 23.4], [90.8, 22.9],
  ],
  narmada: [
    [81.7, 22.9], [80.6, 23.0], [79.95, 23.2], [79.1, 23.0], [78.3, 22.9],
    [77.4, 22.4], [76.4, 22.2], [75.4, 22.1], [74.6, 22.0], [73.7, 21.9],
    [72.97, 21.7],
  ],
  tapti: [
    [78.2, 21.1], [77.3, 21.2], [76.4, 21.2], [75.6, 21.2], [74.6, 21.2],
    [73.6, 21.2], [72.83, 21.17],
  ],
  mahanadi: [
    [81.5, 19.9], [81.9, 20.4], [82.7, 20.7], [83.5, 20.6], [84.2, 20.9],
    [85.1, 20.5], [85.8, 20.2], [86.4, 20.3],
  ],
  godavari: [
    [73.5, 19.9], [74.4, 19.7], [75.5, 19.4], [76.6, 19.1], [77.5, 18.7],
    [78.9, 18.4], [79.7, 18.7], [80.8, 19.2], [81.6, 18.6], [82.0, 17.6],
    [81.9, 16.8], [81.5, 16.6],
  ],
  krishna: [
    [73.7, 18.0], [74.4, 17.7], [75.2, 17.4], [75.8, 17.1], [76.2, 16.7],
    [76.6, 16.35], [77.3, 16.3], [78.1, 16.6], [79.1, 16.5], [80.2, 16.5],
    [80.9, 16.3], [81.3, 16.0],
  ],
  tungabhadra: [
    [75.6, 14.3], [75.8, 14.7], [76.1, 15.2], [76.5, 15.3], [77.1, 15.7],
    [77.8, 16.0],
  ],
  kaveri: [
    [75.6, 12.4], [76.2, 12.5], [76.7, 12.4], [77.2, 12.2], [77.7, 11.9],
    [77.8, 11.6], [78.0, 11.4], [78.7, 10.8], [79.2, 10.8], [79.4, 11.0],
    [79.75, 11.35],
  ],
  penner: [
    [77.5, 13.6], [78.3, 13.9], [79.0, 14.3], [79.5, 14.5], [80.1, 15.1],
    [80.4, 15.7],
  ],
};

const SEA_LABELS: { text: string; at: Pt }[] = [
  { text: "Arabian Sea", at: [66.8, 15.8] },
  { text: "Indian Ocean", at: [79.0, 6.5] },
  { text: "Bay of Bengal", at: [88.6, 14.8] },
];

function centroid(points: Pt[]): Pt {
  let x = 0;
  let y = 0;
  for (const [px, py] of points.map(project)) {
    x += px;
    y += py;
  }
  return [x / points.length, y / points.length];
}

function arrowHead(points: Pt[], size = 9): string | null {
  if (points.length < 2) return null;
  const a = project(points[points.length - 2]);
  const b = project(points[points.length - 1]);
  const angle = Math.atan2(b[1] - a[1], b[0] - a[0]);
  const p1 = [
    b[0] - size * Math.cos(angle - Math.PI / 6),
    b[1] - size * Math.sin(angle - Math.PI / 6),
  ];
  const p2 = [
    b[0] - size * Math.cos(angle + Math.PI / 6),
    b[1] - size * Math.sin(angle + Math.PI / 6),
  ];
  return `${b[0].toFixed(1)},${b[1].toFixed(1)} ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
}

function SiteMark({ site, accent, mapId }: { site: MapSite; accent: string; mapId: string }) {
  const [cx, cy] = project([site.lon, site.lat]);
  const kind = site.kind ?? "site";
  const dx = site.dx ?? 7;
  const dy = site.dy ?? 4;
  const anchor = dx < 0 ? "end" : "start";

  return (
    <g key={`${mapId}-${site.name}`}>
      {kind === "battle" ? (
        <g stroke="#8f3d1c" strokeWidth="2.6" strokeLinecap="round">
          <line x1={cx - 4.5} y1={cy - 4.5} x2={cx + 4.5} y2={cy + 4.5} />
          <line x1={cx + 4.5} y1={cy - 4.5} x2={cx - 4.5} y2={cy + 4.5} />
        </g>
      ) : kind === "capital" ? (
        <g>
          <circle cx={cx} cy={cy} r={5.5} fill="none" stroke={accent} strokeWidth="1.6" />
          <circle cx={cx} cy={cy} r={2.6} fill={accent} />
        </g>
      ) : kind === "city" ? (
        <rect
          x={cx - 3}
          y={cy - 3}
          width={6}
          height={6}
          fill="#f7f2e7"
          stroke="#2c2418"
          strokeWidth="1.6"
        />
      ) : kind === "port" ? (
        <g>
          <circle cx={cx} cy={cy} r={4.2} fill="none" stroke={accent} strokeWidth="1.7" />
          <circle cx={cx} cy={cy} r={1.4} fill={accent} />
        </g>
      ) : (
        <circle cx={cx} cy={cy} r={3} fill={accent} stroke="#f7f2e7" strokeWidth="1.1" />
      )}
      <text
        x={cx + dx}
        y={cy + dy}
        textAnchor={anchor}
        className="map-label"
        fontSize={site.small ? 11 : 12.5}
      >
        {site.name}
        {site.note ? ` ${site.note}` : ""}
      </text>
    </g>
  );
}

export function MapPlate({
  map,
  accent,
  plateNumber,
}: {
  map: ChapterMap;
  accent: string;
  plateNumber: string;
}) {
  const uid = map.title.replace(/[^a-z0-9]/gi, "-").toLowerCase();
  const hatchId = `hatch-${uid}`;
  const kinds = new Set(map.sites.map((s) => s.kind ?? "site"));
  const showRegionLegend = (map.regions?.length ?? 0) > 0;
  const showRouteLegend = (map.routes?.length ?? 0) > 0;

  const legend: { key: string; label: string; node: string }[] = [];
  if (kinds.has("capital")) legend.push({ key: "capital", label: "Capital", node: "◎" });
  if (kinds.has("city")) legend.push({ key: "city", label: "City", node: "□" });
  if (kinds.has("site")) legend.push({ key: "site", label: "Site", node: "●" });
  if (kinds.has("port")) legend.push({ key: "port", label: "Port", node: "◍" });
  if (kinds.has("battle")) legend.push({ key: "battle", label: "Battle", node: "✕" });
  if (showRegionLegend) legend.push({ key: "region", label: "Polity / extent", node: "▨" });
  if (showRouteLegend) legend.push({ key: "route", label: "Route", node: "⇢" });

  return (
    <figure className="overflow-hidden rounded-2xl border border-ink/20 bg-[#efe6d3] shadow-[0_25px_60px_-30px_rgba(34,26,16,0.45)]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={`Historical map: ${map.title}`}
        className="h-auto w-full"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <defs>
          <linearGradient id={`parch-${uid}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f0e8d5" />
            <stop offset="55%" stopColor="#ece1c8" />
            <stop offset="100%" stopColor="#e6d9bc" />
          </linearGradient>
          <pattern
            id={hatchId}
            width="7"
            height="7"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="7" stroke={accent} strokeWidth="1.4" opacity="0.55" />
          </pattern>
        </defs>

        <rect width={W} height={H} fill={`url(#parch-${uid})`} />

        {/* graticule */}
        <g stroke="#221a10" strokeWidth="0.7" opacity="0.07" strokeDasharray="3 5">
          {[60, 65, 70, 75, 80, 85, 90, 95].map((lon) => {
            const [x] = project([lon, 0]);
            return <line key={lon} x1={x} y1={0} x2={x} y2={H} />;
          })}
          {[10, 15, 20, 25, 30, 35].map((lat) => {
            const [, y] = project([0, lat]);
            return <line key={lat} x1={0} y1={y} x2={W} y2={y} />;
          })}
        </g>

        {/* landmass */}
        <path
          d={polyline(BASE_OUTLINE, true)}
          fill="#e7dabb"
          stroke="#221a10"
          strokeWidth="1.6"
          strokeOpacity="0.75"
          strokeLinejoin="round"
        />
        <ellipse
          cx={project(SRI_LANKA)[0]}
          cy={project(SRI_LANKA)[1]}
          rx={14}
          ry={22}
          fill="#e7dabb"
          stroke="#221a10"
          strokeWidth="1.4"
          strokeOpacity="0.75"
        />

        {/* rivers */}
        <g fill="none" stroke="#31517d" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round">
          {(map.rivers ?? []).map((r) =>
            RIVERS[r] ? <path key={r} d={polyline(RIVERS[r])} /> : null,
          )}
        </g>

        {/* sea labels */}
        {SEA_LABELS.map((s) => {
          const [x, y] = project(s.at);
          return (
            <text
              key={s.text}
              x={x}
              y={y}
              textAnchor="middle"
              fill="#31517d"
              opacity="0.45"
              fontStyle="italic"
              fontSize="15"
              letterSpacing="1"
              style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
            >
              {s.text}
            </text>
          );
        })}

        {/* regions */}
        {map.regions?.map((region, i) => {
          const labelAt = region.labelAt
            ? project(region.labelAt)
            : centroid(region.points);
          return (
            <g key={i}>
              <path
                d={polyline(region.points, true)}
                fill={`url(#${hatchId})`}
                stroke={region.color ?? accent}
                strokeWidth="1.6"
                strokeDasharray="6 4"
                strokeOpacity="0.85"
                fillOpacity="0.9"
                strokeLinejoin="round"
              />
              {region.label && (
                <text
                  x={labelAt[0]}
                  y={labelAt[1]}
                  textAnchor="middle"
                  className="map-region-label"
                  fill={region.color ?? accent}
                  fontStyle="italic"
                  fontSize="15.5"
                  fontWeight="600"
                  style={{ fontFamily: "var(--font-newsreader), Georgia, serif" }}
                >
                  {region.label}
                </text>
              )}
            </g>
          );
        })}

        {/* routes */}
        {map.routes?.map((route, i) => {
          const head = arrowHead(route.points);
          const labelAt = route.labelAt
            ? project(route.labelAt)
            : centroid(route.points);
          return (
            <g key={i}>
              <path
                d={polyline(route.points)}
                fill="none"
                stroke={route.color ?? "#2c2418"}
                strokeWidth="2.1"
                strokeDasharray="7 5"
                strokeLinecap="round"
                opacity="0.85"
              />
              {head && <polygon points={head} fill={route.color ?? "#2c2418"} />}
              {route.label && (
                <text
                  x={labelAt[0]}
                  y={labelAt[1] - 8}
                  textAnchor="middle"
                  className="map-label"
                  fontSize="11.5"
                  fontStyle="italic"
                  fill="#2c2418"
                >
                  {route.label}
                </text>
              )}
            </g>
          );
        })}

        {/* sites */}
        {map.sites.map((site) => (
          <SiteMark key={site.name} site={site} accent={accent} mapId={uid} />
        ))}

        {/* compass */}
        <g transform={`translate(${W - 62}, 74)`} opacity="0.8">
          <circle r="24" fill="none" stroke="#221a10" strokeWidth="1.2" />
          <line x1="0" y1="16" x2="0" y2="-15" stroke="#221a10" strokeWidth="1.4" />
          <polygon points="0,-18 -5,-7 5,-7" fill={accent} />
          <text
            y="-28"
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill="#221a10"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            N
          </text>
        </g>

        {/* cartouche */}
        <g transform="translate(22, 20)">
          <rect
            width={330}
            height={map.subtitle ? 84 : 66}
            rx="8"
            fill="#f7f2e7"
            opacity="0.88"
            stroke="#221a10"
            strokeOpacity="0.35"
          />
          <text
            x="16"
            y="26"
            fontSize="11"
            letterSpacing="2.4"
            fill="#8a7c66"
            style={{ textTransform: "uppercase" }}
          >
            MAP PLATE {plateNumber}
          </text>
          <text
            x="16"
            y="50"
            fontSize="21"
            fontWeight="700"
            fill="#221a10"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {map.title}
          </text>
          {map.subtitle && (
            <text x="16" y="70" fontSize="12" fill="#5d5240" fontStyle="italic">
              {map.subtitle}
            </text>
          )}
        </g>

        {/* footnote */}
        <text
          x={W - 18}
          y={H - 14}
          textAnchor="end"
          fontSize="10.5"
          fill="#8a7c66"
          fontStyle="italic"
        >
          Indicative historical sketch — coastlines & boundaries simplified
        </text>
      </svg>

      <figcaption className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink/15 bg-paper px-5 py-3">
        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
          Map Plate {plateNumber}
        </span>
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
          {legend.map((l) => (
            <span key={l.key} className="flex items-center gap-1.5 font-sans text-[11.5px] text-ink-soft">
              <span aria-hidden style={{ color: l.key === "battle" ? "#8f3d1c" : accent }}>
                {l.node}
              </span>
              {l.label}
            </span>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
