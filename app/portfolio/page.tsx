import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  // Sample case studies with unique images for each
  const projects = [
    {
      id: 1,
      title: "Enterprise Cloud Migration",
      category: "Cloud Solutions",
      description:
        "Migrated a large enterprise from legacy infrastructure to a scalable cloud architecture, reducing operational costs by 40%.",
      image: "/cloud.jpg",
    },
    {
      id: 2,
      title: "Financial Services Platform",
      category: "Software Development",
      description:
        "Developed a secure, compliant financial services platform with real-time transaction processing and analytics.",
      image: "/finance.jpg",
    },
    {
      id: 3,
      title: "Healthcare Data Analytics",
      category: "Data Analytics",
      description:
        "Implemented a comprehensive data analytics solution for a healthcare provider, improving patient outcomes and operational efficiency.",
      image: "/dataanalytics.jpg",
    },
    {
      id: 4,
      title: "Retail Security Enhancement",
      category: "Cybersecurity",
      description:
        "Strengthened the security posture of a major retail chain, protecting customer data and preventing potential breaches.",
      image: "/cyber.jpg",
    },
    {
      id: 5,
      title: "Manufacturing IoT Solution",
      category: "IoT & Edge Computing",
      description:
        "Designed and implemented an IoT solution for a manufacturing company, enabling real-time monitoring and predictive maintenance.",
      image: "/iot.jpg",
    },
    {
      id: 6,
      title: "Government Portal Modernization",
      category: "Digital Transformation",
      description:
        "Modernized a government agency's citizen services portal, improving accessibility and user experience while ensuring security.",
      image: "/digi.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
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
              <Link
                href={`/portfolio/${project.id}`}
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-lg border shadow-sm transition-all hover:shadow-lg"
              >
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
                  <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs">{project.category}</div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-500">{project.description}</p>
                  <div className="flex items-center pt-2 text-sm font-medium">
                    View Case Study
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Industries We Serve</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                We have expertise across a wide range of industries.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4">
            {[
              "Financial Services",
              "Healthcare",
              "Manufacturing",
              "Retail",
              "Government",
              "Education",
              "Technology",
              "Transportation",
            ].map((industry, index) => (
              <div key={index} className="flex flex-col items-center justify-center rounded-lg border p-6 shadow-sm">
                <span className="text-lg font-medium">{industry}</span>
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

