import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/button';
import { navLinks, personalInfo } from '@/data/portfolio-data';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = navLinks.map(link => link.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {personalInfo.name.split(' ')[0]}
              <span className="text-foreground">.dev</span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(link.href)}
                  className={`relative text-sm font-medium transition-colors ${
                    activeSection === link.href.replace('#', '')
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.replace('#', '') && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    />
                  )}
                </Button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle />
              
              <Button
                variant="default"
                size="sm"
                className="hidden sm:flex items-center gap-2"
                asChild
              >
                <a href={personalInfo.resumeUrl} download>
                  <Download className="h-4 w-4" />
                  CV
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 md:hidden"
          >
            <div className="bg-background/95 backdrop-blur-xl border-b border-border p-4 shadow-lg">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    onClick={() => scrollToSection(link.href)}
                    className={`justify-start text-left ${
                      activeSection === link.href.replace('#', '')
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.name}
                  </Button>
                ))}
                <Button
                  variant="default"
                  className="mt-2 flex items-center gap-2"
                  asChild
                >
                  <a href={personalInfo.resumeUrl} download>
                    <Download className="h-4 w-4" />
                    Descargar CV
                  </a>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
