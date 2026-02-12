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

  const giftImages = [
    {
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600",
      alt: "Travel experience",
    },
    {
      src: "https://images.unsplash.com/photo-1528697203043-733bfdca6d5c?w=600",
      alt: "Romantic dinner",
    },
    {
      src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600",
      alt: "Wine experience",
    },
    {
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
      alt: "Home decor",
    },
    {
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600",
      alt: "Living space",
    },
    {
      src: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=600",
      alt: "Kitchen essentials",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600",
      alt: "Ocean experience",
    },
    {
      src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600",
      alt: "Adventure experience",
    },
  ]
  

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Intro Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {t("gift.title")}
            </h1>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              {t("gift.description")}
            </p>
          </div>
        </section>

        {/* Gift Gallery Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t("gift.wishlist")}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {giftImages.map((img, index) => (
                  <div
                    key={index}
                    className="group relative aspect-square overflow-hidden rounded-lg"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                      <Button
                        size="sm"
                        variant="secondary"
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Closing CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("gift.thankYouTitle")}
            </h2>
            <p className="text-foreground/80 max-w-xl mx-auto mb-8">
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

export default function GiftPage() {
  return (
    <LanguageProvider>
      <GiftPageContent />
    </LanguageProvider>
  )
}
