"use client"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PortfolioSection() {
    const [headerVisible, setHeaderVisible] = useState(false)
    const [itemsVisible, setItemsVisible] = useState(false)

    const headerRef = useRef<HTMLDivElement>(null)
    const itemsRef = useRef<HTMLDivElement>(null)

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
        const itemsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setItemsVisible(true)
                    itemsObserver.disconnect()
                }
            },
            { threshold: 0.2 },
        )

        if (itemsRef.current) itemsObserver.observe(itemsRef.current)
        return () => itemsObserver.disconnect()
    }, [])

    const portfolioItems = [
        {
            title: "Brand Campaign A",
            category: "Campaign",
            description: "Successful multi-channel campaign for a leading tech company.",
            gradient: "from-blue-500/20 to-purple-500/20",
        },
        {
            title: "Social Media Growth",
            category: "Growth",
            description: "Increased engagement and followers for a lifestyle brand.",
            gradient: "from-emerald-500/20 to-teal-500/20",
        },
        {
            title: "Product Launch",
            category: "Strategy",
            description: "Creative launch strategy for a new consumer product.",
            gradient: "from-orange-500/20 to-red-500/20",
        },
    ]

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 translate-y-1/2"
                aria-hidden="true"
            />

            <div className="w-full flex justify-center px-4 md:px-6 relative z-10">
                <div className="flex max-w-6xl flex-col items-center gap-12 w-full">
                    <div ref={headerRef} className="text-center max-w-3xl">
                        <h2
                            className={cn(
                                "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground opacity-0",
                                headerVisible && "animate-slide-up-section",
                            )}
                        >
                            Featured Portfolio
                        </h2>
                        <p
                            className={cn(
                                "mt-4 text-base md:text-lg text-muted-foreground opacity-0",
                                headerVisible && "animate-slide-up-section-delayed",
                            )}
                        >
                            A glimpse into our recent success stories and creative endeavors.
                        </p>
                    </div>

                    <div
                        ref={itemsRef}
                        className="grid w-full grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {portfolioItems.map((item, index) => (
                            <Card
                                key={index}
                                className={cn(
                                    "group relative overflow-hidden border-border bg-card/50 backdrop-blur transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 opacity-0",
                                    itemsVisible && `animate-slide-in-right-${index + 1}`
                                )}
                            >
                                {/* Hover gradient effect */}
                                <div
                                    className={cn(
                                        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                        item.gradient
                                    )}
                                />

                                <CardHeader>
                                    <div className="mb-4">
                                        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                                            {item.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {item.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
