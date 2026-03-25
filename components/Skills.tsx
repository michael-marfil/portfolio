"use client";
import { useReveal } from "@/hooks/use-reveal";

export default function Skills() {
  const revealRef = useReveal(0);
  const skills = [
    "React", "Vue.js", "JavaScript", "TypeScript", 
    "PHP", "Laravel", "HTML", "CSS", 
    "MySQL", "Cypress Automation", "REST APIs", "Git"
  ];

  return (
    <section id="skills" className="py-24 bg-background text-foreground border-t border-gray-100 dark:border-gray-900">
      <div ref={revealRef} className="anim max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-16">
          Technical Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span key={skill} className="px-6 py-3 bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-2xl text-base font-medium hover:border-blue-600 dark:hover:border-blue-500 transition-all cursor-default shadow-sm hover:shadow-xl hover:shadow-blue-500/5">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
