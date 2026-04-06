import Navbar from './components/Navbar/Navbar';
import './App.css';
import HeroCarousel from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';

function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Features />
      <Services />
      <h1 className="text-3xl font-bold">Font Poppins aktif 🚀</h1>
    </>
  );
}

export default App;
