"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Layer Chickens",
    price: "KSh 800 each",
    image: "/brown-layer-chickens-poultry-farm.jpg",
    description: "High-quality layer chickens for egg production",
  },
  {
    id: 2,
    name: "Broiler Chickens",
    price: "KSh 600 each",
    image: "/white-broiler-chickens-meat-production.jpg",
    description: "Fast-growing broiler chickens for meat production",
  },
  {
    id: 3,
    name: "Kienyeji Chickens",
    price: "KSh 1,200 each",
    image: "/kienyeji-indigenous-chickens-free-range.jpg",
    description: "Indigenous free-range chickens, hardy and productive",
  },
  {
    id: 4,
    name: "Day-Old Chicks",
    price: "KSh 80 each",
    image: "/yellow-fluffy-day-old-chicks-baby-chickens.jpg",
    description: "Healthy day-old chicks, perfect for raising",
  },
  {
    id: 5,
    name: "Fresh Eggs",
    price: "KSh 15 per egg",
    image: "/fresh-brown-chicken-eggs-farm-organic.jpg",
    description: "Farm-fresh eggs from our free-range chickens",
  },
  {
    id: 6,
    name: "Chicken Meat",
    price: "KSh 400 per kg",
    image: "/fresh-organic-chicken-meat-cuts.jpg",
    description: "Fresh, organic chicken meat from our farm",
  },
]

export function FeaturedProducts() {
  const openWhatsApp = (productName: string) => {
    const message = `Hi! I'm interested in purchasing ${productName}. Could you please provide more details about availability and pricing?`
    const whatsappUrl = `https://wa.me/254700000000?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="products" className="py-16 bg-background">
      <div className="container mx-auto container-responsive">
        <div className="text-center mb-12">
          <h2 className="text-foreground mb-4">Our Chicken Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our selection of healthy chickens and fresh chicken products. All our chickens are raised with
            proper care and nutrition for the best quality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-card-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-3">{product.description}</p>
                  <p className="text-xl sm:text-2xl font-bold text-primary">{product.price}</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground btn-responsive"
                  onClick={() => openWhatsApp(product.name)}
                >
                  Inquire via WhatsApp
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
