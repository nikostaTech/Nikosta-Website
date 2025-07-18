"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PremiumBackButton } from "@/components/premium-back-button"

export default function PortfolioPage() {
  // Sample case studies with unique images for each
  const projects = [
    {
      id: 1,
      title: "Taxall",
      category: "Finance Solutions",
      description:
        "Taxall is an AI-powered platform offering easy tax filing, smart calculations, chatbot support, secure access, and report generation.",
      image: "/taxall23.png",
      websiteUrl: "https://taxall.co.in",
      status: "completed",
    },
    {
      id: 6,
      title: "SPEAKING WARRIOR",
      category: "Coaching & Training",
      description:
        "A comprehensive platform dedicated to cultivating confident public speakers and storytellers through expert coaching, online courses, and personalized training programs.",
      image: "/speaking.png",
      websiteUrl: "https://speakingwarrior.in/",
      status: "completed",
    },
    {
      id: 4,
      title: "MAA AHILYA BAI HOSPITAL",
      category: "Medical",
      description:
        "Website for Maa Ahilya Bai Hospital offering services, specialties, emergency care, and patient-friendly information access.",
      image: "/hospital.png",
      websiteUrl: "https://maaahilyabai.com/",
      status: "completed",
    },
    {
      id: 2,
      title: "Tradeneeti",
      category: "Financial Services Institute",
      description:
        "A Financial Services Institute offering expert solutions in Stock market, investment, and compliance through smart technology, personalized advice, and secure platforms.",
      image: "/tradeneeti.png",
      websiteUrl: "https://tradeneeti.com",
      status: "completed",
    },
    
    {
      id: 3,
      title: "Chilli Restaurant",
      category: "Restaurant website",
      description:
        "A cozy restaurant serving delicious, freshly prepared meals with warm hospitality, vibrant ambiance, and a menu inspired by global flavors.",
      image: "/chilli.png",
      websiteUrl: "",
      status: "completed",
    },
    
    {
      id: 5,
      title: "Skin Cancer Classification",
      category: "Medical",
      description:
        "Developed a machine learning-based system to assist hospitals in early detection using medical image analysis.",
      image: "/cancerdet copy.png",
      websiteUrl: "",
      status: "completed",
    },
    
    {
      id: 7,
      title: "MS Video",
      category: "Photography & Videography",
      description:
        "🚧 Currently in Development - A cutting-edge portfolio platform for professional photographers and videographers featuring advanced galleries, video streaming, and client management systems.",
      image: "/ms01.png?height=400&width=600&text=MS+Video+Portfolio+%28In+Development%29",
      websiteUrl: "https://m-svideo.vercel.app/",
      status: "development",
    },
    {
      id: 8,
      title: "Manglam Event",
      category: "Event Management",
      description:
        "🚧 Currently in Development - A premium wedding and event planning platform with over 8 years of experience, creating magical celebrations and transforming dreams into reality with meticulous planning and flawless execution.",
      image: "/mang01.png?height=400&width=600&text=Manglam+Event+%28In+Development%29",
      websiteUrl: "https://manglam-event.vercel.app/",
      status: "development",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Back Button */}
      <PremiumBackButton href="/" />

      {/* Hero Section - Added extra padding at the top for header space */}
      <section className="w-full mt-16 pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-24 lg:py-32 bg-gradient-to-b from-black via-primary-900 to-secondary-800 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Case Studies</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Explore our success stories and see how we've helped organizations achieve their technology goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-lg"
              >
                {/* Development Badge */}
                {project.status === "development" && (
                  <div className="absolute top-3 right-3 z-10 flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800 border border-orange-200">
                    <Clock className="h-3 w-3" />
                    In Development
                  </div>
                )}

                <div className="aspect-video overflow-hidden">
                  <Image
                    src={project.image || `/placeholder.svg?height=400&width=600&text=Case+Study+${project.id}`}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col space-y-2 p-4">
                  <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs w-fit">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.description}</p>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-2 pt-2">
                    <Link
                      href={`/portfolio/${project.id}`}
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      {project.status === "development" ? "View Development Progress" : "View Case Study"}
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>

                    <a
                      href={project.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      {project.status === "development" ? "Preview Development Site" : "Visit Live Website"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Business?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Let's work together to create innovative technology solutions that drive your business forward.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
