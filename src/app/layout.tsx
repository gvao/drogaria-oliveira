import { Logotipo } from '@/components/patterns'
import './globals.css'
import type { Metadata } from 'next'

import { HiMenu, HiShoppingCart } from "react-icons/hi"
import { Link } from '@/components/basics/link'

export const metadata: Metadata = {
  title: 'Drogaria Oliveira',
  description: 'O cuidado que sua saúde merece!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="pt-Br">
      <body className={`bg-cyan-100`}>

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
    className="py-2 px-4 bg-cyan-200 container flex justify-between items-center sticky top-0 z-20"
  >

    <Nav />

  </header>
)

const Nav = () => (
  <nav className="gap-2 flex justify-between items-stretch w-full h-7" >

    <HiMenu className="h-full w-fit" />

    <Logotipo className="border-cyan-950" />

    <Link href={{
      query: {
        showShopCart: true,
      }
    }} >
      <HiShoppingCart className="h-full w-fit" />
    </Link>

  </nav>
)


