"use client"

import { useState } from "react"
import Link from "next/link"
import { Button} from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageFlag } from "@/components/LanguageFlag"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"


export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Beatriz & Miguel</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.home")}
          </Link>
          <Link 
            href="/activities" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.activities")}
          </Link>
          <Link 
            href="/dress-code" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.dressCode")}
          </Link>
          <Link 
            href="/activities#transportation"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.transportation")}
          </Link>

          <Link 
            href="/gift" 
            className="text-sm font-medium transition-colors hover:text-primary" 
          >
            {t("nav.gift")}
          </Link>

          <Link 
            href="/honeypot" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.honeyPot")}
          </Link>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage}
            className="h-9 w-9 p-0"
            title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
          >
            <LanguageFlag />
          </Button>
          <Button asChild>
            <Link href="/rsvp">{t("nav.rsvp")}</Link>
          </Button>
        </nav>

        {/* Mobile menu button and language toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage}
            className="h-9 w-9 p-0"
            title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
          >
            <LanguageFlag />
          </Button>
          <Sheet open={isOpen} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <VisuallyHidden>
                <SheetTitle>Navigation menu</SheetTitle>
              </VisuallyHidden>
            </SheetHeader>

            <nav className="flex flex-col gap-6 mt-10">
              <Link href="/" className="text-lg font-medium" onClick={() => setOpen(false)}>
                {t("nav.home")}
              </Link>

              <Link href="/activities" className="text-lg font-medium" onClick={() => setOpen(false)}>
                {t("nav.activities")}
              </Link>

              <Link href="/dress-code" className="text-lg font-medium" onClick={() => setOpen(false)}>
                {t("nav.dressCode")}
              </Link>

              <Link href="/activities#transportation" className="text-lg font-medium" onClick={() => setOpen(false)}>
                {t("nav.transportation")}
              </Link>

              <Link href="/gift" className="text-lg font-medium" onClick={() => setOpen(false)}>
                {t("nav.gift")}
              </Link>

              <Link href="/honeypot" className="text-lg font-medium" onClick={() => setOpen(false)}>
                {t("nav.honeyPot")}
              </Link>

              <div className="pt-4 border-t">

                <Button asChild>
                  <Link href="/rsvp">{t("nav.rsvp")}</Link>
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleLanguage}
                  className="h-10 w-10"
                >
                  <LanguageFlag />
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        </div>
      </div>
    </header>
  )
}

