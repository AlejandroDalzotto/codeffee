export default function Modal({ setModal, modal, product }) {
    return (
        <div className="relative z-10">
            <div className="fixed inset-0 bg-black/75 bg-opacity-75 transition-opacity backdrop-blur-md"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-left sm:mt-0 sm:ml-4">
                                    {product.name && <h3 className="text-2xl font-semibold leading-6 text-neutral-900">{product.name}</h3>}
                                    <div className="my-4">
                                        {product.description && <p className="text-neutral-500">{product.description}</p>}
                                    </div>
                                    <h4 className="text-lg font-semibold leading-6 text-neutral-800">Forma de preparación</h4>
                                    <div className="my-4">
                                        {product.preparation && <p className="text-neutral-500">{product.preparation}</p>}
                                    </div>
                                    <h4 className="text-lg font-semibold leading-6 text-neutral-800">Ingredientes</h4>
                                    <div className="my-4 flex flex-wrap gap-3">
                                        {product.ingredients.map((item, idx) => {
                                            return (
                                                <p key={idx} className="inline-grid place-content-center text-neutral-50 bg-neutral-900 px-2 py-1 text-sm font-medium shadow-sm w-fit">{item}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button
                                onClick={() => setModal(!modal)}
                                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-500 sm:ml-3 sm:w-auto"
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