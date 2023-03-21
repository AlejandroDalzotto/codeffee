import Image from "next/image";

export default function AboutPage() {
    return (
        <section className="relative bg-gradient-to-tr from-[#ea1059cc] to-[#ff9472cc]">
            <Image src="/imgs/background_1.png" alt="background" width={1920} height={1080} className="hidden lg:block fixed w-full h-auto -z-10 opacity-20 -translate-y-20" />
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
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
                <div className="mt-20 w-full lg:flex lg:items-center lg:justify-between lg:gap-20">
                    <div className="lg:w-2/3 my-10 lg:m-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
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
                        className="w-full lg:w-1/3 h-auto rounded-lg shadow transition-all hover:ring-2 hover:ring-neutral-50 hover:shadow-xl"
                        src="/imgs/wallpapers/wallpaper_1.jpg"
                        alt="Imagen"
                        width={1920}
                        height={1080}
                    />
                </div>
                <div className="mt-20">

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Nuestro menú
                    </h3>
                    <p className="text-lg text-neutral-50">
                        En nuestra cafetería, no solo nos enfocamos en el café. También
                        ofrecemos una amplia selección de deliciosos bocadillos y postres para
                        complementar tu bebida. Nuestro menú está diseñado para satisfacer
                        todas las necesidades dietéticas.
                    </p>

                </div>
                <div className="mt-20 w-full lg:flex lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-20">
                    <div className="lg:w-2/3 my-10 lg:m-0">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">
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
                        className="w-full lg:w-1/3 h-auto rounded-lg shadow transition-all hover:ring-2 hover:ring-neutral-50 hover:shadow-xl"
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
