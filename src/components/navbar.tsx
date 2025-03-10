import { Button } from './ui/button'

interface NavbarProps {
  title: string
  onReset?: () => void
  onGoBack?: () => void
}

export default function Navbar({ title, onReset, onGoBack }: NavbarProps) {
  return (
    <header className="w-full border-b mb-12">
      <div className="set-width flex justify-between items-center py-2 sm:py-4">
        <h1 className="text-3xl font-semibold">{title}</h1>

        <div className="flex items-center space-x-4">
          {onGoBack !== undefined && (
            <Button onClick={onGoBack}>Go Back</Button>
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
