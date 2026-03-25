"use client";
import { useReveal } from "@/hooks/use-reveal";

function ExperienceItem({ exp, index }: { exp: any, index: number }) {
  const ref = useReveal(index * 100);
  return (
    <div ref={ref} className="anim relative pl-8 border-l border-gray-100 dark:border-gray-800">
      <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h4 className="text-2xl md:text-3xl font-bold mb-1">{exp.role}</h4>
          <p className="text-xl text-gray-400 font-light">{exp.company}</p>
        </div>
        <span className="text-sm font-mono text-gray-500 mt-2 md:mt-0">{exp.period}</span>
      </div>
      <ul className="space-y-4">
        {exp.tasks.map((task: string, index: number) => (
          <li key={index} className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed font-light">
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  const titleRef = useReveal(0);
  const experiences = [
    {
      company: "Asenso Solutions, Inc.",
      role: "Web Developer",
      period: "Aug 2024 - Present",
      tasks: [
        "Bug Fixing and Project Development using Laravel and Vue.js.",
        "Cypress Automation testing implementation.",
        "Developing high-quality web solutions meeting user needs and business goals."
      ]
    },
    {
      company: "JMH-IT Solutions",
      role: "Project Employee",
      period: "Aug - Jan 2024",
      tasks: [
        "Project development and bug fixing.",
        "Collaborated with the technical team for project delivery."
      ]
    },
    {
      company: "JMH-IT Solutions",
      role: "On-The-Job Training",
      period: "Jun - Aug 2023",
      tasks: [
        "Learned project development fundamentals and assisted in bug fixing."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-background text-foreground border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h3 ref={titleRef} className="anim text-sm font-semibold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-20 text-center">
          Work Experience
        </h3>
        
        <div className="space-y-20">
          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.company + exp.period} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
