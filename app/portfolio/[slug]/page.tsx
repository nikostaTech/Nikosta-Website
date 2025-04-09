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
      "/taxall.png",
      "/taxall2.png",
      "/taxall3.png",
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
    title: "Healthcare Data Analytics",
    category: "Data Analytics",
    client: "Healthcare Provider",
    year: "2023",
    description:
      "Implemented a comprehensive data analytics solution to process large healthcare datasets and deliver actionable insights, improving patient outcomes and efficiency.",
    challenge:
      "The client required a system to process complex data sets and convert them into understandable insights for better decision-making.",
    solution:
      "Using Next.js and advanced visualization libraries, we developed an analytics platform that transformed raw data into clear reports.",
    results:
      "The solution enabled a 30% improvement in patient treatment plans and significantly streamlined hospital operations.",
    technologies: ["Next.js", "React", "MongoDB", "D3.js", "Python"],
    images: [
      "/images/health1.jpg",
      "/images/health2.jpg",
      "/images/health3.jpg",
    ],
  },
  {
    id: "4",
    title: "Retail Security Enhancement",
    category: "Cybersecurity",
    client: "Major Retail Chain",
    year: "2022",
    description:
      "Strengthened the security posture of a major retail chain by implementing advanced threat detection and prevention systems.",
    challenge:
      "The client needed to protect customer data and secure their IT infrastructure against potential breaches.",
    solution:
      "We deployed cutting-edge cybersecurity solutions and continuous monitoring systems to safeguard their networks.",
    results:
      "The new security measures reduced data breaches and increased customer trust in the brand.",
    technologies: ["Next.js", "React", "Python", "AWS", "SIEM"],
    images: [
      "/images/cyber1.jpg",
      "/images/cyber2.jpg",
      "/images/cyber3.jpg",
    ],
  },
  {
    id: "5",
    title: "Manufacturing IoT Solution",
    category: "IoT & Edge Computing",
    client: "Manufacturing Company",
    year: "2022",
    description:
      "Designed and implemented an IoT solution for a manufacturing company, enabling real-time machine monitoring and predictive maintenance.",
    challenge:
      "The client needed to optimize production and reduce downtime by continuously monitoring equipment performance.",
    solution:
      "We integrated IoT sensors with edge computing and built an interactive dashboard for real-time performance analysis.",
    results:
      "The solution reduced downtime by 35% and increased overall production efficiency.",
    technologies: ["Next.js", "React", "Node.js", "IoT", "Edge Computing"],
    images: [
      "/images/iot1.jpg",
      "/images/iot2.jpg",
      "/images/iot3.jpg",
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
