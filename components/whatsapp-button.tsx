"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppButton() {
  const openWhatsApp = () => {
    const message = "Hi! I'm interested in your chicken products. Can you help me?"
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <Button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse flex items-center gap-2 px-4 py-3 sm:px-6 sm:py-4 min-h-[56px] group"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
        <span className="hidden sm:inline-block font-medium text-sm sm:text-base">Chat Us</span>
        <span className="sm:hidden font-medium text-xs">Chat</span>
        <span className="sr-only">Chat on WhatsApp</span>
      </Button>
    </div>
  )
}
