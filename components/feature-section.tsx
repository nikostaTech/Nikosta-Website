import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import type { LucideIcon } from "lucide-react"

interface FeatureSectionProps {
  title: string
  description: string
  features: {
    icon: LucideIcon
    title: string
    description: string
  }[]
  badge?: string
  className?: string
  dark?: boolean
}

export function FeatureSection({ title, description, features, badge, className, dark = false }: FeatureSectionProps) {
  return (
    <section className={cn("py-20", dark ? "bg-black text-white" : "bg-white text-black", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            {badge && (
              <Badge variant={dark ? "glow" : "tech"} className="px-3 py-1 text-sm">
                {badge}
              </Badge>
            )}
            <h2
              className={cn(
                "text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl",
                dark ? "text-white" : "text-black",
              )}
            >
              {title}
            </h2>
            <p
              className={cn(
                "mx-auto max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed",
                dark ? "text-gray-400" : "text-gray-500",
              )}
            >
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={cn(
                  "flex flex-col space-y-3 rounded-lg p-6",
                  dark
                    ? "border border-gray-800 bg-gray-950/50 backdrop-blur-sm"
                    : "border border-gray-200 bg-white shadow-sm",
                )}
              >
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full",
                    dark ? "bg-primary-500/20 text-primary-500" : "bg-primary-50 text-primary-500",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={cn("text-xl font-bold", dark ? "text-white" : "text-black")}>{feature.title}</h3>
                <p className={dark ? "text-gray-400" : "text-gray-500"}>{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

