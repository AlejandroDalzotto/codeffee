import Image from "next/image";
import MenuPage from "./components/MenuPage";

export default function HomePage() {
  return (
    <main>
      <div className="relative home-bg bg-cover bg-no-repeat bg-center h-[calc(100vh-88px)]">
        <div className="container mx-auto flex items-center justify-around h-[calc(100%-88px)] p-4">
          <div className="md:max-w-[50ch]">
            <h1 className="text-5xl text-center md:text-left text-[#FFA07A] dark:text-[#FFB74D] font-bold">Codeffee</h1>
            <p className="my-8 text-white font-medium text-base lg:text-lg">En nuestra cafetería, te ofrecemos un espacio acogedor donde puedes relajarte y disfrutar de un delicioso café que te transportará a otro mundo.</p>
          </div>
          <div className="hidden md:block h-80 w-auto">
            <Image src="/imgs/i-heart-coffee.png" width={320} height={320} alt="image" className="invert" />
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1679004457">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-[#CD853F] dark:fill-[#5D4037]"></path>
          </svg>
        </div>
      </div>
      <section className="container mx-auto px-2 py-20">
        <MenuPage />
      </section>
    </main>
  )
}
