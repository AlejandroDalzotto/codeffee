import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'About | Codeffee'
  }

export default function AboutPage() {
    return (
        <section className="relative bg-gradient-to-tr from-[#ea1059cc] to-[#ff9472cc]">
            <Image src="/imgs/background_1.png" alt="background" width={1920} height={1080} className="fixed hidden w-full h-auto -translate-y-20 lg:block -z-10 opacity-20" />
            <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Sobre nosotros
                    </h2>
                    <p className="mt-4 text-lg text-neutral-50">
                        En Codeffee, nos apasiona el café y la programación. Ofrecemos un
                        ambiente acogedor y relajado para que puedas disfrutar de una buena
                        taza de café mientras trabajas en tus proyectos.
                    </p>
                </div>
                <div className="w-full mt-20 lg:flex lg:items-center lg:justify-between lg:gap-20">
                    <div className="my-10 lg:w-2/3 lg:m-0">
                        <h3 className="mb-4 text-xl font-bold text-gray-900">
                            Nuestro café
                        </h3>
                        <p className="text-lg text-neutral-50">
                            En Codeffee, creemos que el café es la clave para la productividad y la
                            creatividad. Utilizamos granos de café de alta calidad, y nuestros
                            baristas altamente capacitados se aseguran de que cada taza sea
                            perfecta.
                        </p>
                    </div>
                    <Image
                        className="w-full h-auto transition-all rounded-lg shadow lg:w-1/3 hover:ring-2 hover:ring-neutral-50 hover:shadow-xl"
                        src="/imgs/wallpapers/wallpaper_1.jpg"
                        alt="Imagen"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-20">

                    <h3 className="mb-4 text-xl font-bold text-gray-900">
                        Nuestro menú
                    </h3>
                    <p className="text-lg text-neutral-50">
                        En nuestra cafetería, no solo nos enfocamos en el café. También
                        ofrecemos una amplia selección de deliciosos bocadillos y postres para
                        complementar tu bebida. Nuestro menú está diseñado para satisfacer
                        todas las necesidades dietéticas.
                    </p>

                </div>
                <div className="w-full mt-20 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-20">
                    <div className="my-10 lg:w-2/3 lg:m-0">
                        <h3 className="mb-4 text-xl font-bold text-gray-900">
                            Nuestro ambiente
                        </h3>
                        <p className="text-lg text-neutral-50">
                            En nuestra cafetería, nos enorgullece crear un ambiente inclusivo y
                            acogedor para todos nuestros clientes. Desde estudiantes y freelancers
                            hasta empresarios y amantes del café, siempre encontrarás un lugar en
                            Codeffee.
                        </p>
                    </div>
                    <Image
                        className="w-full h-auto transition-all rounded-lg shadow lg:w-1/3 hover:ring-2 hover:ring-neutral-50 hover:shadow-xl"
                        src="/imgs/wallpapers/wallpaper_3.jpg"
                        alt="Imagen de la cafetería"
                        width={1920}
                        height={1080}
                    />
                </div>

            </div>
        </section>
    )
}
