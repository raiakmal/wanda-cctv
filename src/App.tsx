import Navbar from './components/Navbar/Navbar';
import './App.css';
import HeroCarousel from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Catalog from './components/Catalog/Catalog';
import Mitra from './components/Mitra';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <Features />
      <Services />
      <Catalog />
      <Mitra />
      <Gallery />
      <h1 className="text-3xl font-bold">Font Poppins aktif 🚀</h1>
    </>
  );
}

export default App;
