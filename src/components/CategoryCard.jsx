import { Link } from "react-router-dom";
import { CategoryCardData } from "../data/ِData";

export function CategoryCard(){
  return (
    <section className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 px-4 place-items-center bo border-red-700 gap-4 mt-64 max-sm:mt-32">
      {
        CategoryCardData.map((item,i)=>{
          return (
            <div key={i} className="bg-zinc-900 rounded-2xl overflow-hidden border border-fuchsia-500/20 shadow-lg shadow-fuchsia-500/10  transform transition duration-300 ease-in-out">
                <img className="object-cover" src={item.image} alt={item.title} />
                <div className="p-1">
                  <div className="p-4">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{item.shortDescription}</p>
                  </div>
                  <Link to={`/category/${item.slug}`}>
                    <button className="w-full rounded-xl cursor-pointer transition-colors duration-200 hover:text-fuchsia-400 hover:bg-transparent hover:border-fuchsia-600 border-transparent border-2  py-2 bg-fuchsia-600">
                      <span>View content</span>
                    </button>
                  </Link>
                </div>
            </div> 
              
          )
        })
      }
    </section>
  )
}