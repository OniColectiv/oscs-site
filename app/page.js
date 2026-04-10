export default function OSCSWebsite() {
  const serviceCards = [
    {
      title: 'Inventory Optimization Audit',
      text: 'Identify excess inventory, stockout exposure, inactive SKUs, and control gaps that drain cash and service levels.',
    },
    {
      title: 'Demand & Replenishment Support',
      text: 'Review reorder points, safety stock levels, and replenishment practices to create more disciplined buying decisions.',
    },
    {
      title: 'Warehouse Process Improvement',
      text: 'Strengthen receiving, putaway, storage, and replenishment flows to improve accuracy and execution speed.',
    },
    {
      title: 'KPI & Reporting Systems',
      text: 'Build practical scorecards around inventory accuracy, service performance, productivity, and operational stability.',
    },
  ];

  const outcomeCards = [
    ['Inventory Accuracy', 'Improve count integrity and reduce costly discrepancies.'],
    ['Cash Flow', 'Free up working capital trapped in excess inventory.'],
    ['Operational Efficiency', 'Tighten receiving, storage, replenishment, and reporting.'],
  ];

  const credibilityPoints = [
    'Practical inventory and warehouse leadership experience',
    'Data-driven recommendations focused on measurable business impact',
    'Consulting designed to improve execution, not just produce reports',
    'Professional, contract-ready positioning for private and public sector work',
  ];

  const featuredServices = [
    'Inventory Optimization Audit',
    'Reorder Point & Safety Stock Review',
    'Warehouse Flow & Process Improvement',
    'KPI Dashboard Development',
  ];

  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,163,78,0.16),transparent_35%)]" />
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,transparent_0%,transparent_42%,rgba(255,255,255,0.05)_42%,rgba(255,255,255,0.05)_54%,transparent_54%,transparent_100%)]" />

        <div className="relative max-w-7xl mx-auto px-6 py-8">
          <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between py-4">
            <div>
              <div className="text-4xl md:text-5xl font-light tracking-[0.2em] text-[#C9A34E]">OSCS</div>
              <div className="text-sm md:text-base tracking-[0.25em] text-slate-200 uppercase">
                Oni Supply Chain Solutions
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="rounded-2xl bg-[#C9A34E] px-5 py-3 text-sm font-medium text-[#0b1220] transition hover:scale-[1.02]"
              >
                Book a Consultation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-[#C9A34E] px-5 py-3 text-sm font-medium text-[#C9A34E] transition hover:bg-[#C9A34E] hover:text-[#0b1220]"
              >
                Explore Services
              </a>
            </div>
          </header>

          <div className="grid lg:grid-cols-2 gap-12 items-center py-20 md:py-28">
            <div>
              <p className="text-[#C9A34E] uppercase tracking-[0.3em] text-xs md:text-sm mb-5">
                Inventory Optimization & Supply Chain Efficiency
              </p>
              <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl">
                We help businesses recover cash trapped in inventory and prevent costly stockouts.
              </h1>
              <p className="mt-6 text-lg text-slate-300 max-w-2xl leading-8">
                Oni Supply Chain Solutions helps businesses strengthen inventory control,
                improve replenishment decisions, and increase operational efficiency through
                practical, data-driven supply chain consulting built for real operations.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-2xl bg-[#C9A34E] px-6 py-3 font-medium text-[#0b1220] shadow-lg shadow-[#C9A34E]/20 transition hover:scale-[1.02]"
                >
                  Book a Consultation
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-slate-500 px-6 py-3 font-medium text-slate-100 transition hover:border-slate-300"
                >
                  View Services
                </a>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {outcomeCards.map(([title, text]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm shadow-2xl">
                    <h3 className="text-base font-semibold text-[#C9A34E]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(145deg,#121a2b,#0c1322)] p-8 shadow-2xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#111827] p-8">
                  <div className="text-6xl font-light tracking-[0.2em] text-[#C9A34E] text-center">OSCS</div>
                  <div className="mx-auto mt-3 h-px w-40 bg-[#C9A34E]" />
                  <p className="mt-4 text-center text-sm uppercase tracking-[0.25em] text-slate-200">
                    Oni Supply Chain Solutions
                  </p>
                  <p className="mt-6 text-center text-slate-300 leading-7">
                    We don’t advise — we implement and fix.
                  </p>
                  <div className="mt-8 grid gap-4">
                    {featuredServices.map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-100">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-[#C9A34E] uppercase tracking-[0.3em] text-xs md:text-sm">Services</p>
          <h2 className="mt-4 text-3xl md:text-5xl font-semibold">What OSCS helps businesses improve</h2>
          <p className="mt-5 text-slate-300 text-lg leading-8">
            Built for businesses that need stronger control of inventory, better replenishment logic,
            cleaner warehouse execution, and sharper performance visibility.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {serviceCards.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl">
              <h3 className="text-xl font-semibold text-[#C9A34E] leading-8">{service.title}</h3>
              <p className="mt-4 text-slate-300 leading-7">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-[#C9A34E] uppercase tracking-[0.3em] text-xs md:text-sm">Why OSCS</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-semibold">Hands-on supply chain experience, not theory alone</h2>
          </div>
          <div className="grid gap-5">
            {credibilityPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-white/10 bg-[#0f172a] px-5 py-4 text-slate-200 shadow-lg">
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
            <p className="text-[#C9A34E] uppercase tracking-[0.3em] text-xs md:text-sm">Contact</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">Start the conversation</h2>
            <p className="mt-5 text-slate-300 leading-8">
              Let’s discuss your inventory challenges, operational goals, and where supply chain performance can improve.
            </p>

            <div className="mt-8 space-y-4 text-lg">
              <p><span className="text-[#C9A34E]">Phone:</span> (901) 697-2335</p>
              <p><span className="text-[#C9A34E]">Email:</span> ambrose.gbagi@theoscs.com</p>
              <p><span className="text-[#C9A34E]">Web:</span> www.theoscs.com</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#C9A34E]/30 bg-[linear-gradient(145deg,#111827,#0b1220)] p-8 shadow-2xl">
            <h3 className="text-2xl font-semibold">Consultation Request</h3>
            <form className="mt-8 grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400" placeholder="Name" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400" placeholder="Company" />
              <input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400" placeholder="Email" />
              <textarea className="min-h-[140px] rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-slate-400" placeholder="Tell us about your inventory or supply chain challenge" />
              <button type="button" className="rounded-2xl bg-[#C9A34E] px-6 py-3 font-semibold text-[#0b1220] transition hover:scale-[1.01]">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#0a101c]">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Oni Supply Chain Solutions. All rights reserved.</p>
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <a href="mailto:ambrose.gbagi@theoscs.com" className="hover:text-white">ambrose.gbagi@theoscs.com</a>
            <span className="hidden md:inline">|</span>
            <a href="tel:19016972335" className="hover:text-white">(901) 697-2335</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
