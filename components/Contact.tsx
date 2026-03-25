"use client";
import { useReveal } from "@/hooks/use-reveal";

export default function Contact() {
  const revealRef = useReveal(0);
  
  return (
    <section id="contact" ref={revealRef} className="anim py-20 bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-bold mb-8">Let&apos;s Connect</h3>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Open to opportunities, mentorship, or just chatting about Java!</p>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="mailto:michaelmarfil0002@gmail.com" 
             className="bg-black dark:bg-white dark:text-black text-white px-8 py-4 rounded-2xl font-medium hover:scale-105 transition-all">
            📧 Email Me
          </a>
          <a href="https://github.com/michael-marfil" target="_blank"
             className="border border-gray-300 dark:border-gray-700 px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/michael-marfil-8b5783270/" target="_blank"
             className="border border-gray-300 dark:border-gray-700 px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
