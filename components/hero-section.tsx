import { Button } from "@/components/ui/button"
import { Meteors } from "@/components/ui/meteors"
import { GridBackground } from "./grid-background"
import { LogoMarquee } from "./logo-marquee"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-background overflow-hidden">
      {/* Background effects */}
      <GridBackground />
      <Meteors number={10} />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pt-24 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
            <span className="block text-foreground animate-slide-in-right">Empowering</span>
            <span className="block text-accent animate-slide-up-delayed">Stories,</span>
            <span className="block text-foreground animate-slide-up-delayed">Engaging Audiences</span>
          </h1>

          <p className="hidden sm:block mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty animate-slide-up-delayed-2">
            Your partner in comprehensive media production, digital marketing, and professional technology solutions,
            dedicated to elevating your brand's presence and impact globally.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delayed-3">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Get in Touch
            </Button>
            <Link
              href="#services"
              className="inline-flex items-center justify-center h-10 rounded-md px-8 text-sm font-medium border border-border/50 bg-transparent text-foreground hover:bg-foreground/5 transition-all"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Trusted by section */}
      <div className="relative z-10 pb-12 animate-fade-in-delayed">
        <LogoMarquee />
      </div>
    </section>
  )
}
