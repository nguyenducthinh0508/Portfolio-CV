import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans selection:bg-zinc-200 selection:text-zinc-900">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
