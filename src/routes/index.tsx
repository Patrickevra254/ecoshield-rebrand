import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Leaf,
  Clock,
  Award,
  Sparkles,
  ChevronRight,
  Star,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal, Counter } from "@/components/site/Reveal";
import { services } from "@/lib/services-data";
import heroImg from "@/assets/hero.jpg";
import ecoImg from "@/assets/eco.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoShield — Professional Cleaning & Pest Control" },
      {
        name: "description",
        content:
          "EcoShield delivers premium cleaning, pest control, fumigation and mold remediation for homes, offices and industry. Get a free quote today.",
      },
      { property: "og:title", content: "EcoShield — Professional Cleaning & Pest Control" },
      {
        property: "og:description",
        content:
          "Premium cleaning, pest control, fumigation and mold remediation services.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const trustItems = [
  { icon: ShieldCheck, label: "Licensed Professionals" },
  { icon: Leaf, label: "Eco-Friendly Solutions" },
  { icon: Clock, label: "Fast Response" },
  { icon: Award, label: "Satisfaction Guaranteed" },
];

const whyUs = [
  { title: "Trained Experts", desc: "Certified, vetted technicians with continuous training." },
  { title: "Eco-Friendly Products", desc: "Plant-based, low-toxicity formulations safe for families." },
  { title: "Advanced Equipment", desc: "HEPA, ULV foggers and commercial-grade machines." },
  { title: "Reliable Service", desc: "On-time arrivals, clear communication, predictable results." },
  { title: "Affordable Pricing", desc: "Transparent quotes — no hidden fees, ever." },
  { title: "Safety Compliance", desc: "HSE protocols on every job site, every time." },
  { title: "Customized Solutions", desc: "Programs tailored to your space, schedule and goals." },
  { title: "Quality Assurance", desc: "Post-service inspections and written guarantees." },
];

const industries = ["Homes", "Schools", "Hospitals", "Offices", "Hotels", "Warehouses", "Retail Stores", "Construction Sites"];

const process = [
  { n: "01", title: "Inspection", desc: "Detailed site walkthrough and risk assessment." },
  { n: "02", title: "Assessment", desc: "Tailored plan, transparent quote and timeline." },
  { n: "03", title: "Treatment", desc: "Professional service with eco-safe products." },
  { n: "04", title: "Follow-Up", desc: "Quality check, reports and ongoing support." },
];

const testimonials = [
  { quote: "EcoShield transformed our office overnight. Their attention to detail is unmatched.", name: "Adaeze O.", role: "Facility Manager, Lagos" },
  { quote: "The mold problem we battled for years was solved in a single visit. Truly professional.", name: "Daniel K.", role: "Homeowner" },
  { quote: "Reliable, discreet, and incredibly thorough. Our hotel has never looked better.", name: "Mariam B.", role: "Operations Director" },
];

