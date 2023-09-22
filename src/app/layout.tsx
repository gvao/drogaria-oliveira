import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Drogaria Oliveira',
  description: 'Alguma frase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-Br">
      <body className={``}>

        <Header />

        <main>
          {children}
        </main>

      </body>
    </html>
  )

}

const Header = () => (
  <header
    className="py-2 px-4 border container flex justify-between"
  >
    <h1>Dorgaria Oliveira</h1>

    <Nav />

  </header>
)

const Nav = () => (
  <nav className="gap-2 flex" >
    <a href="/">home</a>
    <a href="/produtos">produtos</a>
  </nav>

)