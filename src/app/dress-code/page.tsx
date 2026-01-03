import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function DressCodePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
              Dress Code
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Choose your style and discover our dress code recommendations
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Women's Card */}
            <Link href="/dress-code/women" className="group">
              <Card className="relative overflow-hidden h-[500px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-2 hover:border-primary/50">
                <div className="relative h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&fit=crop"
                    alt="Woman in beautiful wedding gown"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="text-3xl font-bold text-white mb-2">Women</h2>
                    <p className="text-white/90 text-lg">Elegant wedding attire</p>
                    <div className="mt-4 flex items-center text-white/90">
                      <span className="text-sm font-medium">View details</span>
                      <svg
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>

            {/* Men's Card */}
            <Link href="/dress-code/men" className="group">
              <Card className="relative overflow-hidden h-[500px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] border-2 hover:border-primary/50">
                <div className="relative h-full w-full">
                  <img
                    src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&q=80&fit=crop"
                    alt="Man in elegant tail coat"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h2 className="text-3xl font-bold text-white mb-2">Men</h2>
                    <p className="text-white/90 text-lg">Formal tail coat attire</p>
                    <div className="mt-4 flex items-center text-white/90">
                      <span className="text-sm font-medium">View details</span>
                      <svg
                        className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

