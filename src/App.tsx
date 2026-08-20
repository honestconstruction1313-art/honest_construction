import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustBanner from '@/components/TrustBanner';
import Services from '@/components/Services';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustBanner />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
