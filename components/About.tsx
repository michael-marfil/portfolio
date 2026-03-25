"use client";
import { useReveal } from "@/hooks/use-reveal";

export default function About() {
  const revealRef = useReveal(0);

  return (
    <section id="about" ref={revealRef} className="anim py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-4xl font-bold mb-8 text-center">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I&apos;m Michael from Naga, Bicol Region, Philippines. 
              Currently learning Java and building my first full-stack projects. 
              Passionate about clean code, problem solving, and creating useful apps.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6">
              This portfolio was built with Next.js + Tailwind in just a few hours — 
              proof that I can learn fast and ship things quickly!
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-3xl">
            <h4 className="font-semibold mb-4">Currently learning:</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">✅ Java + OOP</li>
              <li className="flex items-center gap-3">✅ React / Next.js</li>
              <li className="flex items-center gap-3">🔄 Spring Boot (next goal)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
