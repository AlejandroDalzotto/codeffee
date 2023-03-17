"use client"

import data from "@/data.json" assert {type: "JSON"}
import { useState } from "react"
import { Toaster, toast } from "sonner"
import Cart from "./Cart"
import ProductBox from "./ProductBox"

export default function MenuPage() {

    const [active, setActive] = useState("Espresso")
    const [cart, setCart] = useState([])

    const { products: { coffees } } = data

    const addToCart = (product) => {
        if (cart.some(p => p.name === product.name)) {
            try {
                const newCart = cart.map(x => x.name === product.name ? ({ ...x, amout: x.amout + 1 }) : x);
                setCart(newCart);
                toast.success("Se ha agregado " + product.name + " al Carro");
            } catch (error) {
                toast.error("Se ha producido un error");
            }
        } else {
            try {
                setCart(cart.concat({
                    ...product, amout: 1,
                }))
                toast.success("Se ha agregado " + product.name + " al Carro");
            } catch (error) {
                toast.error("Se ha producido un error");
            }
        }
    }

    return (
        <article className="relative grid justify-items-center">
            <Toaster />
            <div>
                <h2 className="text-2xl font-semibold leading-6 text-[#F5DEB3] dark:text-[#FFB74D] text-center md:text-left">Descubre nuestras deliciosas opciones</h2>
                <div className="my-6">
                    <p className="text-white">Ofrecemos una selección de <span className="text-[#FFB74D]">café, tés, desayunos y postres</span> de alta calidad y deliciosos productos horneados. </p>
                    <p className="text-white"> Ven a nuestra cafetería para relajarte y disfrutar de nuestras bebidas y comida recién hechas.</p>
                </div>
            </div>
            <Cart cart={cart} />
            <div className="flex w-full justify-around items-center min-h-[400px]">
                <div className="flex flex-col gap-3">
                    {coffees.map((item, idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => setActive(item.name)}
                                disabled={item.name === active ? true : false}
                                className={item.name === active
                                    ? "bg-[#F5DEB3] text-[#5D4037] ring-2 ring-[#F5DEB3] rounded py-2 px-4 font-medium w-32 pointer-events-none"
                                    : "bg-transparent text-[#5D4037] dark:text-[#A1887F] ring-2 ring-[#F5DEB3] rounded py-2 px-4 font-medium w-32 transition-all hover:bg-[#F5DEB3] hover:text-[#5D4037]"}
                            >
                                {item.name}
                            </button>
                        )
                    })}
                </div>

                <ProductBox active={active} addToCart={addToCart} />

            </div>
        </article>
    )
}
