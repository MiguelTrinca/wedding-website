"use client"

import Header from "@/components/Header"
import RSVP from "@/components/RSVP"
import Footer from "@/components/Footer"
import { LanguageProvider } from "@/contexts/LanguageContext"

export default function RSVPPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <RSVP />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
