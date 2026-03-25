"use client";
import { useReveal } from "@/hooks/use-reveal";

export default function Projects() {
  const titleRef = useReveal(0);
  const project1Ref = useReveal(100);
  const project2Ref = useReveal(200);

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6">
        <h3 ref={titleRef} className="anim text-4xl font-bold mb-12 text-center">My Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div ref={project1Ref} className="anim bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <span className="text-white text-6xl">☕</span>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-xl mb-2">Java Console Portfolio</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Simple command-line app that displays my profile info. Built while learning OOP.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Java</span>
              </div>
            </div>
          </div>

          <div ref={project2Ref} className="anim bg-gray-50 dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-48 bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center">
              <span className="text-white text-6xl">🌐</span>
            </div>
            <div className="p-6">
              <h4 className="font-semibold text-xl mb-2">This Portfolio</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                Built with Next.js + Tailwind in one sitting. Shows I can ship fast.
              </p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">React</span>
                <span className="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
