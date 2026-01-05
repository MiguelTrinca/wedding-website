"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageProvider } from "@/contexts/LanguageContext"

function MenDressCodePageContent() {
  const { t } = useLanguage()
  // Real-life tailcoat examples for carousel
  const tailcoatExamples = [
    {
      src: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80&fit=crop",
      alt: "Man in formal tailcoat"
    },
    {
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fit=crop",
      alt: "Formal tailcoat attire example"
    },
    {
      src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&fit=crop",
      alt: "Traditional tailcoat example"
    },
    {
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80&fit=crop",
      alt: "Elegant tailcoat formal wear"
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* 1. Page Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t("dressCodeMen.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              {t("dressCodeMen.description")}
            </p>
          </div>

          {/* 2. Formal Attire Overview Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("dressCodeMen.formalRequired")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("dressCodeMen.formalRequiredDesc")}
              </p>
            </div>
          </section>

          {/* 3. Tailcoat Requirement Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {t("dressCodeMen.tailcoat")}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                {t("dressCodeMen.tailcoatDesc")}
              </p>
            </div>
          </section>

          {/* 4. Tailcoat Anatomy Visualization Section */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t("dressCodeMen.howToWear")}
              </h2>
              
              <div className="relative flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Left: Illustration */}
                <div className="flex-shrink-0 w-full md:w-2/5">
                  <div className="relative bg-white dark:bg-gray-800 rounded-lg p-4 md:p-8 border-2 border-gray-200 dark:border-gray-700">
                    <div className="relative aspect-[2/3] max-w-xs mx-auto">
                      <img
                        src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&q=80&fit=crop"
                        alt="Traditional tailcoat illustration"
                        className="w-full h-full object-contain"
                        style={{ filter: 'grayscale(100%) contrast(1.2)' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Labels with Arrows */}
                <div className="flex-1 space-y-6 md:space-y-8 pt-4 md:pt-8">
                  {/* Tailcoat Jacket */}
                  <div className="relative flex items-center">
                    <div className="hidden md:block absolute -left-16 w-12 h-0.5 bg-foreground"></div>
                    <div className="hidden md:block absolute -left-16 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-foreground border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">{t("dressCodeMen.tailcoatJacket")}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {t("dressCodeMen.tailcoatJacketDesc")}
                      </p>
                    </div>
                  </div>

                  {/* Shirt */}
                  <div className="relative flex items-center">
                    <div className="hidden md:block absolute -left-16 w-12 h-0.5 bg-foreground"></div>
                    <div className="hidden md:block absolute -left-16 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-foreground border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">{t("dressCodeMen.shirt")}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {t("dressCodeMen.shirtDesc")}
                      </p>
                    </div>
                  </div>

                  {/* Waistcoat */}
                  <div className="relative flex items-center">
                    <div className="hidden md:block absolute -left-16 w-12 h-0.5 bg-foreground"></div>
                    <div className="hidden md:block absolute -left-16 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-foreground border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">{t("dressCodeMen.waistcoat")}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {t("dressCodeMen.waistcoatDesc")}
                      </p>
                    </div>
                  </div>

                  {/* Tie / Bow Tie */}
                  <div className="relative flex items-center">
                    <div className="hidden md:block absolute -left-16 w-12 h-0.5 bg-foreground"></div>
                    <div className="hidden md:block absolute -left-16 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-foreground border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">{t("dressCodeMen.tie")}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {t("dressCodeMen.tieDesc")}
                      </p>
                    </div>
                  </div>

                  {/* Trousers */}
                  <div className="relative flex items-center">
                    <div className="hidden md:block absolute -left-16 w-12 h-0.5 bg-foreground"></div>
                    <div className="hidden md:block absolute -left-16 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-foreground border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">{t("dressCodeMen.trousers")}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {t("dressCodeMen.trousersDesc")}
                      </p>
                    </div>
                  </div>

                  {/* Shoes */}
                  <div className="relative flex items-center">
                    <div className="hidden md:block absolute -left-16 w-12 h-0.5 bg-foreground"></div>
                    <div className="hidden md:block absolute -left-16 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-[6px] border-l-foreground border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">{t("dressCodeMen.shoes")}</h3>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {t("dressCodeMen.shoesDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Real-Life Tailcoat Examples Carousel */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t("dressCodeMen.examples")}
              </h2>
              
              <div className="relative">
                <Carousel className="w-full max-w-4xl mx-auto">
                  <CarouselContent>
                    {tailcoatExamples.map((example, index) => (
                      <CarouselItem key={index}>
                        <div className="relative">
                          <img
                            src={example.src}
                            alt={example.alt}
                            className="w-full h-[600px] object-cover rounded-lg"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </section>

          {/* 6. Avoid Section – Attire & Colors */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                
                {/* First Column: Colors */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t("dressCodeMen.avoidWhite")}
                  </h2>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {t("dressCodeMen.avoidWhiteDesc")}
                  </p>

                  {/* Color Swatches */}
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

                {/* Second Column: Informal Attire */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t("dressCodeMen.avoidInformal")}
                  </h2>
                  
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {t("dressCodeMen.avoidInformalDesc")}
                  </p>
                  
                  <ul className="space-y-4 text-lg text-gray-700 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>{t("dressCodeMen.avoidSneakers")}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>{t("dressCodeMen.avoidTshirts")}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>{t("dressCodeMen.avoidPolo")}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-primary font-bold">•</span>
                      <span>{t("dressCodeMen.avoidJeans")}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Closing Note Section */}
          <section className="mb-12">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed italic">
                {t("dressCodeMen.closing")}
              </p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default function MenDressCodePage() {
  return (
    <LanguageProvider>
      <MenDressCodePageContent />
    </LanguageProvider>
  )
}

