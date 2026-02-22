"use client"

import { Heart, Mail, Phone, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { MessageCircle  } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        {/* Constrained grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Wedding Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Heart className="h-6 w-6 text-secondary" />
                <span className="text-2xl font-bold">
                  Beatriz & Miguel
                </span>
              </div>

              <p className="text-background/80 mb-2">
                {t("footer.date")}
              </p>
              <p className="text-background/80">
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
                  <Mail className="h-5 w-5 text-secondary" />
                  <a
                    href="mailto:miguel.trinca@hotmail.com"
                    className="text-background/80 hover:text-secondary transition-colors"
                  >
                    miguel.trinca@hotmail.com
                  </a>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Phone className="h-5 w-5 text-secondary" />
                  <a
                    href="tel:+351933767045"
                    className="text-background/80 hover:text-secondary transition-colors"
                  >
                    +351 933 767 045  
                  </a>
                </div>


                <div className="flex items-center justify-center md:justify-start">
                  ---------------------
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <Mail className="h-5 w-5 text-secondary" />
                  <a
                    href="mailto:beatrizfaria98@hotmail.com"
                    className="text-background/80 hover:text-secondary transition-colors"
                  >
                    beatrizfaria98@hotmail.com
                  </a>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-3">
                  <MessageCircle className="h-5 w-5 text-secondary" /> {/**Ver com baby */}
                  <a
                    href="tel:+351933767045"
                    className="text-background/80 hover:text-secondary transition-colors"
                  >
                    +351 962 597 903  
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center max-w-4xl mx-auto">
          <p className="text-background/60 text-sm">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  )
}
