import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface TechCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
  iconClassName?: string
}

export function TechCard({ icon: Icon, title, description, className, iconClassName }: TechCardProps) {
  return (
    <Card
      className={cn(
        "overflow-hidden border-gray-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,112,243,0.3)] group",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <CardContent className="p-6 relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 text-primary-500">
          <Icon className={cn("h-6 w-6", iconClassName)} />
        </div>
        <h3 className="mb-2 text-xl font-bold text-white transition-colors duration-300">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

