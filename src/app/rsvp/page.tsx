import Header from "@/components/Header"
import RSVP from "@/components/RSVP"
import Footer from "@/components/Footer"

export default function RSVPPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <RSVP />
      </main>
      <Footer />
    </div>
  )
}
