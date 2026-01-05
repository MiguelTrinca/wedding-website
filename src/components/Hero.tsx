"use client"

import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Hero() {
  const { t } = useLanguage()
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Beatriz & Miguel
          </h1>
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl mb-8">
            <Calendar className="h-6 w-6" />
            <span>{t("hero.date")}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-lg md:text-xl mb-12">
            <MapPin className="h-5 w-5" />
            <span>{t("hero.venue")}</span>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t("hero.description")}
          </p>
          <Button 
            size="lg" 
            className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 text-lg font-semibold"
            asChild
          >
            <a href="/rsvp">{t("hero.rsvp")}</a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

