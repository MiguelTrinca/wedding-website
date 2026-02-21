"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageProvider } from "@/contexts/LanguageContext"

function WomenDressCodePageContent() {
  const { t } = useLanguage()
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Title/Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("dressCodeWomen.title")}
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {t("dressCodeWomen.description")}
            </p>
          </div>


          {/* Color Guidelines Section - White and Light Shades */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t("dressCodeWomen.colorGuidelines")}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Text Explanation */}
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    {t("dressCodeWomen.avoidWhite")}
                  </h3>
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    {t("dressCodeWomen.avoidWhiteDesc")}
                  </p>
                </div>

                {/* Right: Color Swatches */}
                <div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-white"></div>
                      <p className="text-sm text-center text-foreground/60">{t("dressCodeWomen.colorWhite")}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FFFFF0]"></div>
                      <p className="text-sm text-center text-foreground/60">{t("dressCodeWomen.colorIvory")}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FAF0E6]"></div>
                      <p className="text-sm text-center text-foreground/60">{t("dressCodeWomen.colorOffWhite")}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FFFDD0]"></div>
                      <p className="text-sm text-center text-foreground/60">{t("dressCodeWomen.colorCream")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Approved Color Direction Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                {t("dressCodeWomen.otherColors")}
              </h2>
              <p className="text-lg text-foreground/80 mb-8 text-center leading-relaxed">
                {t("dressCodeWomen.otherColorsDesc")}
              </p>
              
            </div>
          </section>

          {/* Closing Note Section */}
          <section className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-accent leading-relaxed italic">
                {t("dressCodeWomen.closing")}
              </p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function WomenDressCodePage() {
  return (
    <LanguageProvider>
      <WomenDressCodePageContent />
    </LanguageProvider>
  )
}

