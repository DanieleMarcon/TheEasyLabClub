import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-7">
          <h1 className="font-display text-4xl font-800 tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Improve how you work,{" "}
            <span className="text-primary-600">not just what you know</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 md:text-xl">
            Operational learning for people and teams who want real results.
            Turn learning into application and measurable improvement.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/programs"
              className="inline-flex items-center rounded-lg bg-primary-600 px-7 py-3.5 text-base font-600 text-white shadow-lg shadow-primary-600/20 transition-all hover:bg-primary-700 active:scale-[0.98]"
            >
              Explore Programs
            </Link>
            <Link
              to="/lab"
              className="inline-flex items-center rounded-lg border border-slate-200 bg-white px-7 py-3.5 text-base font-600 text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
            >
              Start with the Lab
            </Link>
          </div>
        </div>
        <div className="relative lg:col-span-5">
          <div className="absolute -inset-4 rounded-full bg-primary-100/50 blur-3xl" />
          <img
            className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Team collaborating around a table in a modern workspace"
          />
        </div>
      </div>
    </section>
  );
}
