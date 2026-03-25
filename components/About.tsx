"use client";
import { useReveal } from "@/hooks/use-reveal";

export default function About() {
  const revealRef = useReveal(0);

  return (
    <section id="about" className="py-32 bg-background text-foreground border-t border-gray-100 dark:border-gray-900">
      <div ref={revealRef} className="anim max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-10">
          Profile
        </h3>
        <div className="max-w-3xl mx-auto space-y-8 text-xl md:text-2xl leading-relaxed font-light text-gray-800 dark:text-gray-200">
            <p>
                Computer Science graduate with 1.5 years of experience as a Web Developer, skilled in front-end
                technologies like React, Vue.js, HTML, CSS, and JavaScript.
            </p>
            <p>
                Familiar with back-end development using PHP and Laravel, and experienced in test automation with Cypress. 
                I focus on creating clean, user-friendly designs and work well in team environments.
            </p>
            <p>
                Always eager to learn and improve, I am committed to delivering high-quality web solutions that meet user needs and business goals.
            </p>
        </div>
      </div>
    </section>
  );
}
