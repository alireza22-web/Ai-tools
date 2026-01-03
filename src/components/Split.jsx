import img from '../img/ai-robot.jpg'

export function Split(){
  return (
    <section className="container mx-auto mt-32 px-8">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

    <div className="relative rounded-3xl overflow-hidden">
      <img
        src={img}
        alt="AI Abstract"
        className="w-full h-105 object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-tr from-fuchsia-600/30 via-purple-600/10 to-transparent" />
    </div>

    <div className="space-y-6">
      <h2 className="text-4xl font-bold text-fuchsia-400">
        Exploring the Real Power of Artificial Intelligence
      </h2>

      <p className="text-zinc-300 text-lg leading-relaxed text-justify">
        Artificial intelligence is transforming the way we create, analyze, and interact with digital
        systems. From intelligent automation to creative generation, modern AI tools are designed to
        enhance human capabilities rather than replace them. This platform highlights practical AI
        solutions that are shaping the future of technology and digital experiences.
      </p>

      <ul className="space-y-3">
        <li className="flex gap-3 text-zinc-200">
          <span className="text-fuchsia-400">✦</span>
          <span>Real-world AI applications across multiple industries</span>
        </li>
        <li className="flex gap-3 text-zinc-200">
          <span className="text-fuchsia-400">✦</span>
          <span>Creative and analytical tools powered by advanced models</span>
        </li>
        <li className="flex gap-3 text-zinc-200">
          <span className="text-fuchsia-400">✦</span>
          <span>A growing ecosystem of intelligent digital solutions</span>
        </li>
      </ul>
    </div>

  </div>
</section>

  )
}