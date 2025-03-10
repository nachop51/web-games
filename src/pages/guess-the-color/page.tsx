import Navbar from '@/components/navbar'

export default function GuessTheColorPage() {
  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <>
      <Navbar
        title="Guess the color"
        onGoBack={handleGoBack}
        onReset={() => alert('Working on this feature as well')}
      />
      <div>Guess the Color game under construction 🚧</div>
    </>
  )
}
