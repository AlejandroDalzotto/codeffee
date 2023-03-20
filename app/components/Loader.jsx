import { MdImage } from "react-icons/md"

export const Loader = () => {
    return (
        <div className="animate-pulse h-40 w-40 rounded shadow grid place-content-center ring-2 ring-black">
            <MdImage />
        </div>
    )
}
