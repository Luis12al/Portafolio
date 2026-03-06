import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench, Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { skillCategories } from '@/data/portfolio-data';
import { Badge } from '@/components/ui/badge';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layout,
  Server,
  Database,
  Wrench,
};

const levelConfig = {
  beginner: { label: 'Básico', color: 'bg-blue-500', stars: 1 },
  intermediate: { label: 'Intermedio', color: 'bg-yellow-500', stars: 2 },
  advanced: { label: 'Avanzado', color: 'bg-orange-500', stars: 3 },
  expert: { label: 'Experto', color: 'bg-green-500', stars: 4 },
};

export function Skills() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
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
            Habilidades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Tecnologías que domino
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stack tecnológico completo para desarrollo Full Stack, desde el frontend 
            hasta la administración de bases de datos.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="group"
              >
                <div className="h-full bg-background border border-border rounded-2xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.skills.length} tecnologías
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => {
                      const level = skill.level ? levelConfig[skill.level] : null;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.4, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <span className="font-medium">{skill.name}</span>
                          
                          {level && (
                            <div className="flex items-center gap-2">
                              <div className="flex gap-0.5">
                                {[...Array(4)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-3 w-3 ${
                                      i < level.stars
                                        ? 'text-yellow-500 fill-yellow-500'
                                        : 'text-muted-foreground/30'
                                    }`}
                                  />
                                ))}
                              </div>
                              <Badge 
                                variant="secondary" 
                                className={`text-xs ${level.color.replace('bg-', 'bg-opacity-20 text-')}`}
                              >
                                {level.label}
                              </Badge>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <h3 className="text-lg font-semibold mb-4">Otras habilidades y conocimientos</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              'Git & GitHub',
              'REST API Design',
              'JWT Authentication',
              'Role-based Access',
              'Database Modeling',
              'Agile/Scrum',
              'Clean Code',
              'Responsive Design',
              'SEO Basics',
              'Performance Optimization',
            ].map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="px-3 py-1.5 text-sm hover:bg-primary/10 hover:border-primary/50 transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
