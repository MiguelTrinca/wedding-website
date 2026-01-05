"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()

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
            href="/transportation" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {t("nav.transportation")}
          </Link>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleLanguage}
            className="h-9 w-9 p-0"
            title={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
          >
            {language === "en" ? (
              <svg className="h-5 w-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <path fill="#006" d="M0 0h640v480H0z"/>
                <path fill="#fff" d="M0 0h640v160H0z"/>
                <path fill="#006" d="M0 160h640v160H0z"/>
                <path fill="#c00" d="M0 320h640v160H0z"/>
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <path fill="#006600" d="M0 0h256v480H0z"/>
                <path fill="#ff0000" d="M256 0h384v480H256z"/>
              </svg>
            )}
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
            {language === "en" ? (
              <svg className="h-5 w-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <path fill="#006" d="M0 0h640v480H0z"/>
                <path fill="#fff" d="M0 0h640v160H0z"/>
                <path fill="#006" d="M0 160h640v160H0z"/>
                <path fill="#c00" d="M0 320h640v160H0z"/>
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 640 480" xmlns="http://www.w3.org/2000/svg">
                <path fill="#006600" d="M0 0h256v480H0z"/>
                <path fill="#ff0000" d="M256 0h384v480H256z"/>
              </svg>
            )}
          </Button>
          <Button variant="ghost" size="icon">
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
        </div>
      </div>
    </header>
  )
}

