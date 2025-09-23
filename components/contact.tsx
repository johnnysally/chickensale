"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  const openWhatsApp = () => {
    const message = "Hi! I'd like to know more about your pottery products and services."
    const whatsappUrl = `https://wa.me/254727439707?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const openLocation = () => {
    window.open("https://maps.google.com/?q=Thika,Kenya", "_blank")
  }

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to order or have questions about our pottery? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="text-center bg-card">
            <CardHeader>
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Thika, Kenya</p>
              <Button variant="link" className="text-primary p-0 h-auto text-sm sm:text-base" onClick={openLocation}>
                View on Map
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center bg-card">
            <CardHeader>
              <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">+254 727 439 707</p>
              <Button variant="link" className="text-primary p-0 h-auto text-sm sm:text-base" onClick={openWhatsApp}>
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center bg-card">
            <CardHeader>
              <Mail className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">info@thikapottery.com</p>
              <Button
                variant="link"
                className="text-primary p-0 h-auto text-sm sm:text-base"
                onClick={() => (window.location.href = "mailto:info@thikapottery.com")}
              >
                Send Email
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center bg-card">
            <CardHeader>
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle className="text-lg">Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Mon-Fri: 8AM-6PM
                <br />
                Sat: 9AM-4PM
                <br />
                Sun: Closed
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto min-h-[48px]"
            onClick={openWhatsApp}
          >
            Start WhatsApp Chat
          </Button>
        </div>
      </div>
    </section>
  )
}
