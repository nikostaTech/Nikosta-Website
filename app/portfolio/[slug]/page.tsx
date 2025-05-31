"use client"

import React, { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample list of projects.
// In a real application, you’d fetch this data from an API or database.
const projects = [
  {
    id: "1",
    title: "Taxall - AI-Powered Tax Solution",
    category: "FinTech / AI Integration",
    client: "General Public & Businesses",
    year: "2024",
    description:
      "Developed an AI-powered tax solution platform to simplify income tax filing with automation, smart reports, and chatbot support.",
    challenge:
      "Users needed a simple, secure, and intelligent platform to manage and file taxes with minimal manual effort.",
    solution:
      "We built a full-stack platform using React and Spring Boot with integrated AI chatbot, secure login, and automated calculations.",
    results:
      "Improved user experience and accuracy in tax filing. Enabled seamless, quick, and reliable tax report generation and assistance.",
    technologies: ["React.js", "Spring Boot", "Java", "AI Chatbot", "MySQL"],
    images: [
      "/taxall23.png",
      "/taxallpro.png",
      "/Taxall04.png",
    ],
  },  
  {
    id: "2",
    title: "Tradeneeti - Stock Market Training Institute",
    category: "Finance / Education",
    client: "Aspiring Traders & Investors",
    year: "2024",
    description:
      "Tradeneeti is a financial stock market institute offering expert-led courses, real-time trading insights, and practical training.",
    challenge:
      "Many aspiring traders lacked proper guidance, market knowledge, and real-time learning opportunities in the stock trading domain.",
    solution:
      "We developed a digital platform for Tradeneeti, featuring interactive courses, live market updates, mentorship, and demo trading tools.",
    results:
      "Increased student engagement, enhanced trading knowledge, and improved confidence among learners entering the financial markets.",
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Trading APIs"],
    images: [
      "/tradeneeti.png",
      "/trade.png",
      "/trade2.png",
    ],
  },  
  {
    id: "3",
    title: "Chilli Restaurant - Dining Experience",
    category: "Restaurant",
    client: "Local Food Lovers",
    year: "2024",
    description:
      "Chilli Restaurant is a vibrant dining spot located in Patna, Bihar, known for its delicious multi-cuisine menu and warm ambiance.",
    challenge:
      "The restaurant needed a modern digital presence to showcase its menu, ambiance, and attract more local customers.",
    solution:
      "We developed a responsive website highlighting the menu, special dishes, gallery, and easy reservation options for a better user experience.",
    results:
      "The restaurant saw increased footfall, improved customer engagement, and enhanced visibility in the Patna food scene.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Firebase"],
    images: [
      "/chilli.png",
      "/chilli02.png",
      "/chilli03.png",
    ],
  },  
  {
    id: "4",
    title: "MAA AHILYA BAI HOSPITAL - Healthcare Facility",
    category: "Hospital / Healthcare",
    client: "Patients & Local Community",
    year: "2024",
    description:
      "MAA AHILYA BAI HOSPITAL is a trusted healthcare facility in Kanpur Nagar, offering quality medical services and 24/7 emergency care.",
    challenge:
      "The hospital needed a digital platform to enhance patient engagement, share service details, and improve appointment accessibility.",
    solution:
      "We created a responsive website showcasing departments, emergency services, doctor profiles, and an easy appointment booking system.",
    results:
      "The hospital saw better patient communication, improved online visibility, and smoother operations for appointments and information access.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "Firebase"],
    images: [
      "/hospital.png",
      "/hospital022.png",
      "/hospital033.png",
    ],
  },  
  {
    id: "5",
    title: "Skin Cancer Classification System",
    category: "AI / Healthcare",
    client: "Hospitals & Dermatology Clinics",
    year: "2024",
    description:
      "Developed a machine learning-based system for early detection of skin cancer through medical image classification with 93% accuracy.",
    challenge:
      "Hospitals needed a fast, accurate tool to assist in diagnosing skin cancer from dermatoscopic images with minimal error.",
    solution:
      "We built a user-friendly platform that processes up to 200 images at once and provides instant, high-confidence predictions using ML algorithms.",
    results:
      "Enabled early diagnosis, reduced workload on doctors, and improved treatment outcomes through AI-powered decision support.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    images: [
      "/cancerdet.png",
      "/cancer2.png",
      "/cancer3.png",
    ],
  },  
]

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the promise using React's experimental use() hook.
  const resolvedParams = use(params as Promise<{ slug: string }>)
  const { slug } = resolvedParams

  // Find the project matching the slug.
  const project = projects.find((proj) => proj.id === slug)

  // If no matching project is found, display a fallback.
  if (!project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl text-gray-500">Project not found</p>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full pt-20 py-12 md:py-24 bg-gray-50">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  {project.title}
                </h1>
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

      {/* Project Details Section */}
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
                <h2 className="text-2xl font-bold py-6">Project Gallery</h2>
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
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Interested in working with us?
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
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
