export function About() {
  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to Thika Poultry Farm, where quality meets care. Located in the heart of Thika, we have been
                raising healthy, productive chickens for over a decade, serving farmers and households across Kenya and
                beyond.
              </p>
              <p>
                Our journey began with a simple passion for chicken farming and a commitment to providing high-quality
                birds and products. What started as a small backyard operation has grown into a thriving chicken farm
                where each bird is raised with proper nutrition and veterinary care.
              </p>
              <p>
                We specialize in various chicken breeds including layers, broilers, and indigenous Kienyeji chickens. We
                also provide fresh eggs, day-old chicks, and organic chicken meat. Using modern farming techniques
                combined with traditional knowledge, we ensure our chickens are healthy, productive, and well-adapted to
                local conditions.
              </p>
              <p>
                Whether you're starting a commercial chicken venture, expanding your existing farm, or looking for
                backyard chickens for your family, we're here to provide you with the best chickens and expert advice to
                ensure your success.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/poultry-farmer-feeding-chickens-in-modern-farm.jpg"
              alt="Poultry farmer with chickens"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
