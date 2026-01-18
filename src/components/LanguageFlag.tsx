"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { useEffect, useState } from "react"
import clsx from "clsx"

export function LanguageFlag() {
  const { language } = useLanguage()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    const t = setTimeout(() => setAnimate(false), 300)
    return () => clearTimeout(t)
  }, [language])

  return (
    <div
      className={clsx(
        "transition-all duration-300",
        animate ? "opacity-0 scale-90" : "opacity-100 scale-100"
      )}
    >
      <Image
        src={language === "en" ? "/flags/uk.svg" : "/flags/pt.svg"}
        alt={language === "en" ? "English" : "Português"}
        width={20}
        height={20}
        className="rounded-sm"
        priority
      />
    </div>
  )
}
