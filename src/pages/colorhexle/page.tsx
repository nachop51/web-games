import ColorDisplay from '@/components/game/color-display'
import ColorGuessHistory from '@/components/game/color-guess-history'
import OtpInput from '@/components/game/otp-input'
import ShareDialog from '@/components/game/share-dialog'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import { useColorGameStore } from '@/stores/useColorGame'
import confetti from 'canvas-confetti'
import { useEffect, useState } from 'react'

export default function GuessTheHexPage() {
  const [showShareDialog, setShowShareDialog] = useState(false)
  const toGuessColor = useColorGameStore((state) => state.toGuessColor)
  const history = useColorGameStore((state) => state.history)
  const color = useColorGameStore((state) => state.color)
  const setColor = useColorGameStore((state) => state.setColor)
  const registerNewGuess = useColorGameStore((state) => state.registerNewGuess)
  const attemptsLeft = useColorGameStore((state) => state.attemptsLeft)
  const gameState = useColorGameStore((state) => state.gameState)
  const resetGame = useColorGameStore((state) => state.resetGame)

  const attemptsMade = 5 - attemptsLeft

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    if (color.length !== 6 || gameState !== 'playing') return

    if (history.map((h) => h.color).includes(color)) {
      alert('You already guessed this color!')
      return
    }

    registerNewGuess(color)
    setColor('')
  }

  useEffect(() => {
    if (gameState === 'lost') {
      alert('You lost! The color was: ' + '#' + toGuessColor.color)
    } else if (gameState === 'won') {
      setShowShareDialog(true)
      const interval = setInterval(() => {
        confetti({
          particleCount: 100,
          spread: 100,
          origin: { y: 0.6 },
        })
      }, 500)

      setTimeout(() => {
        clearInterval(interval)
      }, 1500)
    }
  }, [gameState, toGuessColor.color])

  return (
    <>
      <Navbar title="ColorHexle" onReset={resetGame} />
      <main className="set-width">
        <section className="flex justify-between items-center space-x-8">
          <ColorDisplay
            title="last guess"
            color={history.length > 0 ? '#' + history[0]?.color : undefined}
          />
          <ColorDisplay
            title="guess this color"
            color={'#' + toGuessColor.color}
          />
        </section>

        <section className="mt-6 text-center">
          <form onSubmit={handleSubmit} className="flex gap-4 justify-center">
            <OtpInput
              maxLength={6}
              value={color}
              onChange={(color) => setColor(color)}
              disabled={gameState !== 'playing'}
            />
            <Button
              type="submit"
              disabled={gameState !== 'playing' || color.length !== 6}
            >
              Check
            </Button>
          </form>
        </section>

        <section className="mt-4 text-center h-4">
          <p>{attemptsLeft !== 5 && ` Remaining attempts: ${attemptsLeft}`}</p>
        </section>

        <section className="pb-8">
          <h2 className="text-center font-semibold mt-12 mb-8">
            Guess history
          </h2>
          <ColorGuessHistory guesses={history} />
        </section>
        <ShareDialog
          open={showShareDialog}
          onClose={() => setShowShareDialog(false)}
          guessedColor={'#' + toGuessColor.color}
          attempts={attemptsMade}
          hints={history}
        />
      </main>
    </>
  )
}
