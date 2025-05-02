import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Consultoria from '../components/Consultoria';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';



export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ImageCarousel />
      <Hero />
      <Consultoria />
      <Testimonials />
      <Footer />     
    </main>
  );
}