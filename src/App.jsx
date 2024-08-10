import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import DeliverySection from './components/DeliverySection/DeliverySection';
import CatalogSection from './components/CatalogSection/CatalogSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <DeliverySection />
      <CatalogSection />
      <Footer />
    </>
  );
}

export default App;
