// import logo from './logo.svg';/
import './App.css';
import About from './Components/About-section/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero-section/Hero';
import Navbar from './Components/Navbar/Navbar';
import Work from './Components/Work-section/Work';

function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Work/>
  <Contact/>
  </>
  );
}

export default App;
