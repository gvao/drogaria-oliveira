import { Logotipo } from '@/components/patterns'
import './globals.css'
import type { Metadata } from 'next'

import { HiChevronDoubleLeft, HiMenu, HiMenuAlt4, HiShoppingCart, HiViewGrid } from "react-icons/hi"
import { Link } from '@/components/basics/link'

export const metadata: Metadata = {
  title: 'Drogaria Oliveira',
  description: 'O cuidado que sua saúde merece!',
}

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {

  return (
    <html lang="pt-Br">
      <body className={`bg-cyan-100`}>

        <Header />

        {children}

        <NavBar />

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
  <nav className="gap-2 flex justify-between items-stretch w-full h-7 " >

    <HiChevronDoubleLeft className="h-full w-fit fill-cyan-700" />

    <Logotipo className="border-cyan-950" />

    <HiMenuAlt4 className="h-full w-fit fill-cyan-700" />

  </nav>
)

const NavBar = () => (
  <div className="w-full fixed bottom-4 flex justify-center z-30">
    <nav
      className="bg-cyan-600 text-cyan-100 py-2 px-4 rounded w-2/3 h-16 flex justify-evenly gap-4"
    >
      <Link href="/" className='p-1'>
        <HiViewGrid className="fill-cyan-200 h-full w-fit" />
      </Link>
      <Link href="/shopcart" className="p-1">
        <HiShoppingCart className="fill-cyan-200 h-full w-fit" />
      </Link>
    </nav>
  </div>
)
