"use client";

import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">Michael</h1>
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8 text-sm font-medium">
                        <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
                        <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
                        <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
                    </div>
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}
