import { Navbar } from "./Navbar";
import img from '../../public/img/big-bg-header.jpg'
import { Link } from "react-router-dom";
import '../custom.css'

export function Header(){
  return (
    <div className="">
      <div style={{backgroundImage:`url(${img})`}} className={`absolute inset-0 bg-cover bg-center blur-xs w-full h-screen`} />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 from-10% via-black/50 to-zinc-950 to-90% scale-y-102 "/>
      <div className="relative animate-opacity z-10 flex flex-col justify-center items-center max-[400px]:text-left max-sm:px-6 max-sm:gap-y-2 mt-[15%] max-sm:mt-[5%] max-lg:mt-[20%] text-center">
        <h1 className="max-lg:text-5xl max-md:text-4xl text-7xl max-xl:text-6xl  font-semibold uppercase">Discover the Best <span className="text-fuchsia-600 max-sm:inline-block border-b-2">AI Tools</span></h1>
        <p className="max-lg:text-lg max-md:text-base py-4 px-2 text-xl">A curated collection of powerful AI tools to boost creativity, productivity, and innovation.</p>
        <div className="flex gap-6 items-center text-lg max-sm:text-base max-[400px]:flex-col max-[400px]:gap-y-2 font-semibold">
          <Link to={'/'}>
            <button className="px-8 py-2 bg-fuchsia-600 rounded-lg hover:bg-transparent hover:border-2 max-[400px]:px-20 hover:border-fuchsia-600 cursor-pointer transition-all duration-150 border-2 border-transparent">
              <span className="">Explore Tools</span>
            </button>
          </Link>
          <Link to={'/'}>
            <button className="px-8 py-2 border-2 border-fuchsia-600 hover:outline-2 outline-offset-2 max-[400px]:px-20 outline-fuchsia-600 hover:bg-fuchsia-600 cursor-pointer transition-all duration-100 text rounded-lg">
              <span className="">Submit a Tool</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}