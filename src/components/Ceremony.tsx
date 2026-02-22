"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Mail, Church } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Ceremony() {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("ceremony.title")}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {t("ceremony.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Details Card */}
          <div className="space-y-8">
            <Card className="bg-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-foreground">
                  <Church className="h-6 w-6 text-secondary" />
                  Sé do Funchal
                </CardTitle>
                <CardDescription className="text-lg text-foreground/80">
                  {t("ceremony.cardDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span className="text-foreground/80">{t("ceremony.time")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span className="text-foreground/80">R. do Aljube 39, 9000-067 Funchal, Madeira, Portugal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span className="text-foreground/80">+351 291 228 155</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <a
                    href="mailto:paroquia@sedofunchal.pt"
                    className="text-foreground/80 hover:text-secondary transition-colors"
                  >
                    catedraldofunchal@gmail.com
                  </a>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Button asChild variant="default">
                    <a href="/nearby-hotels">{t("ceremony.nearbyHotels")}</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/dress-code">{t("ceremony.dressCode")}</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Map */}
          <div>
            <Card className="bg-secondary/20 text-foreground">
              <CardHeader>
                <CardTitle>{t("ceremony.mapTitle")}</CardTitle>
                <CardDescription>{t("ceremony.mapDescription")}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-80 rounded-lg overflow-hidden bg-secondary/20">
                  <iframe
                    title="Sé do Funchal Map"
                    src="https://www.google.com/maps?q=Sé%20do%20Funchal&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


