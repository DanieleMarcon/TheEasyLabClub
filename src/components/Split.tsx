import { Link } from "react-router-dom";
import { Users, FlaskConical } from "lucide-react";

export default function Split() {
  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Programs - Left */}
          <div className="relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-2xl bg-white p-10 shadow-sm ring-1 ring-slate-200 md:p-12">
            <div className="absolute right-8 top-8 text-slate-100">
              <Users size={96} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-600 uppercase tracking-wider text-primary-700">
                For Teams
              </span>
              <h3 className="mt-6 font-display text-3xl font-800 tracking-tight text-slate-900 md:text-4xl">
                Programs
              </h3>
              <p className="mt-4 text-lg text-slate-600">
                Structured transformation paths for companies and teams.
                Custom programs designed around your goals, your people,
                and your operational reality.
              </p>
            </div>
            <Link
              to="/programs"
              className="mt-8 inline-flex w-fit items-center rounded-lg bg-primary-600 px-7 py-3 text-base font-600 text-white shadow-sm transition-all hover:bg-primary-700 active:scale-[0.98]"
            >
              Request a consultation
            </Link>
          </div>

          {/* Lab - Right */}
          <div className="relative flex min-h-[440px] flex-col justify-between overflow-hidden rounded-2xl bg-slate-800 p-10 text-white shadow-sm md:p-12">
            <div className="absolute right-8 top-8 text-slate-700">
              <FlaskConical size={96} strokeWidth={1} />
            </div>
            <div className="relative z-10">
              <span className="inline-block rounded-full bg-accent-500/20 px-3 py-1 text-xs font-600 uppercase tracking-wider text-accent-300">
                For Individuals
              </span>
              <h3 className="mt-6 font-display text-3xl font-800 tracking-tight text-white md:text-4xl">
                Lab Modules
              </h3>
              <p className="mt-4 text-lg text-slate-300">
                Modular, practical learning you can start right now.
                Pick a module, work through it, and apply it immediately
                to how you work.
              </p>
            </div>
            <Link
              to="/lab"
              className="mt-8 inline-flex w-fit items-center rounded-lg bg-accent-500 px-7 py-3 text-base font-600 text-white shadow-sm transition-all hover:bg-accent-600 active:scale-[0.98]"
            >
              Access the modules
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
