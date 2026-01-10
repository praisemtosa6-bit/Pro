"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

const teamMembers = [
    {
        name: "David Chimpeni",
        role: "Creative Director",
        bio: "Visionary leader with over 15 years in digital storytelling and brand strategy.",
        image: "/testimonials/david-chimpeni.png",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "david@promediahouse.mw"
        }
    },
    {
        name: "Jessica Banda",
        role: "Head of Marketing",
        bio: "Expert in digital campaigns that drive real growth and engagement for enterprise clients.",
        image: "/testimonials/jessica-banda.png",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "jessica@promediahouse.mw"
        }
    },
    {
        name: "Robert Chipeta",
        role: "Lead Cinematographer",
        bio: "Award-winning filmmaker bringing cinematic quality to commercial productions.",
        image: "/testimonials/robert-chipeta.png",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "robert@promediahouse.mw"
        }
    },
    {
        name: "Angela Mazumbo",
        role: "Senior UI/UX Designer",
        bio: "Crafting intuitive and immersive digital experiences that delight users.",
        image: "/testimonials/angela-mazumbo.png",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "angela@promediahouse.mw"
        }
    },
    {
        name: "Samuel Dlamini",
        role: "Technical Lead",
        bio: "Bridging the gap between creative vision and robust technical implementation.",
        image: "/testimonials/samuel-dlamini.png",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "samuel@promediahouse.mw"
        }
    },
    {
        name: "Martha Nkhoma",
        role: "Production Manager",
        bio: "Ensuring every project is delivered on time, within budget, and to the highest standard.",
        image: "/testimonials/martha-nkhoma.png",
        social: {
            linkedin: "#",
            twitter: "#",
            email: "martha@promediahouse.mw"
        }
    }
]

export function TeamList() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-card/50 border border-white/5 backdrop-blur-sm p-6 hover:border-primary/50 transition-colors duration-300 h-full">
                                <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden bg-muted">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Social Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-4">
                                        <a href={member.social.linkedin} className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-primary hover:scale-110">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a href={member.social.twitter} className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-primary hover:scale-110">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                        <a href={`mailto:${member.social.email}`} className="text-white/80 hover:text-white transition-colors p-2 bg-white/10 rounded-full hover:bg-primary hover:scale-110">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
