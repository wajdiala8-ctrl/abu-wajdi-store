import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Features from './components/Features';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Header />
      <main>
        <Hero />
        <Categories />
        <Products />
        <Features />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;