"use client"

import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProducts = () => {
    const element = document.getElementById("products")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted"
    >
      <div className="absolute inset-0 bg-[url('/free-range-chickens-on-poultry-farm-background.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative z-10 text-center container-responsive max-w-4xl mx-auto">
        <h1 className="text-foreground mb-6 text-balance">Premium Chickens & Products from Thika</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Quality chickens and fresh chicken products raised with care and expertise. From layers to broilers, fresh
          eggs to day-old chicks - we provide healthy, well-bred chickens to meet all your farming needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground btn-responsive w-full sm:w-auto"
            onClick={scrollToProducts}
          >
            View Our Chickens
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="btn-responsive w-full sm:w-auto bg-transparent"
            onClick={() => {
              const element = document.getElementById("about")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Learn Our Story
          </Button>
        </div>
      </div>
    </section>
  )
}
