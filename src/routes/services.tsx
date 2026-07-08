import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/services-data";
import pestImg from "@/assets/pest.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cleaning, Pest Control, Fumigation & Mold Remediation" },
      {
        name: "description",
        content:
          "Explore EcoShield's full range of services: residential and commercial cleaning, pest control, fumigation, mold remediation, floor restoration and more.",
      },
      { property: "og:title", content: "EcoShield Services" },
      { property: "og:description", content: "Premium cleaning, pest control, fumigation and mold remediation services." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-y-0 right-0 hidden lg:block w-1/2 pointer-events-none">
          <img src={pestImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
        </div>
        <div className="container-x relative pt-24 md:pt-32 pb-20 md:pb-28 max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Our services</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              A complete <span className="text-gradient">hygiene partner</span> for every space.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              From everyday cleaning to specialized pest control, fumigation and mold remediation —
              we deliver the full spectrum of environmental hygiene services.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICE GRID NAV */}
      <section className="container-x py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 30}>
              <a
                href={`#${s.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card p-4 hover:border-primary transition-colors"
              >
                <span className="grid place-items-center size-9 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="size-4" />
                </span>
                <span className="text-sm font-medium">{s.title}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICES */}
      <section className="container-x pb-12 space-y-20">
        {services.map((s, idx) => {
          const imageRight = idx % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className={`scroll-mt-28 grid lg:grid-cols-2 gap-10 items-center rounded-[2rem] border border-border bg-card p-7 md:p-10`}
            >
              <Reveal
                direction={imageRight ? "right" : "left"}
                className={imageRight ? "lg:order-2" : "lg:order-1"}
              >
                <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-secondary shadow-elegant hover-lift">
                  <img
                    src={s.image}
                    alt={`${s.title} in Nigeria`}
                    loading="lazy"
                    width={1200}
                    height={900}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </Reveal>

              <Reveal
                direction={imageRight ? "left" : "right"}
                delay={120}
                className={imageRight ? "lg:order-1" : "lg:order-2"}
              >
                <div>
                  <div className="grid place-items-center size-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant">
                    <s.icon className="size-7" />
                  </div>
                  <h2 className="mt-5 text-2xl md:text-3xl font-bold tracking-tight">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-primary uppercase tracking-wider">Industries served</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {s.industries.map((ind) => (
                        <span key={ind} className="rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-xs font-medium">{ind}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 grid sm:grid-cols-3 gap-3">
                    <Block title="Benefits" items={s.benefits} />
                    <Block title="Process" items={s.process} ordered />
                    <Block title="Features" items={s.features} />
                  </div>
                  <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold magnetic-btn">
                    Request this service <ArrowRight className="size-4" />
                  </Link>
                </div>
              </Reveal>
            </article>
          );
        })}
      </section>

      {/* COMPARISON TABLE */}
      <section className="container-x py-20">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">Compare service tiers</h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-secondary text-left">
                <tr>
                  {["Feature", "Essential", "Professional", "Enterprise"].map((h) => (
                    <th key={h} className="p-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {[
                  ["Eco-safe products", true, true, true],
                  ["Dedicated team", false, true, true],
                  ["Same-day response", false, true, true],
                  ["Quality audits & reports", false, false, true],
                  ["24/7 emergency support", false, false, true],
                  ["Customized programs", false, true, true],
                ].map((row, i) => (
                  <tr key={i}>
                    <td className="p-4 font-medium">{row[0] as string}</td>
                    {[row[1], row[2], row[3]].map((v, j) => (
                      <td key={j} className="p-4">
                        {v ? <CheckCircle2 className="size-5 text-primary" /> : <span className="text-muted-foreground/50">—</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* GUARANTEE */}
      <section className="container-x pb-20">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-center rounded-[2rem] overflow-hidden bg-dark">
            <div className="p-10 md:p-14">
              <div className="grid place-items-center size-12 rounded-xl bg-lime text-lime-foreground">
                <ShieldCheck className="size-6" />
              </div>
              <h2 className="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-white">
                The EcoShield <span className="text-gradient-lime">100% Service Guarantee</span>.
              </h2>
              <p className="mt-4 text-white/70">
                Not satisfied? We'll return and make it right — no questions, no extra cost. That's
                the EcoShield promise.
              </p>
            </div>
            <img src={pestImg} alt="Certified pest control technician at work" width={1200} height={1400} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="rounded-[2rem] bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-10 md:p-16 text-center shadow-elegant">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
              Need a service that fits your facility?
            </h2>
            <p className="mt-3 opacity-90">Tell us about your space and we'll build a tailored plan.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-6 py-3.5 text-sm font-semibold magnetic-btn">
              Request a quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function Block({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) {
  return (
    <div className="rounded-2xl bg-secondary/50 p-5">
      <h3 className="text-xs font-semibold text-primary uppercase tracking-wider">{title}</h3>
      <ul className="mt-3 space-y-2">
        {items.map((it, i) => (
          <li key={it} className="flex items-start gap-2 text-sm">
            {ordered ? (
              <span className="grid place-items-center size-5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold shrink-0 mt-0.5">{i + 1}</span>
            ) : (
              <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
            )}
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
