import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

interface NavItem {
  label: string;
  href: string;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Beranda', href: '#' },
    { label: 'Katalog', href: '#katalog' },
    { label: 'Tentang', href: '#tentang' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo kiri */}
          <a href="#" className="flex items-center space-x-2">
            <img src="/src/assets/logo.png" alt="Wanda CCTV" className="w-10 h-10" />
            <span className="hidden sm:block text-xl font-bold text-blue-600 tracking-wide">Wanda CCTV</span>
          </a>

          {/* Menu tengah (desktop) */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex space-x-2">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="px-4 py-2 rounded-md text-md font-medium text-blue-500 hover:text-blue-800 hover:bg-blue-50 transition">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Tombol menu mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition" aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6 text-blue-500 hover:text-blue-800" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`md:hidden transition-all duration-300 ease-in-out bg-white shadow ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center py-2 space-y-1">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="w-full text-center px-4 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition" onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
