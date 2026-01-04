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
  Smartphone,
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
      title: "Web Development",
      description: "Custom web applications and responsive websites for your business.",
      features: ["Responsive Design", "E-commerce", "CMS Solutions", "Progressive Web Apps"],
      color: "from-blue-500 to-indigo-600",
      iconColor: "text-blue-500",
      bgGradient: "from-blue-500/10 to-indigo-600/5",
      link: "/services#web-development",
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Maintenance"],
      color: "from-cyan-500 to-blue-600",
      iconColor: "text-cyan-500",
      bgGradient: "from-cyan-500/10 to-blue-600/5",
      link: "/services#app-development",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      features: ["AWS & Azure", "Cloud Migration", "Serverless", "DevOps"],
      color: "from-purple-500 to-indigo-600",
      iconColor: "text-purple-500",
      bgGradient: "from-purple-500/10 to-indigo-600/5",
      link: "/services#cloud-solutions",
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable business insights.",
      features: ["Big Data", "BI Solutions", "Predictive Analytics", "Data Visualization"],
      color: "from-red-500 to-pink-600",
      iconColor: "text-red-500",
      bgGradient: "from-red-500/10 to-pink-600/5",
      link: "/services#data-analytics",
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
                  Expert Web & App Development Services
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl text-white leading-tight text-balance">
                  Build Your Next Digital Product With{" "}
                </h1>
                <span className="typing-text-container text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl xl:text-7xl">
                  <TypingEffect
                    texts={["Expert Developers", "Modern Technology", "Proven Results", "Trusted Partners"]}
                    typingSpeed={80}
                    deletingSpeed={40}
                    delayBetweenTexts={2000}
                    className="text-gradient"
                  />
                </span>
                <p className="max-w-[600px] text-gray-300 text-lg md:text-xl leading-relaxed text-pretty">
                  Transform your business with custom web development and mobile app solutions. We deliver scalable,
                  high-performance applications that drive growth and exceed expectations.
                </p>
                {/* Trust indicators below hero text */}
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-gray-300">5+ Projects Delivered</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-gray-300">100% Client Satisfaction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-sm text-gray-300">On-Time Delivery</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 sm:justify-start">
                <Link href="/contact" className="w-full sm:w-auto">
                  <GlowingButton className="w-full sm:w-auto px-8 py-6 text-lg font-semibold">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </GlowingButton>
                </Link>
                <Link href="/portfolio" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto border-gray-700 bg-transparent text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold transition-all duration-300"
                  >
                    View Our Work
                    <ArrowRight className="ml-2 h-5 w-5" />
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

        <div className="container relative z-10 px-4 py-24 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
            <Badge variant="premium" className="px-3 py-1 text-sm mb-4">
              Our Core Services
            </Badge>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 text-balance">
              Services That Drive <AnimatedGradientText text="Business Growth" />
            </h2>
            <p className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed text-pretty">
              From concept to launch, we build digital products that your customers love and your business needs.
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
                  Explore All Services
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
                Why Partner With Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                The <AnimatedGradientText text="Nikosta Advantage" />
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-pretty">
                Experience the difference of working with a dedicated development team that cares about your success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Lightning-Fast Delivery</h3>
              <p className="mt-2 text-gray-400">
                Get to market faster with our agile development process. We deliver working software every sprint,
                ensuring you see progress consistently.
              </p>
            </AnimatedCard>

            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <LineChart className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Built to Scale</h3>
              <p className="mt-2 text-gray-400">
                Your app grows with your business. Our scalable architecture handles increasing users and features
                without breaking a sweat.
              </p>
            </AnimatedCard>

            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <CheckCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Zero Compromise Quality</h3>
              <p className="mt-2 text-gray-400">
                Every line of code is tested, reviewed, and optimized. We don't ship bugs—we ship exceptional user
                experiences.
              </p>
            </AnimatedCard>
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Dedicated Partnership</h3>
              <p className="mt-2 text-gray-400">
                We're not just developers—we're your technology partners. Your success is our mission, and we're with
                you every step of the way.
              </p>
            </AnimatedCard>
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Global Standards</h3>
              <p className="mt-2 text-gray-400">
                Work with a team that follows international best practices. We bring world-class expertise to every
                project, no matter the size.
              </p>
            </AnimatedCard>
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500/20 text-primary-500">
                <Shield className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-white">Bank-Level Security</h3>
              <p className="mt-2 text-gray-400">
                Sleep soundly knowing your data is protected. We implement industry-leading security practices in every
                application we build.
              </p>
            </AnimatedCard>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="w-full py-20 bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <Badge variant="glow" className="px-3 py-1 text-sm">
              Proven Track Record
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
              Results That <AnimatedGradientText text="Speak Volumes" />
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <AnimatedCard glowOnHover tiltEffect>
              <div className="flex flex-col items-center justify-center space-y-4">
                <Users className="h-12 w-12 text-primary-500" />
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-white">
                    <AnimatedCounter value={5} suffix="+" />
                  </h3>
                  <p className="text-white font-medium">Happy Clients</p>
                  <p className="text-gray-400 text-sm mt-1">Businesses trust us worldwide</p>
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
                  <p className="text-white font-medium">Successful Projects</p>
                  <p className="text-gray-400 text-sm mt-1">Delivered on time & on budget</p>
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
                  <p className="text-white font-medium">Global Reach</p>
                  <p className="text-gray-400 text-sm mt-1">Serving clients internationally</p>
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
                Our Work
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-balance">
                Real Projects, <AnimatedGradientText text="Real Results" />
              </h2>

              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-pretty">
                See how we've transformed businesses with cutting-edge web and mobile solutions.
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
      <section className="w-full py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,112,243,0.1),transparent_70%)]"></div>
        <div className="container relative z-10 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto">
            <Badge variant="glow" className="px-4 py-2 text-sm">
              Ready to Get Started?
            </Badge>
            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-balance">
              Let's Build Something <AnimatedGradientText text="Amazing Together" />
            </h2>
            <p className="max-w-[700px] text-gray-300 md:text-xl/relaxed text-pretty">
              Whether you need a modern website, mobile app, or complete digital transformation—we're here to make it
              happen. Get in touch today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <GlowingButton className="px-10 py-7 text-lg font-semibold">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </GlowingButton>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-gray-700 bg-transparent text-white hover:bg-white hover:text-black px-10 py-7 text-lg font-semibold transition-all duration-300"
                >
                  Explore Our Portfolio
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-8 pt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Free Project Estimate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Quick Response Time</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
