import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Newsletter from './Components/Newsletter';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <div className='w-100 navcontainer'>
        <div className='navbg'></div>
        <Navbar />
        <Hero />
      </div>
      <Service />
      <About className="" />
      <Newsletter className="footerImg" />
    </div>
  );
}

export default App;
