"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Briefcase,
  Stethoscope,
  Factory,
  ShoppingBag,
  Landmark,
  GraduationCap,
  Cpu,
  Truck,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedGradientText } from "@/components/animated-gradient-text"
import { Badge } from "@/components/ui/badge"

interface Industry {
  name: string
  icon: React.ReactNode
  description: string
  solutions: string[]
  image: string
  color: string
  bgColor: string
  textColor: string
  slug: string
}

export function IndustriesSection() {
  const [hoveredIndustry, setHoveredIndustry] = useState<string | null>(null)
  const controls = useAnimation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Auto-rotate through industries for visual interest
  useEffect(() => {
    const interval = setInterval(() => {
      const industryNames = industries.map((i) => i.name)
      const currentIndex = hoveredIndustry ? industryNames.indexOf(hoveredIndustry) : -1

      const nextIndex = currentIndex === -1 || currentIndex === industryNames.length - 1 ? 0 : currentIndex + 1

      setHoveredIndustry(industryNames[nextIndex])
    }, 3000)

    return () => clearInterval(interval)
  }, [hoveredIndustry])

  const industries: Industry[] = [
    {
      name: "Financial",
      icon: <Briefcase className="h-6 w-6" />,
      description: "Secure and compliant solutions for banks, investment firms, and insurance companies.",
      solutions: [
        "Fraud Detection",
        "Regulatory Compliance",
        "Digital Banking",
        "Risk Management",
        "Payment Processing",
        "Wealth Management",
      ],
      image: "/industries/financial.jpg",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      slug: "financial-services",
    },
    {
      name: "Healthcare",
      icon: <Stethoscope className="h-6 w-6" />,
      description: "Innovative technology for healthcare providers, hospitals, and medical research.",
      solutions: [
        "Patient Management",
        "Medical Records",
        "Telemedicine",
        "Healthcare Analytics",
        "Clinical Workflows",
        "Remote Monitoring",
      ],
      image: "/industries/healthcare.jpg",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      slug: "healthcare",
    },
    {
      name: "Manufacturing",
      icon: <Factory className="h-6 w-6" />,
      description: "Optimizing operations and supply chains for manufacturing companies.",
      solutions: [
        "IoT Solutions",
        "Predictive Maintenance",
        "Supply Chain",
        "Quality Control",
        "Inventory Management",
        "Production Optimization",
      ],
      image: "/industries/manufacturing.jpg",
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      slug: "manufacturing",
    },
    {
      name: "Retail",
      icon: <ShoppingBag className="h-6 w-6" />,
      description: "Digital transformation solutions for retail businesses of all sizes.",
      solutions: [
        "E-commerce",
        "Inventory Management",
        "Customer Analytics",
        "Omnichannel",
        "Point of Sale",
        "Customer Loyalty",
      ],
      image: "/industries/retail.jpg",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
      slug: "retail",
    },
    {
      name: "Government",
      icon: <Landmark className="h-6 w-6" />,
      description: "Secure and efficient systems for government agencies and public services.",
      solutions: [
        "Citizen Services",
        "Public Safety",
        "Data Management",
        "Smart Cities",
        "Regulatory Compliance",
        "Digital Transformation",
      ],
      image: "/industries/government.jpg",
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      slug: "government",
    },
    {
      name: "Education",
      icon: <GraduationCap className="h-6 w-6" />,
      description: "Digital learning and administrative solutions for educational institutions.",
      solutions: [
        "Learning Management",
        "Student Information",
        "Virtual Classrooms",
        "Analytics",
        "Campus Management",
        "Digital Libraries",
      ],
      image: "/industries/education.jpg",
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      slug: "education",
    },
    {
      name: "Technology",
      icon: <Cpu className="h-6 w-6" />,
      description: "Cutting-edge solutions for technology companies and startups.",
      solutions: [
        "Product Development",
        "Cloud Infrastructure",
        "AI Integration",
        "DevOps",
        "SaaS Platforms",
        "Technical Consulting",
      ],
      image: "/industries/technology.jpg",
      color: "from-primary-500 to-secondary-500",
      bgColor: "bg-blue-50",
      textColor: "text-primary-500",
      slug: "technology",
    },
    {
      name: "Transportation",
      icon: <Truck className="h-6 w-6" />,
      description: "Smart solutions for logistics, transportation, and supply chain management.",
      solutions: [
        "Fleet Management",
        "Route Optimization",
        "Tracking Systems",
        "Logistics",
        "Warehouse Management",
        "Last-mile Delivery",
      ],
      image: "/industries/transportation.jpg",
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      slug: "transportation",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="industries" className="w-full py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="premium" className="px-3 py-1 text-sm mb-4 relative z-10">
              Our Expertise
            </Badge>
            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 animate-pulse-slow"></div>
          </motion.div>

          <motion.h2
            className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Industries We <AnimatedGradientText text="Serve" />
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
          </motion.h2>

          <motion.p
            className="max-w-[800px] text-gray-600 md:text-xl/relaxed lg:text-xl/relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We have expertise across a wide range of industries, delivering tailored technology solutions to meet
            specific sector challenges.
          </motion.p>
        </div>
      </div>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[300px] -right-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary-500/5 to-secondary-500/5 blur-3xl"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-500/5 to-secondary-500/5 blur-3xl"></div>

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-primary-500/10 to-secondary-500/10 blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-secondary-500/10 to-primary-500/10 blur-2xl animate-float"></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div ref={ref} className="mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {industries.map((industry) => (
              <Link href={`/industries/${industry.slug}`} key={industry.name} className="block">
                <motion.div
                  variants={itemVariants}
                  className={cn(
                    "relative group cursor-pointer rounded-xl border overflow-hidden transition-all duration-500",
                    "hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1",
                    hoveredIndustry === industry.name
                      ? "border-primary-500/30 shadow-md shadow-primary-500/5"
                      : "border-gray-200 shadow-sm",
                    "bg-white backdrop-blur-sm",
                  )}
                  onMouseEnter={() => setHoveredIndustry(industry.name)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Background gradient */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
                      "group-hover:opacity-5",
                      hoveredIndustry === industry.name && "opacity-10",
                      industry.color,
                    )}
                  />

                  {/* Decorative corner accent */}
                  <div
                    className={cn(
                      "absolute -top-10 -right-10 w-20 h-20 rounded-full bg-gradient-to-br opacity-0 transition-all duration-500",
                      "group-hover:opacity-20",
                      hoveredIndustry === industry.name && "opacity-30",
                      industry.color,
                    )}
                  ></div>

                  {/* Decorative bottom accent */}
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 transition-all duration-500",
                      "group-hover:opacity-100",
                      hoveredIndustry === industry.name && "opacity-100",
                      industry.color,
                    )}
                  ></div>

                  <div className="p-6 relative z-10">
                    <div
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-full mb-5 transition-all duration-500",
                        "shadow-md group-hover:shadow-lg",
                        hoveredIndustry === industry.name
                          ? `bg-gradient-to-br ${industry.color} text-white shadow-${industry.textColor}/20`
                          : `${industry.bgColor} ${industry.textColor}`,
                      )}
                      style={{
                        transform: hoveredIndustry === industry.name ? "translateZ(10px)" : "translateZ(0)",
                        transition: "transform 0.5s ease-out",
                      }}
                    >
                      {industry.icon}
                    </div>

                    <h3
                      className={cn(
                        "text-lg font-bold mb-2 transition-colors duration-300",
                        hoveredIndustry === industry.name ? industry.textColor : "text-gray-900",
                      )}
                      style={{
                        transform: hoveredIndustry === industry.name ? "translateZ(5px)" : "translateZ(0)",
                        transition: "transform 0.5s ease-out",
                      }}
                    >
                      {industry.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{industry.description}</p>

                    <div className="flex justify-end mt-2">
                      <span
                        className={cn(
                          "inline-flex items-center text-xs font-medium transition-all duration-300",
                          industry.textColor,
                          "group-hover:underline",
                        )}
                      >
                        View details{" "}
                        <ChevronRight className="h-3 w-3 ml-1 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
