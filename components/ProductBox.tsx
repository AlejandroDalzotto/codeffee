import data from "@/data.json" assert {type: "JSON"}
import { Product } from "@/Models/Product"
import { useState } from "react"
import { MdInfo } from "react-icons/md"
import ImagePlaceholder from "./ImagePlaceHolder"
import Modal from "./Modal"

export default function ProductBox({ active, addToCart, choice }: { active: string, addToCart: Function, choice: string }) {
  const [modal, setModal] = useState<boolean>(false)

  const { products }: { products: any } = data
  const product: Product = products[choice].find((x: Product) => x.name === active)

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="py-5">
          {product.img &&
            <ImagePlaceholder
              key={product.img}
              src={product.img}
              alt={product.img}
              width={180}
              height={180}
            />}
        </div>

        <div>
          <p className="w-fit mx-auto text-xl">Precio: {product.price} USD</p>

          <div className="flex justify-between items-center">
            <button onClick={() => { addToCart(product) }} className="bg-[#F5DEB3] text-[#5D4037] ring-2 ring-[#F5DEB3] rounded m-4 p-2 font-medium w-32 transition-all hover:bg-transparent hover:text-[#F5DEB3]">Añadir al carro</button>
            <button onClick={() => setModal(!modal)} className="flex justify-between items-center gap-2 bg-[#F5DEB3] text-[#5D4037] ring-2 ring-[#F5DEB3] rounded m-4 p-2 font-medium transition-all hover:bg-transparent hover:text-[#F5DEB3]">
              <MdInfo />
              Info
            </button>
          </div>
        </div>

      </div>
      {modal && <Modal setModal={setModal} modal={modal} product={product} />}
    </div>
  )
}
