"use client"

import { useEffect, useRef, useState } from "react"

const testimonialsData = [
  {
    body: "Pro Media House transformed our brand vision into reality. Their creativity and professionalism are unmatched.",
    author: {
      name: "David Chimpeni",
      handle: "davidc",
      role: "Director, Chikwawa District Council",
      imageUrl: "/testimonials/david-chimpeni.png",
    },
  },
  {
    body: "The video production quality was exceptional. They understood our message and delivered beyond expectations.",
    author: {
      name: "Jessica Banda",
      handle: "jessicab",
      role: "Marketing Manager, USAID",
      imageUrl: "/testimonials/jessica-banda.png",
    },
  },
  {
    body: "Their digital marketing strategy increased our engagement by 300%. Highly professional team.",
    author: {
      name: "Robert Chipeta",
      handle: "robertc",
      role: "CEO, WOLREC",
      imageUrl: "/testimonials/robert-chipeta.png",
    },
  },
  {
    body: "The website Pro Media built for us is beautiful, fast, and has improved our conversions significantly.",
    author: {
      name: "Angela Mazumbo",
      handle: "angelam",
      role: "Operations Manager, FISD Limited",
      imageUrl: "/testimonials/angela-mazumbo.png",
    },
  },
  {
    body: "From concept to delivery, Pro Media House exceeded every expectation. True partners in our success.",
    author: {
      name: "Samuel Dlamini",
      handle: "samuelsd",
      role: "Brand Director, Airtel",
      imageUrl: "/testimonials/samuel-dlamini.png",
    },
  },
  {
    body: "Outstanding IT consulting services. They helped us streamline operations and improve efficiency dramatically.",
    author: {
      name: "Martha Nkhoma",
      handle: "marthan",
      role: "CTO, Clean Masters",
      imageUrl: "/testimonials/martha-nkhoma.png",
    },
  },
  {
    body: "Pro Media's animation work brought our product to life in ways we couldn't imagine. Amazing execution.",
    author: {
      name: "Thomas Mbewe",
      handle: "thomasm",
      role: "Product Manager, Chachi Foods",
      imageUrl: "/testimonials/thomas-mbewe.jpg",
    },
  },
  {
    body: "The team's collaboration and communication throughout the project was exceptional. Highly recommended.",
    author: {
      name: "Grace Moyo",
      handle: "gracemo",
      role: "Marketing Lead, Aldor Management",
      imageUrl: "/testimonials/grace-moyo.png",
    },
  },
  {
    body: "Pro Media House is a game-changer. Their passion for excellence shows in every project they deliver.",
    author: {
      name: "Charles Phiri",
      handle: "charlesp",
      role: "Director, Skippers Solutions",
      imageUrl: "/testimonials/charles-phiri.png",
    },
  },
]

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonialsData)[0] }) {
  return (
    <figure className="rounded-xl bg-surface-testimonial border border-primary/10 p-6 mb-4">
      <blockquote className="text-muted-foreground text-sm leading-relaxed">
        <p>{`"${testimonial.body}"`}</p>
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-x-3">
        <img
          alt=""
          src={testimonial.author.imageUrl || "/placeholder.svg"}
          width={40}
          height={40}
          loading="lazy"
          className="size-10 rounded-full bg-muted"
        />
        <div>
          <div className="font-medium text-foreground text-sm">{testimonial.author.name}</div>
          <div className="text-muted-foreground text-xs">@{testimonial.author.handle}</div>
        </div>
      </figcaption>
    </figure>
  )
}

function ScrollingColumn({
  testimonials,
  direction = "up",
  duration = 25,
}: {
  testimonials: (typeof testimonialsData)[0][]
  direction?: "up" | "down"
  duration?: number
}) {
  return (
    <div className="relative h-[600px] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-surface-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface-dark to-transparent z-10 pointer-events-none" />

      <div
        className={`flex flex-col ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, idx) => (
          <TestimonialCard key={`${testimonial.author.handle}-${idx}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const col1 = testimonialsData.slice(0, 3)
  const col2 = testimonialsData.slice(3, 6)
  const col3 = testimonialsData.slice(6, 9)
  const allTestimonials = testimonialsData

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden bg-surface-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[200px] rounded-full pointer-events-none bg-primary/[0.08] blur-[120px]" />

      <div className="w-full flex justify-center px-4">
        <div className="max-w-5xl w-full">
          <div className={`text-center mb-16 ${isVisible ? "animate-slide-up-section" : "opacity-0"}`}>
            <p className="text-primary text-sm font-medium mb-3">Client Success Stories</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
              Trusted by leading organizations
            </h2>
            <p
              className={`text-muted-foreground max-w-2xl mx-auto ${isVisible ? "animate-slide-up-section-delayed" : "opacity-0"}`}
            >
              Discover how Pro Media House is helping brands tell compelling stories and achieve their goals.
            </p>
          </div>

          <div className={`md:hidden ${isVisible ? "animate-fade-in-delayed" : "opacity-0"}`}>
            <ScrollingColumn testimonials={allTestimonials} direction="up" duration={45} />
          </div>

          <div className={`hidden md:grid md:grid-cols-3 gap-4 ${isVisible ? "animate-fade-in-delayed" : "opacity-0"}`}>
            <ScrollingColumn testimonials={col1} direction="up" duration={30} />
            <ScrollingColumn testimonials={col2} direction="down" duration={35} />
            <ScrollingColumn testimonials={col3} direction="up" duration={32} />
          </div>
        </div>
      </div>
    </section>
  )
}
