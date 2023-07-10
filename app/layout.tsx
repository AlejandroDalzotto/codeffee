import './globals.css'
import { Josefin_Sans as Jsans } from '@next/font/google'
import { NextFont } from '@next/font'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const jsans: NextFont = Jsans({
  weight: ["400", "700"],
  subsets: ['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" translate="no">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={jsans.className}>
        <Navbar />
        <div className="max-w-[100vw] h-[calc(100%-88px)] mt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
