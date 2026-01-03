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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { HelpCircle } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "./ui/input-group"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

interface Guest {
  firstName: string
  lastName: string
  isKid: boolean
  foodRestrictions: string
  additionalFoodNotes: string
}

export default function RSVP() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Here you would typically send the data to your backend
    console.log("RSVP Data:", { formData, guests })
  }

  if (isSubmitted) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-green-700">Thank You!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-700">
              Your RSVP has been received. We can't wait to celebrate with you!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Thank you message */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-700 mb-4">RSVP</h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are so excited to celebrate our special day with you! Your presence means the world to us, 
            and we can't wait to share this beautiful moment together. Please let us know if you'll be 
            joining us for our wedding celebration.
          </p>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>👶 Kids Welcome!</strong> We'll have a professional nanny available to entertain 
              children ages 0-12 during the celebration, so parents can enjoy the festivities worry-free.
            </p>
          </div>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>🚌 Transportation!</strong> We'll provide transportation from the hotel to the venue and back.
              Let us know if you would like to use this service, so that we can arrange accordingly.
            </p>
          </div>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>🍔 Food Restrictions!</strong> Let us know if you have any food restrictions, so that we can accommodate you.
            </p>
          </div>
        </div>

        {/* RSVP Form */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-center">Please respond by filling out the form below</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Main Guest Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label 
                    htmlFor="firstName" //className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </Label>
                  <InputGroup>
                    <InputGroupInput 
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      />
                    
                    {/*<InputGroupAddon align="inline-end">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InputGroupButton
                            variant="ghost"
                            aria-label="Help"
                            size="icon-xs"
                          >
                            <HelpCircle />
                          </InputGroupButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>We&apos;ll use this to send you notifications</p>
                        </TooltipContent>
                      </Tooltip>
                  </InputGroupAddon>
                    */}
                  </InputGroup>
                  {/*<Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />*/}
                </div>
                <div>
                <Label 
                    htmlFor="firstName" //className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
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
                  {/*<input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />*/}
                </div>
              </div>

              <div>
                <Label htmlFor="email">
                  Email Address *
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
                  Will you be joining us? *
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
                    <span>Yes, I'll be there!</span>
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
                    <span>Sorry, I can't make it</span>
                  </label>
                </div>
              </div>

              {/* Transportation - only show if attending */}
              {formData.isAttending === "yes" && (
                <div>
                  <Label htmlFor="transportation" className="block text-sm font-medium text-gray-700 mb-2">
                    Does your party need transportation? *
                  </Label>
                  <Select
                    value={formData.needsTransportation}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, needsTransportation: value }))}
                  >
                    <SelectTrigger id="transportation" className="w-full">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="yes">Yes, we need transportation</SelectItem>
                      <SelectItem value="no">No, we don't need transportation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {/* Guest Count - only show if attending */}
              {formData.isAttending === "yes" && (
                <div>
                  <Label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                    How many people will be joining besides yourself?
                  </Label>
                  <Select
                    value={formData.guestCount > 0 ? formData.guestCount.toString() : ""}
                    onValueChange={handleGuestCountChange}
                  >
                    <SelectTrigger id="guestCount" className="w-full">
                      <SelectValue placeholder="Select number of people" />
                    </SelectTrigger>
                    <SelectContent>
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
                    <Label htmlFor="mainGuestFoodRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
                      Food Restrictions or Dietary Preferences (Yourself)
                    </Label>
                    <Select
                      value={formData.foodRestrictions}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, foodRestrictions: value }))}
                    >
                      <SelectTrigger id="mainGuestFoodRestrictions" className="w-full">
                        <SelectValue placeholder="Select dietary preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="gluten-free">Gluten-free</SelectItem>
                        <SelectItem value="dairy-free">Dairy-free</SelectItem>
                        <SelectItem value="nut-allergy">Nut Allergy</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  {formData.foodRestrictions === "other" && (
                    <div>
                      <Label htmlFor="mainGuestAdditionalFoodNotes" className="block text-sm font-medium text-gray-700 mb-2">
                        Please specify additional food restrictions or notes
                      </Label>
                      <Textarea
                        id="mainGuestAdditionalFoodNotes"
                        value={formData.additionalFoodNotes}
                        onChange={(e) => setFormData(prev => ({ ...prev, additionalFoodNotes: e.target.value }))}
                        placeholder="Please describe any food restrictions or dietary requirements..."
                        className="w-full"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Additional Guest Information */}
              {formData.isAttending === "yes" && (
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-700">
                    Additional Guest Information
                  </h3>
                  {guests.map((guest, index) => (
                    <Card key={index} className="bg-gray-50">
                      <CardContent className="pt-4">
                        <h4 className="text-sm font-medium text-gray-600 mb-3">
                          Guest {index + 1}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              First Name
                            </label>
                            <input
                              type="text"
                              value={guest.firstName}
                              onChange={(e) => handleGuestChange(index, "firstName", e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              value={guest.lastName}
                              onChange={(e) => handleGuestChange(index, "lastName", e.target.value)}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <label className="flex items-center">
                            <input
                              type="checkbox"
                              checked={guest.isKid}
                              onChange={(e) => handleGuestChange(index, "isKid", e.target.checked)}
                              className="mr-2"
                            />
                            <span className="text-sm text-gray-700">
                              This guest is a child (0-12 years old)
                            </span>
                          </label>
                        </div>
                        <div className="mt-4 space-y-4">
                          <div>
                            <Label htmlFor={`guest-${index}-food-restrictions`} className="block text-sm font-medium text-gray-700 mb-2">
                              Food Restrictions or Dietary Preferences
                            </Label>
                            <Select
                              value={guest.foodRestrictions}
                              onValueChange={(value) => handleGuestChange(index, "foodRestrictions", value)}
                            >
                              <SelectTrigger id={`guest-${index}-food-restrictions`} className="w-full">
                                <SelectValue placeholder="Select dietary preference" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="none">None</SelectItem>
                                <SelectItem value="vegetarian">Vegetarian</SelectItem>
                                <SelectItem value="vegan">Vegan</SelectItem>
                                <SelectItem value="gluten-free">Gluten-free</SelectItem>
                                <SelectItem value="dairy-free">Dairy-free</SelectItem>
                                <SelectItem value="nut-allergy">Nut Allergy</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          {guest.foodRestrictions === "other" && (
                            <div>
                              <Label htmlFor={`guest-${index}-additional-food-notes`} className="block text-sm font-medium text-gray-700 mb-2">
                                Please specify additional food restrictions or notes
                              </Label>
                              <Textarea
                                id={`guest-${index}-additional-food-notes`}
                                value={guest.additionalFoodNotes}
                                onChange={(e) => handleGuestChange(index, "additionalFoodNotes", e.target.value)}
                                placeholder="Please describe any food restrictions or dietary requirements..."
                                className="w-full"
                              />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}

              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-green-700 hover:bg-green-800 text-white py-3"
                >
                  Submit RSVP
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
