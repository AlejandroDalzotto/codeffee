import { Product } from "@/Models/Product";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

export default function DetailsCart({ cart, isVisible, toggleVisible, removeToCart }: { cart: Product[], isVisible: boolean, toggleVisible: Function, removeToCart: Function }) {
    return (
        <div className="relative z-10">
            <div className="fixed inset-0 bg-black/75 bg-opacity-75 transition-opacity backdrop-blur-md"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-neutral-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-left sm:mt-0 sm:ml-4">
                                    <h3 className="text-2xl font-semibold leading-6 text-white">Carro de compras</h3>
                                    <table className="border-collapse">
                                        {cart.length === 0 ? null :
                                            <thead className="grid grid-cols-4 w-full sm:w-96 mb-8 text-white">
                                                <tr>
                                                    <td className="grid place-content-center">Producto</td>
                                                </tr>
                                                <tr>
                                                    <td className="grid place-content-center">Nombre</td>
                                                </tr>
                                                <tr>
                                                    <td className="grid place-content-center">Cantidad</td>
                                                </tr>
                                                <tr>
                                                    <td className="grid place-content-center">Eliminar</td>
                                                </tr>
                                            </thead>}
                                        <tbody className="max-h-52 text-white">
                                            {cart.map((item: Product, idx: number) => {
                                                return (
                                                    <tr key={idx} className='grid grid-cols-4 w-full sm:w-96 overflow-x-hidden'>
                                                        <td className="grid place-content-center">
                                                            {item.img && <Image alt={item.name} src={item.img} width={60} height={24} />}
                                                        </td>
                                                        <td className="w-24 grid place-content-center">
                                                            <span>{item.name}</span>
                                                        </td>
                                                        <td className="grid place-content-center">
                                                            <span>{item.amout}</span>
                                                        </td>
                                                        <td className="grid place-content-center">
                                                            <button onClick={() => { removeToCart(item) }} className="transition-colors hover:text-neutral-700">
                                                                <MdDelete size={35} />
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="bg-neutral-600 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                onClick={() => toggleVisible(!isVisible)}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-lg font-semibold text-white shadow-sm transition-colors hover:bg-red-500 sm:ml-3 sm:w-auto"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
