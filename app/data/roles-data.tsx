export interface IRoleData {
    title: string;
    company: string;
    period: string;
    description: string[];
}

export const allRoleData: IRoleData[] = [
    {
        title: "Software Engineer",
        company: "Mojiworks",
        period: "Apr 2025 - Jun 2026",
        description: [
            "Build gameplay systems and responsive UI for games on emerging social platforms.",
            "Implement synchronous and asynchronous multiplayer features.",
            "Entrusted with feature leadership for consumer-facing features, owning them end-to-end with significant product and design responsibility, while collaborating closely with product managers and designers.",
            "Use analytics to iterate on the user experience and inform product decisions.",
            "Lead the UX for key live-ops features such as push notifications and in-app purchases, shaping both the design and implementation.",
            "Develop scalable backend systems, APIs and Redis-based data storage supporting thousands of concurrent users.",
            "Contribute to a multi-agent, AI-driven simulation system.",
            "Work directly with platform partners on pre-release platform features.",
            "Support BETA rollout through community interaction and moderation",
        ],
    },
    {
        title: "Software Engineer, Quality",
        company: "Unity Technologies",
        period: "Jul 2024 - Mar 2025",
        description: [
            "Performed project-driven and exploratory testing to identify defects in the Unity Editor.",
            "Developed internal game projects to dogfood the Unity Engine and reproduce real-world issues.",
            "Executed release acceptance testing for Unity versions and internal tooling.",
            "Investigated and documented bugs, conducting regression testing to identify the first affected version.",
        ],
    },
    {
        title: "Software Engineer, Quality Intern",
        company: "Unity Technologies",
        period: "Jul 2022 - Jun 2023",
        description: [
            "Used Blazor and ASP.NET web frameworks to build the front and back end of an internal site for monitoring release quality.",
            "Developed internal game projects within the Unity Engine to assess the quality of different areas.",
            "Crafted and executed manual and automated test suites.",
        ],
    },
];
