import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans selection:bg-zinc-200 selection:text-zinc-900 bg-black min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <div className="bg-zinc-50 text-zinc-900 rounded-t-[3rem] -mt-8 relative z-20 overflow-hidden">
           <About />
           <Projects />
           <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
