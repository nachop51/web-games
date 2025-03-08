import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card'

interface CardLinkProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function CardLink({ icon, title, description }: CardLinkProps) {
  return (
    <Card className="hover:-translate-y-2 transform transition-transform duration-200">
      <CardHeader className="flex flex-row items-center gap-8">
        {icon}
        <div className="flex flex-col gap-2">
          <CardTitle className="text-primary">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
    </Card>
  )
}
