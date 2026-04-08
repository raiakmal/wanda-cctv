import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

interface NavItem {
  label: string;
  href: string;
}

const scrollToSection = (id: string) => {
  if (id === '#') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    const el = document.querySelector(id);
    if (el) {
      const y = (el as HTMLElement).getBoundingClientRect().top + window.pageYOffset - 58;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Beranda', href: '#' },
    { label: 'Tentang', href: '#features' },
    { label: 'Katalog', href: '#catalog' },
    { label: 'Kontak', href: '#contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar bg-white/80 backdrop-blur shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex items-center h-16">
          {/* Logo kiri */}
          <button
            onClick={() => {
              scrollToSection('#');
              closeMenu();
            }}
            className="flex items-center space-x-2 bg-transparent border-0 p-0 m-0 cursor-pointer"
            style={{ background: 'none' }}
            aria-label="Ke Beranda"
          >
            <img src="/logo.png" alt="Wanda CCTV" className="w-10 h-10" />
            <span className="hidden sm:block text-xl font-bold text-blue-600 tracking-wide">Wanda CCTV</span>
          </button>

          {/* Menu desktop */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.href);
                    closeMenu();
                  }}
                  className="px-4 py-2 rounded-md text-md font-medium text-blue-500 hover:text-blue-800 hover:bg-blue-50 transition bg-transparent border-0 cursor-pointer"
                  style={{ background: 'none' }}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tombol menu mobile */}
          <div className="md:hidden flex items-center ml-2">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-blue-500 hover:text-blue-800" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden transition-all duration-300 ease-in-out bg-white shadow ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center py-2 space-y-1">
          {/* Logo mobile */}
          <button
            onClick={() => {
              scrollToSection('#');
              closeMenu();
            }}
            className="flex items-center space-x-2 bg-transparent border-0 p-0 m-0 cursor-pointer mb-2"
            style={{ background: 'none' }}
            aria-label="Ke Beranda"
          >
            <img src="/logo.png" alt="Wanda CCTV" className="w-10 h-10" />
            <span className="sm:block text-xl font-bold text-blue-600 tracking-wide">Wanda CCTV</span>
          </button>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                scrollToSection(item.href);
                closeMenu();
              }}
              className="w-full text-center px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition bg-transparent border-0 cursor-pointer"
              style={{ background: 'none' }}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
