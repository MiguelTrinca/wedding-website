"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Beatriz & Miguel</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link 
            href="/activities" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Activities
          </Link>
          <Link 
            href="/dress-code" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Dress Code
          </Link>
          <Link 
            href="/transportation" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Transportation
          </Link>
          <Button asChild>
            <Link href="/rsvp">RSVP</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </Button>
      </div>
    </header>
  )
}

