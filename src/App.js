import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Service from './Components/Service';
import Newsletter from './Components/Newsletter';
import About from './Components/About';
import Footer from './Components/Footer';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <title>LMP Co.,Ltd</title>
        <meta name="description" content="Welcome to Luu Min Phyo Co.,Ltd" />
        <link rel="canonical" href='/' />
      </HelmetProvider>
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
