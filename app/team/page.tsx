import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { TeamList } from "@/components/team-list"
import { GridBackground } from "@/components/grid-background"

export default function TeamPage() {
    return (
        <div className="relative min-h-screen flex flex-col bg-background selection:bg-primary/20 selection:text-primary">
            <Navbar />

            <main className="flex-1 relative pt-32">
                <GridBackground />

                {/* Hero Section of Team Page */}
                <div className="relative font-sans container px-4 md:px-6 text-center mb-12">
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
                        style={{
                            background: "radial-gradient(ellipse, rgba(34, 94, 223, 0.1) 0%, transparent 70%)",
                        }}
                    />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        Meet the <span className="text-primary">Minds</span> Behind the Magic
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A collective of creators, strategists, and technologists dedicated to elevating your brand through exceptional media production.
                    </p>
                </div>

                <TeamList />
            </main>

            <Footer />
        </div>
    )
}
