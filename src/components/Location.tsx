"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { MapPin, Clock, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import React from "react"

export default function Location() {
  const [current, setCurrent] = React.useState(0)
  const { t } = useLanguage()
  // Placeholder images for the carousel
  const locationImages = [
    {
      src: "https://www.findmadeira.pt/wp-content/uploads/2024/11/05.-QdF-Solario.jpg",
      alt: "Quinta do Furao 1"
    },
    {
      src: "https://www.findmadeira.pt/wp-content/uploads/2024/11/01.-QdF-Hotel.jpg",
      alt: "Quinta Furao 2"
    },
    {
      src: "https://www.quintadofurao.com/Images/restaurante_varanda.jpg",
      alt: "Balcony"
    },
    {
      src: "https://www.quintadofurao.com/Images/padaria.jpg",
      alt: "Bread in Furnace"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("location.title")}
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            {t("location.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Venue Information */}
          <div className="space-y-8">
            <Card className="bg-secondary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground text-2xl">
                  <MapPin className="h-6 w-6 text-secondary" />
                  Quinta do Furão
                </CardTitle>
                <CardDescription className="text-lg">
                  {t("location.cardDescription")}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-foreground/80">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-secondary" />
                  <span>{t("location.reception")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-secondary" />
                  <span>Estrada da Quinta do Furão Nº6, 9230-082 Santana, Portugal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <span> +351 291 570 100</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <span>reservations@quintadofurao.com</span>
                </div>
              </CardContent>
            </Card>

            {/* Map*/}
            <Card className="bg-secondary/20 text-foreground" >
              <CardHeader>
                <CardTitle>{t("location.mapTitle")}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-64 bg-secondary/20 rounded-lg flex items-center justify-center">
                    <iframe
                      title="Quinta do Furão Map"
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
          {/** VER COM BABY */}
          <div className="relative">
            <Carousel
              className="w-full max-w-lg mx-auto rounded-xl border bg-secondary/20 shadow-lg p-4"
              opts={{ loop: true }}
              setApi={(api) => {
                if (!api) return
                setCurrent(api.selectedScrollSnap())
                api.on("select", () => setCurrent(api.selectedScrollSnap()))
              }}
            >
              <CarouselContent className="-ml-4">
                {locationImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 basis-[90%] md:basis-full">
                    <div className="relative overflow-hidden rounded-xl shadow-md">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            
            {/* Pagination dots */}
            <div className="mt-4 flex justify-center gap-2">
              {locationImages.map((_, index) => (
                <span
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === current ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

