"use client"

import type React from "react"

import { useState, type FormEvent, useTransition } from "react"
import { sendEmail } from "../actions/send-email"
import toast from "react-hot-toast" // Use react-hot-toast directly
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    // Only allow numbers for phone field
    if (name === "phone" && value !== "") {
      const numericValue = value.replace(/[^0-9]/g, "")
      setFormData((prev) => ({ ...prev, [name]: numericValue }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    startTransition(async () => {
      try {
        await sendEmail(formData)
        // Show success notification
        toast.success("Message Sent! Thank you for contacting us.")
      } catch (error) {
        console.error(error)
        toast.error("There was an error sending your message. Please try again later.")
      } finally {
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        })
        setIsSubmitting(false)
      }
    })
  }

  // Helper function to render required field indicator
  const RequiredIndicator = () => <span className="text-red-500 ml-1">*</span>

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Added extra padding at the top for header space */}
      <section className="w-full pt-24 pb-12 sm:pt-28 md:pt-32 md:pb-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
              <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
                Have a project in mind? We'd love to hear from you. Fill out the form below and we'll get back to you as
                soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Contact Information</h2>
                <p className="mt-2 text-gray-500">
                  We're here to help with any questions you may have about our technology solutions.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-black" />
                  <div>
                    <h3 className="font-medium">Our Office</h3>
                    <p className="text-sm text-gray-500">Delta 2, Greater Noida, Uttar Pradesh</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-black" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-gray-500">contact@nikosta.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-black" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-gray-500">+91 9560603635</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border p-6">
                <h3 className="text-lg font-medium">Business Hours</h3>
                <div className="mt-4 grid gap-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Monday - Friday</span>
                    <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Saturday</span>
                    <span className="text-sm font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Sunday</span>
                    <span className="text-sm font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-lg border p-6 shadow-sm">
              <h2 className="text-2xl font-bold">Send Us a Message</h2>
              <p className="text-sm text-gray-500 mt-2">
                Fields marked with <span className="text-red-500">*</span> are required
              </p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      Name
                      <RequiredIndicator />
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email
                      <RequiredIndicator />
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="Your email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone
                      <RequiredIndicator />
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Your phone number"
                      required
                      type="tel"
                      pattern="[0-9]*"
                      inputMode="numeric"
                      value={formData.phone}
                      onChange={handleChange}
                      onKeyPress={(e) => {
                        // Allow only numbers and control keys
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "Delete" &&
                          e.key !== "ArrowLeft" &&
                          e.key !== "ArrowRight"
                        ) {
                          e.preventDefault()
                        }
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">
                    Message
                    <RequiredIndicator />
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project"
                    required
                    className="min-h-[150px]"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800"
                  disabled={isSubmitting || isPending}
                >
                  {isSubmitting || isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Using OpenStreetMap instead of Google Maps */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-lg overflow-hidden h-[400px] w-full border shadow-sm">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight={0}
                marginWidth={0}
                src="https://www.openstreetmap.org/export/embed.html?bbox=77.4500%2C28.4500%2C77.5500%2C28.5500&amp;layer=mapnik&amp;marker=28.4963%2C77.5030"
                style={{ border: 0 }}
                title="Nikosta Office Location"
              ></iframe>
              <div className="mt-2 text-center">
                <a
                  href="https://www.openstreetmap.org/?mlat=28.4963&amp;mlon=77.5030#map=13/28.4963/77.5030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-black underline"
                >
                  View Larger Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
