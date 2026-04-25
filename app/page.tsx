import Image from "next/image";

const brandLogoTint = {
  filter:
    "brightness(1.14) saturate(1.12) contrast(1.02)",
};

const capabilities = [
  {
    tag: "01 / Engineering",
    title: "Software engineering",
    description:
      "Production-grade web platforms, internal tools, and product foundations.",
    items: ["Next.js platforms", "API architecture", "Workflow automation"],
  },
  {
    tag: "02 / Intelligence",
    title: "AI systems",
    description:
      "Applied AI that translates raw signal into clear, explainable decisions.",
    items: ["LLM integrations", "RAG pipelines", "Decision support"],
  },
  {
    tag: "03 / Models",
    title: "Machine learning",
    description:
      "ML systems for anomaly detection, forecasting, and risk interpretation.",
    items: ["Anomaly detection", "Forecasting", "Model explainability"],
  },
  {
    tag: "04 / Data",
    title: "Data platforms",
    description:
      "Pipelines and analytics that turn fragmented data into operational intelligence.",
    items: ["Ingestion pipelines", "Dashboards", "Reporting systems"],
  },
];

const principles = [
  {
    label: "PRINCIPLE / 01",
    title: "Signal over noise",
    description:
      "Help people understand what changed, why it matters, and what to do next.",
  },
  {
    label: "PRINCIPLE / 02",
    title: "Applied over performative",
    description:
      "Operational value, not AI theatre. Clarity, explainability, and adoption.",
  },
  {
    label: "PRINCIPLE / 03",
    title: "Grounded execution",
    description:
      "Strong delivery that respects context, constraints, and trust.",
  },
];

