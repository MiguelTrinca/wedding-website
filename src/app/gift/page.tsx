"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext"
import { useState } from "react"
import AnimatedSuitcase from "@/components/AnimtatedSuitcase"

type GiftCardSpec = {
  title: string
  description: string
  delayMs: number
  images: { src: string; alt: string }[]
}

function GiftPageContent() {
  const { t } = useLanguage()

  const [giftIsModalOpen, setGiftIsModalOpen] = useState(false)
  const [honeyIsModalOpen, setHoneyIsModalOpen] = useState(false)

  const giftImages = [
    {
      src: "https://images.samsung.com/is/image/samsung/p6pim/ch/qe65s95fatxzu/gallery/ch-oled-s95f-qe65s95fatxzu-549873380?$Q90_1920_1280_F_PNG$",
      alt: "Travel experience",
    },
    {
      src: "https://cdn.conforama.ch/medias/600000/00000/5000/900/20/G_605921_A.webp",
      alt: "Romantic dinner",
    },
    {
      src: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_55/556342/18315053_800.jpg",
      alt: "Wine experience",
    },
    {
      src: "https://assets.wsimgs.com/wsimgs/rk/images/dp/wcm/202543/0163/all-clad-d5-stainless-steel-7-piece-cookware-set-z.jpg",
      alt: "Home decor",
    },
    {
      src: "https://www.shanzuchef.com/cdn/shop/files/3_92289648-0cc9-4a56-b9af-2687b3cf7501.jpg?v=1762395583&width=480",
      alt: "Living space",
    },
    {
      src: "https://timemoreeu.com/cdn/shop/files/20250905150618_54_43.png?v=1757056669&width=1280",
      alt: "Kitchen essentials",
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
              <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
                {t("gift.wishlist")}
                </h2>
                <p className="text-foreground/80 max-w-2xl mx-auto">
                  {t("gift.wishlistDesc")}
                </p>
              </div>

              <div className="grid grid-cols-2 my-8 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
                        onClick={() => setGiftIsModalOpen(true)}
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

        {/** Honey Pot */}
        <section id="honeyPot" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              {t("honeyPot.title")}
            </h1>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              {t("honeyPot.description")}
            </p>
            <div className="py-10">
              <AnimatedSuitcase percentage={0}/>
            </div>
          </div>

          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t("honeyPot.thankYouTitle")}
            </h2>
            <p className="text-foreground/80 max-w-xl mx-auto mb-8">
              {t("honeyPot.thankYouMessage")}
            </p>

            <Button size="lg" onClick={() => setHoneyIsModalOpen(true)}>
              {t("honeyPot.donate")}
            </Button>
          </div>

        </section>
      </main>

      <Footer />
      
      {giftIsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            <Button
              onClick={() => setGiftIsModalOpen(false)}
              className="absolute top-3 right-3"
              variant={"ghost"}
            >
              ✕
            </Button>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {t("gift.modalTitle")}
              </h3>

              <p className="text-sm text-foreground/60">
                {t("gift.modalNote")}
              </p>

              <div className="text-sm text-foreground/80 space-y-2">
                <p>
                  <strong>{t("gift.morada")}</strong>
                </p>
              </div>


              <Button className="w-full" 
                onClick={() =>{
                  setGiftIsModalOpen(false)
                  window.open(
                    "https://easywishlist.app/w/wiiv4dnwr/casamento-beatriz-e-miguel",
                    "_blank"
                  )
                }}>
                {t("gift.wishlist")}
              </Button>
            </div>
          </div>
        </div>
      )}

      {honeyIsModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            <Button
              onClick={() => setHoneyIsModalOpen(false)}
              className="absolute top-3 right-3"
              variant={"ghost"}
            >
              ✕
            </Button>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {t("honeyPot.modalTitle")}
              </h3>

              <div className="text-sm text-foreground/80 space-y-2">
                <p>
                    <strong>{t("honeyPot.phoneNumber")}:</strong> +351 933 767 045
                </p>
                <p>
                  <strong>{t("honeyPot.accountHolder")}:</strong> Miguel Trinca
                </p>
                <p>
                  <strong>IBAN:</strong> PT50 0035 0616 0001 8426 2005 5
                </p>
              </div>

              <p className="text-sm text-foreground/60">
                {t("honeyPot.modalNote")}
              </p>

              <Button className="w-full" onClick={() => setHoneyIsModalOpen(false)}>
                {t("honeyPot.close")}
              </Button>
            </div>
          </div>
        </div>
      )}



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
