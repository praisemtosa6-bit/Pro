"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { ThemeSwitcher } from "@/components/theme-switcher"

const footerLinks = {
  Services: [
    { label: "Video Production", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "Website Design", href: "#services" },
    { label: "IT Consulting", href: "#services" },
  ],
  Company: [
    { label: "About", href: "/#about" },
    { label: "Our Team", href: "/team" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Portfolio", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Support", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
    { label: "Contact Us", href: "mailto:info@promediahouse-mw.com" },
  ],
}

const socialLinks = [
  { icon: Mail, href: "mailto:info@promediahouse-mw.com", label: "Email" },
  { icon: Phone, href: "tel:+265888282510", label: "Phone" },
  { icon: MapPin, href: "#", label: "Location" },
]

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <footer className="relative bg-background border-t border-white/5">
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-50 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* Top section with newsletter */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 pb-12 border-b border-white/5">
          {/* Newsletter signup */}
          <div className="max-w-md">
            <h3 className="text-xl font-semibold text-foreground mb-2">Ready to transform your vision?</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Let's discuss your project and how Pro Media House can help bring your story to life.
            </p>

            {isSubmitted ? (
              <div className="flex items-center gap-2 text-primary">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">Thanks for reaching out!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/90 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Contact
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="flex items-start gap-6">
            <ThemeSwitcher />
            <div className="flex flex-col gap-3">
              <a
                href="tel:+265888282510"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                +265 888 282 510
              </a>
              <a
                href="mailto:info@promediahouse-mw.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@promediahouse-mw.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Blantyre, Malawi
              </div>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          {/* Logo and tagline */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link href="/" className="inline-block mb-4">
              <div className="text-xl font-bold text-primary">Pro Media House</div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-[200px]">
              Empowering stories, engaging audiences. Professional media production and digital solutions.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-medium text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pro Media House. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse group-hover:bg-primary transition-colors" />
              Ready to collaborate
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
