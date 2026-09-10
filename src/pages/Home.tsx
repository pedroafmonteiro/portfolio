const Home = () => {
  const stack = [
    {
      category: "Languages",
      skills: "TypeScript, Dart, Java, Kotlin, PHP, C/C++",
    },
    {
      category: "Frontend & Mobile",
      skills: "Flutter, React, Tailwind CSS",
    },
    {
      category: "Backend & Tooling",
      skills: "NestJS, Laravel, PostgreSQL, SQLite, Docker, Git",
    },
  ];

  return (
    <div className="space-y-8 w-full max-w-xl mx-auto py-2">
      <header className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
          <div>
            <h1 className="text-xl font-medium text-neutral-100">
              Pedro Monteiro
            </h1>
            <p className="text-sm text-neutral-400">Software Engineer</p>
          </div>

          <a
            href="/Pedro_Monteiro_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-xs font-mono text-neutral-400 hover:text-white transition-colors self-start sm:self-auto"
          >
            <span>View Resume</span>
            <span className="inline-block ml-1 text-neutral-400 group-hover:text-white transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 select-none">
              ↗
            </span>
          </a>
        </div>

        <p className="text-sm text-neutral-300 leading-relaxed">
          Software Engineering student at FEUP and Co-head of Projects at
          NIAEFEUP. Focused on crafting performant web and mobile
          applications with thoughtful, minimal interfaces.
        </p>
      </header>

      <section className="space-y-3 pt-2">
        <h2 className="text-sm font-medium text-neutral-200">Currently</h2>
        <ul className="space-y-2.5 text-sm text-neutral-400 leading-relaxed">
          <li className="flex items-start gap-2.5">
            <span className="text-neutral-600 select-none mt-0.5">•</span>
            <span>
              Co-leading the projects department at{" "}
              <a
                href="https://niaefeup.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-white underline decoration-white/20 underline-offset-4 transition-colors"
              >
                NIAEFEUP
              </a>
              , steering technical development for{" "}
              <span className="text-neutral-200">uni</span> and{" "}
              <span className="text-neutral-200">NIddle</span>.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-neutral-600 select-none mt-0.5">•</span>
            <span>
              Co-leading informatics at{" "}
              <a
                href="https://sinf.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-200 hover:text-white underline decoration-white/20 underline-offset-4 transition-colors"
              >
                SINF 2026
              </a>
              , developing the event platform and real-time engagement
              features.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-neutral-600 select-none mt-0.5">•</span>
            <span>
              Starting my Software Engineering Masters degree at{" "}
              <span className="text-neutral-200">FEUP</span> in Porto.
            </span>
          </li>
        </ul>
      </section>

      <section className="space-y-3 pt-2">
        <h2 className="text-sm font-medium text-neutral-200">
          Technical Focus
        </h2>
        <div className="divide-y divide-white/5">
          {stack.map((item) => (
            <div
              key={item.category}
              className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4 py-3 first:pt-0"
            >
              <span className="text-sm text-neutral-400 shrink-0">
                {item.category}
              </span>
              <span className="font-mono text-xs text-neutral-300 sm:text-right">
                {item.skills}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
