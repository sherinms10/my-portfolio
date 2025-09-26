import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    // { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];
 
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-primary">Portfolio</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-dark hover:text-teal-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
  className="hidden md:flex text-dark hover:text-teal-600 transition-colors font-medium cursor-pointer"
  onClick={() => window.open('/SHERIN_M.pdf', '_blank')} 
>
  View CV
</button>

          {/* Mobile Menu Button */}
          <div className=' flex gap-5 md:hidden'>
                    <button
  className="md:hidden text-dark hover:text-teal-600 transition-colors font-medium cursor-pointer"
  onClick={() => window.open('/SHERIN_M.pdf', '_blank')} 
>
  View CV
</button>
                    <button
            className="md:hidden text-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          </div>
          
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-6 py-2 text-dark hover:text-primary hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;