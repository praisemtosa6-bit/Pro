"use client"

import { useEffect, useRef, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What services does Pro Media House offer?",
    answer:
      "We offer comprehensive media production services including video and animation production, digital marketing, website design and development, and IT consulting. Whether you need a complete campaign or specialized services, our team can customize solutions for your business.",
  },
  {
    question: "How long does a typical video production project take?",
    answer:
      "Project timelines vary based on complexity. Simple videos (30-60 seconds) typically take 2-4 weeks from concept to delivery. Complex projects with animation and special effects may take 6-12 weeks. We'll provide a detailed timeline after discussing your specific requirements.",
  },
  {
    question: "Do you work with small businesses or only large companies?",
    answer:
      "We work with organizations of all sizes. From startups to established corporations, our team tailors solutions to fit your budget and needs. We're committed to delivering excellence regardless of project scale.",
  },
  {
    question: "What is your digital marketing approach?",
    answer:
      "Our data-driven approach combines content marketing, social media strategy, PPC advertising, and influencer partnerships to maximize your online presence. We focus on measurable results and continuous optimization to ensure your marketing investment delivers ROI.",
  },
  {
    question: "Can you design and develop a custom website for us?",
    answer:
      "We create interactive, SEO-optimized websites tailored to your brand identity. From design through development, hosting, and technical support, we handle every aspect to ensure your website drives business results.",
  },
  {
    question: "What IT services are included in your consulting?",
    answer:
      "Our IT consulting includes IT audits, infrastructure management, security implementation, software development, ERP services, and data management. We assess your needs and provide customized solutions to improve efficiency and security.",
  },
  {
    question: "How do I get started with Pro Media House?",
    answer:
      "Contact us at into@promediahouse-mw.com or call +265 888 282 510. We'll discuss your project goals, understand your requirements, and provide a customized proposal. We're based in Blantyre, Malawi, but work with clients worldwide.",
  },
]

export function FaqSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Subtle horizontal blur ray */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[100px] rounded-full opacity-[0.08] blur-[80px] pointer-events-none bg-primary" />

      <div className="w-full flex justify-center px-4 md:px-6">
        <div className="max-w-3xl w-full">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance ${
                isVisible ? "animate-slide-up-section" : "opacity-0"
              }`}
            >
              Frequently asked questions
            </h2>
            <p
              className={`text-muted-foreground text-lg max-w-2xl mx-auto ${
                isVisible ? "animate-slide-up-section-delayed" : "opacity-0"
              }`}
            >
              Everything you need to know about Pro Media House and our services.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div
            className={`${isVisible ? "animate-slide-up-section-delayed" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-white/10 group">
                  <AccordionTrigger className="text-left text-base md:text-lg font-medium text-foreground hover:text-primary hover:no-underline py-5 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
