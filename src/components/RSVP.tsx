"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Loader2 } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { InputGroup, InputGroupInput } from "./ui/input-group"
import { useLanguage } from "@/contexts/LanguageContext"
import { motion, AnimatePresence } from "framer-motion"
import ThankYouPage from "@/app/rsvp/thankyou/page"
import { useRouter } from "next/navigation"

interface Guest {
  firstName: string
  lastName: string
  isKid: boolean
  foodRestrictions: string
  additionalFoodNotes: string
}

export default function RSVP() {
  const { t } = useLanguage()
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isAttending: "",
    guestCount: 0,
    needsTransportation: "",
    foodRestrictions: "",
    additionalFoodNotes: ""
  })
  
  const [guests, setGuests] = useState<Guest[]>([])
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleGuestCountChange = (value: string) => {
    const count = parseInt(value) || 0
    setFormData(prev => ({
      ...prev,
      guestCount: count
    }))
    
    // Update guests array to match the count
    const newGuests = Array.from({ length: count }, (_, index) => 
      guests[index] || { firstName: "", lastName: "", isKid: false, foodRestrictions: "", additionalFoodNotes: "" }
    )
    setGuests(newGuests)
  }

  const handleGuestChange = (index: number, field: keyof Guest, value: string | boolean) => {
    const newGuests = [...guests]
    newGuests[index] = {
      ...newGuests[index],
      [field]: value
    }
    setGuests(newGuests)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    setIsSubmitting(true)

    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formData,
        guests,
      }),
    })
  
    if (!res.ok) {
      alert("Something went wrong. Please try again.")
      setIsSubmitted(false)
      return
    }
  
    setIsSubmitted(true)
    setIsSubmitted(false)

    router.push("/rsvp/thankyou")

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })

  }

  const isMainGuestValid = () => {
    if (!formData.firstName.trim()) return false
    if (!formData.lastName.trim()) return false
    if (!formData.email.trim()) return false
    if (!formData.isAttending) return false
  
    if (formData.isAttending === "yes") {
      if (!formData.needsTransportation) return false
      if (formData.guestCount === undefined) return false
      if (!formData.foodRestrictions) return false
  
      if (
        formData.foodRestrictions === "other" &&
        !formData.additionalFoodNotes.trim()
      )
        return false
    }
  
    return true
  }

  const areGuestsValid = () => {
    if (formData.isAttending !== "yes") return true
  
    return guests.every((guest) => {
      if (!guest.firstName.trim()) return false
      if (!guest.lastName.trim()) return false
      if (!guest.foodRestrictions) return false
  
      if (
        guest.foodRestrictions === "other" &&
        !guest.additionalFoodNotes.trim()
      ) {
        return false
      }
  
      return true
    })
  }

  const isFormValid = isMainGuestValid() && areGuestsValid()


  if (isSubmitted) {
  return (
    <ThankYouPage/>
  )
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Thank you message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-secondary mb-4">{t("rsvp.title")}</h1>
          <p className="text-lg text-foreground/80 leading-relaxed">
            {t("rsvp.description")}
          </p>
          <br/>
          <Card className="text-left overflow-hidden bg-secondary/20">
            <CardHeader>
              <CardTitle className="text-foreground">{t("rsvp.kidsWelcomeTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80">
                {t("rsvp.kidsWelcome")}
              </p>
          </CardContent>
          </Card>

          <br/>

          <Card className="text-left overflow-hidden bg-secondary/20">
            <CardHeader>
              <CardTitle className="text-foreground">{t("rsvp.transportationTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80">
                {t("rsvp.transportation")}
              </p>
          </CardContent>
          </Card>

          <br/>

          <Card className="text-left overflow-hidden bg-secondary/20">
            <CardHeader>
              <CardTitle className="text-foreground">{t("rsvp.foodCardTitle")}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-foreground/80">
                {t("rsvp.foodCard")}
              </p>
          </CardContent>
          </Card>


          <br/>

        </div>

        {/* RSVP Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-center">{t("rsvp.formTitle")}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Main Guest Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label 
                    htmlFor="firstName" 
                  >
                    {t("rsvp.firstName")} *
                  </Label>
                  <p className="text-xs text-foreground/60 mt-1">
                    {t("rsvp.nameHelp")}
                  </p>
                  <InputGroup>
                    <InputGroupInput 
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      />
                    
                  </InputGroup>
                </div>
                <div>
                <Label 
                    htmlFor="lastName" 
                  >
                    {t("rsvp.lastName")} *
                  </Label>
                  <InputGroup>
                    <InputGroupInput 
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      />
                  </InputGroup>
                </div>
              </div>

              <div>
                <Label htmlFor="email">
                  {t("rsvp.email")} *
                </Label>
                <InputGroup>
                  <InputGroupInput 
                    type="email"
                    id="eamil"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    />
                </InputGroup>
              </div>

              <div>
                <Label>
                  {t("rsvp.willJoin")} *
                </Label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isAttending"
                      value="yes"
                      checked={formData.isAttending === "yes"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>{t("rsvp.yes")}</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="isAttending"
                      value="no"
                      checked={formData.isAttending === "no"}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>{t("rsvp.no")}</span>
                  </label>
                </div>
              </div>

              {/* Transportation - only show if attending */}
              {formData.isAttending === "yes" && (
                <div>
                  <Label htmlFor="transportation" className="block text-sm font-medium text-foreground mb-2">
                    {t("rsvp.needsTransportation")} *
                  </Label>
                  <Select
                    value={formData.needsTransportation}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, needsTransportation: value }))}
                  >
                    <SelectTrigger id="transportation" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">{t("rsvp.transportationYes")}</SelectItem>
                      <SelectItem value="no">{t("rsvp.transportationNo")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Guest Count - only show if attending */}
              {formData.isAttending === "yes" && (
                <div>
                  <Label htmlFor="guestCount" className="block text-sm font-medium text-foreground mb-2">
                    {t("rsvp.guestCount")} *
                  </Label>
                  <p className="text-xs text-foreground/60 mt-1">
                    {t("rsvp.guestCountHelp")}
                  </p>
                  <Select
                    value={formData.guestCount.toString()}
                    onValueChange={handleGuestCountChange}
                  >
                    <SelectTrigger id="guestCount" className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">{t("rsvp.justMe")}</SelectItem>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Food Restrictions for Main Guest - only show if attending */}
              {formData.isAttending === "yes" && (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="mainGuestFoodRestrictions" className="block text-sm font-medium text-foreground mb-2">
                      {t("rsvp.foodRestrictionsTitle")}
                    </Label>
                    <Select
                      value={formData.foodRestrictions}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, foodRestrictions: value }))}
                    >
                      <SelectTrigger id="mainGuestFoodRestrictions" className="w-full">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">{t("rsvp.dietaryNone")}</SelectItem>
                        <SelectItem value="vegetarian">{t("rsvp.dietaryVegetarian")}</SelectItem>
                        <SelectItem value="vegan">{t("rsvp.dietaryVegan")}</SelectItem>
                        <SelectItem value="gluten-free">{t("rsvp.dietaryGlutenFree")}</SelectItem>
                        <SelectItem value="dairy-free">{t("rsvp.dietaryDairyFree")}</SelectItem>
                        <SelectItem value="nut-allergy">{t("rsvp.dietaryNutAllergy")}</SelectItem>
                        <SelectItem value="other">{t("rsvp.dietaryOther")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {formData.foodRestrictions === "other" && (
                    <div>
                      <Label htmlFor="mainGuestAdditionalFoodNotes" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("rsvp.specifyFoodRestrictions")}
                      </Label>
                      <Textarea
                        id="mainGuestAdditionalFoodNotes"
                        value={formData.additionalFoodNotes}
                        onChange={(e) => setFormData(prev => ({ ...prev, additionalFoodNotes: e.target.value }))}
                        placeholder={t("rsvp.describeFoodRestrictions")}
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Additional Guest Information */}
              {formData.isAttending === "yes" && guests.length >= 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">
                    {t("rsvp.additionalGuests")}
                  </h3>
                  <AnimatePresence>
                  {
                    guests.map((guest, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                    >
                    <Card key={index} className="bg-gray-50">
                      <CardContent className="pt-4">
                        <h4 className="text-sm font-medium text-secondary mb-3">
                          {t("rsvp.guest")} {index + 1}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              {t("rsvp.guestFirstName")}
                            </label>

                            <p className="text-xs text-foreground/60 mt-1">
                              {t("rsvp.nameHelp")}
                            </p>

                            <Input
                              type="text"
                              value={guest.firstName}
                              onChange={(e) => handleGuestChange(index, "firstName", e.target.value)}
                              className="bg-white text-foreground"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-foreground mb-2">
                              {t("rsvp.guestLastName")}
                            </label>
                            <Input
                              type="text"
                              value={guest.lastName}
                              onChange={(e) => handleGuestChange(index, "lastName", e.target.value)}
                              className="bg-white text-foreground"
                            />

                          </div>
                        </div>
                        <div className="mt-4">
                        <label className="flex items-center gap-2 mt-4">
                          <input
                            type="checkbox"
                            checked={guest.isKid}
                            onChange={(e) => handleGuestChange(index, "isKid", e.target.checked)}
                            className="accent-secondary"
                          />
                          <span className="text-sm text-gray-700">
                            {t("rsvp.guestIsKid")}
                          </span>
                        </label>
                        </div>
                        <div className="mt-4 space-y-4">
                          <div>
                            <Label htmlFor={`guest-${index}-food-restrictions`} className="block text-sm font-medium text-gray-700 mb-2">
                              {t("rsvp.guestFoodRestrictions")}
                            </Label>
                            <Select
                              value={guest.foodRestrictions}
                              onValueChange={(value) => handleGuestChange(index, "foodRestrictions", value)}
                            >
                              <SelectTrigger id={`guest-${index}-food-restrictions`} className="w-full">
                                <SelectValue placeholder={t("rsvp.selectDietary")} />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">{t("rsvp.dietaryNone")}</SelectItem>
                                <SelectItem value="vegetarian">{t("rsvp.dietaryVegetarian")}</SelectItem>
                                <SelectItem value="vegan">{t("rsvp.dietaryVegan")}</SelectItem>
                                <SelectItem value="gluten-free">{t("rsvp.dietaryGlutenFree")}</SelectItem>
                                <SelectItem value="dairy-free">{t("rsvp.dietaryDairyFree")}</SelectItem>
                                <SelectItem value="nut-allergy">{t("rsvp.dietaryNutAllergy")}</SelectItem>
                                <SelectItem value="other">{t("rsvp.dietaryOther")}</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          {guest.foodRestrictions === "other" && (
                            <div>
                              <Label htmlFor={`guest-${index}-additional-food-notes`} className="block text-sm font-medium text-gray-700 mb-2">
                                {t("rsvp.specifyFoodRestrictions")}
                              </Label>
                              <Textarea
                                id={`guest-${index}-additional-food-notes`}
                                value={guest.additionalFoodNotes}
                                onChange={(e) => handleGuestChange(index, "additionalFoodNotes", e.target.value)}
                                placeholder={t("rsvp.describeFoodRestrictions")}
                                className="w-full"
                              />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                    </motion.div>
                  ))}
                  </AnimatePresence>
                </div>
              )}

              <div className="pt-4">
              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full py-3"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {t("rsvp.submitting")}
                  </>
                ) : (
                  t("rsvp.submit")
                )}
              </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
