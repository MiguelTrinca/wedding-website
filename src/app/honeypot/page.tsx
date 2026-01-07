"use client"

import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext"

function HoneyPotPageContent() {
  const { t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Placeholder values – can later come from API or env
  const goalAmount = 8000
  const currentAmount = 3200
  const progress = Math.min((currentAmount / goalAmount) * 100, 100)

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Intro Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {t("honeyPot.title")}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("honeyPot.description")}
            </p>
          </div>
        </section>

        {/* Progress Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <div className="relative h-72 overflow-hidden rounded-t-lg">
                  <img
                    src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200"
                    alt="Honeymoon destination placeholder"
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardHeader>
                  <CardTitle>{t("honeyPot.goalProgress")}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    {t("honeyPot.progressMessage")}
                  </p>

                  {/* Progress Bar */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>
                        €{currentAmount.toLocaleString()}
                      </span>
                      <span>
                        €{goalAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t("honeyPot.thankYouTitle")}
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-8">
              {t("honeyPot.thankYouMessage")}
            </p>

            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              {t("honeyPot.donate")}
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      {/* Donate Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                {t("honeyPot.modalTitle")}
              </h3>

              <div className="text-sm text-gray-700 space-y-2">
                <p>
                    <strong>{t("honeyPot.phoneNumber")}:</strong> +351 123 456 789
                </p>
                <p>
                  <strong>{t("honeyPot.accountHolder")}:</strong> John & Jane Doe
                </p>
                <p>
                  <strong>IBAN:</strong> CH00 0000 0000 0000 0000 0
                </p>
                <p>
                  <strong>{t("honeyPot.reference")}:</strong> Wedding Gift
                </p>
              </div>

              <p className="text-sm text-gray-500">
                {t("honeyPot.modalNote")}
              </p>

              <Button className="w-full" onClick={() => setIsModalOpen(false)}>
                {t("honeyPot.close")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function honeyPotPage() {
  return (
    <LanguageProvider>
      <HoneyPotPageContent />
    </LanguageProvider>
  )
}
