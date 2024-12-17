import { ProjectSamplesStore } from "@/types/ProjectSamplesStore";

/**
 * A key for each sample project.
 */
export const ProjectSamplesProjectKeyValues = [
  "backtrack",
  "bookwurm",
  "clark",
  "cupanion",
  "dash",
  "hermes",
  "jasper",
  "laundr",
  "note",
  "pawsitive",
  "pilltender",
  "seek",
  "simpark",
  "sprout",
  "wastewizard",
  "wishingwell",
] as const;

/**
 * A key for each sample milestone.
 *
 * Each project will provide each of these sample milestones.
 */
export const ProjectSamplesMilestoneKeyValues = [
  "assignment1b",
  "assignment1c",
  "assignment2b",
  "assignment2c",
  "assignment2d",
  "assignment2e",
  "assignment2f",
  "assignment2g",
  "assignment2p",
  "assignment3a",
  "assignment3c",
  "assignment3d",
  "assignment3e",
  "assignment3p",
  "assignment4poster",
] as const;

/**
 * The actual ProjectSamplesStore.
 */
const PROJECT_SAMPLE_STORE: ProjectSamplesStore = {
  samples: {
    backtrack: {
      name: "BackTrack",
      link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/backtrack/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801965",
        assignment1c: "https://canvas.uw.edu/files/123801971",
        assignment2b: "https://canvas.uw.edu/files/123801986",
        assignment2c: "https://canvas.uw.edu/files/123802007",
        assignment2d: "https://canvas.uw.edu/files/123801964",
        assignment2e: "https://canvas.uw.edu/files/123802041",
        assignment2f: "https://canvas.uw.edu/files/123801745",
        assignment2g: "https://canvas.uw.edu/files/123801992",
        // '2h': 'https://canvas.uw.edu/files/123801929',
        assignment2p: "https://canvas.uw.edu/files/123801950",
        assignment3a: "https://canvas.uw.edu/files/123801830",
        // '3b': 'https://canvas.uw.edu/files/123801930',
        assignment3c: "https://canvas.uw.edu/files/123801701",
        assignment3d: "https://canvas.uw.edu/files/123801761",
        assignment3e: "https://canvas.uw.edu/files/123801865",
        assignment3p: "https://canvas.uw.edu/files/123801806",
        assignment4poster: "https://canvas.uw.edu/files/123801692",
      },
    },
    bookwurm: {
      name: "BookWurm",
      link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/bookwurm/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801899",
        assignment1c: "https://canvas.uw.edu/files/123801972",
        assignment2b: "https://canvas.uw.edu/files/123801921",
        assignment2c: "https://canvas.uw.edu/files/123801933",
        assignment2d: "https://canvas.uw.edu/files/123802010",
        assignment2e: "https://canvas.uw.edu/files/123802042",
        assignment2f: "https://canvas.uw.edu/files/123802056",
        assignment2g: "https://canvas.uw.edu/files/123801764",
        // '2h': 'https://canvas.uw.edu/files/123801900',
        assignment2p: "https://canvas.uw.edu/files/123801722",
        assignment3a: "https://canvas.uw.edu/files/123801816",
        assignment3c: "https://canvas.uw.edu/files/123801671",
        assignment3d: "https://canvas.uw.edu/files/123801850",
        assignment3e: "https://canvas.uw.edu/files/123801724",
        assignment3p: "https://canvas.uw.edu/files/123801889",
        assignment4poster: "https://canvas.uw.edu/files/123801934",
      },
    },
    clark: {
      name: "Clark",
      link: "https://courses.cs.washington.edu/courses/cse440/22sp/projects/clark",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801978",
        assignment1c: "https://canvas.uw.edu/files/123802011",
        assignment2b: "https://canvas.uw.edu/files/123801983",
        assignment2c: "https://canvas.uw.edu/files/123802020",
        assignment2d: "https://canvas.uw.edu/files/123802009",
        assignment2e: "https://canvas.uw.edu/files/123802040",
        assignment2f: "https://canvas.uw.edu/files/123801718",
        assignment2g: "https://canvas.uw.edu/files/123801949",
        assignment2p: "https://canvas.uw.edu/files/123801735",
        assignment3a: "https://canvas.uw.edu/files/123801660",
        assignment3c: "https://canvas.uw.edu/files/123801828",
        assignment3d: "https://canvas.uw.edu/files/123801852",
        assignment3e: "https://canvas.uw.edu/files/123801922",
        assignment3p: "https://canvas.uw.edu/files/123801890",
        assignment4poster: "https://canvas.uw.edu/files/123802048",
      },
    },
    cupanion: {
      name: "Cup-anion",
      link: "https://courses.cs.washington.edu/courses/cse440/22sp/projects/cupanion",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801979",
        assignment1c: "https://canvas.uw.edu/files/123802023",
        assignment2b: "https://canvas.uw.edu/files/123801982",
        assignment2c: "https://canvas.uw.edu/files/123801973",
        assignment2d: "https://canvas.uw.edu/files/123802026",
        assignment2e: "https://canvas.uw.edu/files/123801650",
        assignment2f: "https://canvas.uw.edu/files/123801948",
        assignment2g: "https://canvas.uw.edu/files/123801773",
        assignment2p: "https://canvas.uw.edu/files/123801791",
        assignment3a: "https://canvas.uw.edu/files/123801824",
        assignment3c: "https://canvas.uw.edu/files/123801811",
        assignment3d: "https://canvas.uw.edu/files/123801810",
        assignment3e: "https://canvas.uw.edu/files/123801924",
        assignment3p: "https://canvas.uw.edu/files/123801752",
        assignment4poster: "https://canvas.uw.edu/files/123802039",
      },
    },
    dash: {
      name: "Dash",
      link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/dash/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801776",
        assignment1c: "https://canvas.uw.edu/files/123801927",
        assignment2b: "https://canvas.uw.edu/files/123801977",
        assignment2c: "https://canvas.uw.edu/files/123801967",
        assignment2d: "https://canvas.uw.edu/files/123802027",
        assignment2e: "https://canvas.uw.edu/files/123802034",
        assignment2f: "https://canvas.uw.edu/files/123801667",
        assignment2g: "https://canvas.uw.edu/files/123801767",
        // '2h': 'https://canvas.uw.edu/files/123801901',
        assignment2p: "https://canvas.uw.edu/files/123801938",
        assignment3a: "https://canvas.uw.edu/files/123801832",
        assignment3c: "https://canvas.uw.edu/files/123801838",
        assignment3d: "https://canvas.uw.edu/files/123801677",
        assignment3e: "https://canvas.uw.edu/files/123801940",
        assignment3p: "https://canvas.uw.edu/files/123801867",
        assignment4poster: "https://canvas.uw.edu/files/123802058",
      },
    },
    hermes: {
      name: "Hermes",
      link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/hermes/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801902",
        assignment1c: "https://canvas.uw.edu/files/123801926",
        assignment2b: "https://canvas.uw.edu/files/123801981",
        assignment2c: "https://canvas.uw.edu/files/123801975",
        assignment2d: "https://canvas.uw.edu/files/123802028",
        assignment2e: "https://canvas.uw.edu/files/123802035",
        assignment2f: "https://canvas.uw.edu/files/123801951",
        assignment2g: "https://canvas.uw.edu/files/123801936",
        // '2h': 'https://canvas.uw.edu/files/123801904',
        assignment2p: "https://canvas.uw.edu/files/123801710",
        assignment3a: "https://canvas.uw.edu/files/123801818",
        // '3b': 'https://canvas.uw.edu/files/123801903',
        assignment3c: "https://canvas.uw.edu/files/123801796",
        assignment3d: "https://canvas.uw.edu/files/123801876",
        assignment3e: "https://canvas.uw.edu/files/123801923",
        assignment3p: "https://canvas.uw.edu/files/123802003",
        assignment4poster: "https://canvas.uw.edu/files/123802043",
      },
    },
    jasper: {
      name: "Jasper",
      link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/jasper/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801893",
        assignment1c: "https://canvas.uw.edu/files/123802038",
        assignment2b: "https://canvas.uw.edu/files/123801990",
        assignment2c: "https://canvas.uw.edu/files/123802021",
        assignment2d: "https://canvas.uw.edu/files/123802051",
        assignment2e: "https://canvas.uw.edu/files/123801686",
        assignment2f: "https://canvas.uw.edu/files/123801747",
        assignment2g: "https://canvas.uw.edu/files/123801778",
        // '2h': 'https://canvas.uw.edu/files/123801905',
        assignment2p: "https://canvas.uw.edu/files/123801780",
        assignment3a: "https://canvas.uw.edu/files/123801800",
        assignment3c: "https://canvas.uw.edu/files/123801839",
        assignment3d: "https://canvas.uw.edu/files/123801886",
        assignment3e: "https://canvas.uw.edu/files/123801725",
        assignment3p: "https://canvas.uw.edu/files/123801888",
        assignment4poster: "https://canvas.uw.edu/files/123802049",
      },
    },
    laundr: {
      name: "Laundr",
      link: "https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/laundr/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801906",
        assignment1c: "https://canvas.uw.edu/files/123802013",
        assignment2b: "https://canvas.uw.edu/files/123801988",
        assignment2c: "https://canvas.uw.edu/files/123802029",
        assignment2d: "https://canvas.uw.edu/files/123802032",
        assignment2e: "https://canvas.uw.edu/files/123801920",
        assignment2f: "https://canvas.uw.edu/files/123801664",
        assignment2g: "https://canvas.uw.edu/files/123801707",
        // '2h': 'https://canvas.uw.edu/files/123801907',
        assignment2p: "https://canvas.uw.edu/files/123801737",
        assignment3a: "https://canvas.uw.edu/files/123801826",
        assignment3c: "https://canvas.uw.edu/files/123801841",
        assignment3d: "https://canvas.uw.edu/files/123801937",
        assignment3e: "https://canvas.uw.edu/files/123801763",
        assignment3p: "https://canvas.uw.edu/files/123801881",
        assignment4poster: "https://canvas.uw.edu/files/123802060",
      },
    },
    note: {
      name: "notE",
      link: "https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/note/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801891",
        assignment1c: "https://canvas.uw.edu/files/123802005",
        assignment2b: "https://canvas.uw.edu/files/123801985",
        assignment2c: "https://canvas.uw.edu/files/123801894",
        assignment2d: "https://canvas.uw.edu/files/123802030",
        assignment2e: "https://canvas.uw.edu/files/123801643",
        assignment2f: "https://canvas.uw.edu/files/123801750",
        assignment2g: "https://canvas.uw.edu/files/123801748",
        // '2h': 'https://canvas.uw.edu/files/123801892',
        assignment2p: "https://canvas.uw.edu/files/123801792",
        assignment3a: "https://canvas.uw.edu/files/123801801",
        assignment3c: "https://canvas.uw.edu/files/123801836",
        assignment3d: "https://canvas.uw.edu/files/123801878",
        assignment3e: "https://canvas.uw.edu/files/123801757",
        assignment3p: "https://canvas.uw.edu/files/123802012",
        assignment4poster: "https://canvas.uw.edu/files/123801962",
      },
    },
    pawsitive: {
      name: "Pawsitive",
      link: "https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/pawsitive/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801925",
        assignment1c: "https://canvas.uw.edu/files/123801787",
        assignment2b: "https://canvas.uw.edu/files/123801966",
        assignment2c: "https://canvas.uw.edu/files/123801932",
        assignment2d: "https://canvas.uw.edu/files/123802025",
        assignment2e: "https://canvas.uw.edu/files/123801646",
        assignment2f: "https://canvas.uw.edu/files/123801714",
        assignment2g: "https://canvas.uw.edu/files/123801706",
        // '2h': 'https://canvas.uw.edu/files/123801910',
        assignment2p: "https://canvas.uw.edu/files/123801738",
        assignment3a: "https://canvas.uw.edu/files/123801798",
        assignment3c: "https://canvas.uw.edu/files/123801813",
        assignment3d: "https://canvas.uw.edu/files/123801854",
        assignment3e: "https://canvas.uw.edu/files/123801727",
        assignment3p: "https://canvas.uw.edu/files/123801880",
        assignment4poster: "https://canvas.uw.edu/files/123801699",
      },
    },
    pilltender: {
      name: "Pilltender",
      link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/pilltender/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801911",
        assignment1c: "https://canvas.uw.edu/files/123801989",
        assignment2b: "https://canvas.uw.edu/files/123801987",
        assignment2c: "https://canvas.uw.edu/files/123801968",
        assignment2d: "https://canvas.uw.edu/files/123801908",
        assignment2e: "https://canvas.uw.edu/files/123801690",
        assignment2f: "https://canvas.uw.edu/files/123801753",
        assignment2g: "https://canvas.uw.edu/files/123801703",
        // '2h': 'https://canvas.uw.edu/files/123801895',
        assignment2p: "https://canvas.uw.edu/files/123801740",
        assignment3a: "https://canvas.uw.edu/files/123801820",
        // '3b': 'https://canvas.uw.edu/files/123801912',
        assignment3c: "https://canvas.uw.edu/files/123801843",
        assignment3d: "https://canvas.uw.edu/files/123801909",
        assignment3e: "https://canvas.uw.edu/files/123801759",
        assignment3p: "https://canvas.uw.edu/files/123801868",
        assignment4poster: "https://canvas.uw.edu/files/123802044",
      },
    },
    seek: {
      name: "SEEK",
      link: "https://courses.cs.washington.edu/courses/cse440/19wi/assets/projects/seek/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801913",
        assignment1c: "https://canvas.uw.edu/files/123802006",
        assignment2b: "https://canvas.uw.edu/files/123802000",
        assignment2c: "https://canvas.uw.edu/files/123801970",
        assignment2d: "https://canvas.uw.edu/files/123802045",
        assignment2e: "https://canvas.uw.edu/files/123802046",
        assignment2f: "https://canvas.uw.edu/files/123801755",
        assignment2g: "https://canvas.uw.edu/files/123801743",
        // '2h': 'https://canvas.uw.edu/files/123801915',
        assignment2p: "https://canvas.uw.edu/files/123801794",
        assignment3a: "https://canvas.uw.edu/files/123801834",
        assignment3c: "https://canvas.uw.edu/files/123801845",
        assignment3d: "https://canvas.uw.edu/files/123801856",
        assignment3e: "https://canvas.uw.edu/files/123801994",
        assignment3p: "https://canvas.uw.edu/files/123801963",
        assignment4poster: "https://canvas.uw.edu/files/123802061",
      },
    },
    simpark: {
      name: "SimPark",
      link: "https://courses.cs.washington.edu/courses/cse440/17au/projects/simpark/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801916",
        assignment1c: "https://canvas.uw.edu/files/123802001",
        assignment2b: "https://canvas.uw.edu/files/123801999",
        assignment2c: "https://canvas.uw.edu/files/123801969",
        assignment2d: "https://canvas.uw.edu/files/123802047",
        assignment2e: "https://canvas.uw.edu/files/123801656",
        assignment2f: "https://canvas.uw.edu/files/123801952",
        assignment2g: "https://canvas.uw.edu/files/123801783",
        // '2h': 'https://canvas.uw.edu/files/123801914',
        assignment2p: "https://canvas.uw.edu/files/123801804",
        assignment3a: "https://canvas.uw.edu/files/123801680",
        // '3b': 'https://canvas.uw.edu/files/123801896',
        assignment3c: "https://canvas.uw.edu/files/123801846",
        assignment3d: "https://canvas.uw.edu/files/123801874",
        assignment3e: "https://canvas.uw.edu/files/123801958",
        assignment3p: "https://canvas.uw.edu/files/123801897",
        assignment4poster: "https://canvas.uw.edu/files/123802050",
      },
    },
    sprout: {
      name: "Sprout",
      link: "https://courses.cs.washington.edu/courses/cse440/22sp/projects/sprout",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801928",
        assignment1c: "https://canvas.uw.edu/files/123802024",
        assignment2b: "https://canvas.uw.edu/files/123801998",
        assignment2c: "https://canvas.uw.edu/files/123801935",
        assignment2d: "https://canvas.uw.edu/files/123802033",
        assignment2e: "https://canvas.uw.edu/files/123801716",
        assignment2f: "https://canvas.uw.edu/files/123801917",
        assignment2g: "https://canvas.uw.edu/files/123801774",
        assignment2p: "https://canvas.uw.edu/files/123801956",
        assignment3a: "https://canvas.uw.edu/files/123801957",
        assignment3c: "https://canvas.uw.edu/files/123801848",
        assignment3d: "https://canvas.uw.edu/files/123801858",
        assignment3e: "https://canvas.uw.edu/files/123801730",
        assignment3p: "https://canvas.uw.edu/files/123801884",
        assignment4poster: "https://canvas.uw.edu/files/123801695",
      },
    },
    wastewizard: {
      name: "Waste Wizard",
      link: "https://courses.cs.washington.edu/courses/cse440/22sp/projects/wastewizard",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801997",
        assignment1c: "https://canvas.uw.edu/files/123801785",
        assignment2b: "https://canvas.uw.edu/files/123802002",
        assignment2c: "https://canvas.uw.edu/files/123801976",
        assignment2d: "https://canvas.uw.edu/files/123802031",
        assignment2e: "https://canvas.uw.edu/files/123802053",
        assignment2f: "https://canvas.uw.edu/files/123802054",
        assignment2g: "https://canvas.uw.edu/files/123801770",
        assignment2p: "https://canvas.uw.edu/files/123802057",
        assignment3a: "https://canvas.uw.edu/files/123801772",
        assignment3c: "https://canvas.uw.edu/files/123801808",
        assignment3d: "https://canvas.uw.edu/files/123801862",
        assignment3e: "https://canvas.uw.edu/files/123801729",
        assignment3p: "https://canvas.uw.edu/files/123801675",
        assignment4poster: "https://canvas.uw.edu/files/123801697",
      },
    },
    wishingwell: {
      name: "Wishing Well",
      link: "https://courses.cs.washington.edu/courses/cse440/17wi/projects/wishingwell/",
      sampleCanvasLinks: {
        assignment1b: "https://canvas.uw.edu/files/123801898",
        assignment1c: "https://canvas.uw.edu/files/123802014",
        assignment2b: "https://canvas.uw.edu/files/123801984",
        assignment2c: "https://canvas.uw.edu/files/123801974",
        assignment2d: "https://canvas.uw.edu/files/123802037",
        assignment2e: "https://canvas.uw.edu/files/123801683",
        assignment2f: "https://canvas.uw.edu/files/123801953",
        assignment2g: "https://canvas.uw.edu/files/123801781",
        // '2h': 'https://canvas.uw.edu/files/123801918',
        assignment2p: "https://canvas.uw.edu/files/123801789",
        assignment3a: "https://canvas.uw.edu/files/123801822",
        assignment3c: "https://canvas.uw.edu/files/123801860",
        assignment3d: "https://canvas.uw.edu/files/123801919",
        assignment3e: "https://canvas.uw.edu/files/123801961",
        assignment3p: "https://canvas.uw.edu/files/123802004",
        assignment4poster: "https://canvas.uw.edu/files/123802059",
      },
    },
  },
};

export const getProjectSamplesStore: () => ProjectSamplesStore = () => {
  return PROJECT_SAMPLE_STORE;
};
