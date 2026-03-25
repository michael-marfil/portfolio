"use client";
import { useReveal } from "@/hooks/use-reveal";

export default function Projects() {
  const titleRef = useReveal(0);
  const projects = [
    {
      title: "Java Console Portfolio",
      tech: ["Java", "OOP", "CLI"],
      year: "2024",
      desc: "A command-line interface application demonstrating high-level OOP principles and system design."
    },
    {
      title: "Modern Portfolio",
      tech: ["Next.js", "Tailwind CSS", "Framer"],
      year: "2026",
      desc: "A high-performance personal brand site built with a focus on refined typography and smooth interactions."
    }
  ];

  return (
    <section id="projects" className="py-32 bg-background text-foreground relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="anim mb-20 text-center">
            <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-4">Portfolio</h3>
            <h2 className="text-4xl md:text-5xl font-bold">Featured Works.</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={project.title} className="group p-8 md:p-12 rounded-[2.5rem] bg-white dark:bg-[#111111] border border-gray-100 dark:border-gray-800/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5 cursor-pointer flex flex-col justify-between min-h-[400px]">
              <div>
                <div className="flex justify-between items-center mb-10">
                    <span className="text-xs font-mono text-gray-400">{project.year}</span>
                    <div className="flex gap-2">
                        {project.tech.map(t => (
                            <span key={t} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-gray-50 dark:bg-gray-800/50 rounded-full text-gray-500">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
                <h4 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                </h4>
                <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light">
                    {project.desc}
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4 text-sm font-semibold group-hover:gap-6 transition-all duration-300">
                <span>View Details</span>
                <span className="text-blue-600">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
