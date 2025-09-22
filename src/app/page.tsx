import CTASection from '@/components/layout/CTASection';
import FAQSection from '@/components/layout/FAQSection';
import FeaturesSection from '@/components/layout/FeaturesSection';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/layout/HeroSection';
import Navbar from '@/components/layout/Navbar';
import PricingSection from '@/components/layout/PricingSection';
import ProcessSection from '@/components/layout/ProcessSection';
import TestimonialsSection from '@/components/layout/TestimonialSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <ProcessSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <Footer />
    </div>
  );
}
