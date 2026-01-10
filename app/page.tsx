import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { AboutSection } from "@/components/about-section"
import { ClientsSection } from "@/components/clients-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="main-content">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ClientsSection />
      <TestimonialsSection />
      <FaqSection />
      <Footer />
    </main>
  )
}
