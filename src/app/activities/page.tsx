"use client"

import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { Facebook, Car } from "lucide-react"
import Link from "next/link"

type Activity = {
  title: string
  description: string
  image: string
  alt: string
  website: string
}

type Restaurant = {
  name: string
  description: string
  location: string
  image: string
  alt: string
  website: string
}

type Maritimo = {
  title: string
  description: string
  location: string
  image: string
  website: string
}

function ActivitiesPageContent() {
  const { t } = useLanguage()

  const activities: Activity[] = [
    {
      title: t("activities.hiking"),
      description: t("activities.hikingDesc"),
      image: "https://cdn.getyourguide.com/image/format=auto,fit=crop,gravity=center,quality=60,height=720,dpr=1/tour_img/cdf3d4e46def7d3d.jpeg",
      alt: "Hiking trail",
      website: 'https://visitmadeira.com/pt/o-que-fazer/exploradores-da-natureza/atividades/caminhadas/'
    },
    {
      title: t("activities.beach"),
      description: t("activities.beachDesc"),
      image: "https://www.got2globe.com/wp-content/uploads/2024/07/porto-moniz-ilha-madeira-piscinas-naturais-novas.jpg.webp",
      alt: "Beach",
      website: "https://visitmadeira.com/pt/o-que-fazer/amantes-de-mar/praias/"
    },
    {
      title: t("activities.viewpoints"),
      description: t("activities.viewpointsDesc"),
      image: "https://blog.madeira.best/storage/uploads/img/2020-04-29-1030535f64dcc25e2375f64dcc25e2f9.jpeg",
      alt: "Viewpoint",
      website: "https://visitmadeira.com/pt/o-que-fazer/exploradores-da-natureza/miradouros/"
    },
    {
      title: t("activities.iguarias"), 
      description: t("activities.iguariasDesc"),
      image: "https://visitmadeira.com/media/pxsdhliu/lapas1-henrique-seruca.jpg?width=1920&height=1080&rnd=133408949751500000",
      alt: "Iguarias",
      website: "https://visitmadeira.com/pt/o-que-fazer/apreciadores-de-gastronomia-e-vinho/gastronomia-tradicional/"
    },
    {
      title: t("activities.nightLife"), 
      description: t("activities.nightLifeDesc"),
      image: "https://visitmadeira.com/media/oghbxujq/zona-velha1-hugo-reis.jpg?width=1920&height=1080&rnd=133277701719530000",
      alt: "Night Life",
      website: "https://visitmadeira.com/pt/o-que-fazer/viver-a-cidade-do-funchal/entretenimento/"
    },
    {
      title: t("activities.diversos"),
      description: t("activities.diversosDesc"),
      image: "https://static.portugalbywine.com/media//MULTIMEDIA/FOTOS/4341/19036516483999W_1920.jpg",
      alt: "Other",
      website: "https://visitmadeira.com/pt/experiencias/"
    }
  ]

  const restaurants: Restaurant[] = [
    {
      name: t("restaurants.kampo"),
      description: t("restaurants.kampoDesc"),
      location: t("restaurants.kampoLocation"),
      image: "https://kampo.pt/wp-content/uploads/2024/07/aaaaa.png",
      alt: "Kampo restaurant",
      website: "https://kampo.pt/kampo/"
    },
    {
      name: t("restaurants.beerGarden"),
      description: t("restaurants.beerGardenDesc"),
      location: t("restaurants.beerGardenLocation"),
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/9a/34/3a/the-beer-garden.jpg?w=1800&h=1000&s=1",
      alt: "Beer Garden restaurant",
      website: "https://www.tripadvisor.com.br/Restaurant_Review-g189167-d2535812-Reviews-The_Beer_Garden-Funchal_Madeira_Madeira_Islands.html"
    },
    {
      name: t("restaurants.santoAntonio"),
      description: t("restaurants.santoAntonioDesc"),
      location: t("restaurants.santoAntonioLocation"),
      image: "https://www.restaurantesantoantonio.com/img/04Menu05.jpg",
      alt: "Santo Antonio restaurant",
      website: "https://www.restaurantesantoantonio.com/"
    },
    {
      name: t("restaurants.aVista"),
      description: t("restaurants.aVistaDesc"),
      location: t("restaurants.aVistaLocation"),
      image: "https://www.portobay.com/remote.axd/pbaybucket.s3.amazonaws.com/media/2850477/lstcb_avista_dinner_2_baixa.jpg?mode=crop&width=1920&height=0",
      alt: "AVista restaurant",
      website: "https://www.portobay.com/pt/restaurantes/restaurantes-madeira/avista/"
    },
    {
      name: t("restaurants.nini"),
      description: t("restaurants.niniDesc"),
      location: t("restaurants.niniLocation"),
      image: "https://i0.wp.com/portugalconfidential.com/wp-content/uploads/2019/07/DC-Atelier-Nini-Design-Center-feature.jpg?w=1400&ssl=1",
      alt: "Nini restaurant",
      website: "https://ninidesigncentre.com/restaurante/"
    },
    {
      name: t("restaurants.others"),
      description: t("restaurants.othersDesc"),
      location: t("restaurants.othersLocation"),
      image: "https://visitmadeira.com/media/txnkuivy/dsc_9531.jpg?width=1080&height=1920&rnd=133790991755130000",
      alt: "Others",
      website: "https://visitmadeira.com/pt/o-que-fazer/viver-a-cidade-do-funchal/gastronomia-e-vinho-madeira/"
    },
  ]

  const maritimo: Maritimo = {
    title: t("maritimo.cardTitle"),
    description: t("maritimo.cardDesc"),
    image: "https://www.csmaritimo.org.pt/wp-content/uploads/2024/11/CSM-2-1170x650.jpg",
    location: t("maritimo.cardLocation"),
    website: 'https://www.csmaritimo.org.pt/'
  }

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
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                {t("activities.title")}
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
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
        <section id="restaurants" className="py-20 bg-gray-50 scroll-mt-20">
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

        {/** Maritimo */}
        <section id="Maritimo" className="py-20 bg-background scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="flex items-center justify-center gap-3 text-4xl md:text-5xl font-bold te mb-3">
              <img
                src="https://www.csmaritimo.org.pt/wp-content/uploads/2022/06/Logo-CSM_menu.png"
                alt="Marítimo Logo"
                className="h-10 w-auto"
              />
              {t("maritimo.title")}
            </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {t("maritimo.description")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <MaritimoCard maritimo={maritimo}/>
            </div>
          </div>
        </section>

        {/* Transportation Section */}
        <section id="transportation" className="py-20 bg-gray-50 scroll-mt-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                {t("transportation.title")}
              </h2>
              <p className="text-foreground/80 max-w-2xl mx-auto">
                {t("transportation.description")}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-foreground">{t("transportation.weddingTransport")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    {t("transportation.weddingTransportDesc")}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-foreground">{t("transportation.carRental")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    {t("transportation.carRentalDesc")}
                  </p>
                  <div className="flex flex-col gap-3 mt-4">
                    <Link
                      href="https://www.facebook.com/p/Ba%C3%ADa-Car-Stand-de-Autom%C3%B3veis-61550926242150/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mt-4"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="text-sm font-medium text-secondary">Baia Car - Facebook</span>
                    </Link>
                    <Link
                      href="https://www.hertz.pt/rentacar/reservation/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mt-4"
                    >
                      <Car className="h-5 w-5" />
                      <span className="text-sm font-medium text-secondary">Hertz</span>
                    </Link>
                    <Link
                      href="https://www.europcar.pt/pt-pt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mt-4"
                    >
                      <Car className="h-5 w-5" />
                      <span className="text-sm font-medium text-secondary">EuropaCar</span>
                    </Link>
                  </div>
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

function MaritimoCard({ maritimo }: { maritimo: Maritimo }){
  const {t} = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card 
      className="group relative overflow-hidden h-full flex flex-col cursor-pointer bg-secondary/20"
      onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={maritimo.image}
            alt={"Maritimo Fans"}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />

          {/* Mobile tap hint */}
          <span className="absolute bottom-2 right-2 md:hidden text-xs text-white/80 bg-black/50 px-2 py-1 rounded-full">
            Tap to explore
          </span>
          
          {/* Hover overlay */}
          <div
            className={`
              absolute inset-0
              bg-black/40 backdrop-blur-[2px]
              flex items-center justify-center p-4
              transition-opacity duration-300 md:opacity-0
              md:group-hover:opacity-100
              ${isOpen ? "opacity-100" : "opacity-0"}
            `}
          >
            <div
              className="text-center space-y-4"
              onClick={(e) => e.stopPropagation()} // prevents closing when clicking button
            >
              <p className="text-white text-sm md:text-base max-w-xs mx-auto">
                {maritimo.description}
              </p>
              <Link
                href={maritimo.website}
                target="_blank"
                rel="noopener noreferrer"
                prefetch={false}
              >
                <Button size="lg" variant="secondary">
                  {t("activities.explore")}
                </Button>
              </Link>

            </div>
          </div>
        </div>
        <CardHeader>
          <CardTitle className="text-foreground">{maritimo.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-sm text-foreground/80">{maritimo.location}</p>
        </CardContent>
    </Card>
  )
}


function ActivityCard({ activity }: { activity: Activity }) {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden h-full flex flex-col cursor-pointer bg-secondary/20"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        
        {/* Mobile tap hint */}
        <span className="absolute bottom-2 right-2 md:hidden text-xs text-white/80 bg-black/50 px-2 py-1 rounded-full">
          Tap to explore
        </span>

        {/* Overlay */}
        <div
          className={`
            absolute inset-0
            bg-black/40 backdrop-blur-[2px]
            flex items-center justify-center p-4
            transition-opacity duration-300 md:opacity-0
            md:group-hover:opacity-100
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
        >
          <div
            className="text-center space-y-4"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking button
          >
            <p className="text-white text-sm md:text-base max-w-xs mx-auto">
              {activity.description}
            </p>
            <Link
              href={activity.website}
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <Button size="lg" variant="secondary">
                {t("activities.explore")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-foreground">{activity.title}</CardTitle>
      </CardHeader>
    </Card>
  )
}


function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card 
    className="group relative overflow-hidden h-full flex flex-col cursor-pointer bg-secondary/20"
    onClick={() => setIsOpen((prev) => !prev)}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.alt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Mobile tap hint */}
        <span className="absolute bottom-2 right-2 md:hidden text-xs text-white/80 bg-black/50 px-2 py-1 rounded-full">
          Tap to explore
        </span>
        
        {/* Hover overlay */}
        <div
          className={`
            absolute inset-0
            bg-black/40 backdrop-blur-[2px]
            flex items-center justify-center p-4
            transition-opacity duration-300 md:opacity-0
            md:group-hover:opacity-100
            ${isOpen ? "opacity-100" : "opacity-0"}
          `}
        >
          <div
            className="text-center space-y-4"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking button
          >
            <p className="text-white text-sm md:text-base max-w-xs mx-auto">
              {restaurant.description}
            </p>
            <Link
              href={restaurant.website}
              target="_blank"
              rel="noopener noreferrer"
              prefetch={false}
            >
              <Button size="lg" variant="secondary">
                {t("activities.explore")}
              </Button>
            </Link>

          </div>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-foreground">{restaurant.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-foreground/80">{restaurant.location}</p>
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

