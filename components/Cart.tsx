import { Product } from "@/Models/Product";
import { MdShoppingCart } from "react-icons/md";
import { useState } from "react";
import DetailsCart from "./DetailsCart";

export default function Cart({ cart, removeToCart }: { cart: Product[], removeToCart: Function }) {

  const [isVisible, toggleVisible] = useState<boolean>(false)

  return (
    <>
      <div className="my-4 xl:absolute xl:top-0 xl:right-0">
        {/* BubbleAlert acá */}

        <button onClick={() => { toggleVisible(!isVisible) }} className="w-fit flex justify-between items-center gap-2 bg-[#F5DEB3] text-[#5D4037] ring-2 ring-[#F5DEB3] rounded p-2 font-medium transition-all hover:bg-transparent hover:text-[#F5DEB3]">
          <MdShoppingCart />
          Abrir carro
        </button>



      </div>
      {isVisible && <DetailsCart cart={cart} removeToCart={removeToCart} isVisible={isVisible} toggleVisible={toggleVisible} />}
    </>
  )
}
