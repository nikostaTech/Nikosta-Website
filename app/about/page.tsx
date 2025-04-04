import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Globe, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const team = [
    {
      name: "Ashmit Raj",
      position: "CEO & Founder",
      bio: "With over 20 years of experience in enterprise technology, John leads our team with vision and expertise.",
      image: "/placeholder.svg?height=400&width=400&text=John",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      bio: "Sarah brings deep technical knowledge and innovation leadership to drive our technology strategy and implementation.",
      image: "/placeholder.svg?height=400&width=400&text=Sarah",
    },
    {
      name: "Michael Chen",
      position: "VP of Engineering",
      bio: "Michael's technical expertise and problem-solving skills help us deliver robust and scalable solutions.",
      image: "/placeholder.svg?height=400&width=400&text=Michael",
    },
    {
      name: "Emily Rodriguez",
      position: "Director of Data Science",
      bio: "Emily leads our data science initiatives, helping clients extract valuable insights from their data.",
      image: "/placeholder.svg?height=400&width=400&text=Emily",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Nikosta</h1>
                <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed">
                  We're a team of technology experts dedicated to helping businesses succeed in the digital era.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[350px] w-full overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=700&width=700&text=About+Us"
                  alt="About Nikosta"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
            </div>
            <div className="space-y-4 text-gray-500">
              <p>
                Founded in 2015, Nikosta began with a simple mission: to help businesses leverage the power of
                technology to innovate and grow. What started as a small team of passionate technologists has grown into
                a full-service technology company with expertise across software development, cloud solutions, data
                analytics, and cybersecurity.
              </p>
              <p>
                Over the years, we've had the privilege of working with clients across various industries, from startups
                to Fortune 500 companies. Each project has contributed to our growth and expertise, allowing us to
                refine our processes and expand our capabilities.
              </p>
              <p>
                Today, Nikosta is recognized for delivering innovative technology solutions that drive business results.
                Our team combines deep technical expertise with business acumen to create solutions that not only solve
                technical challenges but also deliver measurable business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                These core principles guide everything we do at Nikosta.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Innovation",
                description:
                  "We embrace new technologies and approaches to provide innovative solutions that keep our clients ahead of the curve.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every project, paying attention to the smallest details to deliver outstanding results.",
              },
              {
                title: "Integrity",
                description:
                  "We operate with honesty and transparency, building trust with our clients through ethical business practices.",
              },
              {
                title: "Collaboration",
                description:
                  "We believe in the power of collaboration, working closely with our clients to understand their needs and goals.",
              },
              {
                title: "Continuous Learning",
                description:
                  "We're committed to continuous learning and improvement, both as individuals and as an organization.",
              },
              {
                title: "Client Success",
                description:
                  "We measure our success by the positive impact our work has on our clients' businesses and their customers.",
              },
            ].map((value, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-center text-gray-500">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-gray-800 bg-gray-950 p-8">
              <Users className="h-12 w-12 text-white" />
              <div className="text-center">
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-gray-400">Clients Worldwide</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-gray-800 bg-gray-950 p-8">
              <Award className="h-12 w-12 text-white" />
              <div className="text-center">
                <h3 className="text-3xl font-bold">250+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-gray-800 bg-gray-950 p-8">
              <Globe className="h-12 w-12 text-white" />
              <div className="text-center">
                <h3 className="text-3xl font-bold">15+</h3>
                <p className="text-gray-400">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Leadership Team</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed">
                Meet the experts behind Nikosta's success.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.position}</p>
                </div>
                <p className="text-center text-sm text-gray-500">{member.bio}</p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Work With Us?</h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Let's collaborate to bring your technology vision to life. Contact us today to start the conversation.
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

