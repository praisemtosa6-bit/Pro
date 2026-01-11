"use client"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Award, Users, Lightbulb, Heart } from "lucide-react"

export function AboutSection() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [valuesVisible, setValuesVisible] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const valuesRef = useRef<HTMLDivElement>(null)

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
    const valuesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true)
          valuesObserver.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (valuesRef.current) valuesObserver.observe(valuesRef.current)

    return () => valuesObserver.disconnect()
  }, [])

  const values = [
    {
      icon: <Award className="size-8 text-primary" />,
      title: "Excellence",
      description:
        "We are committed to continuously improve, innovate, and deliver exceptional results in everything we do.",
    },
    {
      icon: <Users className="size-8 text-primary" />,
      title: "Collaboration",
      description:
        "We believe in the power of teamwork, sharing ideas and viewpoints to arrive at the best solutions together.",
    },
    {
      icon: <Lightbulb className="size-8 text-primary" />,
      title: "Passion",
      description:
        "Our passion shows through our actions. We go the extra distance to serve our clients and employees.",
    },
    {
      icon: <Heart className="size-8 text-primary" />,
      title: "Commitment",
      description:
        "We are loyal to our business relationships with deep commitment and genuine care for our clients' success.",
    },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="w-full flex justify-center px-4 md:px-6">
        <div className="flex max-w-5xl flex-col items-center gap-12">
          {/* Header section */}
          <div ref={headerRef} className="text-center max-w-3xl">
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance opacity-0",
                headerVisible && "animate-slide-up-section",
              )}
            >
              About Pro Media House
            </h2>
            <p
              className={cn(
                "mt-4 text-base md:text-lg text-muted-foreground text-balance opacity-0",
                headerVisible && "animate-slide-up-section-delayed",
              )}
            >
              Pro Media House is a full-service marketing agency dedicated to helping brands reach their full potential through creative strategies and data-driven solutions.
            </p>
          </div>

          {/* Mission and Vision */}
          <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-8">
            <Card
              className={cn(
                "rounded-2xl border border-border bg-card/50 backdrop-blur opacity-0",
                headerVisible && "animate-slide-in-left-1",
              )}
            >
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground mb-2">Mission</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the best in the local and international market. We work daily to be the company that best
                  understands and satisfies the product, service, and self-fulfillment needs of our clients and to
                  deliver the best marketing services and solutions.
                </p>
              </CardContent>
            </Card>

            <Card
              className={cn(
                "rounded-2xl border border-border bg-card/50 backdrop-blur opacity-0",
                headerVisible && "animate-slide-in-right-1",
              )}
            >
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground mb-2">Vision</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Our goal is your project's success. Each step we take is well thought out to provide the best
                  innovative solutions. We help our clients find their audience, engage with their customers, and build
                  their brand through the power of storytelling.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Core Values */}
          <div ref={valuesRef} className="w-full">
            <h3
              className={cn(
                "text-2xl md:text-3xl font-bold text-center text-foreground mb-8 opacity-0",
                valuesVisible && "animate-slide-up-section",
              )}
            >
              Core Values
            </h3>
            <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className={cn(
                    "rounded-2xl border border-border bg-card/50 backdrop-blur opacity-0",
                    valuesVisible && `animate-slide-in-left-${(index % 3) + 1}`,
                  )}
                >
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      {value.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">{value.title}</h4>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
