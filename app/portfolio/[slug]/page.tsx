import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProjectPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the project data based on the slug
  // For this example, we'll use a mock project
  const project = {
    title: "E-commerce Platform",
    category: "Web Development",
    client: "Fashion Retailer",
    year: "2023",
    description:
      "A comprehensive e-commerce platform built with Next.js and integrated with a headless CMS. The platform includes advanced features such as product filtering, user authentication, shopping cart functionality, and secure payment processing.",
    challenge:
      "The client needed a modern, responsive e-commerce platform that could handle a large inventory and provide a seamless shopping experience for their customers.",
    solution:
      "We developed a custom e-commerce solution using Next.js for the frontend and a headless CMS for content management. The platform was designed with a focus on user experience, performance, and scalability.",
    results:
      "The new platform resulted in a 40% increase in online sales and a 25% reduction in cart abandonment rate. The client also reported a significant improvement in customer satisfaction and engagement.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Button>
          </Link>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
                <p className="text-gray-500">{project.category}</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Client:</span>
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Year:</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <p className="text-gray-700">{project.description}</p>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={800}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">The Challenge</h2>
                <p className="text-gray-700">{project.challenge}</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Our Solution</h2>
                <p className="text-gray-700">{project.solution}</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">The Results</h2>
                <p className="text-gray-700">{project.results}</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Project Gallery</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.images.slice(1).map((image, index) => (
                    <Image
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 2}`}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Interested in working with us?</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Link href="/contact">
              <Button className="w-full" size="lg">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

