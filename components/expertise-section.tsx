import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { linkSync } from "fs"

// Define the expertise items with image paths
const expertiseItems = [
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom software solutions tailored to your business needs.",
    imagePath: "/soft.jpg", // You can replace with your actual image paths
    link: "/services#software-development",
    
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services.",
    imagePath: "/expertise/cloud-solutions.jpg",
    link: "/services#cloud-solutions",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    description: "Transform your data into actionable business insights.",
    imagePath: "/expertise/data-analytics.jpg",
    link: "/services#data-analytics",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect your business with advanced security solutions.",
    imagePath: "/expertise/cybersecurity.jpg",
    link: "/services#cybersecurity",
  },
]

export function ExpertiseSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Expertise</h2>
            <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital era.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {expertiseItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={item.imagePath || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2 flex-1 text-gray-600">{item.description}</p>
                <Link href={item.link} className="mt-4 inline-flex items-center text-primary-500 hover:underline">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/services">
            <Button className="bg-primary-500 text-white hover:bg-primary-600">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

