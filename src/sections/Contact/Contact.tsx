import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone, Github, Linkedin, CheckCircle, Loader2 } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { personalInfo, socialLinks } from '@/data/portfolio-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import type { ContactFormData } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  Linkedin,
  Mail,
};

export function Contact() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Contacto
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            ¡Hablemos!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? Estoy abierto a nuevas 
            oportunidades y siempre dispuesto a conversar sobre tecnología.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
              <p className="text-muted-foreground mb-6">
                No dudes en contactarme por cualquiera de estos medios. 
                Responderé lo antes posible.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="group hover:border-primary/50 transition-colors">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-colors">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="group hover:border-primary/50 transition-colors">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium">{personalInfo.location}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Sígueme en</h4>
              <div className="flex gap-3">
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
                        {Icon && <Icon className="h-5 w-5" />}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping" />
              </div>
              <div>
                <p className="font-medium text-green-600">Disponible para trabajar</p>
                <p className="text-sm text-green-600/70">Abierto a nuevas oportunidades</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="border-border/50">
              <CardContent className="p-6 sm:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">¡Mensaje enviado!</h3>
                    <p className="text-muted-foreground">
                      Gracias por contactarme. Te responderé lo antes posible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Tu nombre"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="¿Sobre qué quieres hablar?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Escribe tu mensaje aquí..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      Al enviar este formulario, aceptas que tus datos sean procesados 
                      para responder a tu consulta.
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
