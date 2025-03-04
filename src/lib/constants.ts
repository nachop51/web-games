import { GuessHint } from './types'

export const hintSymbol: Record<GuessHint, string> = {
  exact: '✅',
  higher: '⏫',
  lower: '⏬',
  bitHigher: '🔼',
  bitLower: '🔽',
}
