import { motion } from 'framer-motion';

export function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a href="#" className="text-zinc-900 font-semibold tracking-tight text-lg">
          N.D. Thịnh
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <a 
          href="#contact"
          className="hidden md:inline-flex bg-zinc-900 text-zinc-50 px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
        >
          Let's talk
        </a>

        {/* Mobile menu could be added here, keeping it minimal for now */}
        <div className="md:hidden flex items-center gap-4">
           {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
