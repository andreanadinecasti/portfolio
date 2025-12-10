const logotext = "ANDREA";
const meta = {
    title: "Andrea Castillo",
    description: "Andrea Nadine Castillo — UC Santa Cruz CS (Dec 2024). Software developer focused on AR, HCI, and data analysis.",
};

const introdata = {
    title: "I’m Andrea Castillo",
    animated: {
        first: "AR & Game Developer",
        second: "Data Analysis & Visualization",
        third: "HCI Researcher",
    },
    description: "Software developer with experience in AR/Unity, data pipelines, multi-agent AI, and HCI research. Comfortable across full-stack web, C/C++ systems, and data tooling.",
    your_img_url: require("./assets/images/profile2.JPG"),
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "Recent UC Santa Cruz Computer Science graduate (BS, Dec 2024) with experience in AR game development, data analysis, and HCI research. Strong foundation in algorithms, concurrent systems, and human-centered design. Passionate about building interactive experiences that combine data and immersive technologies.",
};

const worktimeline = [
    {
        jobtitle: "HCI Research Assistant",
        where: "UCSC SETs Research Lab",
        date: "Apr 2024 - Present",
    },
    {
        jobtitle: "Website Content Assistant",
        where: "Goldilocks USA",
        date: "Jul 2024 - Aug 2024",
    },
];

const skills = [
    { name: "Python", value: 90 },
    { name: "C", value: 90 },
    { name: "JavaScript", value: 70},
    { name: "C#", value:  60},
    { name: "React", value: 40 },
    { name: "Unity / AR Foundation", value: 70 },
    { name: "SQL", value: 75 },
    { name: "Tableau", value: 60 },
    { name: "Git / GitHub", value: 85 },
    { name: "HTML/CSS", value: 60 },
];

const services = [
    {
        title: "AR & Game Development",
        description: "Mobile AR experiences and game mechanics built in Unity + AR Foundation; playable prototypes and usability-driven iteration.",
    },
    {
        title: "Data Analysis & Visualization",
        description: "End-to-end data workflows: ingestion, SQL cleaning, Python analysis, and dashboards in Tableau/Excel.",
    },
    {
        title: "HCI & Usability Research",
        description: "User-centered design, running usability sessions, interview analysis, and translating findings into product improvements.",
    },
];

// For local images, use require("./assets/images/yourimage.png")
// Example: img: require("./assets/images/killerBuns.png")
//
// Tips for adding your own images:
// 1. Put your image files under `src/assets/images/` (e.g. `src/assets/images/my-project.png`).
// 2. In the dataportfolio array below, reference local images with `require("./assets/images/your-file.png")`.
//    Example: { img: require("./assets/images/my-project.png"), description: "...", link: "..." }
// 3. This site applies CSS to force images to a square shape and grayscale:
//    - Square: CSS uses `aspect-ratio: 1/1` on `.po_item` and `object-fit: cover` on images.
//    - Black & white: CSS uses `filter: grayscale(100%)` so images appear black/white by default.
// 4. If you want to keep an image in color, either override the CSS or remove `filter: grayscale(100%)`.
// 5. If an image looks blurred because it's small, use a higher-resolution file (e.g. 1200x1200 px).
const dataportfolio = [
    {
        img: require("./assets/images/killerBuns.png"),
        description: "Killer Buns — Phaser 3 gallery shooter featuring 1D movement, wave-based enemies, and a replay-ready modular game loop.",
        link: "https://github.com/andreanadinecasti/gallery-shooter",
    },
    {
        img: require("./assets/images/HowTheDaysMove.png"),
        description: "How the Days Move — atmospheric 1-bit platformer built in Phaser; dreamlike movement, layered tilemaps, and meditative level flow.",
        link: "https://github.com/andreanadinecasti/how-the-days-move-platformer",
    },
    {
        img: require("./assets/images/rosa.jpg"),
        description: "Saving Fin — mobile AR climate-resilience game built with Unity + AR Foundation; playtesting-informed UI.",
        link: "https://github.com/andreanadinecasti/ccr-savingfin",
    },
    {
        img: require("./assets/images/httpserver.png"),
        description: "Multi-threaded HTTP/1.0 Server — concurrent C server using POSIX threads, custom read-write locks, and stress-tested optimizations.",
        link: "https://github.com/andreanadinecasti/multi-threaded-http-server",
    },
    {
        img: require("./assets/images/ccr.png"),
        description: "Community-centered Co-design Workshops Toward Empowering Bottom Up Flood Resilience - social media lead for research paper on participatory design for flood resilience.",
        link: "https://github.com/andreanadinecasti/ccr-workshops",
    },
    {
        img: require("./assets/images/slowspaces.png"),
        description: "Slow Spaces VR Study — facilitated VR-based research exploring restorative virtual environments, with responsibilities in session moderation and qualitative thematic analysis.",
        link: "https://github.com/andreanadinecasti/slowspaces",
    },

];

const contactConfig = {
    YOUR_EMAIL: "andreanadine.castillo@gmail.com",
    YOUR_FONE: "650-556-4962",
    description: "Open to opportunities in AR/Unity, HCI research, and data-focused roles. Available for collaborations and contract work.",
    // create an account at emailjs.com and populate the values below
    YOUR_SERVICE_ID: "service_n11iyax",
    YOUR_TEMPLATE_ID: "template_v4nut3q",
    YOUR_USER_ID: "HI2OvYcA8xteVtWtP",
};

const socialprofils = {
    github: "https://github.com/andreanadinecasti",
    linkedin: "https://linkedin.com/in/andrea-nadine-castillo",
    instagram: "https://www.instagram.com/andreancastillo/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
