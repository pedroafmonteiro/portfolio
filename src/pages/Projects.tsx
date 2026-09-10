import MainContent from "../components/Layout/MainContent";
import ContentItem from "../components/ContentItem";

const Projects = () => {
  const projects = [
    {
      title: "uni",
      description:
        "A cross-platform mobile application designed to streamline academic life for university students, offering features like schedule management, grade tracking, and campus navigation.",
      websiteLink: "https://github.com/niaefeup/uni",
      websiteLabel: "github.com",
    },
    {
      title: "NIddle",
      description:
        "A content management system designed for uni, allowing administrators to manage announcements, banners, and app content seamlessly.",
      websiteLink: "https://github.com/niaefeup/niddle",
      websiteLabel: "github.com",
    },
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website built with React and Tailwind CSS, showcasing my projects, experience, and skills in a clean and responsive design.",
      websiteLink: "https://pedroafmonteiro.pages.dev",
      websiteLabel: "pedroafmonteiro.pages.dev",
    },
    {
      title: "In Porto",
      description:
        "A cross-platform mobile application that provides users with information about public transportation in Porto, Portugal, enhancing the experience of both residents and tourists.",
      websiteLink: "https://github.com/niaefeup/in-porto",
      websiteLabel: "github.com",
    },
    {
      title: "Qnect",
      description:
        "A web application designed for people to ask questions about various topics, fostering a collaborative environment and facilitating knowledge sharing.",
      websiteLink: "https://github.com/pedroafmonteiro/qnect",
      websiteLabel: "github.com",
    },
    {
      title: "EcoTracker",
      description:
        "A cross-platform mobile application designed to help users track their environmental impact and adopt more sustainable practices in their daily lives.",
      websiteLink: "https://github.com/pedroafmonteiro/ecotracker",
      websiteLabel: "github.com",
    },
    {
      title: "Hyrio",
      description:
        "A web application for freelancers to manage their projects, clients, and invoices, providing a streamlined workflow and efficient project management tools.",
      websiteLink: "https://github.com/pedroafmonteiro/hyrio",
      websiteLabel: "github.com",
    },
    {
      title: "Space Wars",
      description:
        "A space-themed arcade game built with Java, following Design Patterns principles, where players navigate through space, avoiding obstacles and battling enemies in an engaging and dynamic environment.",
      websiteLink: "https://github.com/pedroafmonteiro/project-ldts-leic",
      websiteLabel: "github.com",
    },
    {
      title: "LCOM Project",
      description:
        "A software project developed as part of the LCOM course unit, focusing on hardware communication and low-level programming, demonstrating proficiency in C and embedded systems.",
      websiteLink: "https://github.com/pedroafmonteiro/project-lcom-leic",
      websiteLabel: "github.com",
    },
  ];

  return (
    <MainContent>
      <div className="space-y-8 w-full max-w-xl mx-auto py-2">
        <header className="space-y-1">
          <h1 className="text-xl font-medium text-neutral-100">Projects</h1>
          <p className="text-sm text-neutral-400">
            A collection of my personal and academic projects.
          </p>
        </header>

        <div className="divide-y divide-white/5 space-y-6">
          {projects.map((project, index) => (
            <ContentItem key={index} {...project} />
          ))}
        </div>
      </div>
    </MainContent>
  );
};

export default Projects;

