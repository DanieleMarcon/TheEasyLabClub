import { Link } from "react-router-dom";

export default function CtaBlock() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary-700 px-10 py-16 text-center text-white shadow-2xl md:px-16 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)]" />
          <h2 className="relative z-10 font-display text-3xl font-800 tracking-tight sm:text-4xl md:text-5xl">
            Improve how you work
          </h2>
          <p className="relative z-10 mx-auto mt-6 max-w-2xl text-lg text-primary-200 md:text-xl">
            Start with Programs for your team or explore the Lab on your own.
            Real results, not just certificates.
          </p>
          <div className="relative z-10 mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-600 text-primary-700 transition-all hover:bg-slate-100 active:scale-[0.98]"
            >
              See how it works
            </Link>
            <Link
              to="/lab"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-base font-600 text-white backdrop-blur-sm transition-all hover:bg-white/20 active:scale-[0.98]"
            >
              Start here
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
