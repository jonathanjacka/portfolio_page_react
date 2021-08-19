import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';

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
    </>
  );
}

export default App;
