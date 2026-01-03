import { Link } from "react-router-dom";
import { CategoryCardData } from "../data/ِData";

export function Footer(){
  return (
    <div className="flex flex-col bg-zinc-950 border-dashed border-fuchsia-500/40 shadow-2xl shadow-fuchsia-500 text-zinc-200 text-lg border-t-2">
      <footer className="container mx-auto flex flex-col">
        <div className="px-2 pt-7 pb-12 transition-colors duration-200 border-b border-fuchsia-600/30 grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-y-10 place-items-center max-sm:place-items-start">
          <div className="col-span-1 flex flex-col gap-4">
            <Link to={'/'}>
              <div className="text-5xl max-sm:text-2xl uppercase font-black  text-zinc-200 text-left max-sm:px-7">
                <span className="font-semibold text-6xl max-sm:text-3xl text-fuchsia-800">AI</span> T<span className="text-fuchsia-700">oo</span>ls
              </div>
            </Link>
            <p className="text-justify text-fuchsia-200 max-sm:px-7 max-sm:text-sm leading-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatibus, iste blanditiis a aut dignissimos quos molestiae nostrum sequi? Laudantium error laborum aspernatur dignissimos obcaecati. Itaque vero voluptatem sunt sint?</p>
          </div>
          <div className="col-span-1 flex-col flex gap-4 max-sm:px-7">
            <h2 className="text-2xl font-black text-fuchsia-600">Category</h2>
            <ul className="flex flex-col gap-2">
              {
                CategoryCardData.map((item,i)=>{
                  return (
                    <li className="hover:text-fuchsia-400 px-2  transition-colors duration-100" key={i}>
                      <Link to={`/category/${item.slug}`}>
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="col-span-1">
          
          </div>
        </div>
        <div className="p-2 flex flex-row-reverse text-fuchsia-900 items-center justify-between">
            <Link target="_blank" className="flex items-center gap-1" to={`https://www.instagram.com/awprogrammer`}>
              <svg className="size-7 fill-fuchsia-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>  
              <div className="flex gap-1 text-sm">
                <span>produce by : </span><h2>AWP</h2>
              </div>
            </Link>
            <div className="text-sm">
              <p>© AWP 2026</p>
            </div>
        </div>
      </footer>
    </div>
  )
}