"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

type CardSpec = {
  title: string
  href: string
  description: string
  delayMs: number
  images: { src: string; alt: string }[]
}

export default function VisitMadeira() {
  const { t } = useLanguage()
  
  const cards: CardSpec[] = [
    {
      title: t("visitMadeira.activities"),
      href: "/activities",
      description: t("visitMadeira.activitiesDesc"),
      delayMs: 0,
      images: [
        { src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800", alt: "Mountains" },
        { src: "https://images.unsplash.com/photo-1526481280698-8fcc13fd9b98?w=800", alt: "Trail" },
        { src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800", alt: "Ocean" },
        { src: "https://images.unsplash.com/photo-1526404803657-28ae1a936be6?w=800", alt: "Forest" },
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
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">{t("visitMadeira.title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("visitMadeira.description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((spec) => (
            <AutoScrollCard key={spec.title} spec={spec} />)
          )}
        </div>
      </div>
    </section>
  )
}

function AutoScrollCard({ spec }: { spec: CardSpec }) {
  const { t } = useLanguage()
  
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
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
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


