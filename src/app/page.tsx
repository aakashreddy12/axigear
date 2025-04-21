import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
