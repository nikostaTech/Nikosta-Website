"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"
import {
  ArrowRight,
  Code,
  LineChart,
  Zap,
  CheckCircle,
  Globe,
  Award,
  Users,
  Cloud,
  Database,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { AnimatedCounter } from "@/components/animated-counter"
import { AnimatedBackground } from "@/components/animated-background"
import { TechCube } from "@/components/3d-tech-cube"
import { ParallaxSection } from "@/components/parallax-section"
import { GlowingButton } from "@/components/glowing-button"
import { AnimatedCard } from "@/components/animated-card"
import { TechStackCarousel } from "@/components/tech-stack-carousel"
import { TypingEffect } from "@/components/typing-effect"
import { EnhancedTechCard } from "@/components/enhanced-tech-card"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { IndustriesSection } from "@/components/industries-section"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const expertiseRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return

      if ((window as any).mouseMoveThrottle) return
      ;(window as any).mouseMoveThrottle = true

      setTimeout(() => {
        ;(window as any).mouseMoveThrottle = false
      }, 30)

      const { clientX, clientY } = e
      const { width, height, left, top } = heroRef.current.getBoundingClientRect()
      const x = Math.min(Math.max((clientX - left) / width, 0), 1)
      const y = Math.min(Math.max((clientY - top) / height, 0), 1)

      heroRef.current.style.setProperty("--mouse-x", `${x}`)
      heroRef.current.style.setProperty("--mouse-y", `${y}`)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Function to scroll to the expertise section
  const scrollToExpertise = () => {
    if (expertiseRef.current) {
      expertiseRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const technologies = [
    "React",
    "Node.js",
    "AWS",
    "Azure",
    "Google Cloud",
    "Kubernetes",
    "Docker",
    "Python",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "TensorFlow",
  ]

  const expertiseItems = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Legacy Modernization"],
      color: "from-blue-500 to-indigo-600",
      iconColor: "text-blue-500",
      bgGradient: "from-blue-500/10 to-indigo-600/5",
      link: "/services#software-development",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      features: ["AWS & Azure", "Cloud Migration", "Serverless", "DevOps"],
      color: "from-cyan-500 to-blue-600",
      iconColor: "text-cyan-500",
      bgGradient: "from-cyan-500/10 to-blue-600/5",
      link: "/services#cloud-solutions",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable business insights.",
      features: ["Big Data", "BI Solutions", "Predictive Analytics", "Data Visualization"],
      color: "from-purple-500 to-indigo-600",
      iconColor: "text-purple-500",
      bgGradient: "from-purple-500/10 to-indigo-600/5",
      link: "/services#data-analytics",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions.",
      features: ["Threat Detection", "Compliance", "Security Audits", "Incident Response"],
      color: "from-red-500 to-pink-600",
      iconColor: "text-red-500",
      bgGradient: "from-red-500/10 to-pink-600/5",
      link: "/services#cybersecurity",
    },
  ]

  const caseStudies = [
    {
      id: 1,
      title: "MAA AHILYA BAI HOSPITAL",
      category: "Medical",
      image: "/hospital.png",
    },
    {
      id: 2,
      title: "Chilli Restaurant",
      category: "Restaurant website",
      image: "/chilli.png",
    },
    {
      id: 3,
      title: "Taxall",
      category: "Finance Solutions",
      image: "/taxall23.png",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-screen flex items-center justify-center bg-black bg-hero-pattern overflow-hidden"
        style={{ "--mouse-x": "0.5", "--mouse-y": "0.5" } as React.CSSProperties}
      >
        <AnimatedBackground className="opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90"></div>
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_calc(50%+var(--mouse-x,0.5)*50%)_calc(50%+var(--mouse-y,0.5)*30%),var(--tw-gradient-stops))] from-primary-500/40 via-transparent to-transparent"></div>

        <div className="container relative z-10 px-4 md:px-6 py-24 md:py-32 lg:py-40">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <Badge variant="premium" className="px-3 py-1 text-sm">
                  Next-Generation Technology Solutions
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl  text-white">
                  Transforming Business Through{" "}
                </h1>
                <span className="typing-text-container  text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
                  <TypingEffect
                    texts={["Advanced Technology", "Digital Innovation", "Cloud Solutions", "AI Integration"]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    delayBetweenTexts={2000}
                    className="text-gradient"
                  />
                </span>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Nikosta delivers cutting-edge technology services that drive innovation, efficiency, and growth for
                  enterprises worldwide.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 sm:justify-start">
                <Link href="/services" className="w-full sm:w-auto">
                  <GlowingButton className="w-full sm:w-auto px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg">
                    Explore Solutions
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </GlowingButton>
                </Link>
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-gray-700 bg-transparent text-white hover:bg-gray-800 hover:text-white px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg"
                  >
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative h-[450px] w-full">
                <TechCube className="h-full w-full" />
              </div>
            </div>
          </div>

          {/* Updated arrow with onClick handler - Bottom Position */}
          <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
            <button
              onClick={scrollToExpertise}
              className="animate-bounce p-3 sm:p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-600 cursor-pointer touch-manipulation"
              aria-label="Scroll to expertise section"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        ref={expertiseRef}
        id="expertise-section"
        className="w-full bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-500/5 to-secondary-500/5 blur-3xl"></div>
          <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-500/5 to-secondary-500/5 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_70%)]"></div>
        </div>

        <div className="container relative z-10 px-4 py-24 bg-gray-100 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Badge variant="premium" className="px-3 py-1 text-sm mb-4">
              Our Solutions
            </Badge>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4">
              Technology <AnimatedGradientText text="Expertise" />
            </h2>
            <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed">
              We provide comprehensive technology solutions to help your business thrive in the digital era.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {expertiseItems.map((item, index) => (
              <EnhancedTechCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                features={item.features}
                colorClass={item.color}
                iconColorClass={item.iconColor}
                bgGradientClass={item.bgGradient}
                delay={index * 0.1}
                link={item.link}
              />
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/services">
              <Button className="group relative overflow-hidden rounded-full bg-black px-8 py-6 text-lg text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20">
                <span className="relative z-10 flex items-center">
                  View All Solutions
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* Why Choose Us Section */}
      <ParallaxSection className="w-full py-20 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="glow" className="px-3 py-1 text-sm">
                Why Choose Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our <AnimatedGradientText text="Approach" />
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                What sets us apart from other technology providers.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">On Time Delivery</h3>
              <p className="mt-2 text-gray-400">
                We employ agile development practices to deliver solutions quickly and efficiently.
              </p>
            </AnimatedCard>

            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <LineChart className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Scalable Solutions</h3>
              <p className="mt-2 text-gray-400">
                Our solutions are designed to grow with your business needs and objectives.
              </p>
            </AnimatedCard>

            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Quality Assurance</h3>
              <p className="mt-2 text-gray-400">
                Rigorous testing and quality control processes ensure reliable, high-performance solutions.
              </p>
            </AnimatedCard>
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Global Expertise</h3>
              <p className="mt-2 text-gray-400">
                Our international team brings diverse perspectives and expertise from around the world.
              </p>
            </AnimatedCard>
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Client-Centric Approach</h3>
              <p className="mt-2 text-gray-400">
                We prioritize your business goals and tailor our solutions to meet your specific needs.
              </p>
            </AnimatedCard>
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Security First</h3>
              <p className="mt-2 text-gray-400">
                We implement robust security measures in all our solutions to protect your valuable data.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="w-full py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Users className="h-12 w-12 text-primary-500" />
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">
                    <AnimatedCounter value={5} suffix="+" />
                  </h3>
                  <p className="text-white">Clients Worldwide</p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Award className="h-12 w-12 text-primary-500" />
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">
                    <AnimatedCounter value={5} suffix="+" />
                  </h3>
                  <p className="text-white">Projects Completed</p>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Globe className="h-12 w-12 text-primary-500" />
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">
                    <AnimatedCounter value={2} suffix="+" />
                  </h3>
                  <p className="text-white">Countries Served</p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <Badge variant="glow" className="px-3 py-1 text-sm lg:m-5">
                Our Technology Stack
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Cutting-Edge <AnimatedGradientText text="Technologies" />
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                We leverage the latest technologies to deliver innovative solutions.
              </p>
            </div>
          </div>
          <TechStackCarousel technologies={technologies} />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <Badge variant="premium" className="px-3 py-1 text-sm">
                Our Products
              </Badge>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Success <AnimatedGradientText text="Stories" />
              </h2>

              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See how we've helped organizations achieve their technology goals.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                href={`/portfolio/${study.id}`}
                key={study.id}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl"
              >
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    width={600}
                    height={400}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 transition-all duration-300 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100">
                  <h3 className="text-xl font-bold">{study.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{study.category}</p>
                  <div className="mt-4 flex items-center text-primary-400 font-medium">
                    View Case Study
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/portfolio">
              <GlowingButton
                variant="outline"
                className="border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300 px-8"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </GlowingButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-20 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2"></div>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-black text-white">
        <AnimatedBackground className="opacity-20" />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to <AnimatedGradientText text="Transform Your Business" />?
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Let's work together to create innovative technology solutions that drive your business forward.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row pt-6">
              <Link href="/contact">
                <GlowingButton className="px-8 py-6 text-lg">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </GlowingButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
