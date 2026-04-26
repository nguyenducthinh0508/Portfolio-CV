import { useLanguage } from '../i18n/LanguageContext';

export function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  const links = [
    { name: t('navbar.projects'), href: '#projects' },
    { name: t('navbar.experience'), href: '#experience' },
    { name: t('navbar.skills'), href: '#skills' },
    { name: t('navbar.about'), href: '#about' },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-16 pt-6">
      <header className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        <div className="text-2xl font-semibold tracking-tight text-white">
          THINH
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors uppercase px-2"
          >
            {language === 'vi' ? 'EN' : 'VI'}
          </button>
          <a 
            href="#contact"
            className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            {t('navbar.startChat')}
          </a>
        </div>
      </header>
    </div>
  );
}
