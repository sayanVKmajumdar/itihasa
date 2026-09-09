export type SiteKind = "site" | "city" | "capital" | "port" | "battle";

export interface MapSite {
  name: string;
  lon: number;
  lat: number;
  kind?: SiteKind;
  /** appended after the name, e.g. a year */
  note?: string;
  dx?: number;
  dy?: number;
  small?: boolean;
}

export interface MapRegion {
  points: [number, number][];
  label?: string;
  labelAt?: [number, number];
  color?: string;
}

export interface MapRoute {
  points: [number, number][];
  label?: string;
  labelAt?: [number, number];
  color?: string;
}

export interface ChapterMap {
  title: string;
  subtitle?: string;
  rivers?: string[];
  regions?: MapRegion[];
  routes?: MapRoute[];
  sites: MapSite[];
}

/* Coordinates are approximate historical-geographic positions (lon, lat). */

export const chapterMaps: Record<string, ChapterMap> = {
  "prehistoric-india": {
    title: "Echoes of the Stone Ages",
    subtitle: "Key Palaeolithic & Neolithic sites",
    rivers: ["indus", "ganga", "narmada"],
    sites: [
      { name: "Burzahom", lon: 74.88, lat: 34.17, kind: "site", note: "(pit dwellings)", dx: -8, small: true },
      { name: "Mehrgarh", lon: 66.7, lat: 29.5, kind: "city", note: "(earliest farming, c. 7000 BCE)", dx: 8 },
      { name: "Bhimbetka", lon: 77.61, lat: 22.94, kind: "city", note: "(rock art)", dx: 8 },
      { name: "Hunsgi valley", lon: 76.5, lat: 16.2, kind: "site", dx: 8 },
      { name: "Utnur", lon: 77.7, lat: 16.1, kind: "site", note: "(ash mounds)", dy: -6, small: true },
      { name: "Sarai Nahar Rai", lon: 81.9, lat: 26.9, kind: "site", small: true, dx: 8 },
    ],
  },

  "indus-valley-civilization": {
    title: "The Harappan World",
    subtitle: "Mature phase, c. 2600–1900 BCE",
    rivers: ["indus", "jhelum", "chenab", "ravi", "sutlej"],
    regions: [
      {
        points: [
          [75.2, 31.6], [71.8, 32.0], [68.8, 32.0], [67.6, 29.2], [67.9, 25.8],
          [67.6, 23.6], [69.4, 22.9], [71.2, 22.1], [72.6, 22.9], [73.6, 24.3],
          [75.8, 26.2], [77.2, 28.9], [76.6, 30.4],
        ],
        label: "Mature Harappan sphere",
      },
    ],
    routes: [
      {
        points: [
          [76.8, 30.1], [75.7, 29.9], [74.8, 29.4], [73.9, 28.8], [72.9, 28.1], [71.8, 27.4],
        ],
        label: "Ghaggar-Hakra (dried)",
        labelAt: [74.0, 28.9],
      },
    ],
    sites: [
      { name: "Shortughai", lon: 69.47, lat: 37.02, kind: "site", note: "(lapis outpost)", dx: -9, small: true },
      { name: "Harappa", lon: 72.87, lat: 30.63, kind: "capital" },
      { name: "Rakhigarhi", lon: 76.11, lat: 29.29, kind: "city", small: true, dx: 8 },
      { name: "Kalibangan", lon: 74.13, lat: 29.47, kind: "city", dy: -6 },
      { name: "Banawali", lon: 75.4, lat: 29.58, kind: "site", small: true, dx: 8, dy: 12 },
      { name: "Ganweriwala", lon: 73.6, lat: 28.5, kind: "city", dx: -9, dy: 4 },
      { name: "Mohenjo-daro", lon: 68.14, lat: 27.32, kind: "capital", dx: 8 },
      { name: "Chanhudaro", lon: 68.14, lat: 26.34, kind: "site", small: true, dx: 8 },
      { name: "Dholavira", lon: 70.21, lat: 23.88, kind: "city", dx: -9 },
      { name: "Lothal", lon: 72.25, lat: 22.52, kind: "port", dx: 8 },
      { name: "Sutkagendor", lon: 61.56, lat: 25.22, kind: "port", dx: 8, small: true },
      { name: "Alamgirpur", lon: 77.5, lat: 29.0, kind: "site", small: true, dx: 8, dy: -6 },
      { name: "Daimabad", lon: 74.7, lat: 19.52, kind: "site", small: true, dx: 8, note: "(southern outlier)" },
    ],
  },

  "vedic-age": {
    title: "From Sapta Sindhu to the Ganga",
    subtitle: "Early Vedic Punjab → Later Vedic doab",
    rivers: ["indus", "jhelum", "chenab", "ravi", "sutlej", "ganga", "yamuna"],
    routes: [
      {
        points: [
          [74.3, 31.6], [76.0, 30.4], [76.9, 29.97], [78.6, 28.7], [79.9, 27.05], [81.85, 25.43],
        ],
        label: "Eastward movement, c. 1000–600 BCE (Later Vedic)",
        labelAt: [79.6, 24.6],
      },
    ],
    regions: [
      {
        points: [
          [74.0, 32.5], [71.5, 33.6], [70.5, 31.5], [71.6, 29.6], [73.5, 29.4], [74.6, 31.0],
        ],
        label: "Sapta Sindhu — Rig Vedic Punjab",
      },
    ],
    sites: [
      { name: "Takṣaśilā (Taxila)", lon: 71.8, lat: 33.7, kind: "city", note: "Gāndhāra", dx: 8 },
      { name: "Kurukṣetra", lon: 76.9, lat: 29.97, kind: "site", note: "Battle of the Ten Kings hymns", dx: 8, dy: -6 },
      { name: "Hastināpura", lon: 78.0, lat: 29.2, kind: "city", note: "Kuru", dx: 8 },
      { name: "Mathurā", lon: 77.7, lat: 27.5, kind: "site", note: "Sūrasena", dy: 14 },
      { name: "Ahichchhatrā", lon: 79.2, lat: 28.37, kind: "site", note: "Pañcāla", dx: 8, small: true },
      { name: "Kānyakubja (Kannauj)", lon: 79.9, lat: 27.05, kind: "city", dx: 8 },
      { name: "Kauśāmbī", lon: 81.4, lat: 25.35, kind: "city", note: "Vatsa", dx: -9 },
      { name: "Prayāga", lon: 81.85, lat: 25.43, kind: "site", dx: 8, dy: 12 },
      { name: "Ayodhyā", lon: 82.2, lat: 26.8, kind: "city", note: "Kosala", dx: 8 },
    ],
  },

  "mahajanapadas-magadha": {
    title: "The Sixteen Mahajanapadas",
    subtitle: "Northern India, 6th–4th century BCE",
    rivers: ["indus", "ganga", "yamuna", "ghaghara"],
    routes: [
      {
        points: [
          [69.2, 34.5], [71.6, 34.0], [73.4, 32.8], [75.0, 32.0], [75.4, 31.7],
        ],
        label: "Alexander, 327–325 BCE (to the Beas)",
        labelAt: [72.4, 30.6],
      },
    ],
    sites: [
      { name: "Kābul", lon: 69.2, lat: 34.5, kind: "city", note: "Achaemenid satrapy", small: true, dx: 8 },
      { name: "Takṣaśilā", lon: 71.8, lat: 33.7, kind: "capital", note: "Gāndhāra", dx: -9, dy: 12 },
      { name: "Hydaspes", lon: 73.4, lat: 32.8, kind: "battle", note: "326 BCE", dx: 8 },
      { name: "Avanti (Ujjayinī)", lon: 75.78, lat: 23.18, kind: "city", dx: -9 },
      { name: "Ahichchhatrā", lon: 79.2, lat: 28.37, kind: "site", note: "Pañcāla", small: true, dx: -9 },
      { name: "Mathurā", lon: 77.7, lat: 27.5, kind: "site", note: "Sūrasena", dx: -10 },
      { name: "Kauśāmbī", lon: 81.4, lat: 25.3, kind: "city", note: "Vatsa", dy: 14 },
      { name: "Śrāvastī", lon: 82.05, lat: 27.5, kind: "site", note: "Kosala", dx: 8 },
      { name: "Kapilavastu", lon: 83.05, lat: 27.45, kind: "site", note: "Śākya gana-saṅgha", dx: 8, dy: -4 },
      { name: "Kāśī (Banāras)", lon: 83.0, lat: 25.3, kind: "city", dx: -9 },
      { name: "Kuśinagara", lon: 83.9, lat: 26.74, kind: "site", note: "Malla", dx: 8 },
      { name: "Vaiśālī", lon: 85.13, lat: 25.99, kind: "city", note: "Vṛjji confederacy", dx: 8, dy: -6 },
      { name: "Rājagṛha", lon: 85.42, lat: 25.0, kind: "city", note: "Magadha", dx: 8 },
      { name: "Pāṭaliputra", lon: 85.14, lat: 25.6, kind: "capital", dx: -9, dy: 16 },
      { name: "Champā", lon: 87.0, lat: 25.25, kind: "site", note: "Aṅga", dx: 8 },
    ],
  },

  "buddhism-and-jainism": {
    title: "The Land of the Two Teachers",
    subtitle: "Eastern Ganga plains, 6th–5th century BCE",
    rivers: ["ganga", "yamuna", "ghaghara", "gandak"],
    sites: [
      { name: "Lumbinī", lon: 83.3, lat: 27.47, kind: "site", note: "Buddha's birth", dx: 8, dy: -6 },
      { name: "Kapilavastu", lon: 83.05, lat: 27.42, kind: "city", dx: -9, dy: 12 },
      { name: "Śrāvastī", lon: 82.05, lat: 27.5, kind: "city", note: "longest residence", small: true, dx: -9 },
      { name: "Kuśinagara", lon: 83.9, lat: 26.74, kind: "site", note: "mahāparinirvāṇa", dx: 8, dy: -6 },
      { name: "Vaiśālī (Kuṇḍagrāma)", lon: 85.13, lat: 25.99, kind: "city", note: "Mahāvīra's birth", dx: 8, dy: -6 },
      { name: "Rājagṛha", lon: 85.42, lat: 25.0, kind: "city", note: "First Council", dx: 8 },
      { name: "Bodh Gayā", lon: 84.99, lat: 24.7, kind: "site", note: "enlightenment", dx: 8, dy: 13 },
      { name: "Sārnāth", lon: 83.02, lat: 25.38, kind: "site", note: "first sermon", dx: -12, dy: 5 },
      { name: "Pāṭaliputra", lon: 85.2, lat: 25.62, kind: "capital", note: "Third Council", dx: -10, dy: 17 },
      { name: "Banāras", lon: 82.98, lat: 25.31, kind: "city", dx: 10, dy: -2 },
    ],
  },

  "mauryan-empire": {
    title: "The Mauryan Empire",
    subtitle: "c. 250 BCE, at Aśoka's accession",
    rivers: ["indus", "ganga", "yamuna", "narmada", "godavari", "krishna"],
    regions: [
      {
        points: [
          [75.0, 36.8], [72.0, 35.8], [68.5, 35.4], [66.8, 33.8], [66.2, 31.4],
          [64.8, 29.8], [62.6, 29.6], [61.2, 27.2], [60.8, 25.8], [64.0, 25.2],
          [67.4, 24.0], [67.6, 23.3], [69.5, 22.4], [71.5, 21.8], [72.8, 20.8],
          [73.6, 17.5], [74.8, 14.5], [76.0, 12.5], [77.5, 11.8], [79.0, 13.5],
          [80.2, 15.5], [82.3, 16.8], [84.6, 18.8], [86.2, 20.6], [87.9, 21.9],
          [89.0, 23.0], [89.2, 24.6], [87.8, 24.9], [86.0, 26.0], [84.0, 27.0],
          [82.5, 28.5], [80.8, 30.0], [79.0, 31.3], [77.4, 32.6], [76.3, 34.2],
          [75.6, 35.4],
        ],
        label: "Mauryan dominions",
        labelAt: [77.5, 24.5],
      },
    ],
    routes: [
      {
        points: [[85.14, 25.6], [85.5, 23.5], [85.84, 20.4]],
        label: "Kaliṅga campaign, 261 BCE",
        labelAt: [87.4, 22.9],
      },
    ],
    sites: [
      { name: "Kāndahār", lon: 65.7, lat: 31.6, kind: "site", note: "bilingual edicts", dx: 8, small: true },
      { name: "Pāṭaliputra", lon: 85.14, lat: 25.6, kind: "capital" },
      { name: "Takṣaśilā", lon: 71.8, lat: 33.7, kind: "city", note: "NW province", dx: -9 },
      { name: "Ujjayinī", lon: 75.78, lat: 23.18, kind: "city", note: "western province", dx: -9 },
      { name: "Tosalī (Kaliṅga)", lon: 85.84, lat: 20.24, kind: "battle", note: "261 BCE", dx: 8 },
      { name: "Suvarṇagiri (Maski)", lon: 76.6, lat: 15.9, kind: "city", note: "southern province", small: true, dx: 8 },
      { name: "Girnar", lon: 70.5, lat: 21.5, kind: "site", small: true, dx: -9, dy: 4 },
      { name: "Sārnāth", lon: 83.02, lat: 25.38, kind: "site", note: "lion capital", dx: 8, small: true },
      { name: "Sāñchī", lon: 77.74, lat: 23.49, kind: "site", small: true, dx: 8 },
    ],
  },

  "post-mauryan-india": {
    title: "Trade Winds, c. 100 CE",
    subtitle: "Kuṣāṇas, Śakas, Sātavāhanas & the Sangam south",
    rivers: ["indus", "narmada", "godavari", "krishna", "kaveri"],
    regions: [
      {
        points: [
          [76.4, 8.6], [78.2, 8.4], [79.4, 9.4], [79.9, 11.0], [79.6, 12.0],
          [78.0, 12.4], [76.6, 10.6],
        ],
        label: "Cēra · Cōḻa · Pāṇḍya (Sangam)",
      },
      {
        points: [
          [76.5, 22.9], [73.9, 21.5], [74.3, 19.3], [75.6, 17.5], [77.8, 17.0],
          [80.0, 17.5], [80.8, 19.3], [79.0, 20.5], [77.2, 21.3],
        ],
        label: "Sātavāhana realm",
      },
    ],
    routes: [
      {
        points: [[71.6, 34.0], [69.5, 32.9], [65.7, 31.6], [62.0, 30.8]],
        label: "Silk Road to Central Asia",
        labelAt: [66.8, 30.2],
      },
      {
        points: [[75.5, 19.0], [74.2, 20.2], [72.97, 21.7], [74.5, 18.5], [76.2, 10.2], [75.0, 8.6], [70.5, 9.5], [66.0, 12.5]],
        label: "Monsoon route to the Red Sea & Rome",
        labelAt: [69.7, 11.0],
      },
    ],
    sites: [
      { name: "Puruṣapura", lon: 71.6, lat: 34.0, kind: "capital", note: "Kuṣāṇa (Kaniṣka)", dx: -9 },
      { name: "Sākala", lon: 74.54, lat: 32.49, kind: "city", note: "Indo-Greek", small: true, dx: 8 },
      { name: "Mathurā", lon: 77.7, lat: 27.5, kind: "city", dx: -10 },
      { name: "Ujjayinī", lon: 75.78, lat: 23.18, kind: "city", note: "Śaka kṣatrapas", dx: -9 },
      { name: "Pratiṣṭhāna (Paithan)", lon: 75.39, lat: 19.48, kind: "capital", note: "Sātavāhana", dx: 8 },
      { name: "Barygaza (Bharuch)", lon: 72.97, lat: 21.7, kind: "port", dx: -9 },
      { name: "Amarāvatī", lon: 80.36, lat: 16.57, kind: "site", small: true, dx: 8 },
      { name: "Kāñcī", lon: 79.7, lat: 12.84, kind: "city", small: true, dx: 8 },
      { name: "Kāverīpaṭṭinam", lon: 79.85, lat: 11.14, kind: "port", dx: -70, dy: 4 },
      { name: "Muziris", lon: 76.2, lat: 10.2, kind: "port", dx: -9 },
      { name: "Korkai", lon: 78.07, lat: 8.63, kind: "port", small: true, dx: 8, dy: 12 },
      { name: "Tāmralipti", lon: 87.9, lat: 22.3, kind: "port", dx: 8 },
      { name: "Anurādhapura", lon: 80.38, lat: 8.31, kind: "city", small: true, dx: 8 },
    ],
  },

  "gupta-empire": {
    title: "The Gupta World",
    subtitle: "c. 400 CE, zenith of Candragupta II",
    rivers: ["ganga", "yamuna", "narmada"],
    regions: [
      {
        points: [
          [76.4, 30.8], [78.6, 30.4], [80.6, 29.2], [83.0, 27.6], [86.0, 26.0],
          [88.3, 24.2], [87.9, 22.4], [86.0, 21.2], [83.5, 19.3], [81.0, 17.6],
          [78.5, 16.0], [76.0, 17.0], [74.3, 19.3], [72.9, 21.0], [70.9, 20.9],
          [71.6, 22.3], [73.3, 24.3], [74.6, 26.6], [75.2, 28.8],
        ],
        label: "Gupta empire & spheres",
        labelAt: [79.5, 24.0],
      },
    ],
    routes: [
      {
        points: [[81.85, 25.43], [79.5, 23.0], [78.6, 19.5], [79.7, 12.84]],
        label: "Samudragupta's dakṣiṇāpatha campaign",
        labelAt: [82.8, 17.6],
      },
    ],
    sites: [
      { name: "Pāṭaliputra", lon: 85.14, lat: 25.6, kind: "capital" },
      { name: "Ujjayinī", lon: 75.78, lat: 23.18, kind: "capital", note: "Candragupta II", dx: -12 },
      { name: "Prayāga", lon: 81.85, lat: 25.43, kind: "city", note: "Allahabad pillar", dx: 8, dy: -6 },
      { name: "Ajantā", lon: 75.4, lat: 20.55, kind: "site", small: true, dx: -9 },
      { name: "Sāñchī", lon: 77.74, lat: 23.49, kind: "site", small: true, dx: 8 },
      { name: "Deogarh", lon: 78.23, lat: 24.52, kind: "site", small: true, dx: 8, dy: -6 },
      { name: "Sārnāth", lon: 83.02, lat: 25.38, kind: "site", small: true, dx: 8, dy: 12 },
      { name: "Tāmralipti", lon: 87.9, lat: 22.3, kind: "port", dx: 8 },
      { name: "Barygaza", lon: 72.97, lat: 21.7, kind: "port", small: true, dx: -9 },
    ],
  },

  "harsha-and-the-south": {
    title: "Three Powers, c. 640 CE",
    subtitle: "Harṣa, Cālukyas & Pallavas",
    rivers: ["ganga", "yamuna", "narmada", "godavari", "krishna", "kaveri"],
    regions: [
      {
        points: [
          [77.4, 30.4], [75.3, 28.6], [74.6, 26.2], [75.8, 24.2], [78.0, 25.0],
          [80.5, 25.7], [82.8, 26.3], [84.0, 27.2], [82.5, 28.6], [79.8, 29.6],
        ],
        label: "Harṣa's Kannauj",
      },
      {
        points: [
          [76.6, 21.4], [74.3, 20.6], [74.0, 18.2], [74.9, 16.0], [76.8, 14.7],
          [79.3, 15.4], [80.2, 17.2], [79.2, 19.2], [77.6, 20.4],
        ],
        label: "Cālukyas of Vātāpi",
      },
      {
        points: [
          [78.6, 14.2], [78.0, 12.9], [79.2, 11.9], [80.0, 11.6], [80.4, 12.9], [80.0, 14.3],
        ],
        label: "Pallavas of Kāñcī",
      },
    ],
    sites: [
      { name: "Kānyakubja (Kannauj)", lon: 79.9, lat: 27.05, kind: "capital", note: "Harṣa", dx: 8 },
      { name: "Thāneśar", lon: 76.8, lat: 29.97, kind: "city", dx: -9 },
      { name: "Prayāga", lon: 81.85, lat: 25.43, kind: "site", note: "quiquennial gifts", small: true, dx: 8 },
      { name: "Nālandā", lon: 85.44, lat: 25.14, kind: "site", note: "Hiuen Tsang's university", dx: 8 },
      { name: "Narmada line", lon: 75.0, lat: 21.9, kind: "battle", note: "Pulakeśin II checks Harṣa, 619", dx: -12, dy: -8 },
      { name: "Vātāpi (Bādāmī)", lon: 75.68, lat: 15.92, kind: "capital", dx: 8 },
      { name: "Kāñcī", lon: 79.7, lat: 12.84, kind: "capital", dx: 8 },
      { name: "Māmallapuram", lon: 80.19, lat: 12.62, kind: "port", small: true, dx: 8, dy: 12 },
      { name: "Tamralipti", lon: 87.9, lat: 22.3, kind: "port", small: true, dx: 8 },
    ],
  },

  "early-medieval-india": {
    title: "Tripartite India, c. 800–1050",
    subtitle: "Pratihāras · Pālas · Rāṣṭrakūṭas · Cōḻas",
    rivers: ["ganga", "yamuna", "narmada", "godavari", "krishna", "kaveri"],
    regions: [
      {
        points: [
          [76.8, 31.0], [73.8, 29.8], [71.8, 27.6], [71.3, 25.4], [73.3, 23.9],
          [75.6, 25.2], [78.0, 26.3], [80.0, 26.9], [79.4, 28.6], [78.0, 29.6],
        ],
        label: "Gurjara-Pratihāras",
      },
      {
        points: [
          [88.2, 26.9], [86.0, 26.6], [84.4, 25.1], [85.2, 23.6], [87.5, 22.8],
          [89.3, 22.4], [90.2, 23.9], [89.7, 25.4],
        ],
        label: "Pālas of Bengal",
      },
      {
        points: [
          [77.3, 22.4], [74.8, 21.3], [74.1, 18.8], [75.2, 16.1], [77.6, 14.6],
          [80.0, 15.3], [80.5, 17.4], [79.4, 19.7], [78.4, 21.3],
        ],
        label: "Rāṣṭrakūṭas",
        labelAt: [77.3, 18.6],
      },
      {
        points: [
          [77.0, 8.4], [78.3, 8.4], [79.5, 9.6], [79.9, 11.2], [79.7, 12.6],
          [78.4, 13.4], [77.4, 12.4], [76.6, 10.5],
        ],
        label: "Cōḻas (after c. 850)",
      },
    ],
    routes: [
      {
        points: [[79.45, 11.2], [79.85, 11.14], [81.5, 9.5], [84.5, 8.2], [87.5, 7.4]],
        label: "Rājendra I's naval expedition to Śrīvijaya, 1025",
        labelAt: [85.6, 6.9],
      },
      {
        points: [[80.0, 26.9], [82.5, 26.6], [84.2, 26.0], [85.7, 25.7]],
        label: "Rājendra I marches to the Ganga",
        labelAt: [83.4, 25.2],
      },
    ],
    sites: [
      { name: "Kānyakubja (Kannauj)", lon: 80.0, lat: 26.9, kind: "battle", note: "the prize", dx: 8 },
      { name: "Ujjayinī", lon: 75.78, lat: 23.18, kind: "city", small: true, dx: -9 },
      { name: "Khajurāho", lon: 79.92, lat: 24.85, kind: "site", note: "Cāndela", small: true, dx: 8, dy: -6 },
      { name: "Vikramaśīlā", lon: 87.22, lat: 25.26, kind: "site", note: "Pāla university", dx: 8, dy: -6, small: true },
      { name: "Somapura", lon: 88.98, lat: 25.03, kind: "site", small: true, dx: 8 },
      { name: "Mānyakheṭa", lon: 77.16, lat: 17.2, kind: "capital", note: "Rāṣṭrakūṭa", dx: 8 },
      { name: "Ellora", lon: 75.18, lat: 20.02, kind: "site", note: "Kailāsa temple", small: true, dx: -10 },
      { name: "Tañjāvūr", lon: 79.14, lat: 10.79, kind: "capital", note: "Cōḻa", dx: -9 },
      { name: "Gaṅgaikoṇḍacōḻapuram", lon: 79.45, lat: 11.2, kind: "city", small: true, dx: 8 },
      { name: "Puhar", lon: 79.85, lat: 11.14, kind: "port", small: true, dx: 8, dy: 13 },
    ],
  },

  "arab-and-turkish-invasions": {
    title: "Routes of the Raiders",
    subtitle: "Arab Sind, Ghaznavids & Ghurids",
    rivers: ["indus", "sutlej", "ganga", "yamuna"],
    routes: [
      {
        points: [[68.4, 33.5], [71.0, 30.6], [71.4, 28.2], [70.0, 25.0], [70.6, 22.5], [70.4, 20.9]],
        label: "Mahmūd's Somnath raid, 1025",
        labelAt: [67.4, 26.9],
        color: "#8f3d1c",
      },
      {
        points: [[68.4, 33.5], [71.9, 32.9], [73.8, 31.8], [76.0, 30.4], [76.8, 29.8]],
        label: "Ghurid advance, 1174–92",
        labelAt: [70.4, 30.6],
        color: "#31517d",
      },
      {
        points: [[76.8, 29.8], [78.4, 27.15], [79.9, 27.05]],
        label: "1194, to Chandawar–Kannauj",
        labelAt: [79.3, 26.3],
        color: "#31517d",
      },
      {
        points: [[80.0, 26.5], [82.98, 25.31], [85.44, 25.14], [88.37, 23.4]],
        label: "Bakhtiyar Khalji to Nadia, 1202–04",
        labelAt: [85.0, 24.1],
        color: "#31517d",
      },
    ],
    sites: [
      { name: "Ghaznī", lon: 68.4, lat: 33.5, kind: "capital", dx: -9 },
      { name: "Multān", lon: 71.5, lat: 30.2, kind: "city", note: "Arab Sind 712", dx: -9 },
      { name: "Lahore", lon: 74.3, lat: 31.6, kind: "city", dx: 8 },
      { name: "Kasahrada", lon: 72.9, lat: 24.9, kind: "battle", note: "1178", small: true, dx: -9 },
      { name: "Somnath", lon: 70.4, lat: 20.9, kind: "battle", note: "1025", dx: 8 },
      { name: "Tarain", lon: 76.8, lat: 29.8, kind: "battle", note: "1191 / 1192", dx: 8 },
      { name: "Delhi", lon: 77.2, lat: 28.6, kind: "city", dx: 8, dy: 13 },
      { name: "Chandawar", lon: 78.4, lat: 27.15, kind: "battle", note: "1194", dx: 8, dy: -6 },
      { name: "Kannauj", lon: 79.9, lat: 27.05, kind: "city", small: true, dx: 8, dy: 13 },
      { name: "Nālandā", lon: 85.44, lat: 25.14, kind: "site", note: "razed", dx: 8, dy: -6, small: true },
      { name: "Nadia", lon: 88.37, lat: 23.4, kind: "city", dx: 8 },
    ],
  },

  "delhi-sultanate": {
    title: "The Sultanate at its Peak",
    subtitle: "Under Muḥammad b. Tughluq, c. 1335",
    rivers: ["indus", "ganga", "yamuna", "narmada", "godavari", "kaveri"],
    regions: [
      {
        points: [
          [75.6, 32.0], [72.3, 30.4], [70.2, 28.4], [70.4, 25.8], [71.5, 24.0],
          [72.8, 22.6], [74.8, 23.2], [77.0, 24.6], [80.0, 25.1], [83.5, 25.2],
          [86.3, 24.3], [88.3, 23.2], [89.9, 23.4], [89.6, 25.2], [87.4, 25.8],
          [85.6, 26.5], [83.0, 26.9], [80.5, 27.2], [78.4, 28.6], [76.9, 30.6],
        ],
        label: "Directly administered sultanate",
      },
    ],
    routes: [
      {
        points: [[77.2, 28.6], [76.2, 24.6], [75.22, 19.94]],
        label: "Capital shift to Daulatabād, 1327",
        labelAt: [72.7, 24.2],
      },
      {
        points: [[77.2, 28.6], [76.5, 25.4], [75.6, 22.5], [75.22, 19.94], [77.5, 18.0], [79.59, 18.0], [78.6, 15.0], [78.12, 9.93]],
        label: "Malik Kāfur's Deccan columns, 1308–11",
        labelAt: [80.4, 14.0],
        color: "#8f3d1c",
      },
    ],
    sites: [
      { name: "Delhi", lon: 77.2, lat: 28.6, kind: "capital", dx: 8 },
      { name: "Multān", lon: 71.5, lat: 30.2, kind: "city", note: "Mongol frontier", dx: -9 },
      { name: "Lakhnautī", lon: 88.15, lat: 24.87, kind: "city", dx: 8 },
      { name: "Chitor", lon: 74.63, lat: 24.88, kind: "battle", note: "1303", small: true, dx: -9 },
      { name: "Ranthambor", lon: 76.44, lat: 26.0, kind: "battle", note: "1301", small: true, dx: 8 },
      { name: "Anhilwāra (Pāṭan)", lon: 72.13, lat: 23.85, kind: "city", small: true, dx: -9 },
      { name: "Daulatabād (Deogir)", lon: 75.22, lat: 19.94, kind: "capital", dx: 8 },
      { name: "Warangal", lon: 79.59, lat: 18.0, kind: "battle", note: "1310", dx: 8 },
      { name: "Madurai", lon: 78.12, lat: 9.93, kind: "battle", note: "1311", dx: 8 },
    ],
  },

  "vijayanagara-and-bahmani": {
    title: "Empires of the Deccan",
    subtitle: "Vijayanagara & Bahmani, c. 1520",
    rivers: ["narmada", "tapti", "godavari", "krishna", "tungabhadra", "kaveri", "penner"],
    regions: [
      {
        points: [
          [77.9, 15.9], [76.1, 15.5], [74.4, 15.0], [73.6, 13.6], [74.9, 12.0],
          [76.0, 10.0], [77.3, 8.4], [78.6, 9.0], [79.8, 11.0], [80.1, 13.2],
          [80.6, 15.2], [79.4, 15.9],
        ],
        label: "Vijayanagara",
        labelAt: [77.4, 11.3],
      },
      {
        points: [
          [76.4, 21.0], [74.4, 20.7], [74.0, 19.2], [74.6, 17.2], [75.9, 15.9],
          [77.9, 15.9], [79.4, 16.5], [80.2, 17.6], [79.1, 19.2], [77.4, 20.2],
        ],
        label: "Bahmani sultanate",
      },
    ],
    sites: [
      { name: "Vijayanagara (Hampi)", lon: 76.46, lat: 15.34, kind: "capital", dx: 8 },
      { name: "Talikota", lon: 76.32, lat: 16.48, kind: "battle", note: "1565", dx: -9 },
      { name: "Raichur", lon: 77.35, lat: 16.2, kind: "battle", note: "1520", dx: 8 },
      { name: "Gulbarga", lon: 76.83, lat: 17.33, kind: "capital", small: true, dx: 8, dy: -6 },
      { name: "Bidar", lon: 77.52, lat: 17.91, kind: "capital", dx: 8 },
      { name: "Goa", lon: 73.8, lat: 15.5, kind: "port", dx: -9 },
      { name: "Masulipatnam", lon: 81.15, lat: 16.18, kind: "port", small: true, dx: 8 },
      { name: "Śrīraṅgaṃ", lon: 78.7, lat: 10.86, kind: "site", small: true, dx: 8 },
    ],
  },

  "bhakti-and-sufi": {
    title: "Geography of Devotion",
    subtitle: "Bhakti & Sufi nodes, 12th–16th centuries",
    rivers: ["indus", "ganga", "yamuna"],
    sites: [
      { name: "Nānakāna Sāhib", lon: 73.7, lat: 31.45, kind: "site", note: "Gurū Nānak's birth", dx: -9 },
      { name: "Kartārpur", lon: 75.5, lat: 31.43, kind: "site", small: true, dx: 8 },
      { name: "Multān", lon: 71.5, lat: 30.2, kind: "site", note: "Suhrawardī", small: true, dx: -9 },
      { name: "Banāras", lon: 83.0, lat: 25.3, kind: "city", note: "Kabīr & Tulsīdās", dx: 8 },
      { name: "Ajmer", lon: 74.63, lat: 26.45, kind: "site", note: "Chishtī", dx: -9 },
      { name: "Delhi", lon: 77.2, lat: 28.6, kind: "city", note: "Niẓāmuddīn", dx: 8 },
      { name: "Vṛndāvan", lon: 77.69, lat: 27.65, kind: "site", small: true, dx: 8 },
      { name: "Paṇḍharpur", lon: 75.33, lat: 17.68, kind: "site", note: "Vārkarī", dx: -9 },
      { name: "Nadiā", lon: 88.37, lat: 23.4, kind: "site", note: "Caitanya", dx: 8 },
      { name: "Śrīraṅgam", lon: 78.7, lat: 10.86, kind: "site", note: "Rāmānuja", small: true, dx: 8 },
      { name: "Madurai", lon: 78.12, lat: 9.93, kind: "site", note: "Nāyanār hymns", small: true, dx: 8, dy: 12 },
    ],
  },

  "mughal-empire": {
    title: "The Mughal Empire, 1707",
    subtitle: "At Aurangzeb's death",
    rivers: ["indus", "ganga", "yamuna", "narmada", "godavari", "krishna", "brahmaputra"],
    regions: [
      {
        points: [
          [71.4, 35.6], [68.6, 35.4], [66.4, 33.4], [66.0, 30.6], [67.4, 28.2],
          [67.2, 25.2], [67.4, 23.6], [68.8, 23.3], [70.6, 22.2], [72.4, 21.2],
          [73.4, 19.4], [74.4, 17.4], [75.2, 16.0], [76.4, 15.0], [78.4, 14.4],
          [79.6, 13.8], [80.0, 13.6], [82.0, 16.8], [84.6, 19.3], [86.8, 20.9],
          [88.6, 22.3], [90.5, 22.6], [91.6, 22.5], [90.9, 23.9], [89.5, 25.3],
          [87.5, 25.7], [85.5, 26.7], [83.5, 27.2], [81.0, 29.0], [79.0, 30.4],
          [77.6, 32.4], [76.5, 34.3], [74.8, 35.4], [73.2, 35.7],
        ],
        label: "Mughal dominions, 1707",
        labelAt: [76.5, 26.5],
      },
    ],
    routes: [
      {
        points: [[69.2, 34.5], [71.6, 34.0], [73.4, 32.6], [74.3, 31.6], [76.97, 29.39], [77.55, 27.03], [79.9, 27.05], [83.63, 25.98]],
        label: "Bābur's advance, 1526–29",
        labelAt: [72.6, 29.3],
        color: "#8f3d1c",
      },
    ],
    sites: [
      { name: "Kābul", lon: 69.2, lat: 34.5, kind: "city", dx: 8 },
      { name: "Kandahar", lon: 65.7, lat: 31.6, kind: "city", small: true, dx: 8 },
      { name: "Lahore", lon: 74.3, lat: 31.6, kind: "city", dx: 8 },
      { name: "Srinagar", lon: 74.8, lat: 34.08, kind: "city", small: true, dx: 8 },
      { name: "Pānīpat", lon: 76.97, lat: 29.39, kind: "battle", note: "1526, 1556", dx: 8 },
      { name: "Khānwā", lon: 77.55, lat: 27.03, kind: "battle", note: "1527", dx: 8, dy: 12, small: true },
      { name: "Delhi", lon: 77.2, lat: 28.6, kind: "capital", dx: -12 },
      { name: "Āgra", lon: 78.0, lat: 27.2, kind: "capital", dx: 8, dy: -6 },
      { name: "Fatehpur Sīkrī", lon: 77.66, lat: 27.09, kind: "city", small: true, dx: -10, dy: 14 },
      { name: "Ajmer", lon: 74.63, lat: 26.45, kind: "city", small: true, dx: -9 },
      { name: "Surat", lon: 72.83, lat: 21.17, kind: "port", dx: -9 },
      { name: "Ahmadnagar", lon: 74.75, lat: 19.1, kind: "battle", note: "siege 1600", dx: -11, small: true },
      { name: "Bijāpur", lon: 75.71, lat: 16.83, kind: "battle", note: "1686", dx: -9 },
      { name: "Golkonda", lon: 78.4, lat: 17.38, kind: "battle", note: "1687", dx: 8 },
      { name: "Dhāka", lon: 90.41, lat: 23.81, kind: "city", dx: 8 },
    ],
  },

  "the-marathas": {
    title: "The Maratha Commonwealth",
    subtitle: "Zenith under the Peśvās, c. 1760",
    rivers: ["narmada", "tapti", "godavari", "krishna", "ganga", "yamuna"],
    regions: [
      {
        points: [
          [74.0, 28.6], [73.4, 25.8], [73.0, 23.2], [73.3, 20.4], [73.7, 18.2],
          [74.8, 16.4], [76.4, 15.0], [78.6, 14.0], [79.6, 12.4], [79.2, 11.0],
          [80.1, 13.0], [81.3, 16.4], [82.4, 18.9], [84.3, 20.2], [86.2, 20.9],
          [85.3, 22.0], [83.4, 23.6], [80.8, 24.8], [79.3, 26.3], [77.6, 27.5],
          [76.0, 27.8],
        ],
        label: "Maratha sway & tribute zone",
        labelAt: [79.0, 21.0],
      },
    ],
    routes: [
      {
        points: [[73.86, 18.52], [75.78, 23.18], [77.5, 25.5], [78.4, 26.6], [77.2, 28.6]],
        label: "Bājī Rāo I at Delhi's gates, 1737",
        labelAt: [74.6, 25.6],
      },
      {
        points: [[69.2, 34.5], [72.4, 32.6], [74.3, 31.6], [76.97, 29.39]],
        label: "Aḥmad Shāh Abdālī's invasions",
        labelAt: [70.0, 30.0],
        color: "#8f3d1c",
      },
    ],
    sites: [
      { name: "Pānīpat", lon: 76.97, lat: 29.39, kind: "battle", note: "14 Jan 1761", dx: 8 },
      { name: "Delhi", lon: 77.2, lat: 28.6, kind: "city", dx: 8 },
      { name: "Rāigad", lon: 73.44, lat: 18.24, kind: "capital", note: "coronation 1674", dx: -9 },
      { name: "Pratāpgad", lon: 73.58, lat: 17.93, kind: "battle", note: "1659", small: true, dx: -9, dy: 12 },
      { name: "Poona", lon: 73.86, lat: 18.52, kind: "city", dx: 8 },
      { name: "Satāra", lon: 74.0, lat: 17.68, kind: "city", small: true, dx: -9, dy: 14 },
      { name: "Bijāpur", lon: 75.71, lat: 16.83, kind: "city", small: true, dx: 8 },
      { name: "Surat", lon: 72.83, lat: 21.17, kind: "battle", note: "sacked 1664, 1670", dx: -12 },
      { name: "Nāgpur", lon: 79.09, lat: 21.15, kind: "city", small: true, dx: 8 },
      { name: "Gwalior", lon: 78.18, lat: 26.22, kind: "city", note: "Scindia", small: true, dx: 8 },
      { name: "Indore", lon: 75.86, lat: 22.72, kind: "city", note: "Holkar", small: true, dx: -9 },
      { name: "Baroda", lon: 73.18, lat: 22.31, small: true, dx: -9 },
      { name: "Cuttack", lon: 85.88, lat: 20.46, kind: "city", small: true, dx: 8 },
    ],
  },

  "mughal-decline": {
    title: "India in 1760",
    subtitle: "Successor states & two invasions",
    rivers: ["indus", "ganga", "yamuna", "narmada", "godavari", "krishna"],
    regions: [
      {
        points: [
          [90.2, 25.4], [88.2, 26.8], [85.6, 26.4], [84.3, 24.6], [85.3, 22.9],
          [87.5, 21.9], [89.6, 22.3], [90.6, 23.6],
        ],
        label: "Bengal (nawāb)",
      },
      {
        points: [
          [83.2, 28.0], [80.6, 28.3], [78.9, 27.0], [79.9, 25.4], [82.0, 25.5], [83.3, 26.5],
        ],
        label: "Awadh",
      },
      {
        points: [
          [80.0, 20.6], [77.2, 18.2], [75.9, 15.6], [78.0, 13.9], [80.0, 14.4], [81.6, 16.2], [81.5, 18.8],
        ],
        label: "Hyderabad (Nizām)",
      },
      {
        points: [
          [75.0, 22.8], [73.1, 21.4], [73.5, 18.8], [74.9, 16.2], [76.9, 15.4],
          [78.5, 17.6], [77.2, 20.2], [76.2, 21.9],
        ],
        label: "Maratha–Deccan",
      },
    ],
    sites: [
      { name: "Karṇāl", lon: 76.98, lat: 29.69, kind: "battle", note: "Nādir Shāh, 1739", dx: -12 },
      { name: "Pānīpat", lon: 76.97, lat: 29.39, kind: "battle", note: "1761", dx: 8, dy: 13 },
      { name: "Delhi", lon: 77.2, lat: 28.6, kind: "capital", note: "sacked 1739, '57, '61", dx: 8, dy: -7 },
      { name: "Lahore", lon: 74.3, lat: 31.6, kind: "city", note: "Sikh misls rising", dx: 8 },
      { name: "Bharatpur", lon: 77.49, lat: 27.22, kind: "city", note: "Jāṭ", small: true, dx: 8 },
      { name: "Murshidābād", lon: 88.27, lat: 24.18, kind: "capital", small: true, dx: 8 },
      { name: "Azīmābād (Patna)", lon: 85.2, lat: 25.6, kind: "city", small: true, dx: -12 },
      { name: "Lucknow", lon: 80.95, lat: 26.85, kind: "capital", small: true, dx: 8 },
      { name: "Hyderābād", lon: 78.49, lat: 17.36, kind: "capital", dx: 8 },
      { name: "Poona", lon: 73.86, lat: 18.52, kind: "city", small: true, dx: -9 },
      { name: "Arcot", lon: 79.32, lat: 12.9, kind: "city", note: "Carnatic nawāb", small: true, dx: 8 },
    ],
  },

  "advent-of-europeans": {
    title: "Factories & Forts, 1498–1763",
    subtitle: "The European companies on the coasts",
    rivers: ["indus", "ganga", "hooghly", "godavari", "kaveri"],
    sites: [
      { name: "Diu", lon: 70.99, lat: 20.71, kind: "port", note: "Port.", dx: -8 },
      { name: "Damān", lon: 72.83, lat: 20.4, kind: "port", note: "Port.", small: true, dx: 8 },
      { name: "Surat", lon: 72.83, lat: 21.17, kind: "port", note: "EIC 1613", dx: -9, dy: -6 },
      { name: "Goa", lon: 73.8, lat: 15.5, kind: "port", note: "Port. 1510", dx: -9 },
      { name: "Calicut", lon: 75.78, lat: 11.26, kind: "port", note: "da Gama, 1498", dx: -9 },
      { name: "Kochi", lon: 76.27, lat: 9.93, kind: "port", note: "Dutch", small: true, dx: -9 },
      { name: "Bombay", lon: 72.88, lat: 19.08, kind: "port", note: "EIC 1668", dx: -9 },
      { name: "Masulipatnam", lon: 81.15, lat: 16.18, kind: "port", note: "Dutch", dx: 8 },
      { name: "Madras", lon: 80.27, lat: 13.08, kind: "port", note: "EIC 1639", dx: 8 },
      { name: "Wandiwash", lon: 79.62, lat: 12.49, kind: "battle", note: "1760", dx: -10, dy: -6 },
      { name: "Pondicherry", lon: 79.83, lat: 11.93, kind: "port", note: "French", dx: 8 },
      { name: "Tranquebar", lon: 79.85, lat: 11.03, kind: "port", note: "Danish", small: true, dx: 8 },
      { name: "Huglī-Chinsurah", lon: 88.39, lat: 22.9, kind: "port", note: "Port./Dutch", small: true, dx: -12 },
      { name: "Calcutta", lon: 88.36, lat: 22.57, kind: "port", note: "EIC 1690s", dx: 8, dy: 13 },
      { name: "Balasore", lon: 86.93, lat: 21.49, kind: "port", small: true, dx: -9 },
      { name: "Kāsimbāzār", lon: 88.28, lat: 24.12, kind: "city", note: "EIC factory", small: true, dx: 8 },
    ],
  },

  "british-expansion": {
    title: "From Plassey to Paramountcy",
    subtitle: "British India & protected states, 1856",
    rivers: ["indus", "ganga", "yamuna", "hooghly", "narmada", "godavari", "kaveri"],
    regions: [
      {
        points: [
          [69.3, 35.7], [66.3, 31.4], [67.4, 28.4], [67.2, 24.7], [67.7, 23.6],
          [69.4, 22.7], [72.3, 21.4], [73.4, 18.9], [74.7, 14.0], [76.2, 10.2],
          [77.3, 8.3], [78.6, 9.0], [79.6, 10.8], [80.0, 13.3], [82.0, 16.8],
          [85.0, 19.9], [88.0, 22.2], [90.4, 22.6], [91.6, 22.5], [90.8, 24.0],
          [89.5, 25.3], [88.4, 26.4], [86.0, 26.9], [83.6, 27.3], [80.9, 29.5],
          [78.6, 31.4], [76.8, 33.2], [75.2, 34.6], [73.2, 35.5],
        ],
        label: "Company supremacy, 1856 (direct & subsidiary)",
        labelAt: [75.0, 24.4],
      },
    ],
    sites: [
      { name: "Plāssey", lon: 88.28, lat: 23.8, kind: "battle", note: "1757", dx: 8 },
      { name: "Buxar", lon: 83.98, lat: 25.56, kind: "battle", note: "1764", dx: -9 },
      { name: "Calcutta", lon: 88.36, lat: 22.57, kind: "capital", dx: 8 },
      { name: "Murshidābād", lon: 88.27, lat: 24.18, kind: "city", small: true, dx: 8, dy: -6 },
      { name: "Serangāpaṭaṇa", lon: 76.69, lat: 12.41, kind: "battle", note: "1799", dx: -12 },
      { name: "Assaye", lon: 76.26, lat: 20.26, kind: "battle", note: "1803", dx: 8 },
      { name: "Chillīānwālā", lon: 73.59, lat: 32.65, kind: "battle", note: "1849", dx: -11 },
      { name: "Lahore", lon: 74.3, lat: 31.6, kind: "city", note: "Punjab annexed 1849", dx: 8, dy: -6, small: true },
      { name: "Lucknow", lon: 80.95, lat: 26.85, kind: "city", note: "Awadh annexed 1856", dx: 8, small: true },
      { name: "Jhānsī", lon: 78.57, lat: 25.45, kind: "city", note: "lapse 1853", dx: 8, small: true },
      { name: "Nāgpur", lon: 79.09, lat: 21.15, kind: "city", note: "lapse 1854", dx: 8, small: true },
      { name: "Satāra", lon: 74.0, lat: 17.68, kind: "city", note: "lapse 1848", dx: -10, small: true },
      { name: "Hyderābād", lon: 78.49, lat: 17.36, kind: "city", note: "subsidiary 1798", dx: 8, small: true },
      { name: "Poona", lon: 73.86, lat: 18.52, kind: "city", note: "Peśvā deposed 1818", dx: -12, small: true },
    ],
  },

  "colonial-economy": {
    title: "The Colonial Grid, c. 1900",
    subtitle: "Ports, raw materials & the first railways",
    rivers: ["indus", "ganga", "hooghly", "narmada", "godavari"],
    routes: [
      {
        points: [[88.36, 22.57], [85.1, 25.6], [80.35, 26.45], [78.0, 27.2], [77.2, 28.6], [74.3, 31.6]],
        label: "Howrah–Delhi–Lahore trunk",
        labelAt: [80.9, 24.4],
      },
      {
        points: [[88.36, 22.57], [84.0, 21.8], [79.09, 21.15], [75.5, 19.5], [72.88, 19.08]],
        label: "Calcutta–Bombay via Nāgpur",
        labelAt: [77.8, 18.6],
      },
    ],
    sites: [
      { name: "Karachi", lon: 67.0, lat: 24.86, kind: "port", note: "wheat", small: true, dx: 8 },
      { name: "Calcutta", lon: 88.36, lat: 22.57, kind: "capital", note: "jute", dx: 8 },
      { name: "Bombay", lon: 72.88, lat: 19.08, kind: "port", note: "cotton mills", dx: -9 },
      { name: "Madras", lon: 80.27, lat: 13.08, kind: "port", small: true, dx: 8 },
      { name: "Dhāka", lon: 90.41, lat: 23.81, kind: "city", note: "muslin — ruined", dx: 8 },
      { name: "Ahmadābād", lon: 72.58, lat: 23.03, kind: "city", note: "mill city", small: true, dx: -11 },
      { name: "Kānpur", lon: 80.35, lat: 26.45, kind: "city", note: "leather & mills", dx: 8, small: true },
      { name: "Jharia", lon: 86.42, lat: 23.75, kind: "site", note: "coal", small: true, dx: 8 },
      { name: "Dārjīlīng", lon: 88.26, lat: 27.04, kind: "site", note: "tea", small: true, dx: 8 },
      { name: "Champāran", lon: 84.9, lat: 26.65, kind: "site", note: "indigo", small: true, dx: -9 },
      { name: "Rangoon", lon: 96.16, lat: 16.84, kind: "port", note: "rice", dx: -10 },
      { name: "Chittagong", lon: 91.78, lat: 22.36, kind: "port", small: true, dx: 8 },
    ],
  },

  "revolt-of-1857": {
    title: "The Storm-Centres of 1857",
    subtitle: "The great revolt, May 1857 – Nov 1858",
    rivers: ["indus", "ganga", "yamuna", "hooghly"],
    routes: [
      {
        points: [[78.57, 25.45], [78.18, 26.22]],
        label: "Lakshmibāī slips out to Gwalior",
        labelAt: [79.6, 26.0],
        color: "#8f3d1c",
      },
      {
        points: [[77.71, 28.98], [77.2, 28.6]],
        label: "Merut sepoys march to Delhi, 10 May",
        labelAt: [76.3, 28.7],
        color: "#8f3d1c",
      },
    ],
    sites: [
      { name: "Barrackpore", lon: 88.37, lat: 22.77, kind: "battle", note: "29 Mar — Maṅgal Pāṇḍey", dx: 12 },
      { name: "Meerut", lon: 77.71, lat: 28.98, kind: "battle", note: "10 May", dx: 8, dy: -6 },
      { name: "Delhi", lon: 77.2, lat: 28.6, kind: "capital", note: "Bahādur Shāh proclaimed", dx: -13, dy: 16 },
      { name: "Kānpur", lon: 80.35, lat: 26.45, kind: "battle", note: "Nānā Sāḥeb", dx: 8 },
      { name: "Lucknow", lon: 80.95, lat: 26.85, kind: "battle", note: "Begam Hazrat Maḥal", dx: 8, dy: -6 },
      { name: "Faizābād", lon: 82.14, lat: 26.77, kind: "battle", small: true, dx: 8 },
      { name: "Banāras", lon: 83.0, lat: 25.3, kind: "battle", small: true, dx: 8, dy: 13 },
      { name: "Jagdīshpur–Arrah", lon: 84.66, lat: 25.56, kind: "battle", note: "Kunwar Siṅgh", dx: 8 },
      { name: "Jhānsī", lon: 78.57, lat: 25.45, kind: "battle", note: "the Rānī", dx: -11 },
      { name: "Gwalior", lon: 78.18, lat: 26.22, kind: "battle", note: "June 1858", dx: 8, dy: -6 },
      { name: "Bareilly", lon: 79.42, lat: 28.35, kind: "battle", note: "Khān Bahādur Khān", small: true, dx: 8, dy: -6 },
    ],
  },

  "socio-religious-reform": {
    title: "Centres of Reform",
    subtitle: "The Indian Renaissance on the map",
    rivers: ["ganga", "hooghly"],
    sites: [
      { name: "Calcutta", lon: 88.36, lat: 22.57, kind: "city", note: "Brahmo Samāj, 1828", dx: 8 },
      { name: "Dakṣiṇeśvar", lon: 88.46, lat: 22.65, kind: "site", note: "Rāmakṛṣṇa", dx: 8, dy: -6, small: true },
      { name: "Lahore", lon: 74.3, lat: 31.6, kind: "city", note: "Ārya Samāj HQ, 1877", dx: 8 },
      { name: "Alīgarh", lon: 78.08, lat: 27.9, kind: "city", note: "MAO College, 1875", dx: 8 },
      { name: "Poona", lon: 73.86, lat: 18.52, kind: "city", note: "Satyaśodhak Samāj, 1873", dx: -12 },
      { name: "Bombay", lon: 72.88, lat: 19.08, kind: "city", note: "Prārthanā & Ārya Samāj", dx: -9 },
      { name: "Adyar (Madras)", lon: 80.27, lat: 13.0, kind: "city", note: "Theosophical Society, 1882", dx: 8 },
      { name: "Kolhāpur", lon: 74.24, lat: 16.7, kind: "site", note: "Phule's schools", small: true, dx: 8 },
    ],
  },

  "early-nationalism": {
    title: "The Congress Map, 1885–1916",
    subtitle: "Sessions, splits & new movements",
    rivers: ["ganga", "hooghly"],
    sites: [
      { name: "Bombay", lon: 72.88, lat: 19.08, kind: "city", note: "First session, 1885", dx: -9 },
      { name: "Calcutta", lon: 88.36, lat: 22.57, kind: "city", note: "Swadeshī, 1905", dx: 8 },
      { name: "Dhāka", lon: 90.41, lat: 23.81, kind: "city", note: "Muslim League, 1906", dx: 8 },
      { name: "Surat", lon: 72.83, lat: 21.17, kind: "battle", note: "Split, 1907", dx: -9 },
      { name: "Lucknow", lon: 80.95, lat: 26.85, kind: "city", note: "Pact, 1916", dx: 8 },
      { name: "Madras", lon: 80.27, lat: 13.08, kind: "city", note: "Besant's Home Rule", dx: 8 },
      { name: "Poona", lon: 73.86, lat: 18.52, kind: "city", note: "Tilak's base", dx: -9, dy: 14, small: true },
      { name: "Prayāgrāj", lon: 81.85, lat: 25.43, kind: "city", note: "Anand Bhavan", small: true, dx: 8 },
      { name: "Amritsar", lon: 74.87, lat: 31.63, kind: "site", note: "Akālī politics", small: true, dx: 8 },
    ],
  },

  "gandhian-movements": {
    title: "The Satyagraha Trail",
    subtitle: "1915–1934: from Champāran to Dandī",
    rivers: ["ganga", "yamuna", "tapti"],
    sites: [
      { name: "Champāran", lon: 84.9, lat: 26.65, kind: "battle", note: "1917 — indigo", dx: -10 },
      { name: "Kheda", lon: 72.69, lat: 22.75, kind: "battle", note: "1918", dx: -9, dy: -6 },
      { name: "Sābarmatī Aśram", lon: 72.58, lat: 23.03, kind: "site", dx: 10 },
      { name: "Amritsar", lon: 74.87, lat: 31.63, kind: "battle", note: "Jallianwala Bagh, 13 Apr 1919", dx: 8 },
      { name: "Lahore", lon: 74.3, lat: 31.6, kind: "city", note: "Pūrṇa Swarāj, Dec 1929", dx: -9, dy: -6 },
      { name: "Chaurī Chaurā", lon: 83.58, lat: 26.65, kind: "battle", note: "1922", dx: 8 },
      { name: "Nāgpur", lon: 79.09, lat: 21.15, kind: "city", note: "session 1920", small: true, dx: 8 },
      { name: "Dandī", lon: 72.81, lat: 20.88, kind: "battle", note: "6 Apr 1930", dx: 8 },
      { name: "Vēḍāraṇyam", lon: 79.83, lat: 10.38, kind: "battle", note: "Rajaji's parallel salt march", small: true, dx: 8 },
    ],
    routes: [
      {
        points: [[72.58, 23.03], [72.68, 22.5], [72.62, 21.8], [72.72, 21.3], [72.81, 20.88]],
        label: "The Dandī March, 12 Mar – 6 Apr 1930",
        labelAt: [74.4, 22.3],
        color: "#8f3d1c",
      },
    ],
  },

  "revolutionaries-and-ina": {
    title: "The Armed Strand",
    subtitle: "Secret societies to the INA, 1907–1945",
    rivers: ["ganga", "hooghly"],
    sites: [
      { name: "Muẓaffarpur", lon: 85.36, lat: 26.12, kind: "battle", note: "1908 — Khudirām", dx: 8 },
      { name: "Kākori", lon: 80.79, lat: 26.88, kind: "battle", note: "1925", dx: 8 },
      { name: "Lahore", lon: 74.3, lat: 31.6, kind: "battle", note: "Saunders, 1928; hanged 1931", dx: 8 },
      { name: "Delhi", lon: 77.2, lat: 28.6, kind: "battle", note: "Assembly bomb, 1929; INA trials, 1945", dx: 8 },
      { name: "Chittagong", lon: 91.78, lat: 22.36, kind: "battle", note: "Armoury raid, 1930", dx: 8 },
      { name: "Calcutta", lon: 88.36, lat: 22.57, kind: "site", note: "Bose's escape, 1941; RIN mutiny spillover, '46", dx: 8 },
      { name: "Bombay", lon: 72.88, lat: 19.08, kind: "battle", note: "RIN mutiny, Feb 1946", dx: -11 },
      { name: "Imphal", lon: 93.94, lat: 24.82, kind: "battle", note: "siege, 1944", dx: 8 },
      { name: "Kohima", lon: 94.11, lat: 25.67, kind: "battle", note: "1944", dx: 8 },
    ],
    routes: [
      {
        points: [[96.16, 16.84], [95.3, 20.5], [93.94, 24.82]],
        label: "Azad Hind Fauj — 'Delhi Chalo', 1944",
        labelAt: [95.9, 22.2],
        color: "#8f3d1c",
      },
      {
        points: [[88.36, 22.57], [85.5, 25.0], [78.0, 27.2], [74.3, 31.6], [69.2, 34.5]],
        label: "Netajī's flight via Kābul, 1941",
        labelAt: [80.0, 30.8],
      },
    ],
  },

  "freedom-and-partition": {
    title: "Freedom & Partition, 1947",
    subtitle: "The Radcliffe settlements & princely accessions",
    rivers: ["indus", "ganga", "hooghly", "brahmaputra"],
    regions: [
      {
        points: [
          [66.3, 30.8], [67.2, 28.3], [67.0, 25.4], [67.5, 23.9], [68.2, 23.7],
          [69.2, 24.3], [70.9, 24.1], [71.9, 24.9], [72.7, 26.4], [73.4, 28.4],
          [73.9, 31.0], [73.9, 32.6], [74.5, 33.6], [71.5, 34.8], [69.8, 33.6],
          [68.6, 32.2],
        ],
        label: "PAKISTAN (West)",
        color: "#38684F",
      },
      {
        points: [
          [89.3, 22.3], [90.4, 22.5], [91.9, 22.4], [92.3, 23.5], [91.5, 24.6],
          [90.2, 25.3], [89.4, 24.4], [88.9, 23.6],
        ],
        label: "PAKISTAN (East)",
        color: "#38684F",
      },
    ],
    routes: [
      {
        points: [[74.3, 31.6], [77.2, 28.6]],
        label: "Punjab migrations, both ways",
        labelAt: [75.9, 29.6],
        color: "#8f3d1c",
      },
      {
        points: [[90.41, 23.81], [88.36, 22.57]],
        label: "Bengal migrations, both ways",
        labelAt: [89.5, 22.8],
        color: "#8f3d1c",
      },
    ],
    sites: [
      { name: "Karachi", lon: 67.0, lat: 24.86, kind: "city", note: "Pak. capital", dx: 8, small: true },
      { name: "Lahore", lon: 74.3, lat: 31.6, kind: "city", dx: 8 },
      { name: "Amritsar", lon: 74.87, lat: 31.63, kind: "city", small: true, dx: 8, dy: -6 },
      { name: "Delhi", lon: 77.2, lat: 28.6, kind: "capital", note: "15 Aug 1947", dx: 8 },
      { name: "Calcutta", lon: 88.36, lat: 22.57, kind: "city", dx: 8 },
      { name: "Dhāka", lon: 90.41, lat: 23.81, kind: "city", small: true, dx: 8 },
      { name: "Srinagar", lon: 74.8, lat: 34.08, kind: "site", note: "Kashmir — disputed accession", dx: -9 },
      { name: "Hyderābād", lon: 78.49, lat: 17.36, kind: "site", note: "police action, 1948", dx: 8 },
      { name: "Junagadh", lon: 70.46, lat: 21.52, kind: "site", note: "plebiscite", dx: -9 },
    ],
  },
};