const faqs = [
  { q: "Are your products safe for children and pets?", a: "Yes. We use eco-friendly, low-toxicity formulations and follow strict safety re-entry guidelines after every treatment." },
  { q: "How quickly can you respond?", a: "Standard appointments are scheduled within 24–48 hours. Emergency pest control is typically same-day in Lagos." },
  { q: "Do you offer recurring service plans?", a: "Yes — weekly, bi-weekly, monthly and quarterly plans with priority scheduling and preferred pricing." },
  { q: "Are you insured and licensed?", a: "EcoShield is fully licensed, insured and HSE-compliant. Certificates are available on request." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-32 -left-32 size-[480px] bg-primary/20 blur-3xl animate-blob" />
          <div className="absolute top-40 -right-32 size-[420px] bg-lime/30 blur-3xl animate-blob delay-300" />
        </div>
        <div className="container-x pt-12 md:pt-20 pb-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium">
                <Sparkles className="size-3.5 text-primary" /> Cleaner. Healthier. Safer.
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
                Professional Cleaning &{" "}
                <span className="text-gradient">Pest Control</span>{" "}
                Solutions For Healthier Spaces
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                We help homes, offices, schools, hospitals and businesses maintain clean,
                safe and pest-free environments through professional cleaning, fumigation,
                mold remediation and environmental hygiene services.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-elegant"
                >
                  Get Free Quote
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact"
                  className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold hover:border-primary"
                >
                  Book Inspection
                </Link>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 grid grid-cols-3 max-w-md gap-6">
                <div>
                  <div className="text-3xl font-bold text-gradient"><Counter to={1200} suffix="+" /></div>
                  <div className="text-xs text-muted-foreground mt-1">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient"><Counter to={98} suffix="%" /></div>
                  <div className="text-xs text-muted-foreground mt-1">Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gradient"><Counter to={24} suffix="/7" /></div>
                  <div className="text-xs text-muted-foreground mt-1">Support</div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-lime/30 blur-2xl rounded-[3rem]" />
              <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
                <img
                  src={heroImg}
                  alt="Professional EcoShield cleaning team at work in a modern interior"
                  width={1600}
                  height={1200}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-soft animate-float w-56">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center size-10 rounded-xl bg-lime text-lime-foreground">
                    <ShieldCheck className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Certified & Insured</p>
                    <p className="text-sm font-semibold">HSE Compliant</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-soft animate-float delay-300 w-52">
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center size-10 rounded-xl bg-primary text-primary-foreground">
                    <Leaf className="size-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Eco-Safe</p>
                    <p className="text-sm font-semibold">Family Friendly</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container-x py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((t, i) => (
            <Reveal key={t.label} delay={i * 80}>
              <div className="flex items-center gap-3">
                <t.icon className="size-5 text-primary" />
                <span className="text-sm font-medium">{t.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY ECOSHIELD */}
      <section className="container-x py-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Why EcoShield</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Built for clients who refuse to compromise.
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 60}>
              <div className="hover-lift group rounded-2xl border border-border bg-card p-6 h-full">
                <div className="grid place-items-center size-10 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <CheckCircle2 className="size-5" />
                </div>
                <h3 className="font-semibold">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{w.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container-x pb-24">
        <div className="flex items-end justify-between gap-6 flex-wrap mb-12">
          <div className="max-w-2xl">
            <Reveal>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Services</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                Everything your facility needs — under one roof.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <Link to="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all">
              View all services <ChevronRight className="size-4" />
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(0, 6).map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                to="/services"
                hash={s.slug}
                className="hover-lift group block rounded-2xl border border-border bg-card p-7 h-full"
              >
                <div className="grid place-items-center size-12 rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-elegant">
                  <s.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="size-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-secondary/40 py-24">
        <div className="container-x">
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Industries we serve</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
              Trusted across sectors that demand the highest hygiene standards.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <Reveal key={ind} delay={i * 50}>
                <div className="rounded-xl border border-border bg-card p-5 text-center font-medium hover-lift">
                  {ind}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ENVIRONMENTAL COMMITMENT */}
      <section className="container-x py-24 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] shadow-elegant">
            <img src={ecoImg} alt="Eco-friendly leaf with water droplets" width={1200} height={1200} loading="lazy" className="w-full h-auto" />
          </div>
        </Reveal>
        <div>
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Environmental Commitment</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Cleaner for you. <span className="text-gradient">Kinder to the planet.</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every EcoShield service is engineered around environmental responsibility — from
              biodegradable detergents and water-efficient methods to integrated pest management
              that minimizes chemical use without compromising results.
            </p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {["Biodegradable formulas", "Low-water methods", "Responsible disposal", "Integrated pest management"].map((t, i) => (
              <Reveal key={t} delay={300 + i * 80}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5 text-primary" />
                  <span className="font-medium">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-dark py-24">
        <div className="container-x">
          <Reveal>
            <p className="text-sm font-semibold text-lime uppercase tracking-wider">Our process</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl">
              A simple, proven 4-step process.
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-7 h-full hover:border-lime/40 transition-colors">
                  <div className="text-4xl font-bold text-gradient-lime">{p.n}</div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x py-24">
        <Reveal>
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">Testimonials</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-2xl">
            Loved by homes, offices and hospitality leaders.
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="rounded-2xl border border-border bg-card p-7 h-full hover-lift">
                <div className="flex gap-0.5 text-lime">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="size-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-lg leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bg-secondary/40 py-20">
        <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { n: 1200, s: "+", label: "Projects Completed" },
            { n: 850, s: "+", label: "Happy Clients" },
            { n: 12, s: "+", label: "Years Experience" },
            { n: 60, s: "min", label: "Avg Response Time" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <div className="text-4xl sm:text-5xl font-bold text-gradient">
                  <Counter to={s.n} suffix={s.s} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x py-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          <div>
            <Reveal>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">FAQ</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Questions, answered.
              </h2>
            </Reveal>
          </div>
          <div className="divide-y divide-border">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-dark p-10 md:p-16 text-center">
            <div className="absolute -top-20 -left-20 size-80 bg-primary/40 blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -right-20 size-80 bg-lime/40 blur-3xl animate-blob delay-300" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto">
                Ready for a cleaner, healthier, <span className="text-gradient-lime">pest-free</span> environment?
              </h2>
              <p className="mt-5 text-white/70 max-w-xl mx-auto">
                Get a free, no-obligation quote from our experts today.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-6 py-3.5 text-sm font-semibold shadow-elegant">
                  Request Quote <ArrowRight className="size-4" />
                </Link>
                <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3.5 text-sm font-semibold hover:bg-white/10">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-lg">{q}</span>
        <span className="grid place-items-center size-8 rounded-full bg-secondary text-foreground shrink-0">
          {open ? <Minus className="size-4" /> : <Plus className="size-4" />}
        </span>
      </button>
      <div className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] mt-3 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <p className="text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}
