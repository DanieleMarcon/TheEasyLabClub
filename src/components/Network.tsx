export default function Network() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start gap-12 md:flex-row md:items-center md:gap-20">
          <div className="md:w-1/2">
            <h2 className="font-display text-3xl font-800 tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              Learning does not stop after a module
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
              The EasyLab Network is the continuity layer of your growth.
              Peer exchange, ongoing improvement, and continuous updates
              keep your progress moving forward.
            </p>
          </div>
          <div className="grid w-full grid-cols-2 gap-4 md:w-1/2">
            <div className="flex flex-col justify-end rounded-xl bg-slate-100 p-6 aspect-square">
              <span className="text-lg font-600 text-slate-800">
                Peer exchange
              </span>
              <span className="mt-1 text-sm text-slate-500">
                Share and refine with peers
              </span>
            </div>
            <div className="flex flex-col justify-end rounded-xl bg-primary-600 p-6 text-white aspect-square">
              <span className="text-lg font-600">Ongoing improvement</span>
              <span className="mt-1 text-sm text-primary-200">
                Continuous growth cycles
              </span>
            </div>
            <div className="flex flex-col justify-end rounded-xl bg-slate-800 p-6 text-white aspect-square">
              <span className="text-lg font-600">Continuous updates</span>
              <span className="mt-1 text-sm text-slate-400">
                Always current content
              </span>
            </div>
            <div className="flex flex-col justify-end rounded-xl bg-slate-50 p-6 ring-1 ring-slate-200 aspect-square">
              <span className="text-lg font-600 text-slate-800">
                Practical focus
              </span>
              <span className="mt-1 text-sm text-slate-500">
                Real application, not theory
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
