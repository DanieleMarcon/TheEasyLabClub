export const programs = [
  {
    id: "ai-workflow",
    title: "AI & Workflow for Teams",
    description:
      "Reduce operational time and increase efficiency using AI and automation.",
  },
  {
    id: "tools-productivity",
    title: "Tools & Digital Productivity",
    description: "Make your team actually use tools effectively.",
  },
  {
    id: "organization-processes",
    title: "Organization & Processes",
    description:
      "Eliminate chaos and inefficiencies in internal workflows.",
  },
] as const;

export const labModules = {
  free: [
    { id: "prompt-basics", title: "Prompt Basics Guide" },
    { id: "work-checklist", title: "Work Organization Checklist" },
    { id: "starter-toolkit", title: "Starter Toolkit" },
  ],
  premium: [
    {
      id: "build-ai-workflows",
      title: "Build AI Workflows",
      price: 150,
    },
    {
      id: "operational-content-ai",
      title: "Create Operational Content with AI",
      price: 180,
    },
    {
      id: "digital-work-organization",
      title: "Digital Work Organization",
      price: 120,
    },
    {
      id: "automate-repetitive-tasks",
      title: "Automate Repetitive Tasks",
      price: 160,
    },
  ],
} as const;

export const navigation = {
  primary: [
    { label: "Home", href: "/" },
    { label: "Programs", href: "/programs" },
    { label: "Lab", href: "/lab" },
    { label: "Network", href: "/network" },
    { label: "About", href: "/about" },
  ],
  login: { label: "Login", href: "/login" },
} as const;
