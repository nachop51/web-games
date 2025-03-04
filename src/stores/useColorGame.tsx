import { create } from 'zustand'
import { ColorGuess, GameState } from '../lib/types'
import { getNewColor, measureDistance } from '../lib/functions'

const INITIAL_STATE = {
  attemptsLeft: 5,
  gameState: 'playing' as GameState,
  color: '',
}

interface ColorGameState {
  color: string
  toGuessColor: {
    color: string
    values: {
      r1: number
      r2: number
      g1: number
      g2: number
      b1: number
      b2: number
    }
  }
  history: ColorGuess[]
  setColor: (color: string) => void
  registerNewGuess: (guess: string) => void
  resetGame: () => void
  gameState: GameState
  attemptsLeft: number
}

export const useColorGameStore = create<ColorGameState>()((set, get) => ({
  toGuessColor: getNewColor(),
  resetGame: () =>
    set({
      toGuessColor: getNewColor(),
      history: [],
      color: INITIAL_STATE.color,
      attemptsLeft: INITIAL_STATE.attemptsLeft,
      gameState: INITIAL_STATE.gameState,
    }),
  history: [],
  color: INITIAL_STATE.color,
  setColor: (color) => set({ color }),
  registerNewGuess: (color) => {
    const { attemptsLeft, toGuessColor } = get()

    const colorValues = color.split('').map((v) => parseInt(v, 16))

    const guess: ColorGuess = {
      color: color,
      values: {
        r1: {
          v: color.slice(0, 1),
          h: measureDistance(colorValues[0], toGuessColor.values.r1),
        },
        r2: {
          v: color.slice(1, 2),
          h: measureDistance(colorValues[1], toGuessColor.values.r2),
        },
        g1: {
          v: color.slice(2, 3),
          h: measureDistance(colorValues[2], toGuessColor.values.g1),
        },
        g2: {
          v: color.slice(3, 4),
          h: measureDistance(colorValues[3], toGuessColor.values.g2),
        },
        b1: {
          v: color.slice(4, 5),
          h: measureDistance(colorValues[4], toGuessColor.values.b1),
        },
        b2: {
          v: color.slice(5, 6),
          h: measureDistance(colorValues[5], toGuessColor.values.b2),
        },
      },
    }

    const hasWon = Object.values(guess.values).every((v) => v.h === 'exact')
    const hasLost = attemptsLeft === 1

    set((state) => ({
      history: [guess, ...state.history],
      color: '',
      attemptsLeft: state.attemptsLeft - 1,
      gameState: hasWon ? 'won' : hasLost ? 'lost' : 'playing',
    }))
  },

  attemptsLeft: INITIAL_STATE.attemptsLeft,
  gameState: INITIAL_STATE.gameState,
}))
