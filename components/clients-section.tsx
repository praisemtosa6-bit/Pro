"use client"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export function ClientsSection() {
  const [headerVisible, setHeaderVisible] = useState(false)
  const [logosVisible, setLogosVisible] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)
  const logosRef = useRef<HTMLDivElement>(null)

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
    const logosObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLogosVisible(true)
          logosObserver.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    if (logosRef.current) logosObserver.observe(logosRef.current)
    return () => logosObserver.disconnect()
  }, [])

  const clients = [
    "Chikwawa District Council",
    "USAID",
    "WOLREC",
    "FISD Limited",
    "Airtel",
    "Clean Masters",
    "Chachi Foods",
    "Aldor Management",
    "Skippers Solutions",
    "Youth Inspiration Movement",
  ]

  return (
    <section id="clients" className="py-20 md:py-32 bg-background">
      <div className="w-full flex justify-center px-4 md:px-6">
        <div className="flex max-w-5xl flex-col items-center gap-12 w-full">
          <div ref={headerRef} className="text-center">
            <h2
              className={cn(
                "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground opacity-0",
                headerVisible && "animate-slide-up-section",
              )}
            >
              Our Clients
            </h2>
            <p
              className={cn(
                "mt-4 text-base md:text-lg text-muted-foreground opacity-0",
                headerVisible && "animate-slide-up-section-delayed",
              )}
            >
              Trusted by leading organizations across sectors
            </p>
          </div>

          <div
            ref={logosRef}
            className={cn(
              "grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 opacity-0",
              logosVisible && "animate-fade-in-delayed",
            )}
          >
            {clients.map((client, index) => (
              <Card
                key={index}
                className="rounded-xl border border-border bg-card/30 backdrop-blur p-6 flex items-center justify-center min-h-24 hover:bg-card/50 transition-all duration-300"
              >
                <div className="text-center">
                  <p className="text-sm md:text-base font-medium text-foreground text-balance">{client}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
