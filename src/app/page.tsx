import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Ceremony from "@/components/Ceremony"
import Location from "@/components/Location"
import Gift from "@/components/Gift"
import VisitMadeira from "@/components/VisitMadeira"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Ceremony />
        <Location />
        <Gift />
        <VisitMadeira />
      </main>
      <Footer />
    </div>
  )
}
