import { Metadata } from "next";
import { GiMusicalNotes } from "react-icons/gi";

export const metadata: Metadata = {
    title: 'Music | Codeffee'
}

export default function MusicPage() {
    return (
        <main>
            <div className="relative grid place-content-center music-bg bg-cover bg-no-repeat bg-center h-[calc(100vh-88px)]">
                <div className="container grid p-4 mx-auto justify-items-center">
                    <div className="md:max-w-[70ch] lg:-translate-x-44">
                        <h1 className="flex gap-5 items-center text-2xl md:text-4xl text-center md:text-left text-[#FFB74D] font-bold"><GiMusicalNotes size={45} /> Apartado musical <GiMusicalNotes size={45} /></h1>
                        <p className="my-8 text-base font-medium text-white lg:text-xl">Creemos que la música es una parte esencial de cualquier experiencia. Por eso, hemos elegido una selección de música ambiental que crea un ambiente relajado y acogedor para nuestros clientes.</p>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1679004457">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#5D4037]"></path>
                    </svg>
                </div>
            </div>
            <section className="grid justify-items-center px-2 py-20 bg-[#5D4037]">
                <article className="container mx-auto max-w-[978px]">
                    <h2 className="flex gap-5 items-center my-6 text-2xl font-semibold leading-6 text-[#FFB74D] text-center md:text-left"><GiMusicalNotes size={35} /> Música en Codeffee</h2>
                    <p className="my-6 text-lg md:text-xl text-center text-[#FFB74D] font-bold">Aquí te presentamos algunas listas de reproducción temáticas que te recomendamos para que disfrutes de una experiencia musical única en Codeffee.</p>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <div>
                            <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/21KXYY1S0ZALYl0q3uDlUU?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div>
                            <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/5pKbVvYPM6fPPEAfY0LOvi?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div>
                            <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/6i77tdTRuCegrvmcVGTo2i?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                        <div>
                            <iframe style={{ borderRadius: 12 }} src="https://open.spotify.com/embed/playlist/19n65kQ5NEKgkvSAla5IF6?utm_source=generator&theme=0" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}
