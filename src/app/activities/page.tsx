"use client"

import { useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { Facebook } from "lucide-react"
import Link from "next/link"

type Activity = {
  title: string
  description: string
  image: string
  alt: string
}

type Restaurant = {
  name: string
  description: string
  location: string
  image: string
  alt: string
}

function ActivitiesPageContent() {
  const { t } = useLanguage()

  const activities: Activity[] = [
    {
      title: t("activities.hiking"),
      description: t("activities.hikingDesc"),
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
      alt: "Hiking trail",
    },
    {
      title: t("activities.beach"),
      description: t("activities.beachDesc"),
      image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
      alt: "Beach",
    },
    {
      title: t("activities.viewpoints"),
      description: t("activities.viewpointsDesc"),
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      alt: "Viewpoint",
    },
    {
      title: t("activities.waterSports"),
      description: t("activities.waterSportsDesc"),
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      alt: "Water sports",
    },
    {
      title: t("activities.gardens"),
      description: t("activities.gardensDesc"),
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
      alt: "Garden",
    },
    {
      title: t("activities.cableCar"),
      description: t("activities.cableCarDesc"),
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",
      alt: "Cable car",
    },
    {
      title: t("activities.wineTasting"),
      description: t("activities.wineTastingDesc"),
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800",
      alt: "Wine tasting",
    },
    {
      title: t("activities.fishing"),
      description: t("activities.fishingDesc"),
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
      alt: "Fishing",
    },
  ]

  const restaurants: Restaurant[] = [
    {
      name: t("restaurants.kampo"),
      description: t("restaurants.kampoDesc"),
      location: t("restaurants.kampoLocation"),
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
      alt: "Kampo restaurant",
    },
    {
      name: t("restaurants.beerGarden"),
      description: t("restaurants.beerGardenDesc"),
      location: t("restaurants.beerGardenLocation"),
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
      alt: "Beer Garden restaurant",
    },
    {
      name: t("restaurants.santoAntonio"),
      description: t("restaurants.santoAntonioDesc"),
      location: t("restaurants.santoAntonioLocation"),
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800",
      alt: "Santo Antonio restaurant",
    },
  ]

  // Handle hash navigation on page load
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash
      if (hash) {
        // Small delay to ensure the page is fully rendered
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Activities Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {t("activities.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("activities.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity) => (
                <ActivityCard key={activity.title} activity={activity} />
              ))}
            </div>
          </div>
        </section>

        {/* Restaurants Section */}
        <section id="restaurants" className="py-20 bg-white scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {t("restaurants.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("restaurants.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.name} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </section>

        {/* Transportation Section */}
        <section id="transportation" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                {t("transportation.title")}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("transportation.description")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>{t("transportation.weddingTransport")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {t("transportation.weddingTransportDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{t("transportation.carRental")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {t("transportation.carRentalDesc")}
                  </p>
                  <Link
                    href="https://www.facebook.com/p/Ba%C3%ADa-Car-Stand-de-Autom%C3%B3veis-61550926242150/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mt-4"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="text-sm font-medium">Baia Car - Facebook</span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function ActivityCard({ activity }: { activity: Activity }) {
  const { t } = useLanguage()

  return (
    <Card className="group relative overflow-hidden h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <div className="text-center space-y-4">
            <p className="text-white text-sm md:text-base max-w-xs mx-auto">
              {activity.description}
            </p>
            <Button size="lg" variant="secondary">
              {t("activities.explore")}
            </Button>
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{activity.title}</CardTitle>
      </CardHeader>
    </Card>
  )
}

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { t } = useLanguage()

  return (
    <Card className="group relative overflow-hidden h-full flex flex-col">
      <div className="relative h-56 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <div className="text-center space-y-4">
            <p className="text-white text-sm md:text-base max-w-xs mx-auto">
              {restaurant.description}
            </p>
            <Button size="lg" variant="secondary">
              {t("activities.explore")}
            </Button>
          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle>{restaurant.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-gray-600">{restaurant.location}</p>
      </CardContent>
    </Card>
  )
}

export default function ActivitiesPage() {
  return (
    <LanguageProvider>
      <ActivitiesPageContent />
    </LanguageProvider>
  )
}

