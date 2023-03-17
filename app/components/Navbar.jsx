"use client"

import Link from "next/link"
import { useState } from "react"
import { MdCoffee, MdSunny } from "react-icons/md"
import { IoMdMoon } from "react-icons/io";
import { useTheme } from "next-themes"

const nagivation = [
  {
    "label": "Inicio",
    "route": "/"
  },
  {
    "label": "Sobre nosotros",
    "route": "/about"
  },
  {
    "label": "Música",
    "route": "/music"
  }
]

export default function Navbar() {

  const [active, toggleActive] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme

  return (
    <nav className="bg-[#e6b07a] dark:bg-[#3c2f2b]">
      <div className="mx-auto max-w-7xl py-3 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button onClick={() => { toggleActive(!active) }} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-[#F5DEB3] dark:text-[#EBCFB2] bg-[#CD853F] dark:bg-[#5D4037] hover:bg-black/20 hover:text-white dark:hover:bg-[#EBCFB2]/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>

              <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start lg:gap-36">
            <div className="flex items-center gap-4 justify-between text-[#F5DEB3] dark:text-[#EBCFB2]">
              <div className="block h-10 text-4xl lg:hidden">
                <MdCoffee />
              </div>
              <h2 className="text-4xl font-bold">Codeffee</h2>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex items-center space-x-4">
                {nagivation.map((item, idx) => {
                  return (
                    <Link key={idx} href={item.route} className="text-[#F5DEB3] dark:text-[#EBCFB2] bg-[#d19457] dark:bg-[#3c2f2b] hover:bg-black/20 hover:text-white dark:hover:bg-[#EBCFB2]/30 rounded-md px-3 py-2 font-medium">{item.label}</Link>
                  )
                })}
                {currentTheme === "dark" ? (
                  <button className="bg-white text-black w-8 h-8 grid place-content-center rounded transition-all hover:ring-1 hover:ring-neutral-300" onClick={() => setTheme("light")}>
                    <MdSunny size={25} />
                  </button>
                ) : (
                  <button className="bg-black/30 w-8 h-8 grid place-content-center rounded transition-all hover:ring-1 hover:ring-neutral-300" onClick={() => setTheme("dark")}>
                    <IoMdMoon size={25} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={active ? "block sm:hidden" : "hidden"}>
        <div className="flex flex-col space-y-1 px-2 pt-2 pb-3">
          {nagivation.map((item, idx) => {
            return (
              <Link key={idx} href={item.route} className="text-[#F5DEB3] dark:text-[#EBCFB2] bg-[#d19457] dark:bg-[#3c2f2b] hover:bg-black/20 hover:text-white dark:hover:bg-[#EBCFB2]/30 rounded-md px-3 py-2 text-sm font-medium">{item.label}</Link>
            )
          })}
          {currentTheme === "dark" ? (
            <button className="bg-white text-black w-8 h-8 grid place-content-center rounded transition-all hover:ring-1 hover:ring-neutral-300" onClick={() => setTheme("light")}>
              <MdSunny size={25} />
            </button>
          ) : (
            <button className="bg-black/30 w-8 h-8 grid place-content-center rounded transition-all hover:ring-1 hover:ring-neutral-300" onClick={() => setTheme("dark")}>
              <IoMdMoon size={25} />
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
