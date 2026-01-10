"use client"

import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"



export function LogoMarquee() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Determine filter based on theme - invert for dark mode to make logos white
  const logoFilter =
    mounted && resolvedTheme === "dark" ? "grayscale(100%) brightness(0) invert(1)" : "grayscale(100%) brightness(0)"

  const logos = [
    { name: "265 Energy", src: "/265.png" },
    { name: "9Volts", src: "/9Volts.png" },
    { name: "Airtel", src: "/Airtel.png" },
    { name: "Chachi", src: "/Chachi.png" },
    { name: "Court of Arms", src: "/Court of Arms.png" },
    { name: "FISD", src: "/FISD.png" },
  ]

  // Create a quadrupled array to ensure smooth seamless scrolling even on wide screens
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos]

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-6 flex flex-col items-center gap-6 md:gap-10 overflow-hidden">
      <p className="text-muted-foreground/60 text-sm md:text-lg text-center font-medium tracking-wide">
        Trusted by top innovative teams
      </p>

      <div
        className="relative overflow-hidden w-full"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="flex gap-8 md:gap-20 animate-marquee items-center">
          {marqueeLogos.map((logo, index) => (
            <div key={index} className="shrink-0">
              <Image
                src={logo.src}
                alt={`${logo.name} logo`}
                width={150}
                height={80}
                className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                style={{ filter: logoFilter }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
