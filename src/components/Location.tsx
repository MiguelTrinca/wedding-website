"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Location() {
  const { t } = useLanguage()
  // Placeholder images for the carousel
  const locationImages = [
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      alt: "Quinta do Furao exterior view"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      alt: "Wedding venue garden"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      alt: "Ceremony area"
    },
    {
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      alt: "Reception hall"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("location.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t("location.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Venue Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <MapPin className="h-6 w-6 text-green-500" />
                  Quinta do Furao
                </CardTitle>
                <CardDescription className="text-lg">
                  {t("location.cardDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span>{t("location.reception")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-500" />
                  <span>Estrada da Quinta do Furão Nº6, 9230-082 Santana, Portugal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-500" />
                  <span>+351 123 456 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-500" />
                  <span>info@quintadofurao.pt</span>
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>{t("location.mapTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <iframe
                      title="Quinta do Furao Map"
                      src="https://www.google.com/maps?q=quinta+do+fur%C3%A3o+madeira&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Image Carousel */}
          <div className="relative">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {locationImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-96 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-lg" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

