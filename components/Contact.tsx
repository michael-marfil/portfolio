"use client";
import { useReveal } from "@/hooks/use-reveal";

export default function Contact() {
  const revealRef = useReveal(0);
  
  return (
    <section id="contact" ref={revealRef} className="anim py-32 bg-background text-foreground border-t border-gray-100 dark:border-gray-900">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-xs font-medium uppercase tracking-[0.3em] text-gray-500 mb-20">
          Connect
        </h3>
        
        <div className="flex flex-col gap-10">
          <p className="text-2xl md:text-3xl font-light text-gray-800 dark:text-gray-200 leading-relaxed max-w-2xl">
            Open to new opportunities and collaborations. 
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6 mt-6">
            <a href="mailto:michaelmarfil0002@gmail.com" 
               className="text-sm font-medium border-b border-black dark:border-white pb-1 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              Email
            </a>
            <a href="https://github.com/michael-marfil" target="_blank"
               className="text-sm font-medium border-b border-black dark:border-white pb-1 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/michael-marfil-8b5783270/" target="_blank"
               className="text-sm font-medium border-b border-black dark:border-white pb-1 hover:text-gray-500 dark:hover:text-gray-400 transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
