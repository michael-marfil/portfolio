"use client";
import { useReveal } from "@/hooks/use-reveal";

export default function Skills() {
  const revealRef = useReveal(0);
  const skills = [
    "Java", "Spring Boot", "React", "Next.js", 
    "Tailwind CSS", "Git", "GitHub", "SQL", 
    "Problem Solving", "REST APIs", "Docker", "TypeScript"
  ];

  return (
    <section id="skills" className="py-24 bg-background text-foreground border-t border-gray-100 dark:border-gray-900">
      <div ref={revealRef} className="anim max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-16">
          Skills & Technologies
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, i) => (
            <span key={skill} className="px-6 py-3 bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl text-base font-medium hover:border-blue-600 dark:hover:border-blue-500 transition-all cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
