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
        { src: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,height=720,dpr=1/tour_img/cdf3d4e46def7d3d.jpeg", alt: "Mountains" },
        { src: "https://www.got2globe.com/wp-content/uploads/2024/07/porto-moniz-ilha-madeira-piscinas-naturais-novas.jpg.webp", alt: "Ocean" },
        { src: "https://blog.madeira.best/storage/uploads/img/2020-04-29-1030535f64dcc25e2375f64dcc25e2f9.jpeg", alt: "Viewpoint" },
        { src: "https://visitmadeira.com/media/pxsdhliu/lapas1-henrique-seruca.jpg?width=1920&height=1080&rnd=133408949751500000", alt: "Iguarias" },
      ],
    },
    {
      title: t("visitMadeira.restaurants"),
      href: "/activities#restaurants",
      description: t("visitMadeira.restaurantsDesc"),
      delayMs: 2000,
      images: [
        { src: "https://kampo.pt/wp-content/uploads/2024/07/aaaaa.png", alt: "Table" },
        { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9a/34/3a/the-beer-garden.jpg?w=1800&h=1000&s=1", alt: "Seafood" },
        { src: "https://www.restaurantesantoantonio.com/img/04Menu05.jpg", alt: "Wine" },
        { src: "https://images.unsplash.com/photo-1520201163981-8c49a3b9d8f8?w=800", alt: "Dessert" },
      ],
    },
    {
      title: t("visitMadeira.transportation"),
      href: "/activities#transportation",
      description: t("visitMadeira.transportationDesc"),
      delayMs: 1000,
      images: [
        { src: "https://www.madeira-holidays.eu/wp-content/uploads/2023/08/madeira-taxo.jpeg", alt: "Car" },
        { src: "https://jornaleconomico.sapo.pt/wp-content/themes/yootheme/cache/b5/autocarro-madeira-b5775866.png", alt: "Road" },
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


