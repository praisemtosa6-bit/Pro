"use client"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Film, PenTool, Globe, Server, BarChart3, Lock } from "lucide-react"

interface ServicesSectionProps {
  className?: string
}

export function ServicesSection({ className }: ServicesSectionProps) {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState<boolean[]>([false, false, false, false, false, false])

  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          headerObserver.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (headerRef.current) headerObserver.observe(headerRef.current)

    return () => headerObserver.disconnect()
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setCardsVisible((prev) => {
                const newState = [...prev]
                newState[index] = true
                return newState
              })
              observer.disconnect()
            }
          },
          { threshold: 0.2 },
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => observers.forEach((obs) => obs.disconnect())
  }, [])

  const services = [
    {
      icon: <BarChart3 className="size-8 text-primary" />,
      title: "Digital Marketing",
      description:
        "Customized marketing strategies. Content marketing, social media, PPC, affiliate marketing, influencer partnerships, email marketing.",
    },
    {
      icon: <Server className="size-8 text-primary" />,
      title: "IT Consulting & Services",
      description:
        "Full IT support from strategy to implementation. IT audits, infrastructure management, security, software development, and ERP services.",
    },
    {
      icon: <Globe className="size-8 text-primary" />,
      title: "Website Design & Development",
      description:
        "Interactive websites with excellent UX. Design, development, domain registration, SEO optimization, and advanced hosting.",
    },
    {
      icon: <Film className="size-8 text-primary" />,
      title: "Video & Animation Production",
      description:
        "From concept development to post-production. Scripting, brainstorming, live shots, montage, 2D/3D animation, and more.",
    },
    {
      icon: <Lock className="size-8 text-primary" />,
      title: "Enhanced Security",
      description:
        "Protect your digital assets. IT security implementation, data management, compliance, and business continuity planning.",
    },
    {
      icon: <PenTool className="size-8 text-primary" />,
      title: "Creative Solutions",
      description:
        "Custom solutions tailored to your business goals. From branding to content creation, we deliver innovative results.",
    },
  ]

  return (
    <section id="services" className={cn("py-20 md:py-32 bg-background", className)}>
      <div className="w-full flex justify-center px-4 md:px-6">
        <div className="flex max-w-5xl flex-col items-center gap-12">
          <div ref={headerRef} className="text-center max-w-2xl">
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance opacity-0",
                headerVisible && "animate-slide-up-section",
              )}
            >
              Our Services
            </h2>
            <p
              className={cn(
                "mt-4 text-base md:text-lg text-muted-foreground text-balance opacity-0",
                headerVisible && "animate-slide-up-section-delayed",
              )}
            >
              Comprehensive media production and digital solutions to bring your vision to life and grow your business.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                className={cn(
                  "relative rounded-2xl border border-border bg-card/50 backdrop-blur hover:bg-card/80 transition-all duration-300",
                  cardsVisible[index] && `animate-slide-in-right-mobile-${(index % 6) + 1}`,
                )}
              >
                <CardHeader>
                  <div className="mb-4 flex items-center justify-center h-16 w-16 rounded-xl bg-primary/10">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
