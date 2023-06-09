import { useState } from "react"
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md"

export default function SwitchProductCategorie({ choice, changeCategorie }: { choice: string, changeCategorie: Function }) {
    let [index, setIndex] = useState<number>(0)

    const options: string[] = ["coffees", "tea", "breakfasts", "desserts"]

    return (
        <div className="flex items-center gap-10 my-3">
            <button
                onClick={() => {
                    setIndex(index -= 1)
                    changeCategorie(options[index])
                }}
                className="disabled:opacity-50 disabled:pointer-events-none bg-[#F5DEB3] text-[#5D4037] ring-2 ring-[#F5DEB3] rounded active:bg-transparent active:text-[#F5DEB3]"
                disabled={index === 0}
            >
                <MdKeyboardDoubleArrowLeft size={35} />
            </button>
            <span className="w-28 text-xl font-semibold leading-6 text-[#FFB74D] text-center">{choice}</span>
            <button
                onClick={() => {
                    setIndex(index += 1)
                    changeCategorie(options[index])
                }}
                className="disabled:opacity-50 disabled:pointer-events-none bg-[#F5DEB3] text-[#5D4037] ring-2 ring-[#F5DEB3] rounded active:bg-transparent active:text-[#F5DEB3]"
                disabled={index === options.length - 1}
            >
                <MdKeyboardDoubleArrowRight size={35} />
            </button>
        </div>
    )
}
