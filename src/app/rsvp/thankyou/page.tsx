'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardHeader, CardContent } from "@/components/ui/card"
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext"
import Link from "next/link"

type CardSpec = {
    title: string
    href: string
    description: string
    delayMs: number
    images: { src: string; alt: string }[]
  }

export default function ThankYouPage() {
    return (
        <LanguageProvider>
            <div className="min-h-screen">
            <Header />
            <main>
                <ThankYou/>
            </main>
            <Footer />
            </div>
        </LanguageProvider>
    )
}

function ThankYou() {
    const { t } = useLanguage()

    const cards: CardSpec[] = [
        {
          title: t("visitMadeira.activities"),
          href: "/activities",
          description: t("visitMadeira.activitiesDesc"),
          delayMs: 0,
          images: [
            { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", alt: "Mountains" },
            { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", alt: "Ocean" },
          ],
        },
        {
          title: t("visitMadeira.restaurants"),
          href: "/activities#restaurants",
          description: t("visitMadeira.restaurantsDesc"),
          delayMs: 2000,
          images: [
            { src: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=800", alt: "Table" },
            { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800", alt: "Seafood" },
            { src: "https://images.unsplash.com/photo-1528697203043-733bfdca6d5c?w=800", alt: "Wine" },
            { src: "https://images.unsplash.com/photo-1520201163981-8c49a3b9d8f8?w=800", alt: "Dessert" },
          ],
        },
        {
          title: t("visitMadeira.transportation"),
          href: "/activities#transportation",
          description: t("visitMadeira.transportationDesc"),
          delayMs: 1000,
          images: [
            { src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800", alt: "Car" },
            { src: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?w=800", alt: "Road" },
            { src: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800", alt: "Bus" },
            { src: "https://images.unsplash.com/photo-1494475673543-6a6a27143b22?w=800", alt: "Coast road" },
          ],
        },
      ]


      function AutoScrollCard({ spec }: { spec: CardSpec }) {

        return (
          <Card className="bg-secondary/20 group relative overflow-hidden">
            <CardHeader>
              <CardTitle>{spec.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative h-56 rounded-lg overflow-hidden">
                {/* Auto-scrolling image strip */}
                <div
                  className="absolute inset-0 flex"
                  style={{
                    animation: `scroll-x 16s linear infinite`,
                    animationDelay: `${spec.delayMs}ms`,
                  }}
                >
                  {[...spec.images, ...spec.images].map((img, i) => (
                    <img
                      key={`${img.src}-${i}`}
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-auto object-cover"
                    />
                  ))}
                </div>
      
                {/* Hover overlay */}
                <div className="absolute rounded-lg inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center space-y-4">
                    <p className="text-white text-sm md:text-base max-w-xs mx-auto">{spec.description}</p>
                    <Link href={spec.href} prefetch={false}>
                      <Button size="lg" variant="secondary">{t("visitMadeira.explore")}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
      
            {/* Local keyframes */}
            <style jsx>{`
              @keyframes scroll-x {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </Card>
        )
      }

    return (
        <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center bg-secondary/20 text-foreground ">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">{t("rsvp.thankYou")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80">
                {t("rsvp.thankYouMessage")}
              </p>
            </CardContent>
  
            <div className="flex justify-center gap-2 py-2">
              <Button asChild variant="default">
                <a href="/dress-code">{t("ceremony.dressCode")}</a>
              </Button>
  
              <Button asChild variant="outline">
                <a href="/#gift">{t("giftSectiongift")}</a>
              </Button>
  
            </div>
  
          </Card>
        </div>
  
        <br/>
  
        <div className="grid md:grid-cols-3 gap-8">
            {cards.map((spec) => (
              <AutoScrollCard key={spec.title} spec={spec} />)
            )}
        </div>
  
      </div>
    )
  }
