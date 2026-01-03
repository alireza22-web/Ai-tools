import { Header } from "../components/Header";
import { CategoryCard } from "../components/CategoryCard";
import { Split } from "../components/Split";
import { TrandFuture } from "../components/TrendFuture";

export function Home(){

  return (
    <div className="bg-zinc-950 text-zinc-200 min-h-screen w-full">
      <article className="container mx-auto">
        <Header/>
        <div className="relative z-10">
          <CategoryCard />
        </div>
        <div>
          <Split/>
          <TrandFuture />
        </div>
      </article>
      <br />
      <br />
      <br />
      <br />
      <br /><br />
    </div>
  )
}