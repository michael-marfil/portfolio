"use client";
import { useReveal } from "@/hooks/use-reveal";

function SkillCard({ skill, index }: { skill: string, index: number }) {
  const ref = useReveal(index * 50); // Small stagger for smooth effect
  return (
    <div ref={ref} className="anim bg-background dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 text-center hover:border-blue-600 transition-all shadow-sm">
      <p className="font-medium text-lg">{skill}</p>
    </div>
  );
}

export default function Skills() {
  const skills = ["Java", "Spring Boot", "React", "Next.js", "Tailwind CSS", "Git & GitHub", "MySQL", "Problem Solving"];
  return (
    <section id="skills" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-12">Skills & Tools</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <SkillCard key={skill} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
