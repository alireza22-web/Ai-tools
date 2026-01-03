import { futureTrendsData } from "../data/ِData";

export function TrandFuture(){
  return (
    <section className="container mx-auto mt-24 px-4">
  <h2 className="text-4xl font-bold text-fuchsia-400 text-center mb-6">
    {futureTrendsData.title}
  </h2>

  <p className="text-zinc-400 text-center px-10 mb-16">
    {futureTrendsData.description}
  </p>

  <div className="grid grid-cols-3 max-sm:grid-cols-1 items-center place-items-center gap-12">
    {futureTrendsData.trends.map((trend) => (
      <div key={trend.id} className="flex flex-col gap-2 border-l-2 pl-5 border-fuchsia-500 border-dashed">
        <span className="text-fuchsia-500 text-2xl font-bold">
          {String(trend.id).padStart(2, "0")}
        </span>

        <div>
          <h3 className="text-xl text-zinc-200 font-semibold mb-2">
            {trend.title}
          </h3>
          <p className="text-zinc-400 text-justify leading-relaxed max-w-3xl">
            {trend.text}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>

  )
}