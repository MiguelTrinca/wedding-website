"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Mail, Church } from "lucide-react"

export default function Ceremony() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ceremony
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We will exchange vows at the historic Sé do Funchal Cathedral
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Details Card */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Church className="h-6 w-6 text-green-600" />
                  Sé do Funchal
                </CardTitle>
                <CardDescription className="text-lg">
                  The cathedral in the heart of Funchal, a beautiful setting for our ceremony
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Ceremony: 2:30 PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>R. do Aljube 39, 9000-067 Funchal, Madeira, Portugal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <span>+351 291 228 155</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <span>paroquia@sedofunchal.pt</span>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                    <a href="/nearby-hotels">Nearby Hotels</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="/dress-code">Dress Code</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Map */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Se do Funchal Map</CardTitle>
                <CardDescription>Sé do Funchal Cathedral</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-80 rounded-lg overflow-hidden bg-gray-200">
                  <iframe
                    title="Sé do Funchal Map"
                    src="https://www.google.com/maps?q=Sé%20do%20Funchal&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}


