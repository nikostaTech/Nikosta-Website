import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Code, Database, Server, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicesPage() {
  const services = [
    {
      id: "software-development",
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs.",
      features: [
        "Custom application development",
        "Web and mobile applications",
        "API development and integration",
        "Legacy system modernization",
        "DevOps and CI/CD implementation",
        "Microservices architecture",
      ],
      icon: <Code className="h-10 w-10 text-black" />,
      image: "/placeholder.svg?height=600&width=600&text=Software+Development",
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services.",
      features: [
        "Cloud migration strategy",
        "Infrastructure as Code (IaC)",
        "Multi-cloud management",
        "Serverless architecture",
        "Cloud cost optimization",
        "Managed cloud services",
      ],
      icon: <Server className="h-10 w-10 text-black" />,
      image: "/placeholder.svg?height=600&width=600&text=Cloud+Solutions",
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Transform your data into actionable business insights.",
      features: [
        "Business intelligence solutions",
        "Data warehouse implementation",
        "Big data processing",
        "Predictive analytics",
        "Machine learning integration",
        "Real-time analytics dashboards",
      ],
      icon: <Database className="h-10 w-10 text-black" />,
      image: "/placeholder.svg?height=600&width=600&text=Data+Analytics",
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "Protect your business with advanced security solutions.",
      features: [
        "Security assessment and auditing",
        "Threat detection and prevention",
        "Identity and access management",
        "Compliance management",
        "Security operations center",
        "Incident response planning",
      ],
      icon: <Shield className="h-10 w-10 text-black" />,
      image: "/placeholder.svg?height=600&width=600&text=Cybersecurity",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Solutions</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                We offer comprehensive technology solutions to help your business thrive in the digital era.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`w-full py-12 md:py-24 lg:py-32 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className={`flex items-center justify-center ${index % 2 !== 0 ? "lg:order-last" : ""}`}>
                <div className="relative h-[350px] w-full overflow-hidden rounded-xl">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 rounded-lg bg-gray-100 px-3 py-1">
                    <div className="h-5 w-5">{service.icon}</div>
                    <span className="text-sm font-medium">Solution</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter">{service.title}</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">{service.description}</p>
                </div>
                <ul className="grid gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-black" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Delivery Process</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed">
                We follow a structured approach to ensure every project is delivered successfully.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "1",
                title: "Discovery",
                description:
                  "We start by understanding your business, goals, and technical requirements to create a tailored strategy.",
              },
              {
                step: "2",
                title: "Planning",
                description: "We develop a detailed project plan with timelines, deliverables, and key milestones.",
              },
              {
                step: "3",
                title: "Development",
                description:
                  "Our team works diligently to build your solution, with regular updates and feedback sessions.",
              },
              {
                step: "4",
                title: "Deployment & Support",
                description:
                  "We ensure a smooth deployment and provide ongoing support to help you achieve your goals.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 rounded-lg border border-gray-800 bg-gray-900 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl font-bold text-black">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold">{process.title}</h3>
                <p className="text-center text-sm text-gray-400">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Technologies We Use</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                We leverage the latest technologies to deliver cutting-edge solutions.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-6">
            {[
              "AWS",
              "Azure",
              "Google Cloud",
              "React",
              "Node.js",
              "Python",
              "Kubernetes",
              "Docker",
              "Terraform",
              "MongoDB",
              "PostgreSQL",
              "TensorFlow",
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center justify-center rounded-lg border p-4 shadow-sm">
                <div className="h-12 w-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                  <span className="text-xs font-bold">{tech.charAt(0)}</span>
                </div>
                <span className="text-sm font-medium">{tech}</span>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Contact us today to discuss your project and see how we can help you achieve your technology goals.
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

