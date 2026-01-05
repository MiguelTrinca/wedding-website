"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

const wishlistItemsEn = [
  "Dinnerware set",
  "Coffee machine",
  "Bedsheets & linens",
  "Cookware set",
  "Wine glasses",
  "Toaster",
]

const wishlistItemsPt = [
  "Conjunto de loiça",
  "Máquina de café",
  "Roupas de cama",
  "Conjunto de panelas",
  "Copos de vinho",
  "Torradeira",
]

export default function Gift() {
  const { t } = useLanguage()
  
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            {t("gift.title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t("gift.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <WishlistCard />
          <HoneyPotCard />
        </div>
      </div>
    </section>
  )
}

function WishlistCard() {
  const { t } = useLanguage()
  const wishlistItems = t("gift.wishlist") === "Lista de Desejos" ? wishlistItemsPt : wishlistItemsEn
  const [hovered, setHovered] = useState(false)
  const [checkedIndex, setCheckedIndex] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (hovered) {
      let i = 0
      intervalRef.current = setInterval(() => {
        setCheckedIndex((prev) => (prev === null ? 0 : (prev + 1) % wishlistItems.length))
        i++
      }, 600)
    } else {
      setCheckedIndex(null)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [hovered, wishlistItems.length])

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card className={`h-full transition duration-500 ${hovered ? "bg-gray-200/60" : "bg-white"}`}>
        <CardHeader>
          <CardTitle>{t("gift.wishlist")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {wishlistItems.map((item, index) => {
              const isChecked = checkedIndex !== null && index <= checkedIndex
              return (
                <li key={item} className="flex items-center gap-3">
                  <span
                    className={`h-5 w-5 rounded border flex items-center justify-center transition-all ${
                      isChecked ? "bg-green-500 border-green-500" : "bg-white border-gray-300"
                    }`}
                  >
                    {isChecked ? <Check className="h-4 w-4 text-white" /> : null}
                  </span>
                  <span className={`${isChecked ? "text-gray-500 line-through" : ""}`}>{item}</span>
                </li>
              )
            })}
          </ul>
        </CardContent>
      </Card>

      {hovered && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto">
              <Button onClick={() => window.open("https://easywishlist.app/w/w22h1eca8/casamento-teste", "_blank")} size="lg">{t("gift.gift")}</Button>
          </div>
        </div>
      )}
    </div>
  )
}

function HoneyPotCard() {
  const { t } = useLanguage()
  const [hovered, setHovered] = useState(false)
  const [progress, setProgress] = useState(35) // starting percentage
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p >= 100 ? 20 : p + 8))
      }, 400)
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current)
      setProgress(35)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [hovered])

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card className={`h-full transition duration-500 ${hovered ? "bg-gray-200/60" : "bg-white"}`}>
        <CardHeader>
          <CardTitle>{t("gift.honeyPot")}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-amber-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>{t("gift.goalProgress")}</span>
              <span>{progress}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {hovered && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="pointer-events-auto">
            <Link href="/donate" prefetch={false}>
              <Button size="lg">{t("gift.donate")}</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}


