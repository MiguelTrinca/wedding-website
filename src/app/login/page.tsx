"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ACCESS_CODES } from "@/lib/auth"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = () => {
    if (!ACCESS_CODES.includes(code.trim())) {
      setError("Invalid access code")
      return
    }

    document.cookie = `wedding_auth=true; path=/; max-age=${60 * 60 * 24 * 30}`
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome 💍
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Please enter the access code provided with your invitation
        </p>

        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Access code"
          className="w-full border rounded-md px-4 py-3 mb-4 text-center text-lg"
        />

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">
            {error}
          </p>
        )}

        <Button className="w-full" onClick={handleSubmit}>
          Enter
        </Button>
      </div>
    </div>
  )
}
