import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, Filter } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { projects } from '@/data/portfolio-data';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import type { Project } from '@/types';

const categories = ['Todos', 'Full Stack', 'Frontend', 'Backend'];

export function Projects() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'Todos'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Proyectos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            Mi trabajo destacado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia 
            en desarrollo Full Stack.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <h3 className="text-xl font-semibold">Proyectos Destacados</h3>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🚀</div>
                      <p className="text-muted-foreground text-sm">{project.title}</p>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      {project.demoUrl && (
                        <Button size="sm" asChild className="flex-1">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Ver Demo
                          </a>
                        </Button>
                      )}
                      {project.codeUrl && (
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Código
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          <div className="flex items-center gap-2 mr-4 text-muted-foreground">
            <Filter className="h-4 w-4" />
            <span className="text-sm">Filtrar:</span>
          </div>
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group bg-background border border-border rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-4xl mb-1">
                      <img src="/React.png" alt="Descripción" className="w-50 h-50 object-cover rounded-full mx-auto"/>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                    {project.featured && (
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <DialogDescription>
                    <Badge variant="secondary" className="mt-2">
                      {selectedProject.category}
                    </Badge>
                  </DialogDescription>
                </DialogHeader>

                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center my-4">
                  <div className="text-center">
                    <div className="text-6xl mb-2">🎯</div>
                    <p className="text-muted-foreground">{selectedProject.title}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Descripción</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {selectedProject.longDescription || selectedProject.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-2">Tecnologías utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    {selectedProject.demoUrl && (
                      <Button asChild className="flex-1">
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver Demo
                        </a>
                      </Button>
                    )}
                    {selectedProject.codeUrl && (
                      <Button variant="outline" asChild className="flex-1">
                        <a
                          href={selectedProject.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Ver Código
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
