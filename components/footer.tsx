"use client"

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sidebar-primary">Thika Pottery Studio</h3>
            <p className="text-sm text-sidebar-foreground/80">
              Handcrafted pottery made with passion and skill. Each piece is unique and tells its own story.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-sidebar-foreground/80">
              <p>Thika, Kenya</p>
              <p>+254 700 000 000</p>
              <p>info@thikapottery.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
          <p className="text-sm text-sidebar-foreground/60">
            © 2024 Thika Pottery Studio. All rights reserved. Made with ❤️ in Kenya.
          </p>
        </div>
      </div>
    </footer>
  )
}
