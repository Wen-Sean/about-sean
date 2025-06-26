import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Contact from './components/Contact';
import Experience from './components/Experience';
import '@fontsource/great-vibes';
import 'typeface-anton';

function App() {
  return (
    <>
      <NavBar />
      <About />
      <Experience />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default App;
