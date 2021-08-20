import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
