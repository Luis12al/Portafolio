import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { personalInfo, socialLinks } from '@/data/portfolio-data';
import { FaUser, FaDatabase, FaRegHandPeace } from "react-icons/fa";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
};

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge variant="secondary" className="mb-4 px-3 py-1 text-sm">
                <FaRegHandPeace /> ¡Hola! Bienvenido a mi portafolio
              </Badge>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
            >
              Soy{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium mb-4"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.subtitle}. Especializado en construir aplicaciones web
              modernas, escalables y centradas en el usuario.
            </motion.p>

            {/* Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
            >
              {['React', 'Node.js', 'TypeScript', 'PostgreSQL'].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="px-3 py-1 text-sm hover:bg-primary/10 transition-colors cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                size="lg"
                onClick={scrollToAbout}
                className="group"
              >
                Conóceme
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <a href={personalInfo.resumeUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Descargar CV
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                    >
                      {Icon && <Icon className="h-5 w-5" />}
                    </a>
                  </Button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Profile Image / Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Animated Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 -m-4"
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-primary/20" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 -m-8"
              >
                <div className="w-full h-full rounded-full border-2 border-dotted border-secondary/20" />
              </motion.div>

              {/* Profile Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Gradient Background */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-primary/20 blur-xl" />
                
                {/* Profile Image Placeholder */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-0.5">
                    <img src="/Foto_Perfil.png" alt="Descripción" className="w-80 h-80 object-cover rounded-full mx-auto"/>
                  </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="absolute -top-2 -right-2 bg-background border border-border rounded-lg px-3 py-2 shadow-lg"
                >
                  <span className="text-2xl"><FaDatabase /></span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                  className="absolute -bottom-2 -left-2 bg-background border border-border rounded-lg px-3 py-2 shadow-lg"
                >
                  <span className="text-2xl"><FaUser /></span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs">Desplaza para ver más</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
