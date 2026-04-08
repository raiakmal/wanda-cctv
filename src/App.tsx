import Navbar from './components/Navbar/Navbar';
import './App.css';
import HeroCarousel from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Catalog from './components/Catalog/Catalog';
import Mitra from './components/Mitra';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Contact />
      <Footer />
    </>
  );
}

export default App;
