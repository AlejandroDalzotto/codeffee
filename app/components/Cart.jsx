import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import DetailsCart from "./DetailsCart";

export default function Cart({ cart }) {

    const [isVisible, toggleVisible] = useState(false)

    return (
        <>
            <div className="md:absolute md:top-0 md:right-0">
                {/* BubbleAlert acá */}

                <button onClick={() => { toggleVisible(!isVisible) }} className="w-fit flex justify-between items-center gap-2 bg-[#0b7285] text-white ring-2 ring-[#0b7285] rounded m-4 p-2 font-medium transition-all hover:bg-transparent hover:text-[#0b7285]">
                    <MdShoppingCart />
                    Abrir carro
                </button>



            </div>
            {isVisible && <DetailsCart cart={cart} isVisible={isVisible} toggleVisible={toggleVisible} />}
        </>
    )
}
