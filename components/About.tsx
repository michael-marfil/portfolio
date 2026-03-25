"use client";
import { useReveal } from "@/hooks/use-reveal";

export default function About() {
  const revealRef = useReveal(0);

  return (
    <section id="about" className="py-24 bg-background text-foreground border-t border-gray-100 dark:border-gray-900">
      <div ref={revealRef} className="anim max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold mb-10 text-center">
          About Me
        </h3>
        <div className="max-w-2xl mx-auto space-y-6 text-lg md:text-xl leading-relaxed font-light text-gray-800 dark:text-gray-200">
            <p>
                I&apos;m Michael, a developer based in the Philippines. I focus on building refined digital experiences with a clean, functional aesthetic.
            </p>
            <p>
                Currently, I am specializing in the Java ecosystem (Spring Boot) while maintaining a strong interest in modern frontend frameworks like React and Next.js.
            </p>
        </div>
      </div>
    </section>
  );
}
