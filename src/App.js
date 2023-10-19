import Header from './components/header';
import Hero from './components/hero';
import About from './components/about'
import Team from './components/Team';
import Lectures from './components/Lectures';
import APOGEE from './components/Apogee';
import Pannel from './components/Pannel';
import Contact from './components/contact';
import './App.css';
function App() {
  return (
    <div className='resume'>
      <Header />
      <Hero />
      <About />
      <Lectures />
      <Pannel />
      <APOGEE />
      <Team />
      <Contact/>
      
    </div>
  );
}

export default App;
