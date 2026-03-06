import { ThemeProvider } from '@/context/ThemeContext';
import { Navbar, Footer } from '@/components/layout';
import { Hero, About, Skills, Projects, Experience, Contact } from '@/sections';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground antialiased">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notifications */}
        <Toaster position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}

export default App;
