import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer style={{ textAlign: 'center', padding: '20px', background: '#000', color: 'var(--text-secondary)' }}>
        <p>&copy; {new Date().getFullYear()} Satheeshvaran L. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
