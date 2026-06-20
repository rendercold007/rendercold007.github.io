export default function Home() {
  const skills = [
    { name: "C++", icon: "⚙️" },
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Django", icon: "🎸" },
    { name: "Docker", icon: "🐳" },
    { name: "Postman", icon: "📮" },
  ];

  const projects = [
    {
      title: "AI ATS Analyzer",
      description:
        "An AI-powered resume analyzer that scores resumes against job descriptions, the way an ATS (Applicant Tracking System) would.",
      tags: ["JavaScript", "AI"],
      link: "https://github.com/rendercold007/ai-ats",
    },
    {
      title: "Quiz App",
      description:
        "An interactive quiz application built with JavaScript that lets users answer questions and track their scores.",
      tags: ["JavaScript"],
      link: "https://github.com/rendercold007/QuizApp",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white font-sans selection:bg-indigo-500/30">

      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/60 backdrop-blur-xl border-b border-white/[0.06] z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-lg tracking-tight">
            Aniket Singh
          </span>
          <div className="flex gap-7 text-sm text-gray-500">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        {/* subtle radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 50% at 50% 40%, black, transparent)",
          }}
        />
        <div className="relative text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] rounded-full px-4 py-1.5 mb-6 text-xs text-gray-400">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-[1.05] tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-br from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Aniket Singh
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-9 max-w-md mx-auto">
            ECE Student &amp; Full Stack Developer at NIT Jalandhar
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-full font-medium transition hover:scale-105 hover:bg-gray-200"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/rendercold007"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.06] text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition hover:scale-105"
            >
              View GitHub
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.02] hover:bg-white/[0.06] text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition hover:scale-105"
            >
              <span>↓</span> Resume
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">About Me</h2>
          <div className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-2xl p-8 transition duration-300 hover:-translate-y-1 hover:border-white/[0.14]">
            <p className="text-gray-400 text-lg leading-relaxed text-center">
              Hey, I&apos;m Aniket — a 3rd year B.Tech undergraduate in Electronics &amp;
              Communication Engineering at{" "}
              <span className="text-white font-medium">NIT Jalandhar</span>.
              I love building full stack applications and enjoy working across both frontend
              and backend. I&apos;m always exploring new technologies and working on projects
              that solve real problems.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-xl p-6 flex flex-col items-center gap-3 cursor-default transition duration-300 hover:-translate-y-2 hover:border-white/[0.16] hover:from-white/[0.07]"
              >
                <span className="text-3xl transition-transform duration-300 group-hover:scale-125">
                  {skill.icon}
                </span>
                <span className="text-gray-400 font-medium group-hover:text-white transition-colors">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center tracking-tight">Projects</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-2xl p-6 transition duration-300 hover:-translate-y-2 hover:border-white/[0.16] hover:from-white/[0.07]"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    ↗
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/[0.04] text-gray-400 border border-white/[0.08] px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Get In Touch</h2>
          <p className="text-gray-500 mb-10">
            Feel free to reach out — whether it&apos;s for a project, collaboration, or just to say hi.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:flameboy568@gmail.com"
              className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:from-white/[0.07]"
            >
              <div className="text-2xl mb-2">✉️</div>
              <div className="text-gray-400 group-hover:text-white transition-colors text-sm break-all">
                flameboy568@gmail.com
              </div>
            </a>
            <a
              href="https://github.com/rendercold007"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.06] rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/[0.16] hover:from-white/[0.07]"
            >
              <div className="text-2xl mb-2">🐙</div>
              <div className="text-gray-400 group-hover:text-white transition-colors text-sm">
                github.com/rendercold007
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/[0.06]">
        Built by Aniket Singh
      </footer>

    </main>
  );
}
