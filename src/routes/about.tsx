import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Target, Eye, Heart } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import teamImg from "@/assets/team.jpg";
import ecoImg from "@/assets/eco.jpg";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About EcoShield — Our Story, Mission & Values" },
      {
        name: "description",
        content:
          "Learn about EcoShield Cleaning Services and Pest Control — our story, mission, core values and commitment to healthier, eco-responsible service.",
      },
      { property: "og:title", content: "About EcoShield" },
      { property: "og:description", content: "Our story, mission and commitment to cleaner, safer environments." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  "Professionalism",
  "Excellence",
  "Customer Satisfaction",
  "Reliability",
  "Dexterity",
  "Health & Safety",
  "Environmental Responsibility",
  "Continuous Improvement",
];

const timeline = [
  { year: "2013", title: "Founded", desc: "EcoShield begins with a small team and a big mission." },
  { year: "2017", title: "Service expansion", desc: "Pest control, fumigation and mold remediation added." },
  { year: "2020", title: "HSE certified", desc: "Achieved full HSE compliance and insurance coverage." },
  { year: "2023", title: "1,000+ clients", desc: "Crossed the 1,000-client milestone across sectors." },
  { year: "2026", title: "National reach", desc: "Serving homes and businesses across multiple cities." },
];

function About() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero min-h-[70vh] flex items-center">
        <HeroSlideshow
          images={[teamImg, heroImg, ecoImg]}
          opacity={1}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 via-40% to-transparent to-70% pointer-events-none" />
        <div className="container-x relative z-10 w-full pt-24 md:pt-32 pb-20 md:pb-28">
          <div className="max-w-xl lg:max-w-[48%]">
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">About EcoShield</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Setting a new standard for <span className="text-gradient">hygiene & environmental care</span>.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              We're a team of trained specialists obsessed with clean, healthy and pest-free
              environments — combining proven methods, modern equipment and eco-responsible practices.
            </p>
          </Reveal>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="container-x py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal direction="left">
          <div className="overflow-hidden rounded-[2rem] shadow-elegant hover-lift">
            <img src={teamImg} alt="EcoShield team portrait" width={1600} height={1000} loading="lazy" className="w-full h-auto transition-transform duration-700 hover:scale-105" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Our story</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              EcoShield was founded to close a real gap: the lack of dependable, premium-grade
              cleaning and pest-control services delivered with both professionalism and
              environmental conscience.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              From a single team serving residential clients, we've grown into a full-service
              hygiene partner trusted by hotels, hospitals, schools and corporate offices —
              guided by one simple principle: do exceptional work, every time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="container-x py-12 grid md:grid-cols-2 gap-5">
        {[
          { icon: Target, title: "Our Mission", desc: "To deliver world-class cleaning, pest control and environmental hygiene services that protect health, enhance spaces and respect the planet." },
          { icon: Eye, title: "Our Vision", desc: "To be Africa's most trusted name in professional cleaning and pest control — recognized for excellence, integrity and environmental leadership." },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 100}>
            <div className="rounded-2xl border border-border bg-card p-8 h-full hover-lift">
              <div className="grid place-items-center size-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant">
                <c.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      {/* CORE VALUES */}
      <section className="container-x py-24">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Core values</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl">
            What we stand for — in every detail.
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <Reveal key={v} delay={i * 50}>
              <div className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="grid place-items-center size-9 rounded-lg bg-lime/30 text-primary">
                  <Heart className="size-4" />
                </div>
                <h3 className="mt-4 font-semibold">{v}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-dark py-24">
        <div className="container-x">
          <Reveal>
            <p className="text-sm font-semibold text-lime uppercase tracking-wider">Our journey</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl">
              A decade of building trust.
            </h2>
          </Reveal>
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 80}>
                  <div className={`relative grid md:grid-cols-2 gap-6 ${i % 2 ? "md:[direction:rtl]" : ""}`}>
                    <div className="md:[direction:ltr]">
                      <div className="ml-10 md:ml-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6">
                        <div className="text-lime font-bold">{t.year}</div>
                        <div className="mt-1 text-white font-semibold text-lg">{t.title}</div>
                        <p className="mt-2 text-white/70 text-sm">{t.desc}</p>
                      </div>
                    </div>
                    <div />
                    <span className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 size-3 rounded-full bg-lime shadow-[0_0_0_6px_rgba(132,204,22,0.2)]" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY DIFFERENT */}
      <section className="container-x py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why we're different</h2>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {[
              "Modern equipment with HEPA filtration and ULV fogging",
              "Eco-friendly, low-toxicity products as the default",
              "Highly trained staff with continuous certification",
              "Customer-first scheduling, communication and reporting",
              "Documented quality assurance after every job",
            ].map((t, i) => (
              <Reveal key={t} delay={i * 60}>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
        <Reveal direction="right">
          <div className="overflow-hidden rounded-[2rem] shadow-elegant hover-lift">
            <img src={ecoImg} alt="Eco-friendly hygiene visuals" width={1200} height={1200} loading="lazy" className="w-full h-auto transition-transform duration-700 hover:scale-105" />
          </div>
        </Reveal>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container-x py-12">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-secondary/40 p-10">
            <h2 className="text-2xl font-bold tracking-tight">Certifications & Compliance</h2>
            <p className="mt-2 text-muted-foreground">Recognized standards we operate by.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {["CAC Registered", "Fully Insured", "HSE Compliant", "Industry Member"].map((c) => (
                <div key={c} className="rounded-xl bg-card border border-border p-5 text-center font-medium">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="container-x py-24">
        <Reveal>
          <div className="rounded-[2rem] bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-10 md:p-16 text-center shadow-elegant">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl mx-auto">
              Partner with a team that takes hygiene seriously.
            </h2>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-6 py-3.5 text-sm font-semibold magnetic-btn">
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}
