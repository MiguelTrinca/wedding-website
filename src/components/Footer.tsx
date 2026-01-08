"use client"

import { Heart, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Wedding Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Heart className="h-6 w-6 text-green-500" />
              <span className="text-2xl font-bold">Beatriz & Miguel</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t("footer.date")}
            </p>
            <p className="text-gray-300">
              {t("footer.venue")}
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4">
              {t("footer.contact")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Mail className="h-5 w-5 text-green-500" />
                <a
                  href="mailto:beatriz.miguel.wedding@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  beatriz.miguel.wedding@gmail.com
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <Phone className="h-5 w-5 text-green-500" />
                <a
                  href="tel:+351123456789"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +351 123 456 789
                </a>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-300">
                  Rua da Quinta, 123, Madeira
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
