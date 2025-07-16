// import logo from './logo.svg';/
import './App.css';
import About from './Components/About-section/About';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero-section/Hero';
import Navbar from './Components/Navbar/Navbar';
import Videos from './Components/Work-section/Videos';
import Work from './Components/Work-section/Work';

function App() {
  return (
  <>
  <Navbar/>
  <Hero/>
  <About/>
  <Work/>
  <Videos/>
  <Contact/>
  </>
  );
}

export default App;
