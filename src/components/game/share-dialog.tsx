import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { ColorGuess } from '@/lib/types'
import { Twitter } from 'lucide-react'
import { hintSymbol } from '@/lib/constants'

export default function ShareDialog({
  open,
  onClose,
  guessedColor,
  attempts,
  hints,
}: {
  open: boolean
  onClose: () => void
  guessedColor: string
  attempts: number
  hints: ColorGuess[]
}) {
  const hintsToShare = hints
    .map((guess) => {
      const guessToShow = Object.values(guess.values).map(
        ({ h }) => hintSymbol[h],
      )

      return guessToShow.join('')
    })
    .join('\n')

  const handleXShare = () => {
    const url = `${window.location.href}`
    const shareText = `I guess the hex color ${guessedColor} in ${attempts} attempts!\n\n${hintsToShare}\n\n${window.location.href}`

    window.open(
      'http://twitter.com/share?url=' +
        encodeURIComponent(url) +
        '&text=' +
        encodeURIComponent(shareText),
      '',
      'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0',
    )
  }

  const renderHints = () => {
    return hints.map((guess, idx) => (
      <div key={idx} className="flex items-center justify-center gap-2">
        {Object.values(guess.values).map(({ h }, i) => (
          <div key={i} className="flex items-center gap-2 size-5">
            <span>{hintSymbol[h]}</span>
          </div>
        ))}
      </div>
    ))
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>🎉 Congratulations! 🎉</DialogTitle>
          <DialogDescription>
            You guessed the correct color! Here's your result:
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 text-center">
          <p>
            Color: <span style={{ color: guessedColor }}>{guessedColor}</span>
          </p>
          <p>Attempts: {attempts}</p>
          <h3 className="mt-4">Guess History:</h3>
          <div className="mt-2">{renderHints()}</div>
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={onClose} variant={'ghost'}>
              Close
            </Button>
          </DialogClose>
          <Button onClick={handleXShare}>
            <Twitter size={14} />
            Share
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
