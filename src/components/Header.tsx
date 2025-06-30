import { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  // Close menu if window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY + window.innerHeight / 2;

    let currentSection = '';

    for (const item of navItems) {
      const section = document.querySelector(item.href) as HTMLElement | null;
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          currentSection = item.href;
          break;
        }
      }
    }

    setActiveSection(currentSection);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // run once on load

  return () => window.removeEventListener('scroll', handleScroll);
}, []);





  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black text-black dark:text-white shadow-md py-4 px-6">
      <div className="flex justify-between items-center">
        <a href="#about">
          <h1 className="text-3xl md:text-4xl font-extrabold font-serif tracking-wider text-[#FFD700]">
            Sindhuja
          </h1>
        </a>

        {/* Desktop Menu */}
        <nav className="space-x-6 hidden md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative text-lg font-serif transition-all duration-300 
              before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-[#FFD700] 
              hover:before:w-full before:transition-all before:duration-300 
              ${activeSection === item.href ? 'text-[#FFD700]' : 'text-inhernt hover:text-[#FFD700]'}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative z-[10000]"
        >
          <div className={`w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-[#FFD700] my-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-[#FFD700] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white text-black dark:bg-black dark:text-white flex flex-col items-center py-4 space-y-4 shadow-md md:hidden z-[9998] transition-colors duration-300">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`text-base font-serif transition 
              ${activeSection === item.href ? 'text-[#FFD700] font-bold underline' : 'hover:text-[#FFD700]'}`}
              onClick={() => {
                setActiveSection(item.href);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
