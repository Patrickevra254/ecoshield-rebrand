import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, Clock, MessageCircle, AlertTriangle, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact EcoShield — Get a Free Quote or Book an Inspection" },
      {
        name: "description",
        content:
          "Contact EcoShield Cleaning Services and Pest Control. Request a free quote, book an inspection or reach our team for urgent pest control.",
      },
      { property: "og:title", content: "Contact EcoShield" },
      { property: "og:description", content: "Get in touch for quotes, inspections and emergency pest control." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const areas = ["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Benin", "Enugu", "Abeokuta"];

function Contact() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-hero">
        <div className="container-x py-20 md:py-28 max-w-3xl">
          <Reveal>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Contact us</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Let's create a <span className="text-gradient">cleaner, healthier</span> space — together.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Reach our team for quotes, inspections, partnerships or urgent pest control. We
              typically respond within 60 minutes during business hours.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="container-x py-16 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <Reveal>
          <div className="space-y-4">
            <InfoCard icon={Phone} title="Phone" lines={["+234 800 000 0000"]} href="tel:+2348000000000" />
            <InfoCard icon={Mail} title="Email" lines={["hello@ecoshield.co"]} href="mailto:hello@ecoshield.co" />
            <InfoCard icon={MessageCircle} title="WhatsApp" lines={["+234 800 000 0000"]} href="https://wa.me/2348000000000" />
            <InfoCard icon={MapPin} title="Office" lines={["12 Hygiene Avenue,", "Victoria Island, Lagos"]} />
            <InfoCard icon={Clock} title="Hours" lines={["Mon — Sat: 8:00 — 18:00", "Sun: Emergency only"]} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </section>

      {/* BOOK INSPECTION */}
      <section className="container-x py-10">
        <Reveal>
          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 items-start">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Book a free inspection</h2>
                <p className="mt-3 text-muted-foreground">
                  Schedule a no-cost site walkthrough. Our specialist will assess your needs and
                  recommend the right service plan.
                </p>
              </div>
              <InspectionForm />
            </div>
          </div>
        </Reveal>
      </section>

      {/* MAP + AREAS */}
      <section className="container-x py-16 grid lg:grid-cols-2 gap-8">
        <Reveal>
          <div className="rounded-[2rem] overflow-hidden border border-border h-[380px] bg-secondary">
            <iframe
              title="EcoShield office location"
              src="https://www.google.com/maps?q=Victoria%20Island%20Lagos&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-[2rem] border border-border bg-card p-8 h-full">
            <h3 className="text-2xl font-bold tracking-tight">Service areas</h3>
            <p className="mt-2 text-muted-foreground">We currently serve clients across these cities.</p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {areas.map((a) => (
                <div key={a} className="flex items-center gap-2 rounded-xl bg-secondary/60 px-4 py-3">
                  <MapPin className="size-4 text-primary" />
                  <span className="font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* EMERGENCY */}
      <section className="container-x pb-16">
        <Reveal>
          <div className="rounded-[2rem] bg-dark p-8 md:p-12 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="grid place-items-center size-12 rounded-xl bg-lime text-lime-foreground shrink-0">
                <AlertTriangle className="size-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-white">Urgent pest control?</h3>
                <p className="mt-2 text-white/70">Our emergency line is open 24/7 for active infestations and biohazards.</p>
              </div>
            </div>
            <a href="tel:+2348000000000" className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-6 py-3.5 text-sm font-semibold">
              Call Emergency Line <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function InfoCard({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 hover-lift">
      <div className="grid place-items-center size-11 rounded-xl bg-primary/10 text-primary shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="text-sm text-muted-foreground">{title}</div>
        {lines.map((l) => <div key={l} className="font-semibold">{l}</div>)}
      </div>
    </div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}

function ContactForm() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div className="rounded-[2rem] border border-border bg-card p-10 text-center">
        <div className="mx-auto grid place-items-center size-14 rounded-full bg-primary text-primary-foreground">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 text-2xl font-bold">Message received</h3>
        <p className="mt-2 text-muted-foreground">Thanks — our team will be in touch within 1 business hour.</p>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
      className="rounded-[2rem] border border-border bg-card p-7 md:p-9 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone" name="phone" />
        <Field label="Company (optional)" name="company" />
      </div>
      <div>
        <label className="text-sm font-medium">Service required</label>
        <select required name="service" className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
        </select>
      </div>
      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea required name="message" rows={5} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" placeholder="Tell us a bit about your space and needs..." />
      </div>
      <button type="submit" className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-elegant">
        Send message <ArrowRight className="size-4" />
      </button>
    </form>
  );
}

function InspectionForm() {
  const [done, setDone] = useState(false);
  if (done) {
    return (
      <div className="rounded-2xl bg-secondary/50 p-8 text-center">
        <CheckCircle2 className="size-10 mx-auto text-primary" />
        <p className="mt-3 font-semibold">Inspection request received.</p>
      </div>
    );
  }
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid sm:grid-cols-2 gap-4">
      <Field label="Name" name="iname" required />
      <Field label="Phone" name="iphone" required />
      <Field label="City" name="icity" />
      <Field label="Preferred date" name="idate" type="date" />
      <div className="sm:col-span-2">
        <button type="submit" className="magnetic-btn w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-elegant">
          Book inspection <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
