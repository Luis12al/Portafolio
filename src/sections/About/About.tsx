import { motion } from 'framer-motion';
import { Calendar, Briefcase, Code, Heart, MapPin, Mail, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { personalInfo, stats } from '@/data/portfolio-data';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  Briefcase,
  Code,
  Heart,
};

export function About() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Sobre Mí
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Conoce mi historia
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-15 items-center">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Image */}
            <div className="relative mb-7">
              <div className="aspect-square max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-border p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-0.5">
                    <img src="/Foto_Perfil.png" alt="Descripción" className="w-50 h-50 object-cover rounded-full mx-auto"/>
                  </div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary/10 rounded-full blur-2xl" />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const Icon = iconMap[stat.icon || 'Code'];
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-background border border-border rounded-xl p-4 text-center hover:border-primary/50 transition-colors"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              Desarrollador apasionado por crear{' '}
              <span className="text-primary">soluciones digitales</span>
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {personalInfo.about.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  {paragraph.trim()}
                </motion.p>
              ))}
            </div>

            {/* Personal Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="grid sm:grid-cols-2 gap-4 mt-8"
            >
              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Ubicación</p>
                  <p className="font-medium">{personalInfo.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">{personalInfo.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Educación</p>
                  <p className="font-medium">Ingeniería Informática</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Disponibilidad</p>
                  <p className="font-medium">Abierto a ofertas</p>
                </div>
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-8"
            >
              <h4 className="font-semibold mb-3">Idiomas</h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-lg">🇨🇴</span>
                  <span className="text-sm font-medium">Español (Nativo)</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <span className="text-lg">🇺🇸</span>
                  <span className="text-sm font-medium">Inglés (A2)</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
