"use client"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Film, PenTool, Globe, Server, BarChart3, Lock, Camera, Check, ArrowRight } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

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
      icon: <Film className="size-6 text-primary" />,
      title: "Video & Animation Production",
      shortDescription: "From concept development to post-production. Scripting, brainstorming, live shots, montage, 2D/3D animation, and more.",
      longDescription: "From concept development to post production, our team of skilled professionals brings ideas to life through visually stunning and thought-provoking videos. Whether its commercials, documentaries or corporate videos, we deliver exceptional results tailored to meet our clients' needs.",
      features: [
        "Scripting", "Ideas brainstorming", "Live shots", "Montage",
        "2D Animation", "3D Animation", "30 Seconds Videos", "60 Seconds Videos"
      ],
      benefitsHeadline: "Why enhance your efforts with Video & Animation?",
      benefits: [
        { title: "Rich Message", desc: "Wrap your story within a simple yet eye catching video" },
        { title: "Attracts Attention", desc: "Effectively connect with your audience visually" },
        { title: "Time-effective", desc: "Tell your story within 1 minute or less" },
        { title: "On-The-Go", desc: "Reach your audience wherever, whenever on their mobile phones" }
      ]
    },
    {
      icon: <Camera className="size-6 text-primary" />,
      title: "Photography",
      shortDescription: "Product, event, and corporate photography sessions. Capturing the essence of the subject with an artistic approach.",
      longDescription: "We offer a range of photography services, taking photos that are worth a thousand words. Our photographers catch important details with an artistic approach, ensuring each image captures the essence of the subject and tells a compelling story.",
      features: [
        "Product photography", "Meetings and Events", "Corporate Photography",
        "Jewelry Photography", "Portrait Photography", "Models Photo Sessions",
        "Real Estate Photography", "Fashion Photography"
      ],
      benefitsHeadline: "Why is Photography Essential?",
      benefits: [
        { title: "Visually Thrilling", desc: "Beautiful pictures to connect with your audience" },
        { title: "Cross Platform", desc: "Flexible content used across any type of marketing" },
        { title: "Professional Looks", desc: "Boosts your business authority" },
        { title: "Share a story", desc: "Convey a message with visually beautiful pictures" }
      ]
    },
    {
      icon: <PenTool className="size-6 text-primary" />,
      title: "Branding",
      shortDescription: "Brand naming, logo design, strategies, and slogans to identify and empower your business identity.",
      longDescription: "A brand name and a logo is what any company revolves on. Identify and empower your business, marketing and advertising with an innovative brand identity.",
      features: [
        "Brand Naming", "Logo design", "Branding strategies",
        "Graphical Innovation", "Business cards", "Innovative Slogans"
      ],
      benefitsHeadline: "Why associate your business with a brand?",
      benefits: [
        { title: "Legal and Copyrights", desc: "Protect your innovations with an associated brand" },
        { title: "Business Authority", desc: "Build loyalty towards a brand with good services" },
        { title: "Message Association", desc: "Send a message with your brand logo" },
        { title: "Innovative Identity", desc: "Easily remembered with an innovative logo" }
      ]
    },
    {
      icon: <BarChart3 className="size-6 text-primary" />,
      title: "Digital Marketing",
      shortDescription: "Customized marketing strategies, social media, PPC, and content marketing to increase online presence.",
      longDescription: "Leveraging the power of digital channels, we develop customized marketing strategies to help businesses increase their online presence, drive traffic and generate leads. Our data-driven approach ensures optimal results.",
      features: [
        "Content marketing", "Social media marketing", "Pay per click (PPC)",
        "Affiliate marketing", "Influencer marketing", "Email marketing", "Mobile marketing"
      ],
      benefitsHeadline: "Why choose Digital Marketing?",
      benefits: [
        { title: "Geographic Reach", desc: "Post an ad online, people see it no matter where they are." },
        { title: "Cost Efficiency", desc: "Reaches broader audience with much lower costs" },
        { title: "More Connection", desc: "Communicate with your customers in real-time" },
        { title: "Quantifiable Results", desc: "Results monitoring is simple and precise" }
      ]
    },
    {
      icon: <Globe className="size-6 text-primary" />,
      title: "Website Design & Development",
      shortDescription: "Highly interactive and innovative websites built for the best user experience and brand identity.",
      longDescription: "Empower your brand and enrich your users experience with a highly interactive and innovative website built to offer the best user experience.",
      features: [
        "Website Design", "Website Development", "Domain Registration",
        "Content Creation", "SEO Optimized", "Advanced Hosting", "Technical Support"
      ],
      benefitsHeadline: "Why a unique Website Design?",
      benefits: [
        { title: "Brand Identity", desc: "Build your website around your brand identity" },
        { title: "Highly Interactive", desc: "Deliver interactive messages to your customers" },
        { title: "Centralized Efforts", desc: "Streamline marketing efforts for high conversion" },
        { title: "Customizable", desc: "Personalize to your own business goals" }
      ]
    },
    {
      icon: <Server className="size-6 text-primary" />,
      title: "IT Consulting & Services",
      shortDescription: "Assessing business models and technology solutions. IT audits, strategy, security, and support.",
      longDescription: "From assessing your business model, ascertain the technology solutions required to meet your business needs to the implementation of the recommendations. We deliver exceptional results tailored to meet our client's needs.",
      features: [
        "IT Audits & Strategy", "Hardware Procurement", "Technical Support",
        "IT Security", "Process Design", "Infrastructure Management",
        "Project Consulting", "Software Development"
      ],
      benefitsHeadline: "Why IT Consulting & Services?",
      benefits: [
        { title: "Enhanced Efficiency", desc: "Streamline operations and reduce downtime" },
        { title: "Technology Road Map", desc: "Identify cutting-edge tech for your organization" },
        { title: "Enhanced Security", desc: "Implementing strategies to protect your infrastructure" }
      ]
    }
  ]

  return (
    <section id="services" className={cn("py-20 md:py-32 bg-[#050810]", className)}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-start gap-16">
          <div ref={headerRef} className="max-w-2xl text-left">
            <h2
              className={cn(
                "text-3xl md:text-5xl font-bold tracking-tight text-white opacity-0",
                headerVisible && "animate-slide-up-section",
              )}
            >
              Our Services
            </h2>
            <p
              className={cn(
                "mt-6 text-lg md:text-xl text-muted-foreground opacity-0 leading-relaxed",
                headerVisible && "animate-slide-up-section-delayed",
              )}
            >
              Comprehensive digital solutions to bring your vision to life and grow your business.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card
                    ref={(el) => {
                      cardRefs.current[index] = el
                    }}
                    className={cn(
                      "group relative flex flex-col items-start text-left p-6 md:p-8 rounded-2xl border border-white/5 bg-[#0a0f1d] hover:bg-[#0f172a] transition-all duration-300 cursor-pointer hover:border-primary/30 opacity-0 min-h-[280px] md:min-h-[320px]",
                      cardsVisible[index] && `animate-slide-in-right-mobile-${(index % 6) + 1}`,
                    )}
                  >
                    <div className="mb-6 md:mb-8 flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors border border-primary/10">
                      {service.icon}
                    </div>
                    <CardHeader className="p-0 mb-3 md:mb-4">
                      <h3 className="text-lg md:text-2xl font-bold text-white group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {service.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="w-[95vw] sm:max-w-4xl p-0 border-white/5 bg-[#0a0f1d] overflow-hidden">
                  <div className="grid md:grid-cols-[1.2fr_1fr] h-full max-h-[85vh] md:max-h-[90vh] overflow-y-auto">
                    <div className="p-6 md:p-12">
                      <div className="flex items-center gap-4 mb-6 md:mb-8">
                        <div className="flex items-center justify-center h-10 w-10 md:h-12 md:w-12 rounded-xl bg-primary/10 text-primary border border-primary/20">
                          {service.icon}
                        </div>
                        <DialogTitle className="text-xl md:text-3xl font-bold text-white">
                          {service.title}
                        </DialogTitle>
                      </div>

                      <div className="space-y-6 md:space-y-8">
                        <div>
                          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {service.longDescription}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 md:mb-6 flex items-center gap-2">
                            What We Do
                          </h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-white/80">
                                <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                                <span className="text-xs md:text-sm font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#0f172a] p-6 md:p-12 flex flex-col justify-center border-t md:border-t-0 md:border-l border-white/5">
                      <h4 className="text-lg md:text-xl font-bold text-white mb-6 md:mb-8 leading-tight">
                        {service.benefitsHeadline}
                      </h4>
                      <div className="space-y-5 md:space-y-6">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="relative pl-5 border-l-2 border-primary/20">
                            <h5 className="text-xs font-bold text-white mb-1 uppercase tracking-wider">{benefit.title}</h5>
                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">{benefit.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-white/5">
                        <p className="text-xs md:text-sm text-muted-foreground mb-4">Ready to get started?</p>
                        <button className="flex items-center gap-2 text-primary text-sm md:text-base font-bold hover:gap-3 transition-all">
                          Book a Consultation <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
