"use client"

import { use } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink, Clock, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample list of projects.
// In a real application, you'd fetch this data from an API or database.
const projects = [
  {
    id: "1",
    title: "Taxall - AI-Powered Tax Solution",
    category: "FinTech / AI Integration",
    client: "General Public & Businesses",
    year: "2024",
    websiteUrl: "https://www.taxall.co.in/",
    status: "completed",
    description:
      "Developed an AI-powered tax solution platform to simplify income tax filing with automation, smart reports, and chatbot support.",
    challenge:
      "Users needed a simple, secure, and intelligent platform to manage and file taxes with minimal manual effort.",
    solution:
      "We built a full-stack platform using React and Spring Boot with integrated AI chatbot, secure login, and automated calculations.",
    results:
      "Improved user experience and accuracy in tax filing. Enabled seamless, quick, and reliable tax report generation and assistance.",
    technologies: ["React.js", "Spring Boot", "Java", "AI Chatbot", "MySQL"],
    images: ["/taxall23.png", "/taxallpro.png", "/Taxall04.png"],
  },
  {
    id: "2",
    title: "Tradeneeti - Stock Market Training Institute",
    category: "Finance / Education",
    client: "Aspiring Traders & Investors",
    year: "2024",
    websiteUrl: "https://tradeneeti.com/",
    status: "completed",
    description:
      "Tradeneeti is a financial stock market institute offering expert-led courses, real-time trading insights, and practical training.",
    challenge:
      "Many aspiring traders lacked proper guidance, market knowledge, and real-time learning opportunities in the stock trading domain.",
    solution:
      "We developed a digital platform for Tradeneeti, featuring interactive courses, live market updates, mentorship, and demo trading tools.",
    results:
      "Increased student engagement, enhanced trading knowledge, and improved confidence among learners entering the financial markets.",
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Trading APIs"],
    images: ["/tradeneeti.png", "/trade.png", "/trade2.png"],
  },
  {
    id: "3",
    title: "Chilli Restaurant - Dining Experience",
    category: "Restaurant",
    client: "Local Food Lovers",
    year: "2024",
    websiteUrl: "",
    status: "completed",
    description:
      "Chilli Restaurant is a vibrant dining spot located in Patna, Bihar, known for its delicious multi-cuisine menu and warm ambiance.",
    challenge:
      "The restaurant needed a modern digital presence to showcase its menu, ambiance, and attract more local customers.",
    solution:
      "We developed a responsive website highlighting the menu, special dishes, gallery, and easy reservation options for a better user experience.",
    results:
      "The restaurant saw increased footfall, improved customer engagement, and enhanced visibility in the Patna food scene.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Firebase"],
    images: ["/chilli.png", "/chilli02.png", "/chilli03.png"],
  },
  {
    id: "4",
    title: "MAA AHILYA BAI HOSPITAL - Healthcare Facility",
    category: "Hospital / Healthcare",
    client: "Patients & Local Community",
    year: "2024",
    websiteUrl: "https://maaahilyabai.com/",
    status: "completed",
    description:
      "MAA AHILYA BAI HOSPITAL is a trusted healthcare facility in Kanpur Nagar, offering quality medical services and 24/7 emergency care.",
    challenge:
      "The hospital needed a digital platform to enhance patient engagement, share service details, and improve appointment accessibility.",
    solution:
      "We created a responsive website showcasing departments, emergency services, doctor profiles, and an easy appointment booking system.",
    results:
      "The hospital saw better patient communication, improved online visibility, and smoother operations for appointments and information access.",
    technologies: ["React.js", "HTML", "CSS", "JavaScript", "Firebase"],
    images: ["/hospital.png", "/hospital022.png", "/hospital033.png"],
  },
  {
    id: "5",
    title: "Skin Cancer Classification System",
    category: "AI / Healthcare",
    client: "Hospitals & Dermatology Clinics",
    year: "2024",
    websiteUrl: "",
    status: "completed",
    description:
      "Developed a machine learning-based system for early detection of skin cancer through medical image classification with 93% accuracy.",
    challenge:
      "Hospitals needed a fast, accurate tool to assist in diagnosing skin cancer from dermatoscopic images with minimal error.",
    solution:
      "We built a user-friendly platform that processes up to 200 images at once and provides instant, high-confidence predictions using ML algorithms.",
    results:
      "Enabled early diagnosis, reduced workload on doctors, and improved treatment outcomes through AI-powered decision support.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Streamlit"],
    images: ["/cancerdet.png", "/cancer2.png", "/cancer3.png"],
  },
  {
    id: "6",
    title: "Speaking Warrior - Public Speaking Academy",
    category: "Education / Coaching",
    client: "Aspiring Public Speakers & Professionals",
    year: "2024",
    websiteUrl: "https://speakingwarrior.in/",
    status: "completed",
    description:
      "Speaking Warrior is a premier public speaking and communication training platform dedicated to empowering individuals with confidence and clarity in their voice.",
    challenge:
      "Many professionals and students struggle with public speaking anxiety, lack of confidence, and ineffective communication skills, limiting their personal and career growth.",
    solution:
      "We developed a comprehensive digital platform offering structured courses, personalized coaching sessions, batch training programs, and interactive learning modules to build speaking confidence.",
    results:
      "Successfully launched a platform that has helped hundreds of individuals overcome speaking fears, improve communication skills, and achieve their personal and professional goals.",
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Video Streaming", "Payment Gateway"],
    images: ["/speaking.png", "/spea1.png", "/spea2.png"],
  },
  {
    id: "7",
    title: "MS Video - Photography & Videography Portfolio",
    category: "Creative / Portfolio",
    client: "Professional Photographers & Videographers",
    year: "2024",
    websiteUrl: "https://m-svideo.vercel.app/",
    status: "development",
    description:
      "MS Video is an innovative portfolio platform currently under active development, designed specifically for professional photographers and videographers to showcase their creative work with stunning visual presentations.",
    challenge:
      "Creative professionals need a sophisticated, modern platform to display their photography and videography work with high-quality image galleries, seamless video players, client booking systems, and portfolio management features.",
    solution:
      "We are actively developing a cutting-edge portfolio website featuring advanced gallery systems, optimized video streaming capabilities, integrated client booking and management tools, and a fully responsive design optimized for visual content across all devices.",
    results:
      "🚧 PROJECT IN ACTIVE DEVELOPMENT: The platform is currently being built with modern technologies and will provide photographers and videographers with a professional online presence to attract clients, showcase their artistic vision, and manage their business operations efficiently. Expected completion: Q2 2024.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Vercel",
      "Image Optimization",
      "Video Streaming",
      "Client Management System",
    ],
    images: [
      "/ms01.png?height=600&width=800&text=MS+Video+Hero+%28Development+Preview%29",
      "/ms02.png?height=400&width=600&text=Gallery+System+%28In+Progress%29",
      "/ms03.png?height=400&width=600&text=Video+Portfolio+%28Coming+Soon%29",
    ],
  },
  {
    id: "8",
    title: "Manglam Event - Premium Wedding & Event Planning",
    category: "Event Management / Wedding Planning",
    client: "Couples & Event Organizers",
    year: "2024",
    websiteUrl: "https://manglam-event.vercel.app/",
    status: "development",
    description:
      "Manglam Event is a premium wedding and event planning platform currently under development, bringing over 8 years of experience in creating magical weddings and unforgettable celebrations across India.",
    challenge:
      "Couples and event organizers need a comprehensive digital platform to plan, visualize, and manage their dream weddings and events with professional guidance, vendor coordination, and seamless execution from intimate ceremonies to grand celebrations.",
    solution:
      "We are developing an all-in-one event management platform featuring wedding planning tools, vendor marketplace, budget management, timeline coordination, guest management systems, and virtual venue tours to transform dreams into perfectly executed celebrations.",
    results:
      "🚧 PROJECT IN ACTIVE DEVELOPMENT: The platform will revolutionize wedding and event planning by providing couples with professional-grade tools and expert guidance. With 8+ years of industry experience, Manglam Event will offer end-to-end solutions for creating magical celebrations that reflect each couple's unique love story. Expected launch: Q3 2024.",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Payment Gateway",
      "Calendar Integration",
      "Image Gallery",
      "Vendor Management System",
      "Real-time Chat",
    ],
    images: [
      "/mang01.png?height=600&width=800&text=Manglam+Event+Hero+%28Development+Preview%29",
      "/mang02.png?height=400&width=600&text=Wedding+Planning+Dashboard+%28In+Progress%29",
      "/mang03.png?height=400&width=600&text=Vendor+Marketplace+%28Coming+Soon%29",
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

          {/* Development Status Alert */}
          {project.status === "development" && (
            <div className="mb-6 rounded-lg border border-orange-200 bg-orange-50 p-4">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-600" />
                <h3 className="font-semibold text-orange-800">Project in Development</h3>
              </div>
              <p className="mt-2 text-sm text-orange-700">
                This project is currently under active development. Features and design may change as we continue to
                build and improve the platform. The preview link shows the current development progress.
              </p>
            </div>
          )}

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{project.title}</h1>
                  {project.status === "development" && (
                    <div className="flex items-center gap-1 rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800 border border-orange-200">
                      <Clock className="h-4 w-4" />
                      In Development
                    </div>
                  )}
                </div>
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
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Status:</span>
                  <span
                    className={
                      project.status === "development" ? "text-orange-600 font-medium" : "text-green-600 font-medium"
                    }
                  >
                    {project.status === "development" ? "🚧 Active Development" : "✅ Completed"}
                  </span>
                </div>
              </div>
              <p className="text-gray-700">{project.description}</p>

              {/* Visit Website Button */}
              {project.websiteUrl && (
                <div className="pt-4">
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 ${
                      project.status === "development"
                        ? "bg-orange-600 text-white hover:bg-orange-700 focus-visible:ring-orange-950"
                        : "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-950"
                    }`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.status === "development" ? "Preview Development Site" : "Visit Live Website"}
                  </a>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center">
              <Image
                src={project.images[0] || "public/mang01.png"}
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
                <h2 className="text-2xl font-bold">
                  {project.status === "development" ? "The Challenge We're Solving" : "The Challenge"}
                </h2>
                <p className="text-gray-700">{project.challenge}</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">
                  {project.status === "development" ? "Our Development Approach" : "Our Solution"}
                </h2>
                <p className="text-gray-700">{project.solution}</p>
              </div>
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">
                  {project.status === "development" ? "Expected Results & Progress" : "The Results"}
                </h2>
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
                <h2 className="text-2xl font-bold py-6">
                  {project.status === "development" ? "Development Preview Gallery" : "Project Gallery"}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.images.slice(1).map((image, index) => (
                    <Image
                      key={index}
                      src={image || "public/mang01.png"}
                      alt={`${project.title} - Image ${index + 2}`}
                      width={400}
                      height={300}
                      className="rounded-lg object-cover"
                    />
                  ))}
                </div>
              </div>

              {/* Another Visit Website Button */}
              {project.websiteUrl && (
                <div className="pt-4">
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center rounded-md border px-6 py-3 text-sm font-medium shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 ${
                      project.status === "development"
                        ? "border-orange-600 bg-transparent text-orange-600 hover:bg-orange-50 focus-visible:ring-orange-950"
                        : "border-green-600 bg-transparent text-green-600 hover:bg-green-50 focus-visible:ring-green-950"
                    }`}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {project.status === "development" ? "View Development Progress" : "Explore Live Project"}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              {project.status === "development" ? "Want a Similar Project?" : "Interested in working with us?"}
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
              {project.status === "development"
                ? "We're actively developing innovative solutions like this. Let's discuss how we can create something amazing for your business too."
                : "Let's discuss your project and see how we can help bring your vision to life."}
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
