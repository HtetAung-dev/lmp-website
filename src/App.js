import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Newsletter from './Components/Newsletter';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <div className='w-100 navcontainer'>
        <div className='navbg'></div>
        <Navbar />
        <Hero />
      </div>
      <About className="" />
      <Service />
      
      <Newsletter/>
      <Footer />
    </div>
  );
}

export default App;
