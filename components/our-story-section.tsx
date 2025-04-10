import Image from "next/image"
import { Award, Globe, Users, CheckCircle } from "lucide-react"

export function OurStorySection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column - Story text */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
              <div className="mt-4 h-1 w-20 bg-primary-500"></div>
            </div>

            <p className="text-gray-600 md:text-lg">
              Founded in 2024, Nikosta began with a simple mission: to help businesses leverage the power of technology
              to innovate and grow. What started as a small team of passionate technologists has grown into a
              full-service technology company with expertise across software development, cloud solutions, data
              analytics, and cybersecurity.
            </p>

            <p className="text-gray-600 md:text-lg">
              In our short but impactful journey, we've had the privilege of working with clients across various
              industries, from startups to established enterprises. Each project has contributed to our growth and
              expertise, allowing us to refine our processes and expand our capabilities.
            </p>

            <p className="text-gray-600 md:text-lg">
              Today, Nikosta is recognized for delivering innovative technology solutions that drive business results.
              Our team combines deep technical expertise with business acumen to create solutions that not only solve
              technical challenges but also deliver measurable business value.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary-500" />
                <span className="font-medium">Innovative Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary-500" />
                <span className="font-medium">Client-Focused Approach</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary-500" />
                <span className="font-medium">Technical Excellence</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-primary-500" />
                <span className="font-medium">Continuous Innovation</span>
              </div>
            </div>
          </div>

          {/* Right column - Image and stats */}
          <div className="flex flex-col space-y-10">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/our story.jpg?height=700&width=700&text=Our+Team"
                alt="Our Team"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <Users className="h-10 w-10 text-primary-500" />
                <div className="text-center">
                  <h3 className="text-3xl font-bold">5+</h3>
                  <p className="text-gray-500">Clients Worldwide</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <Award className="h-10 w-10 text-primary-500" />
                <div className="text-center">
                  <h3 className="text-3xl font-bold">5+</h3>
                  <p className="text-gray-500">Projects Completed</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <Globe className="h-10 w-10 text-primary-500" />
                <div className="text-center">
                  <h3 className="text-3xl font-bold">2+</h3>
                  <p className="text-gray-500">Countries Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

