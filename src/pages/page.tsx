import { Hexagon, SwatchBook } from 'lucide-react'
import CardLink from '@/components/home/card-link'
import Navbar from '@/components/navbar'
import { Link } from 'wouter'

export default function Page() {
  const games = [
    {
      icon: <Hexagon size={64} className="text-primary" />,
      href: '/colorhexle',
      title: 'ColorHexle',
      description:
        'ColorHexle is a game where you have to guess the hex color of a given color.',
    },
    {
      icon: <SwatchBook size={64} className="text-primary" />,
      href: '/guess-the-color',
      title: 'Guess the color',
      description:
        'Guess the color is a game where you have to select the different color from a set of colors.',
    },
  ]

  return (
    <>
      <Navbar title="Web Games" />
      <header className="set-width mb-8">
        <h1 className="text-center text-3xl font-bold">
          Welcome to Web Games! 🎮
        </h1>
        <p className="text-center mt-2 text-lg">
          Here you can play games that are related to web development. Have fun!
        </p>
      </header>
      <main className="set-width">
        <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {games.map(({ icon, href, title, description }) => (
            <article key={title}>
              <Link href={href}>
                <CardLink icon={icon} title={title} description={description} />
              </Link>
            </article>
          ))}
        </section>
      </main>
    </>
  )
}
