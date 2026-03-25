"use client";
import { useReveal } from "@/hooks/use-reveal";
import { ThemeToggle } from "./ThemeToggle";

export default function Hero() {
    const revealRef = useReveal(0);
    return (
        <section className="relative bg-background text-foreground min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">
            {/* Theme Toggle - Fixed in top right */}
            <div className="absolute top-8 right-8 z-50">
                <ThemeToggle />
            </div>

            {/* Background Decorative Gradient */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -z-10 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div ref={revealRef} className="anim px-6 max-w-5xl mx-auto text-center">
                <h1 className="text-6xl md:text-[8rem] font-bold tracking-tighter mb-8 leading-none">
                    Michael A. Marfil
                </h1>
                
                <div className="flex items-center justify-center gap-4 text-lg md:text-2xl text-gray-500 dark:text-gray-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                    <span>Web Developer</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
                    <span>Legazpi City, Philippines</span>
                </div>

                <div className="mt-16 flex flex-wrap justify-center gap-6">
                    <a href="#projects" className="px-10 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-semibold hover:scale-105 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/10 transition-all">
                        View Projects
                    </a>
                    <a href="#contact" className="px-10 py-4 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-900 transition-all">
                        Let&apos;s Connect
                    </a>
                </div>
            </div>
        </section>
    );
}
