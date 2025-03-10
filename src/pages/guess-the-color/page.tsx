import Navbar from '@/components/navbar'

export default function GuessTheColorPage() {
  return (
    <>
      <Navbar
        title="Guess the color"
        onReset={() => alert('Working on this feature as well')}
      />
      <div>Guess the Color game under construction 🚧</div>
    </>
  )
}
