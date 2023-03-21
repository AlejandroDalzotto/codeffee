import Link from "next/link"
import { MdPhone, MdEmail, MdCopyright } from "react-icons/md"

export default function Footer() {
    return (
        <footer className="relative bg-neutral-200 text-neutral-900 py-14 px-8">
            <div className="flex flex-col md:flex-row md:justify-around gap-10">
                <div className="flex flex-col">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4">Codeffee</h2>
                    <p className="my-2 lg:w-[40ch]">En nuestra cafetería, te invitamos a disfrutar de una experiencia única en cada taza de café.</p>
                    <div className="flex gap-2 items-center my-2">
                        <MdPhone />
                        <p>(032) - 0001 - 0002</p>
                    </div>
                    <div className="flex gap-2 items-center my-2">
                        <MdEmail />
                        <p>cafeteriasigma@codeffee.com</p>
                    </div>
                    <div className="flex gap-2 items-center my-2">
                        <MdCopyright />
                        <Link className="text-rose-600 font-semibold hover:text-neutral-900" href="https://alejandrodalzotto-portfolio.vercel.app/">Creada por Alejandro Dalzotto</Link>
                    </div>
                </div>

                <div className=" flex flex-col">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4">Horarios</h2>
                    <p className="my-2">lun - vie: 9:00 A.M. - 9:00 P.M.</p>
                    <p className="my-2">sab: 9:00 A.M. - 12:00 A.M</p>
                    <p className="my-2">dom: Cerrado</p>
                </div>

                <div className="flex flex-col">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4">Compañía</h2>
                    <Link className="my-2" href="/about">Sobre nosotros</Link>
                    <Link className="my-2" href="#">Trabaja con nosotros</Link>
                    <Link className="my-2" href="#">Blog</Link>
                </div>
            </div>
        </footer>
    )
}
