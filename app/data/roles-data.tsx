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
            "Built gameplay systems and responsive UI for social-platform games.",
            "Delivered synchronous and asynchronous multiplayer features.",
            "Implemented backend services (APIs, Redis) supporting high concurrent player counts.",
            "Contributed to live-ops systems and beta rollout with active community support.",
        ],
    },
    {
        title: "Software Engineer, Quality",
        company: "Unity Technologies",
        period: "Jul 2024 - Mar 2025",
        description: [
            "Built internal game projects to dogfood the Unity Engine.",
            "Found and triaged Unity Editor defects via exploratory and project-driven testing.",
            "Supported release acceptance and regression testing across Unity versions.",
        ],
    },
    {
        title: "Software Engineer, Quality Intern",
        company: "Unity Technologies",
        period: "Jul 2022 - Jun 2023",
        description: [
            "Built internal game projects used to evaluate Unity subsystem quality.",
            "Contributed to release-quality tooling using Blazor and ASP.NET.",
            "Created and executed manual and automated test coverage.",
        ],
    },
];
