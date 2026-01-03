import { Link } from "react-router-dom"
import '../custom.css'

export function Navbar(){
  const listNav = [
    {
      title:'tools',
      link:'/#'
    },
    {
      title:'category',
      link:'/#'
    },
    {
      title:'about me',
      link:'/#'
    },
  ]
  return (
    <div className="bg-zinc-950 max-sm:mb-24">
      <nav className="px-7 pb-3 container mx-auto flex items-end max-sm:justify-center justify-between gap-12 pt-6 relative z-10 animate-t-b">
        <div className="flex items-end max-sm:justify-center gap-12">
          <Link to={'/'}>
            <div className="text-5xl uppercase font-black border-b-2 text-zinc-200 border-dashed border-fuchsia-400">
              <span className="font-semibold text-6xl text-fuchsia-800">AI</span> T<span className="text-fuchsia-700">oo</span>ls
            </div>
          </Link>
          <ul className="flex gap-4 max-lg:hidden font-semibold text-xl capitalize max-sm:hidden">
            {
              listNav.map((item,i)=>{
                return (
                  <li key={i} className="hover:text-fuchsia-400 max-sm:text-sm  text-fuchsia-50 transition-colors duration-150">
                    <Link to={item.link}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="max-sm:hidden px-2 pb-0.5 pt-2 cursor-pointer hover:bg-fuchsia-400 transition-colors duration-100 bg-fuchsia-600 rounded-full">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7 cursor-pointer">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  )
}