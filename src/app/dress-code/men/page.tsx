"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { useLanguage } from "@/contexts/LanguageContext"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Car, Facebook, Link, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

function MenDressCodePageContent() {
  const { t } = useLanguage()
  const [current, setCurrent] = useState(0)
  
  // Real-life tailcoat examples for carousel
  const tailcoatExamples = [
    {
      src: "https://i.pinimg.com/736x/ee/b3/ab/eeb3ab301f32fa87ef2f7b66e42e7c88.jpg",
      alt: "Beckam Tailcoat"
    },
    {
      src: "https://www.wedmagazine.co.uk/content/images/FAVOURBROOK_SHOT_01_126.jpg",
      alt: "Tailcoat example"
    },
    {
      src: "https://i.pinimg.com/736x/ae/85/7f/ae857f9ac09037f2e330cde4fc22f173.jpg",
      alt: "Two men dressed with tailcoat"
    },
    {
      src: "https://www.afarleysuithire.co.uk/wp-content/uploads/2024/03/240890020_436922507632654_3287594996395485224_n-e1711630379576.jpg",
      alt: "Friends with tailcoat"
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
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {t("dressCodeMen.description")}
            </p>
          </div>


          {/* 4. Tailcoat Anatomy Visualization Section */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                {t("dressCodeMen.howToWear")}
              </h2>
              
              <div className="relative flex flex-col md:flex-row gap-4 md:gap-8">
                {/* Left: Illustration */}
                <div className="flex-shrink-0 w-full md:w-2/5">
                  <div className="relative bg-secondary/20  rounded-lg p-4 md:p-8 border-2 border-gray-200">
                    <div className="relative aspect-[2/3] max-w-xs mx-auto">
                      <img
                        src="https://i.pinimg.com/736x/ee/b3/ab/eeb3ab301f32fa87ef2f7b66e42e7c88.jpg"
                        alt="Traditional tailcoat illustration"
                        className="w-full h-full rounded-xl  object-contain"
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
                      <p className="text-foreground/60 text-sm">
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
                      <p className="text-foreground/60 text-sm">
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
                      <p className="text-foreground/60 text-sm">
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
                      <p className="text-foreground/60 text-sm">
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
                      <p className="text-foreground/60 text-sm">
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
                      <p className="text-foreground/60 text-sm">
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
                <Carousel
                  className="w-full max-w-lg mx-auto rounded-xl border bg-secondary/20 shadow-lg p-4"
                  opts={{ loop: true }}
                  setApi={(api) => {
                    if (!api) return
                    setCurrent(api.selectedScrollSnap())
                    api.on("select", () => setCurrent(api.selectedScrollSnap()))
                  }}
                >
                  <CarouselContent className="-ml-4">
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
                
                {/* Pagination dots */}
                <div className="mt-4 flex justify-center gap-2">
                  {tailcoatExamples.map((_, index) => (
                    <span
                      key={index}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        index === current ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
            </div>

            </div>
          </section>

          {/** Where to Rent */}
          <section className="py-20 scroll-mt-20">
          <div className="container mx-auto px-4">


            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="bg-secondary/20">
                <CardHeader>
                  <CardTitle className="text-foreground">{t("dressCodeMen.rentFraque")}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 mb-4">
                    {t("dressCodeMen.rentFraqueDesc")}
                  </p>
                  <div className="flex flex-col gap-3 mt-4">
                    <div className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mt-4">
                      <MapPin className="h-5 w-5" />
                      <span>Rua do Ribeirinho de Baixo 8A, 2º Andar, Porta J, Funchal, Portugal, 9050-447</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mt-4">
                      <Mail className="h-5 w-5" />
                      <a
                        href="mailto:nupciasbymichelle@gmail.com"
                      >
                        nupciasbymichelle@gmail.com
                      </a>
                    </div>
                    <div className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mt-4">
                      <Phone className="h-5 w-5" />
                      <span>+351 916 325 020</span>
                    </div>
                    <div className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors mt-4">
                      <Facebook className="h-5 w-5" />
                      <a href="https://www.facebook.com/nupciasbymichelle">
                        Núpcias by Michelle
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                    {t("dressCodeWomen.avoidWhite")}
                  </h2>
                  
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("dressCodeWomen.avoidWhiteDesc")}
                  </p>

                  {/* Color Swatches */}
                  <div className="grid grid-cols-4 gap-3">
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-white"></div>
                      <p className="text-sm text-center text-foreground/80 ">{t("dressCodeWomen.colorWhite")}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FFFFF0]"></div>
                      <p className="text-sm text-center text-foreground/80 ">{t("dressCodeWomen.colorIvory")}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FAF0E6]"></div>
                      <p className="text-sm text-center text-foreground/80 ">{t("dressCodeWomen.colorOffWhite")}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FFFDD0]"></div>
                      <p className="text-sm text-center text-foreground/80 ">{t("dressCodeWomen.colorCream")}</p>
                    </div>
                  </div>
                </div>

                {/* Second Column: Informal Attire */}
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {t("dressCodeMen.avoidInformal")}
                  </h2>
                  
                  <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                    {t("dressCodeMen.avoidInformalDesc")}
                  </p>
                  
                  <ul className="space-y-4 text-lg text-foreground/80">
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
              <p className="text-lg text-accent leading-relaxed italic">
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

