import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import DetailsCart from "./DetailsCart";

export default function Cart({ cart }) {

    const [isVisible, toggleVisible] = useState(false)

    return (
        <>
            <div className="lg:absolute lg:top-0 lg:right-0">
                {/* BubbleAlert acá */}

                <button onClick={() => { toggleVisible(!isVisible) }} className="w-fit flex justify-between items-center gap-2 bg-[#F5DEB3] text-[#5D4037] ring-2 ring-[#F5DEB3] rounded m-4 p-2 font-medium transition-all hover:bg-transparent hover:text-[#F5DEB3]">
                    <MdShoppingCart />
                    Abrir carro
                </button>



            </div>
            {isVisible && <DetailsCart cart={cart} isVisible={isVisible} toggleVisible={toggleVisible} />}
        </>
    )
}
