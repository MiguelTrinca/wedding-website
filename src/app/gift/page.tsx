"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext"

type GiftCardSpec = {
  title: string
  description: string
  delayMs: number
  images: { src: string; alt: string }[]
}

function GiftPageContent() {
  const { t } = useLanguage()

  const giftCards: GiftCardSpec[] = [
    {
      title: t("gift.travel"),
      description: t("gift.travelDesc"),
      delayMs: 0,
      images: [
        { src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800", alt: "Mountains" },
        { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", alt: "Hiking" },
        { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", alt: "Ocean" },
      ],
    },
    {
      title: t("gift.experiences"),
      description: t("gift.experiencesDesc"),
      delayMs: 1500,
      images: [
        { src: "https://images.unsplash.com/photo-1528697203043-733bfdca6d5c?w=800", alt: "Dinner" },
        { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800", alt: "Wine" },
        { src: "https://images.unsplash.com/photo-1520201163981-8c49a3b9d8f8?w=800", alt: "Dessert" },
      ],
    },
    {
      title: t("gift.home"),
      description: t("gift.homeDesc"),
      delayMs: 3000,
      images: [
        { src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800", alt: "Interior" },
        { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800", alt: "Living room" },
        { src: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=800", alt: "Kitchen" },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Intro Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {t("gift.title")}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("gift.description")}
            </p>
          </div>
        </section>

        {/* Gift Gallery Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {giftCards.map((spec) => (
                <AutoScrollGiftCard key={spec.title} spec={spec} />
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("gift.thankYouTitle")}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              {t("gift.thankYouMessage")}
            </p>

            <Button
              size="lg"
              onClick={() =>
                window.open(
                  "https://easywishlist.app/w/w22h1eca8/casamento-teste",
                  "_blank"
                )
              }
            >
              {t("gift.gift")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

function AutoScrollGiftCard({ spec }: { spec: GiftCardSpec }) {
  return (
    <Card className="group relative overflow-hidden">
      <CardHeader>
        <CardTitle>{spec.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="relative h-56 rounded-lg overflow-hidden">
          {/* Auto-scrolling image strip */}
          <div
            className="absolute inset-0 flex"
            style={{
              animation: "scroll-x 18s linear infinite",
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
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
            <p className="text-white text-sm md:text-base max-w-xs mx-auto text-center">
              {spec.description}
            </p>
          </div>
        </div>
      </CardContent>

      <style jsx>{`
        @keyframes scroll-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </Card>
  )
}

export default function GiftPage() {
  return (
    <LanguageProvider>
      <GiftPageContent />
    </LanguageProvider>
  )
}
