import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedBackground } from "@/components/animated-background"
import { cn } from "@/lib/utils"

// Define industry data
const industries = [
  {
    slug: "financial-services",
    name: "Financial Services",
    description: "Secure and compliant solutions for banks, investment firms, and insurance companies.",
    longDescription:
      "In today's rapidly evolving financial landscape, technology plays a crucial role in maintaining competitive advantage, ensuring regulatory compliance, and delivering exceptional customer experiences. Our financial services solutions are designed to address the unique challenges faced by banks, investment firms, insurance companies, and fintech startups.",
    solutions: [
      "Fraud Detection & Prevention",
      "Regulatory Compliance Systems",
      "Digital Banking Platforms",
      "Risk Management Solutions",
      "Payment Processing Systems",
      "Wealth Management Software",
      "Customer Analytics",
      "Blockchain Integration",
    ],
    benefits: [
      "Enhanced security and fraud protection",
      "Streamlined compliance processes",
      "Improved customer experience",
      "Data-driven decision making",
      "Operational efficiency",
      "Reduced costs",
    ],
    technologies: ["AI/ML", "Blockchain", "Cloud Computing", "Big Data", "Cybersecurity"],
    image: "/financeser.jpg",
    caseStudyImage: "/20546.jpg",
    color: "from-blue-500 to-indigo-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Innovative technology for healthcare providers, hospitals, and medical research.",
    longDescription:
      "Healthcare organizations face unique challenges in delivering quality patient care while managing costs, ensuring compliance, and protecting sensitive data. Our healthcare technology solutions help providers, hospitals, and research institutions leverage digital innovation to improve patient outcomes and operational efficiency.",
    solutions: [
      "Electronic Health Records (EHR)",
      "Patient Management Systems",
      "Telemedicine Platforms",
      "Healthcare Analytics",
      "Clinical Workflow Optimization",
      "Remote Patient Monitoring",
      "Medical Imaging Solutions",
      "Healthcare IoT Integration",
    ],
    benefits: [
      "Improved patient outcomes",
      "Enhanced care coordination",
      "Reduced administrative burden",
      "Data-driven clinical decisions",
      "Increased operational efficiency",
      "HIPAA compliance",
    ],
    technologies: ["AI/ML", "IoT", "Cloud Computing", "Big Data", "Mobile Health"],
    image: "/industries/healthcare.jpg",
    caseStudyImage: "/case-studies/healthcare-analytics-cover.jpg",
    color: "from-green-500 to-teal-600",
    textColor: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Optimizing operations and supply chains for manufacturing companies.",
    longDescription:
      "Modern manufacturing requires digital transformation to remain competitive in a global market. Our manufacturing solutions help companies optimize operations, improve quality control, enhance supply chain visibility, and implement smart factory technologies for increased productivity and reduced costs.",
    solutions: [
      "IoT-Enabled Production Monitoring",
      "Predictive Maintenance Systems",
      "Supply Chain Optimization",
      "Quality Control Automation",
      "Inventory Management",
      "Production Planning & Scheduling",
      "Digital Twin Technology",
      "Manufacturing Analytics",
    ],
    benefits: [
      "Reduced downtime",
      "Optimized inventory levels",
      "Improved product quality",
      "Enhanced supply chain visibility",
      "Increased operational efficiency",
      "Data-driven decision making",
    ],
    technologies: ["IoT", "AI/ML", "Digital Twin", "Cloud Computing", "Robotics"],
    image: "/rett.jpg",
    caseStudyImage: "",
    color: "from-orange-500 to-amber-600",
    textColor: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    slug: "retail",
    name: "Retail",
    description: "Digital transformation solutions for retail businesses of all sizes.",
    longDescription:
      "The retail landscape is evolving rapidly with changing consumer expectations and increasing competition. Our retail technology solutions help businesses create seamless omnichannel experiences, gain customer insights, optimize inventory, and implement innovative technologies to drive growth and customer loyalty.",
    solutions: [
      "E-commerce Platforms",
      "Omnichannel Retail Solutions",
      "Inventory Management Systems",
      "Customer Analytics & Personalization",
      "Point of Sale (POS) Systems",
      "Loyalty Program Management",
      "Supply Chain Optimization",
      "Retail Analytics",
    ],
    benefits: [
      "Enhanced customer experience",
      "Increased sales conversion",
      "Optimized inventory management",
      "Personalized marketing",
      "Improved operational efficiency",
      "Data-driven decision making",
    ],
    technologies: ["AI/ML", "Cloud Computing", "Mobile Apps", "Big Data", "AR/VR"],
    image: "/industries/retail.jpg",
    caseStudyImage: "/case-studies/retail-security-cover.jpg",
    color: "from-pink-500 to-rose-600",
    textColor: "text-pink-600",
    bgColor: "bg-pink-50",
  },
  {
    slug: "government",
    name: "Government",
    description: "Secure and efficient systems for government agencies and public services.",
    longDescription:
      "Government agencies face unique challenges in delivering efficient services while ensuring security, transparency, and compliance with regulations. Our government technology solutions help public sector organizations modernize legacy systems, improve citizen services, and implement secure, scalable infrastructure.",
    solutions: [
      "Citizen Service Portals",
      "Public Safety Systems",
      "Data Management & Analytics",
      "Smart City Infrastructure",
      "Regulatory Compliance Systems",
      "Digital Transformation Services",
      "Secure Communication Platforms",
      "Government Cloud Solutions",
    ],
    benefits: [
      "Improved citizen services",
      "Enhanced security and compliance",
      "Increased operational efficiency",
      "Better data management",
      "Cost reduction",
      "Transparent governance",
    ],
    technologies: ["Cloud Computing", "Cybersecurity", "AI/ML", "Big Data", "IoT"],
    image: "/industries/government.jpg",
    caseStudyImage: "/case-studies/government-cover.jpg",
    color: "from-purple-500 to-violet-600",
    textColor: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    slug: "education",
    name: "Education",
    description: "Digital learning and administrative solutions for educational institutions.",
    longDescription:
      "Educational institutions are embracing digital transformation to enhance learning experiences, streamline administration, and adapt to changing educational models. Our education technology solutions help schools, colleges, and universities implement innovative learning platforms, improve student engagement, and optimize administrative processes.",
    solutions: [
      "Learning Management Systems",
      "Student Information Systems",
      "Virtual Classroom Platforms",
      "Educational Analytics",
      "Campus Management Solutions",
      "Digital Libraries & Resources",
      "Admissions & Enrollment Systems",
      "Educational Mobile Apps",
    ],
    benefits: [
      "Enhanced learning experiences",
      "Improved student engagement",
      "Streamlined administration",
      "Data-driven decision making",
      "Cost efficiency",
      "Scalable infrastructure",
    ],
    technologies: ["Cloud Computing", "AI/ML", "Mobile Apps", "Big Data", "AR/VR"],
    image: "/industries/education.jpg",
    caseStudyImage: "/case-studies/education-cover.jpg",
    color: "from-cyan-500 to-blue-600",
    textColor: "text-cyan-600",
    bgColor: "bg-cyan-50",
  },
  {
    slug: "technology",
    name: "Technology",
    description: "Cutting-edge solutions for technology companies and startups.",
    longDescription:
      "Technology companies and startups need innovative solutions to accelerate product development, scale operations, and stay ahead of the competition. Our technology sector solutions help tech businesses implement robust infrastructure, optimize development processes, and leverage emerging technologies for competitive advantage.",
    solutions: [
      "Product Development Services",
      "Cloud Infrastructure Solutions",
      "AI & ML Integration",
      "DevOps Implementation",
      "SaaS Platform Development",
      "Technical Consulting Services",
      "Scalability Solutions",
      "Technology Stack Modernization",
    ],
    benefits: [
      "Accelerated product development",
      "Improved scalability",
      "Enhanced product quality",
      "Optimized development processes",
      "Reduced time-to-market",
      "Technical expertise",
    ],
    technologies: ["Cloud Computing", "AI/ML", "DevOps", "Microservices", "Containerization"],
    image: "/industries/technology.jpg",
    caseStudyImage: "/case-studies/technology-cover.jpg",
    color: "from-primary-500 to-secondary-500",
    textColor: "text-primary-500",
    bgColor: "bg-blue-50",
  },
  {
    slug: "transportation",
    name: "Transportation",
    description: "Smart solutions for logistics, transportation, and supply chain management.",
    longDescription:
      "The transportation and logistics industry is undergoing significant digital transformation to improve efficiency, visibility, and customer service. Our transportation technology solutions help logistics companies, carriers, and supply chain operators optimize routes, manage fleets, track shipments, and enhance overall operational performance.",
    solutions: [
      "Fleet Management Systems",
      "Route Optimization Software",
      "Real-time Tracking Solutions",
      "Logistics Management Platforms",
      "Warehouse Management Systems",
      "Last-mile Delivery Optimization",
      "Transportation Analytics",
      "Supply Chain Visibility Tools",
    ],
    benefits: [
      "Reduced operational costs",
      "Improved delivery times",
      "Enhanced visibility",
      "Optimized resource utilization",
      "Better customer service",
      "Data-driven decision making",
    ],
    technologies: ["IoT", "AI/ML", "Cloud Computing", "Mobile Apps", "GPS/Telematics"],
    image: "/industries/transportation.jpg",
    caseStudyImage: "/case-studies/transportation-cover.jpg",
    color: "from-blue-500 to-cyan-600",
    textColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
]

export async function generateStaticParams() {
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug)

  if (!industry) {
    return {
      title: "Industry Not Found | Nikosta",
      description: "The requested industry information could not be found.",
    }
  }

  return {
    title: `${industry.name} Solutions | Nikosta`,
    description: industry.description,
  }
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const industry = industries.find((i) => i.slug === params.slug)

  if (!industry) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-24 lg:py-32 bg-black text-white relative overflow-hidden">
        <AnimatedBackground className="opacity-30" />

        {/* Decorative elements */}
        <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-10 mix-blend-overlay`}></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

        <div className="container relative z-10 px-4 md:px-6">
          <Link href="/#industries">
            <Button variant="ghost" className="mb-8 bg-white/10 text-white hover:bg-white/20 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>

          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <Badge className={cn("px-4 py-1.5 text-base mb-6 bg-gradient-to-r text-white", industry.color)}>
                Industry Solutions
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">{industry.name}</h1>
              <div className="h-1 w-32 bg-white/50 rounded-full mb-6"></div>
              <p className="text-xl text-gray-300 mb-8">{industry.description}</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className={cn("bg-gradient-to-r text-white", industry.color)}>
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={industry.image || `/placeholder.svg?height=600&width=800&text=${industry.name}`}
                alt={industry.name}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${industry.color} opacity-30 mix-blend-overlay`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Overview</h2>
            <p className="text-gray-700 text-lg mb-8">{industry.longDescription}</p>

            <h3 className="text-2xl font-bold mb-4">Key Technologies</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {industry.technologies.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
                    industry.bgColor,
                    industry.textColor,
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={cn("w-full py-16", industry.bgColor)}>
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our {industry.name} Solutions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer comprehensive technology solutions tailored to the unique needs of the{" "}
              {industry.name.toLowerCase()} industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={cn("h-12 w-12 rounded-full flex items-center justify-center mb-4", industry.bgColor)}>
                  <Check className={cn("h-6 w-6", industry.textColor)} />
                </div>
                <h3 className="text-lg font-bold mb-2">{solution}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-16 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
              <ul className="space-y-4">
                {industry.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div
                      className={cn(
                        "mr-3 h-6 w-6 mt-0.5 flex-shrink-0 rounded-full flex items-center justify-center",
                        "bg-gradient-to-r text-white",
                        industry.color,
                      )}
                    >
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className={cn("bg-gradient-to-r text-white", industry.color)}>
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
              <Image
                src={
                  industry.caseStudyImage ||
                  industry.image ||
                  `/placeholder.svg?height=600&width=800&text=${industry.name || "/placeholder.svg"}`
                }
                alt={`${industry.name} Benefits`}
                fill
                className="object-cover"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-tr ${industry.color} opacity-30 mix-blend-overlay`}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 bg-black text-white">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your {industry.name} Business?</h2>
          <p className="max-w-2xl mx-auto text-gray-300 mb-8">
            Let's discuss how our technology solutions can help you overcome challenges and achieve your business goals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className={cn("bg-gradient-to-r text-white", industry.color)}>
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  )
}
