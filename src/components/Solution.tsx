const steps = [
  {
    number: "01",
    title: "Learn",
    description:
      "Absorb practical frameworks designed by operators, not academics. Targeted, high-utility knowledge focused on how, not just what.",
  },
  {
    number: "02",
    title: "Apply",
    description:
      "Turn knowledge into practice immediately. Our modules require real-world application, testing new skills against your actual challenges.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "Continuous refinement through feedback and shared retrospectives. The goal is not completion, but persistent improvement over time.",
  },
] as const;

export default function Solution() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-16 md:flex-row md:gap-20">
          <div className="md:w-1/3">
            <h2 className="font-display text-3xl font-800 tracking-tight text-slate-900 md:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A continuous cycle that embeds learning into your workflow.
            </p>
          </div>
          <div className="flex flex-col gap-16 md:w-2/3">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-6 md:gap-8">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 font-display text-xl font-800 text-primary-700">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-700 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
