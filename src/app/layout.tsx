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
    className="py-2 px-4"
  >
    header
  </header>
)