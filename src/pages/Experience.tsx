import ContentItem from "../components/ContentItem";

const Experience = () => {
  const experiences = [
    {
      title: "Co-head of Projects at NIAEFEUP",
      date: "May 2026 - Present",
      description:
        "Co-leading the projects department as a whole by taking important decisions together with each project's manager and keeping them stable and useful to all.",
      websiteLink: "https://niaefeup.pt",
      websiteLabel: "niaefeup.pt",
    },
    {
      title: "Co-head of Informatics at SINF 2026",
      date: "June 2026 - Present",
      description:
        "Continuing the technical development of the event platform, introducing gamification and interactive mini-games to drive real-time attendee engagement throughout the conference.",
      websiteLink: "https://sinf.pt",
      websiteLabel: "sinf.pt",
    },
    {
      title: "Project Manager at NIAEFEUP",
      date: "July 2025 - May 2026",
      description:
        "Leading the development of uni, a cross-platform mobile application designed to streamline academic life for university students.",
      websiteLink: "https://niaefeup.pt",
      websiteLabel: "niaefeup.pt",
    },
    {
      title: "Frontend Engineer Intern at Robotair",
      date: "July 2025 - August 2025",
      description:
        "Contributed to the platform's major redesign to align with 2025 standards, enhancing user experience and interface aesthetics.",
      websiteLink: "https://robotair.io",
      websiteLabel: "robotair.io",
    },
    {
      title: "Co-Head of Image & Communication at SINF 2025",
      date: "June 2025 - October 2025",
      description:
        "Managed the visual identity and communication strategies for SINF 2025, ensuring cohesive branding across all of the event.",
      websiteLink: "https://2025.sinf.pt",
      websiteLabel: "sinf.pt",
    },
  ];

  return (
    <div className="space-y-8 w-full max-w-xl mx-auto py-2">
      <header className="space-y-1">
        <h1 className="text-xl font-medium text-neutral-100">Experience</h1>
        <p className="text-sm text-neutral-400">
          A summary of my professional experience.
        </p>
      </header>

      <div className="divide-y divide-white/5 space-y-6">
        {experiences.map((exp, index) => (
          <ContentItem key={index} {...exp} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
