import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo, socialLinks } from '@/data/portfolio-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-lg font-bold mb-2">
              {personalInfo.name.split(' ')[0]}
              <span className="text-primary">.dev</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              {personalInfo.title}
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-4"
          >
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  size="icon"
                  asChild
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                </Button>
              );
            })}
          </motion.div>

          {/* Back to Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center md:justify-end"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-muted-foreground"
          >
            <span>© {currentYear} {personalInfo.name}. Todos los derechos reservados.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Hecho con <Heart className="h-3 w-3 text-red-500 fill-red-500" /> y mucho código
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
