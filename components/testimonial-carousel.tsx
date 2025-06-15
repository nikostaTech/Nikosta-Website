"use client"

import type React from "react"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { AnimatedGradientText } from "@/components/animated-gradient-text"

interface TestimonialProps {
  image: string
  testimonial: string
  name: string
  role: string
  company: string
}

const testimonials: TestimonialProps[] = [
  {
    image: "/barub.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    testimonial:
      "Nikosta ke data analytics solutions ne hamare patient outcomes ko improve kiya aur operations optimize kiye.",
    name: "Suman Gaurav",
    role: "CTO",
    company: "Chilly Restaurant",
  },
  {
    image: "/aakash.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    testimonial:
      "The custom software solution developed by Nikosta has streamlined our operations and increased productivity by 35%. Their team was professional and responsive throughout the project.",
    name: "Aakash Trivedi",
    role: "Director",
    company: "Tradeneeti",
  },
  {
    image: "/jija.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    testimonial:
      "Nikosta ke cybersecurity solutions ne hamare data protection framework ko kaafi mazboot banaya. Unki proactive approach se hamare operations safe rahe..",
    name: "Varun Kumar",
    role: "CEO",
    company: "Healthcare Systems",
  },
  {
    image: "/ranidi.JPG?auto=compress&cs=tinysrgb&dpr=1&w=500",
    testimonial:
      "Nikosta's cybersecurity team identified and resolved critical vulnerabilities in our infrastructure. Their proactive approach to security has given us peace of mind in an increasingly complex threat landscape.",
    name: "Priyanka Rani",
    role: "CTO",
    company: "Taxall",
  },
  {
    image: "/badema.png?auto=compress&cs=tinysrgb&dpr=1&w=500",
    testimonial:
      "Nikosta ne hamare legacy systems ko modern, scalable architecture mein transform kar diya. Unki expertise se hame significant cost savings aur performance improvement mili.",
    name: "Gaurav Kumar",
    role: "Manager",
    company: "Manglam Events ",
  },
  {
    image: "/Priyadi.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    testimonial:
      "Nikosta's AI implementation has revolutionized our customer service operations. Their team's expertise in machine learning and natural language processing is truly impressive.",
    name: "Priya Upadhyay",
    role: "CEO",
    company: "AI Solutions",
  },
]

export function TestimonialCarousel() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)

  // Safely determine items per view based on screen size
  const [itemsPerView, setItemsPerView] = useState(3)

  // Update items per view on window resize
  const updateItemsPerView = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2)
      } else {
        setItemsPerView(3)
      }
    }
  }, [])

  useEffect(() => {
    // Set initial items per view
    updateItemsPerView()

    // Add resize listener
    window.addEventListener("resize", updateItemsPerView)
    return () => window.removeEventListener("resize", updateItemsPerView)
  }, [updateItemsPerView])

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)
    api.on("reInit", handleSelect)

    return () => {
      api.off("select", handleSelect)
      api.off("reInit", handleSelect)
    }
  }, [api])

  // Simple autoplay with pause functionality
  useEffect(() => {
    if (!api || isAutoplayPaused) return

    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [api, isAutoplayPaused])

  // Function to pause autoplay temporarily
  const pauseAutoplay = useCallback(() => {
    setIsAutoplayPaused(true)
    // Resume after 5 seconds
    setTimeout(() => {
      setIsAutoplayPaused(false)
    }, 9000)
  }, [])

  // Navigation functions
  const scrollPrev = useCallback(() => {
    if (api) {
      api.scrollPrev()
      pauseAutoplay()
    }
  }, [api, pauseAutoplay])

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext()
      pauseAutoplay()
    }
  }, [api, pauseAutoplay])

  const scrollTo = useCallback(
    (index: number) => {
      if (api) {
        api.scrollTo(index)
        pauseAutoplay()
      }
    },
    [api, pauseAutoplay],
  )

  const handleCardClick = useCallback(
    (index: number, event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      scrollTo(index)
    },
    [scrollTo],
  )

  return (
    <section className="w-full py-20 bg-[#f8f8f5]">
      <div className="container px-4 md:px-6">
        {/* Heading Section */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <Badge variant="premium" className="px-3 py-1 text-sm">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              What Our <AnimatedGradientText text="Clients Say" />
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Trusted by businesses worldwide to deliver exceptional technology solutions
            </p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full max-w-7xl mx-auto"
            opts={{
              align: "center",
              loop: true,
              skipSnaps: false,
              slidesToScroll: 1,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "pl-4 pr-4 sm:basis-1/2 lg:basis-1/3",
                    itemsPerView === 1 ? "basis-full" : "",
                    itemsPerView === 2 ? "basis-1/2" : "",
                  )}
                >
                  <div className="h-full p-1">
                    <Card
                      className={`h-full rounded-xl overflow-hidden transition-all duration-500 ease-in-out border-0 cursor-pointer select-none ${
                        current === index
                          ? "opacity-100 scale-100 z-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
                          : "opacity-30 scale-[0.92] z-0 hover:opacity-50 hover:scale-95"
                      }`}
                      onClick={(e) => handleCardClick(index, e)}
                    >
                      <CardContent className="p-6 h-full flex flex-col bg-white">
                        <div className="flex items-start gap-4 mb-5">
                          <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-100">
                            <Image
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                            <p className="text-primary-600 text-sm">{testimonial.company}</p>
                            <div className="flex mt-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="relative flex-grow bg-[#f5f5f2] p-5 rounded-xl">
                          <Quote className="absolute top-3 left-3 text-primary-200 h-8 w-8 opacity-50" />
                          <p className="text-gray-700 leading-relaxed relative pl-2 italic text-sm">
                            "{testimonial.testimonial}"
                          </p>
                        </div>

                        <div className="mt-4 h-1 w-12 bg-primary-500 rounded-full"></div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Navigation Buttons */}
          <Button
            onClick={scrollPrev}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-50 border border-primary-100 text-primary-600 hover:text-primary-700 h-10 w-10 rounded-full shadow-sm -ml-5 md:ml-0"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            onClick={scrollNext}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-primary-50 border border-primary-100 text-primary-600 hover:text-primary-700 h-10 w-10 rounded-full shadow-sm -mr-5 md:mr-0"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Pagination Indicators */}
          <div className="flex items-center justify-center mt-12 gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  current === index ? "w-8 bg-primary-500" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Pause Indicator */}
          {isAutoplayPaused && (
            <div className="absolute top-4 right-4 z-30 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
              
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