const stats = [
  { value: "103", label: "ML parameters tracked" },
  { value: "5yr", label: "Historical data window" },
  { value: "100%", label: "Indigenous-owned" },
  { value: "AI/ML", label: "Core capability" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Animated mesh background */}
      <div className="mesh-bg">
        <div
          className="mesh-orb"
          style={{
            top: "-10%",
            left: "20%",
            width: "640px",
            height: "640px",
            background:
              "radial-gradient(circle, #00ff88 0%, transparent 60%)",
            opacity: 0.35,
            animation: "mesh-drift 18s ease-in-out infinite",
          }}
        />
        <div
          className="mesh-orb"
          style={{
            top: "30%",
            right: "-10%",
            width: "520px",
            height: "520px",
            background:
              "radial-gradient(circle, #5eead4 0%, transparent 60%)",
            opacity: 0.25,
            animation: "mesh-drift-alt 22s ease-in-out infinite",
          }}
        />
        <div
          className="mesh-orb"
          style={{
            bottom: "10%",
            left: "10%",
            width: "480px",
            height: "480px",
            background:
              "radial-gradient(circle, #a78bfa 0%, transparent 60%)",
            opacity: 0.2,
            animation: "mesh-drift 26s ease-in-out infinite",
          }}
        />
      </div>
      <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-2xl">
        <div className="shell flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex w-full items-center justify-center gap-1 md:w-auto md:justify-start">
            <span
              className="relative block h-12 w-12 shrink-0 overflow-hidden rounded-xl"
              style={{
                boxShadow: "0 0 32px rgba(0,255,136,0.24)",
              }}
            >
              <Image
                src="/gemini-matrix-logo.png"
                alt="Gemini Matrix logo"
                fill
                priority
                sizes="48px"
                className="object-contain p-0.5"
                style={brandLogoTint}
              />
            </span>
            <div className="flex items-center leading-none">
              <span className="relative block h-8 w-[230px]">
                <Image
                src="/gemini-matrix-text.png"
                alt="Gemini Matrix"
                fill
                priority
                sizes="230px"
                className="object-contain"
                style={brandLogoTint}
              />
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#capabilities" className="hover:text-white">
              Capabilities
            </a>
            <a href="#water-intel" className="hover:text-white">
              Water-Intel
            </a>
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="btn-primary inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm sm:w-auto md:w-auto md:px-5 md:py-2.5"
          >
            Start a project
            <span aria-hidden>→</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="shell relative z-10 grid gap-12 pt-20 pb-24 lg:grid-cols-12 lg:pt-32 lg:pb-32"
      >
        <div className="fade-up space-y-8 lg:col-span-7">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur">
            <span
              className="h-2 w-2 rounded-full"
              style={{
                background: "#00ff88",
                boxShadow: "0 0 8px #00ff88",
              }}
            />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/80">
              Indigenous-owned · AI / ML / Software
            </span>
          </div>

          <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Intelligent
            <br />
            systems,
            <br />
            <span className="gradient-text">built to think.</span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Gemini Matrix designs and engineers software, AI, and machine
            learning systems that turn raw signal into clear decisions — for
            teams that need substance, not slideware.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#water-intel"
              className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base"
            >
              See Water-Intel
              <span aria-hidden>→</span>
            </a>
            <a
              href="#capabilities"
              className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base"
            >
              Explore capabilities
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-4 font-mono text-xs uppercase tracking-[0.2em] text-white/40">
            <span>// Software</span>
            <span>// AI</span>
            <span>// ML</span>
            <span>// Data</span>
          </div>
        </div>

        {/* Live product card */}
        <div className="fade-up lg:col-span-5">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-1 pulse-ring">
            <div className="scan-line" />
            <div className="relative rounded-[1.4rem] bg-black/80 p-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                  water-intel · live
                </span>
              </div>

              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand)]">
                    Anomaly score
                  </p>
                  <p className="mt-1 font-display text-5xl font-bold text-white">
                    0.87
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    site
                  </p>
                  <p className="mt-1 font-mono text-sm text-white/80">
                    GR-04
                  </p>
                </div>
              </div>

              {/* mini chart */}
              <div className="mt-6 flex h-20 items-end gap-1">
                {[
                  20, 30, 25, 40, 35, 50, 45, 38, 55, 70, 60, 75, 85, 78, 92,
                  80,
                ].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i > 11
                          ? "linear-gradient(180deg, #00ff88, #00cc6a)"
                          : "rgba(255,255,255,0.12)",
                      boxShadow:
                        i > 11 ? "0 0 8px rgba(0,255,136,0.5)" : "none",
                    }}
                  />
                ))}
              </div>

              <div className="mt-6 grid grid-cols-3 gap-2">
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                    Turbidity
                  </p>
                  <p className="mt-1 font-mono text-sm text-white">+42%</p>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                    E. coli
                  </p>
                  <p className="mt-1 font-mono text-sm text-[var(--brand)]">
                    spike
                  </p>
                </div>
                <div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-white/40">
                    Trend
                  </p>
                  <p className="mt-1 font-mono text-sm text-white">↑</p>
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-[var(--brand)]/20 bg-[var(--brand)]/5 p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--brand)]">
                  Ask Water-Intel
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/70">
                  &quot;Turbidity rose sharply over 72h. Likely upstream
                  runoff event. Recommend operator review.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative z-10 border-y border-white/5 bg-white/[0.02] backdrop-blur">
        <div className="shell grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-bold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES — BENTO */}
      <section id="capabilities" className="shell relative z-10 py-24 lg:py-32">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
            Four disciplines.
            <br />
            <span className="gradient-text">One integrated practice.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Software, AI, machine learning, and data — engineered together
            into systems that ship and stay useful.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-6 lg:grid-rows-2">
          {/* Large feature tile */}
          <article className="glass group relative overflow-hidden p-8 lg:col-span-4 lg:row-span-2">
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(600px circle at 50% 0%, rgba(0,255,136,0.08), transparent 40%)",
                }}
              />
            </div>
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="eyebrow">{capabilities[0].tag}</p>
                <h3 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  {capabilities[0].title}
                </h3>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65">
                  {capabilities[0].description}
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-2">
                {capabilities[0].items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Smaller tiles */}
          {capabilities.slice(1).map((cap) => (
            <article
              key={cap.title}
              className="glass group relative overflow-hidden p-6 lg:col-span-2"
            >
              <p className="eyebrow text-[10px]">{cap.tag}</p>
              <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {cap.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {cap.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10px] text-white/55"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WATER-INTEL FEATURE */}
      <section
        id="water-intel"
        className="relative z-10 py-24 lg:py-32"
      >
        <div className="shell">
          <div
            className="relative overflow-hidden rounded-[2rem] border border-white/10 p-10 lg:p-16"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,20,12,0.9) 0%, rgba(0,40,24,0.7) 50%, rgba(0,10,30,0.9) 100%)",
            }}
          >
            <div
              className="absolute -right-20 -top-20 h-96 w-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,255,136,0.25) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
            />
            <div className="grid-pattern pointer-events-none absolute inset-0 opacity-30" />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-3 py-1.5">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: "#00ff88",
                      boxShadow: "0 0 6px #00ff88",
                    }}
                  />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand)]">
                    Flagship · AI + ML
                  </span>
                </div>
                <h2 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
                  Water-Intel
                </h2>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
                  An early-warning decision-support system that combines
                  watershed data, anomaly detection, and explainable AI to
                  surface risk patterns earlier — not just another dashboard.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-display text-3xl font-bold text-white">
                      MVP
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/40">
                      Phase 1
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-white">
                      19-24
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/40">
                      Data window
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-3xl font-bold text-white">
                      103
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-white/40">
                      Parameters
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    className="btn-primary inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm"
                  >
                    Request walkthrough
                    <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#contact"
                    className="btn-ghost inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm"
                  >
                    Read technical brief
                  </a>
                </div>
              </div>

              {/* Code/Terminal mock */}
              <div className="glass-strong overflow-hidden rounded-2xl">
                <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
                    ask-water-intel.ts
                  </span>
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                    <div className="h-2 w-2 rounded-full bg-white/20" />
                  </div>
                </div>
                <div className="space-y-3 p-5 font-mono text-xs leading-relaxed">
                  <div className="text-white/40">
                    <span className="text-[var(--accent-violet)]">user</span>
                    <span className="text-white/30"> ›</span>
                  </div>
                  <p className="text-white/85">
                    What changed at GR-04 in the last 7 days?
                  </p>
                  <div className="pt-3 text-white/40">
                    <span className="text-[var(--brand)]">water-intel</span>
                    <span className="text-white/30"> ›</span>
                  </div>
                  <p className="text-white/75">
                    Turbidity{" "}
                    <span className="text-[var(--brand)]">↑ 42%</span> over
                    72h. E. coli readings show anomalous spike pattern (
                    <span className="text-[var(--brand)]">z-score 2.8</span>).
                  </p>
                  <p className="text-white/75">
                    Likely driver: upstream runoff event correlated with
                    rainfall data.
                  </p>
                  <p className="text-white/55">
                    Recommendation:{" "}
                    <span className="text-white">
                      operator review + confirm with field sample
                    </span>
                    .
                  </p>
                  <div className="mt-4 flex items-center gap-2 border-t border-white/5 pt-3">
                    <div
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: "#00ff88",
                        boxShadow: "0 0 6px #00ff88",
                      }}
                    />
                    <span className="text-[10px] uppercase tracking-wider text-white/40">
                      Confidence: high · Source: 12 readings
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / PRINCIPLES */}
      <section id="about" className="shell relative z-10 py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">About</p>
            <h2 className="mt-6 font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Tech-forward.
              <br />
              <span className="gradient-text">Grounded in trust.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/65">
              Gemini Matrix is an Indigenous-owned technology practice
              focused on building useful software and AI systems. Strong
              engineering, applied intelligence, and honest delivery — for
              teams and communities that need real outcomes.
            </p>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {principles.map((p) => (
              <article
                key={p.title}
                className="glass group flex items-start gap-6 p-6 transition hover:border-[var(--brand)]/20"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--brand)]">
                  {p.label}
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {p.description}
                  </p>
                </div>
                <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-[var(--brand)]">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="shell relative z-10 pb-24 lg:pb-32">
        <div
          className="relative overflow-hidden rounded-[2rem] border border-[var(--brand)]/20 px-10 py-16 lg:px-20 lg:py-24"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,30,18,0.95) 0%, rgba(0,15,10,0.98) 100%)",
          }}
        >
          <div
            className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,255,136,0.4) 0%, transparent 60%)",
              filter: "blur(60px)",
            }}
          />
          <div className="grid-pattern pointer-events-none absolute inset-0 opacity-40" />

          <div className="relative text-center">
            <p className="eyebrow justify-center">Let&apos;s build</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Ready to build
              <br />
              <span className="gradient-text">something intelligent?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
              Software builds, AI integrations, ML systems, or a Water-Intel
              walkthrough — start a conversation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:geminimatrixinc@gmail.com"
                className="btn-primary inline-flex items-center gap-2 rounded-full px-8 py-4 text-base"
              >
                geminimatrixinc@gmail.com
                <span aria-hidden>→</span>
              </a>
              <a
                href="#water-intel"
                className="btn-ghost inline-flex items-center gap-2 rounded-full px-8 py-4 text-base"
              >
                See Water-Intel
              </a>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl gap-6 border-t border-white/10 pt-12 text-left sm:grid-cols-3">
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--brand)]">
                  — Founder
                </p>
                <p className="mt-3 font-display text-lg font-semibold text-white">
                  Mike Denton
                </p>
                <p className="text-sm text-white/55">President / Founder</p>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--brand)]">
                  — Email
                </p>
                <a
                  href="mailto:geminimatrixinc@gmail.com"
                  className="mt-3 block font-display text-lg font-semibold text-white hover:text-[var(--brand)]"
                >
                  geminimatrixinc@gmail.com
                </a>
                <p className="text-sm text-white/55">General inquiries</p>
              </div>
              <div>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--brand)]">
                  — Main Office
                </p>
                <address className="mt-3 not-italic text-sm leading-relaxed text-white/75">
                  1574 Chiefswood Rd
                  <br />
                  PO Box 846
                  <br />
                  Ohsweken, ON N0A 1M0
                  <br />
                  Canada
                </address>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-sm text-white/40 sm:flex-row">
          <p className="font-mono text-xs uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Gemini Matrix Consulting
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em]">
            Indigenous-owned · Built in Canada
          </p>
        </footer>
      </section>
    </main>
  );
}
