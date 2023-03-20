"use client"

import data from "@/data.json" assert {type: "JSON"}
import { Product } from "@/Models/Product"
import { useState } from "react"
import { Toaster, toast } from "sonner"
import Cart from "./Cart"
import ProductBox from "./ProductBox"
import SwitchProductCategorie from "./SwitchProductCategorie"

export default function MenuPage() {

    const DEFAULT_PRODUCTS: any = {
        "coffees": "Espresso",
        "tea": "Té verde",
        "breakfasts": "Acai bowl",
        "desserts": "Cheesecake"
    }

    const [active, setActive] = useState<string>("Espresso")
    const [cart, setCart] = useState<Product[]>([])

    const [choice, setChoice] = useState<string>("coffees")

    const { products }: { products: any } = data

    const addToCart = (product: Product) => {
        if (cart.some((p: Product) => p.name === product.name)) {
            try {
                const newCart: Product[] = cart.map((x: Product) => x.name === product.name ? ({ ...x, amout: x.amout + 1 }) : x);
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

    const removeToCart = (product: Product) => {
        if (cart.some(p => p.name === product.name)) {
            try {
                const newCart = cart.filter(x => x != product)
                setCart(newCart);
                toast.success("Se ha eliminado " + product.name + " del Carro");
            } catch (error) {
                toast.error("Se ha producido un error");
            }
        }
    }

    const changeCategorie = (choice: string) => {
        setChoice(choice)
        const newActive = DEFAULT_PRODUCTS[choice]
        setActive(newActive)
    }

    return (
        <article className="relative grid justify-items-center">
            <Toaster />
            <div>
                <h2 className="text-2xl font-semibold leading-6 text-[#FFB74D] text-center md:text-left">Descubre nuestras deliciosas opciones</h2>
                <div className="my-6">
                    <p className="text-white">Ofrecemos una selección de <span className="text-[#FFB74D]">cafés, tés, desayunos y postres</span> de alta calidad y deliciosos productos horneados. </p>
                    <p className="text-white"> Ven a nuestra cafetería para relajarte y disfrutar de nuestras bebidas y comida recién hechas.</p>
                </div>
            </div>
            <div className="my-4 flex flex-col items-center">
                <SwitchProductCategorie choice={choice} changeCategorie={changeCategorie} />
                <Cart cart={cart} removeToCart={removeToCart} />
            </div>
            <div className="relative flex flex-col md:flex-row w-full justify-center md:justify-around items-center min-h-[400px]">
                <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
                    {products[choice].map((item: Product, idx: number) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => setActive(item.name)}
                                disabled={item.name === active ? true : false}
                                className={item.name === active
                                    ? "bg-[#F5DEB3] text-[#5D4037] ring-2 ring-[#F5DEB3] rounded py-2 px-4 font-medium w-32 pointer-events-none"
                                    : "bg-transparent text-[#A1887F] ring-2 ring-[#F5DEB3] rounded py-2 px-4 font-medium w-32 transition-all hover:bg-[#F5DEB3] hover:text-[#5D4037]"}
                            >
                                {item.name}
                            </button>
                        )
                    })}
                </div>

                <ProductBox active={active} addToCart={addToCart} choice={choice} />

            </div>
        </article>
    )
}
