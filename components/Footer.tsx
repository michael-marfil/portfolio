export default function Footer() {
    return (
        <footer className="py-20 bg-background text-foreground border-t border-gray-100 dark:border-gray-900">
            <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    &copy; 2026 Michael Marfil
                </p>
                <div className="flex gap-8 text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                    <a href="#" className="hover:text-foreground transition-colors">Back to top</a>
                </div>
            </div>
        </footer>
    );
}
