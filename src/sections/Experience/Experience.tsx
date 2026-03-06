import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { experiences, educations } from '@/data/portfolio-data';
import { Badge } from '@/components/ui/badge';

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
}

export function Experience() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Experiencia y Educación
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mi recorrido profesional y académico en el mundo del desarrollo de software.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Experience Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Experiencia Laboral</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                    {/* Content Card */}
                    <div className="bg-background border border-border rounded-xl p-5 hover:border-primary/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(exp.startDate)} - {exp.current ? 'Actual' : formatDate(exp.endDate)}
                        </Badge>
                        {exp.location && (
                          <Badge variant="outline" className="text-xs">
                            <MapPin className="h-3 w-3 mr-1" />
                            {exp.location}
                          </Badge>
                        )}
                      </div>

                      <h4 className="text-lg font-semibold mb-1">{exp.title}</h4>
                      <p className="text-primary text-sm mb-3">{exp.company}</p>

                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-bold">Educación</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

              {/* Education Items */}
              <div className="space-y-8">
                {educations.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="relative pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-secondary border-4 border-background" />

                    {/* Content Card */}
                    <div className="bg-background border border-border rounded-xl p-5 hover:border-secondary/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          <Calendar className="h-3 w-3 mr-1" />
                          {edu.startDate} - {edu.current ? 'Actual' : edu.endDate}
                        </Badge>
                        {edu.current && (
                          <Badge className="text-xs bg-green-500/10 text-green-600 border-green-500/20">
                            En curso
                          </Badge>
                        )}
                      </div>

                      <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-primary text-sm mb-2 flex items-center gap-1">
                        <GraduationCap className="h-4 w-4" />
                        {edu.institution}
                      </p>

                      {edu.location && (
                        <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {edu.location}
                        </p>
                      )}

                      {edu.description && (
                        <p className="text-sm text-muted-foreground">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications / Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 pl-16"
            >
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 border border-border rounded-xl p-5">
                <h4 className="font-semibold mb-3">Formación continua</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cursos online en plataformas como freeCodeCamp, Udemy</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Documentación oficial de tecnologías modernas</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Proyectos personales para práctica continua</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Comunidades de desarrolladores y foros técnicos</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
