import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function WomenDressCodePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* Title/Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Women's Dress Code
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              This page provides guidance to help guests choose appropriate formal attire for our special day. We want everyone to feel comfortable and elegant while respecting our wedding party's color choices.
            </p>
          </div>

          {/* Formal Attire Explanation Section */}
          <section className="mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Formal Attire
              </h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  We invite our guests to dress in formal attire that reflects the elegance of this special occasion.
                </p>
                <div className="space-y-3 mt-6">
                  <p className="font-semibold text-foreground">Recommended attire includes:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Long dresses and elegant evening gowns</li>
                    <li>Refined fabrics such as silk, chiffon, satin, or lace</li>
                    <li>Sophisticated silhouettes that complement the formal setting</li>
                    <li>Classic and timeless styles that celebrate the occasion</li>
                  </ul>
                </div>
                <p className="mt-6">
                  The goal is to look polished and celebratory while ensuring the focus remains on the wedding party's chosen color palette.
                </p>
              </div>
            </div>
          </section>

          {/* Formal Attire Inspiration Gallery */}
          <section className="mb-20">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                Examples of Formal Attire
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
                Color Guidelines
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Text Explanation */}
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-4">
                    Please Avoid White and White-Like Shades
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    To honor the bride and maintain the special significance of white on this day, we kindly ask that guests avoid wearing white, ivory, cream, and very light neutral tones.
                  </p>
                </div>

                {/* Right: Color Swatches */}
                <div>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-white"></div>
                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">White</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FFFFF0]"></div>
                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">Ivory</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FAF0E6]"></div>
                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">Off-white</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-24 rounded-lg border-2 border-gray-300 bg-[#FFFDD0]"></div>
                      <p className="text-sm text-center text-gray-600 dark:text-gray-400">Cream</p>
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
                All Other Formal Colors Are Welcome
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center leading-relaxed">
                We encourage guests to choose elegant colors outside shades of white. Feel free to explore beautiful jewel tones, rich neutrals, and sophisticated hues that make you feel confident and celebratory. We know you will look amazing in anything you wear!
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
                Thank you for taking the time to review our dress code guidelines. We truly appreciate your effort to respect these choices and help make our wedding day as beautiful and harmonious as possible. We can't wait to celebrate with you!
              </p>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

