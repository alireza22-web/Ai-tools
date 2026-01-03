import { useParams } from "react-router-dom";
import { CategoryCardData } from "../data/ِData";
import '../custom.css'

export function CategoryItem(){
  const {slug} = useParams()
  const item = CategoryCardData.find(i=>i.slug==slug)
  
  return (
    <div className="bg-zinc-950 min-h-screen font-inter border-b-2">
      <article className="container mt-0 mx-auto max-sm:-mt-24 text-zinc-200 border border-zinc-950">
      <div className="mt-12 max-sm:px-3 rounded-tl-[100px] rounded-tr-[70px] shadow-[0px_-30px_px_rgba(255,255,255,0.25)] relative overflow-hidden">
          <img src={item.image} className="w-screen h-105 object-cover" alt="" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-zinc-950 z-0" />
          <div className="absolute inset-0 z-10 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-white text-4xl font-bold text-center">
              {item.title}
            </h1>
            <h2 className="backdrop-blur-xs px-3 p-1">
              {item.tagline}
            </h2>
          </div>
        </div>
        <div className="mt-8 px-24 py-2 flex flex-col gap-4 max-xl:px-12 max-lg:px-7">
          <p className="text-justify text-lg">{item.longDescription}</p>
          <div className="flex gap-8 flex-col">
            <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <span className="p-1 rounded-full border-2 border-fuchsia-600"></span>
                <h2 className="text-xl font-bold uppercase">feature</h2>
              </div>
              <div className="grid grid-cols-4 items-center max-sm:grid-cols-1 gap-2 max-lg:grid-cols-2 max-lg:place-items-start justify-between text-lg font-semibold">
                {
                  item.keyCapabilities.map((cap,i)=>{
                    return (
                      <span key={i} className="border-l-2 px-2 border-dashed border-fuchsia-600">{cap}</span>
                    )
                  })
                }
              </div>
            </div>{/* keyCapabilities */}
            <div className="flex max-sm:flex-col gap-6">
              <h2 className="text-xl font-semibold">Popular Tools : </h2>
              
              <div className="flex max-sm:flex-col gap-2 text-lg font-semibold">
                {
                  item.popularTools.map((tool,i)=>{
                    return (
                      <span key={i} className="border-2 px-2 rounded-lg bg-fuchsia-950 border-dashed border-fuchsia-600">{tool}</span>
                    )
                  })
                }
              </div>
            </div>{/* popularTools */}
            <div className="">
              <p className="text-justify text-lg text-fuchsia-200">
                This category focuses on how artificial intelligence is applied in the field of <span className="text-fuchsia-500">{item.title}</span>.
                AI-powered tools in this area are designed to improve efficiency, creativity, and problem-solving
                by automating complex tasks and enhancing human workflows.

                In practical scenarios, these tools are commonly used for <span className="border-b-2 py-1 border-dotted border-fuchsia-500">{item.useCases}</span>.</p>
            </div>{/* useCases */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
              <div className="
                bg-zinc-900/60 backdrop-blur-xl
                border border-fuchsia-500/20
                rounded-2xl p-6
                shadow-lg shadow-fuchsia-500/10
              ">
                <h3 className="text-fuchsia-400 text-xl font-bold mb-4">
                  Strengths
                </h3>
                <ul className="space-y-3">
                  {item.pros.map((pro, i) => (
                    <li key={i} className="flex gap-3 text-zinc-200">
                      <span className="text-fuchsia-400">✦</span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="
                bg-zinc-900/60 backdrop-blur-xl
                border border-fuchsia-500/20
                rounded-2xl p-6
                shadow-lg shadow-fuchsia-500/10
              ">
                <h3 className="text-fuchsia-300 text-xl font-bold mb-4">
                  Limitations
                </h3>
                <ul className="space-y-3">
                  {item.cons.map((con, i) => (
                    <li key={i} className="flex gap-3 text-zinc-300">
                      <span className="text-fuchsia-300">◦</span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>{/* pros cros */}
            <div className="">
              <p className="text-justify text-lg text-fuchsia-200">
                As artificial intelligence continues to evolve, this field is expected to experience rapid advancements that will
                reshape how tools are designed, used, and integrated into everyday workflows. Emerging trends focus on greater
                automation, improved accuracy, and deeper collaboration between humans and AI systems.
              </p>
              <div className="flex gap-12 mt-2 max-lg:flex-col max-lg:gap-3">
                <h2 className="text-2xl font-black">futureTrends : </h2>
                <div className="flex gap-2 max-sm:flex-col">
                  {
                    item.futureTrends.map((trend,i)=>{
                      return (
                        <span key={i} className="text-lg font-bold border-2 border-fuchsia-950 text-zinc-950 px-3 py-1 rounded-xl bg-fuchsia-600">{trend}</span>
                      )
                    })
                  }
                </div>
              </div>
            </div>{/* futureTrends */}

          </div>
        </div>{/* text down poster */}
      </article>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}