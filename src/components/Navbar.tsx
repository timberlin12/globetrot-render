import { useState, useEffect } from 'react';
import { Menu, X, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Tours', href: '/tours', type: 'route' },
    { name: 'Hotels', href: '/hotel', type: 'route' },
    { name: 'Transport', href: '/transport', type: 'route' },
    { name: 'Blog', href: '/blog', type: 'route' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg transition-smooth group-hover:scale-110">
              <Plane className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className={`text-2xl font-bold transition-smooth ${
              isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'
            }`}>
              TravelWorld
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.type === 'route') {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`font-medium transition-smooth hover:text-primary ${
                      isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={isHome ? link.href : `/${link.href}`}
                  className={`font-medium transition-smooth hover:text-primary ${
                    isScrolled ? 'text-foreground' : 'text-white drop-shadow-lg'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <Link to="/contact">
              <Button
                className={isScrolled ? '' : 'bg-white text-primary hover:bg-white/90'}
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-background/95 backdrop-blur-md rounded-lg shadow-medium mt-2">
            {navLinks.map((link) => {
              if (link.type === 'route') {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-4 py-3 text-foreground hover:bg-muted transition-smooth"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              }
              return (
                <a
                  key={link.name}
                  href={isHome ? link.href : `/${link.href}`}
                  className="block px-4 py-3 text-foreground hover:bg-muted transition-smooth"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="px-4 pt-2">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full">Book Now</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
