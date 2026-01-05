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
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t("dressCodeWomen.description")}
            </p>
          </div>

          {/* Formal Attire Explanation Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("dressCodeWomen.formalAttire")}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  {t("dressCodeWomen.formalAttireDesc1")}
                </p>
                <div className="space-y-3 mt-6">
                  <p className="font-semibold text-foreground">{t("dressCodeWomen.recommended")}</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>{t("dressCodeWomen.recommended1")}</li>
                    <li>{t("dressCodeWomen.recommended2")}</li>
                    <li>{t("dressCodeWomen.recommended3")}</li>
                    <li>{t("dressCodeWomen.recommended4")}</li>
                  </ul>
                </div>
                <p className="mt-6">
                  {t("dressCodeWomen.formalAttireDesc2")}
                </p>
              </div>
            </div>
          </section>

          {/* Formal Attire Inspiration Gallery */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t("dressCodeWomen.examples")}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80&fit=crop"
                    alt="Formal evening gown example"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&fit=crop"
                    alt="Elegant formal dress example"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=600&q=80&fit=crop"
                    alt="Formal attire inspiration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=600&q=80&fit=crop"
                    alt="Elegant formal wear example"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&q=80&fit=crop"
                    alt="Elegant evening gown"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80&fit=crop"
                    alt="Formal attire inspiration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop"
                    alt="Elegant formal dress"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=600&q=80&fit=crop"
                    alt="Formal evening wear"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=600&q=80&fit=crop"
                    alt="Elegant formal gown"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&q=80&fit=crop"
                    alt="Formal dress example"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=600&q=80&fit=crop"
                    alt="Formal evening dress"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80&fit=crop"
                    alt="Elegant formal wear"
                    className="w-full h-full object-cover"
                  />
                </div>
                
              </div>
            </div>
          </section>

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
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {t("dressCodeWomen.avoidWhiteDesc")}
                  </p>
                </div>

                {/* Right: Color Swatches */}
                <div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-white"></div>
                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">{t("dressCodeWomen.colorWhite")}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FFFFF0]"></div>
                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">{t("dressCodeWomen.colorIvory")}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FAF0E6]"></div>
                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">{t("dressCodeWomen.colorOffWhite")}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FFFDD0]"></div>
                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">{t("dressCodeWomen.colorCream")}</p>
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
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center leading-relaxed">
                {t("dressCodeWomen.otherColorsDesc")}
              </p>
              
              <div className="grid grid-cols-4 md:grid-cols-8 gap-3 max-w-3xl mx-auto">
                {/* Shades of Blue */}
                <div className="h-20 rounded-lg bg-[#1A237E]"></div>
                <div className="h-20 rounded-lg bg-[#283593]"></div>
                <div className="h-20 rounded-lg bg-[#3949AB]"></div>
                <div className="h-20 rounded-lg bg-[#5C6BC0]"></div>
                <div className="h-20 rounded-lg bg-[#0D47A1]"></div>
                <div className="h-20 rounded-lg bg-[#1565C0]"></div>
                <div className="h-20 rounded-lg bg-[#1976D2]"></div>
                <div className="h-20 rounded-lg bg-[#1E88E5]"></div>

                {/* Shades of Green */}
                <div className="h-20 rounded-lg bg-[#2D5016]"></div>
                <div className="h-20 rounded-lg bg-[#3A6B1F]"></div>
                <div className="h-20 rounded-lg bg-[#4A7C2A]"></div>
                <div className="h-20 rounded-lg bg-[#5B8F3A]"></div>
                <div className="h-20 rounded-lg bg-[#6BA04A]"></div>
                <div className="h-20 rounded-lg bg-[#7BB15A]"></div>
                <div className="h-20 rounded-lg bg-[#8BC26A]"></div>
                <div className="h-20 rounded-lg bg-[#9BD37A]"></div>

                {/* Terracotta Tones */}
                <div className="h-20 rounded-lg bg-[#8B4513]"></div>
                <div className="h-20 rounded-lg bg-[#A0522D]"></div>
                <div className="h-20 rounded-lg bg-[#CD853F]"></div>
                <div className="h-20 rounded-lg bg-[#D2691E]"></div>
                <div className="h-20 rounded-lg bg-[#E07A3F]"></div>
                <div className="h-20 rounded-lg bg-[#E9967A]"></div>
                <div className="h-20 rounded-lg bg-[#F4A460]"></div>
                <div className="h-20 rounded-lg bg-[#FFB380]"></div>
                
                {/* Shades of Red */}
                <div className="h-20 rounded-lg bg-[#4A0E0E]"></div>
                <div className="h-20 rounded-lg bg-[#6B1F1F]"></div>
                <div className="h-20 rounded-lg bg-[#8B2E2E]"></div>
                <div className="h-20 rounded-lg bg-[#A03D3D]"></div>
                <div className="h-20 rounded-lg bg-[#B54C4C]"></div>
                <div className="h-20 rounded-lg bg-[#722F37]"></div>
                <div className="h-20 rounded-lg bg-[#8B3E47]"></div>
                <div className="h-20 rounded-lg bg-[#A44D57]"></div>
                


                
                {/* Shades of Purple */}
                <div className="h-20 rounded-lg bg-[#4A148C]"></div>
                <div className="h-20 rounded-lg bg-[#6A1B9A]"></div>
                <div className="h-20 rounded-lg bg-[#7B1FA2]"></div>
                <div className="h-20 rounded-lg bg-[#8E24AA]"></div>
                <div className="h-20 rounded-lg bg-[#9C27B0]"></div>
                <div className="h-20 rounded-lg bg-[#AB47BC]"></div>
                <div className="h-20 rounded-lg bg-[#BA68C8]"></div>
                <div className="h-20 rounded-lg bg-[#CE93D8]"></div>
                {/* Shades of Gray & Brown */}
                <div className="h-20 rounded-lg bg-[#212121]"></div>
                <div className="h-20 rounded-lg bg-[#424242]"></div>
                <div className="h-20 rounded-lg bg-[#616161]"></div>
                <div className="h-20 rounded-lg bg-[#757575]"></div>
                <div className="h-20 rounded-lg bg-[#3E2723]"></div>
                <div className="h-20 rounded-lg bg-[#5D4037]"></div>
                <div className="h-20 rounded-lg bg-[#6D4C41]"></div>
                <div className="h-20 rounded-lg bg-[#8D6E63]"></div>
                
              
                
              </div>
            </div>
          </section>

          {/* Closing Note Section */}
          <section className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
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

