"use client"

import Link from "next/link"
import { useState } from "react"
import { MdCoffee } from "react-icons/md"

const nagivation: { label: string; route: string; }[] = [
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

    return (
        <nav className="bg-[#3c2f2b] fixed top-0 z-10 w-full">
            <div className="px-2 py-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button onClick={() => { toggleActive(!active) }} type="button" className="inline-flex items-center justify-center rounded-md p-2 text-[#EBCFB2] bg-[#5D4037] hover:bg-black/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                            <svg className="hidden w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start lg:gap-36">
                        <div className="flex items-center gap-4 justify-between text-[#EBCFB2]">
                            <div className="block h-10 text-4xl lg:hidden">
                                <MdCoffee />
                            </div>
                            <h2 className="text-4xl font-bold">Codeffee</h2>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex items-center space-x-4">
                                {nagivation.map((item, idx) => {
                                    return (
                                        <Link key={idx} href={item.route} className="text-[#EBCFB2] bg-[#3c2f2b] hover:bg-black/20 rounded-md px-3 py-2 font-medium">{item.label}</Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={active ? "block sm:hidden" : "hidden"}>
                <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
                    {nagivation.map((item, idx) => {
                        return (
                            <Link key={idx} href={item.route} className="text-[#EBCFB2] bg-[#3c2f2b] hover:bg-black/20 rounded-md px-3 py-2 text-sm font-medium">{item.label}</Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    )
}
