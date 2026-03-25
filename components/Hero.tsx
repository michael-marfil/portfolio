"use client";
import Image from 'next/image';
import { useReveal } from "@/hooks/use-reveal";
import { ThemeToggle } from "./ThemeToggle";

export default function Hero() {
    const revealRef = useReveal(0);
    return (
        <section className="relative bg-background text-foreground">
            {/* Theme Toggle - Fixed in top right, outside the animation */}
            <div className="absolute top-6 right-6 z-50">
                <ThemeToggle />
            </div>

            <div ref={revealRef} className="anim pt-28 pb-16 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 border-4 border-white shadow-xl dark:border-gray-800">
                    {/* <Image 
                        src="https://picsum.photos/id/1015/400/400" 
                        alt="Michael" 
                        width={400} 
                        height={400}
                        className="w-full h-full object-cover"
                    /> */}
                </div>
                <h2 className="text-5xl md:text-6xl font-bold mb-4">Hi, I&apos;m Michael</h2>
                <p className="text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
                    Developer
                </p>
                <a href="#projects"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl text-lg font-semibold inline-flex items-center gap-3 transition-all"
                >
                    See my work
                </a>
            </div>
        </section>
    );
}
