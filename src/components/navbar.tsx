import { Link, useLocation } from 'wouter'
import { Button } from './ui/button'

interface NavbarProps {
  title: string
  onReset?: () => void
}

export default function Navbar({ title, onReset }: NavbarProps) {
  const location = useLocation()[0]

  return (
    <header className="w-full border-b mb-12">
      <div className="set-width flex justify-between items-center py-2 sm:py-4">
        <h1 className="text-3xl font-semibold">{title}</h1>

        <div className="flex items-center space-x-4">
          {location !== '/' && (
            <Button asChild>
              <Link href="/">Home</Link>
            </Button>
          )}
          {onReset !== undefined && (
            <Button variant="outline" onClick={onReset}>
              New game
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
