import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Clock, MessageCircle, AlertTriangle, CheckCircle2, User, Building2 } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/lib/services-data";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER } from "@/components/site/FloatingActions";
import { openExternal, handleExternalClick } from "@/lib/open-external";
import teamImg from "@/assets/team.jpg";

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
      <section className="relative overflow-hidden bg-hero">
        <div className="absolute inset-y-0 right-0 hidden lg:block w-1/2 pointer-events-none">
          <img src={teamImg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>
        <div className="container-x relative pt-24 md:pt-32 pb-20 md:pb-28 max-w-3xl">
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
            <InfoCard icon={MessageCircle} title="WhatsApp" lines={[PHONE_DISPLAY]} href={`https://wa.me/${WHATSAPP_NUMBER}`} />
            <InfoCard icon={Mail} title="Email" lines={[EMAIL]} href={`mailto:${EMAIL}`} />
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
                <p className="mt-2 text-white/70">Our emergency line is open 24/7 on WhatsApp for active infestations and biohazards.</p>
              </div>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("URGENT: I need emergency pest control assistance.")}`}
              onClick={handleExternalClick(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("URGENT: I need emergency pest control assistance.")}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn inline-flex items-center gap-2 rounded-full bg-lime text-lime-foreground px-6 py-3.5 text-sm font-semibold"
            >
              Message Emergency Line <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </section>
    </SiteLayout>
  );
}

function InfoCard({ icon: Icon, title, lines, href }: { icon: any; title: string; lines: string[]; href?: string }) {
  const external = href?.startsWith("http");
  const isWa = href?.includes("wa.me");
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
  return href ? (
    <a
      href={href}
      onClick={isWa ? handleExternalClick(href!) : undefined}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {inner}
    </a>
  ) : inner;
}

type ClientType = "individual" | "company";

function ContactForm() {
  const [done, setDone] = useState(false);
  const [clientType, setClientType] = useState<ClientType>("individual");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    service: "",
    message: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const buildBody = () => {
    const serviceLabel = services.find((s) => s.slug === form.service)?.title ?? form.service;
    const lines = [
      `*New enquiry — EcoShield Website*`,
      ``,
      `*Client type:* ${clientType === "individual" ? "Individual" : "Company / Organisation"}`,
      `*Name:* ${form.name}`,
      ...(clientType === "company" ? [`*Company:* ${form.company}`, `*Role:* ${form.role || "—"}`] : []),
      `*Email:* ${form.email}`,
      `*Phone:* ${form.phone || "—"}`,
      `*Service:* ${serviceLabel || "—"}`,
      ``,
      `*Message:*`,
      form.message,
    ];
    return lines.join("\n");
  };

  const sendWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildBody())}`;
    openExternal(url);
    setDone(true);
  };

  const sendEmail = () => {
    const subject = `New enquiry from ${form.name}${clientType === "company" && form.company ? ` (${form.company})` : ""}`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildBody().replace(/\*/g, ""))}`;
    window.location.href = url;
    setDone(true);
  };

  const valid = form.name && form.email && form.message && form.service && (clientType === "individual" || form.company);

  if (done) {
    return (
      <div className="rounded-[2rem] border border-border bg-card p-10 text-center">
        <div className="mx-auto grid place-items-center size-14 rounded-full bg-primary text-primary-foreground">
          <CheckCircle2 className="size-7" />
        </div>
        <h3 className="mt-5 text-2xl font-bold">Message on its way</h3>
        <p className="mt-2 text-muted-foreground">We've opened your messaging app — just hit send and we'll respond within 1 business hour.</p>
        <button onClick={() => setDone(false)} className="mt-5 text-sm font-semibold text-primary underline-offset-4 hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (valid) sendWhatsApp(); }}
      className="rounded-[2rem] border border-border bg-card p-7 md:p-9 space-y-5"
    >
      {/* Client type toggle */}
      <div>
        <label className="text-sm font-medium">I'm enquiring as</label>
        <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-secondary p-1">
          <TypeButton active={clientType === "individual"} onClick={() => setClientType("individual")} icon={User} label="Individual" />
          <TypeButton active={clientType === "company"} onClick={() => setClientType("company")} icon={Building2} label="Company / Organisation" />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Full name" name="name" required value={form.name} onChange={update("name")} />
        <Field label="Email" name="email" type="email" required value={form.email} onChange={update("email")} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Phone" name="phone" value={form.phone} onChange={update("phone")} />
        {clientType === "company" ? (
          <Field label="Company / Organisation" name="company" required value={form.company} onChange={update("company")} />
        ) : (
          <Field label="City (optional)" name="city" value={form.company} onChange={update("company")} />
        )}
      </div>
      {clientType === "company" && (
        <Field label="Your role (optional)" name="role" value={form.role} onChange={update("role")} />
      )}
      <div>
        <label className="text-sm font-medium">Service required</label>
        <select
          required
          name="service"
          value={form.service}
          onChange={update("service")}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="">Select a service</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.title}</option>)}
        </select>
      </div>
      <div>
        <label className="text-sm font-medium">Message</label>
        <textarea
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          placeholder={clientType === "company" ? "Tell us about your facility, scope and frequency..." : "Tell us a bit about your space and needs..."}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 pt-1">
        <button
          type="submit"
          disabled={!valid}
          className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3.5 text-sm font-semibold shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MessageCircle className="size-4" /> Send via WhatsApp
        </button>
        <button
          type="button"
          onClick={sendEmail}
          disabled={!valid}
          className="magnetic-btn inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-elegant disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Mail className="size-4" /> Send via Email
        </button>
      </div>
      <p className="text-xs text-muted-foreground">
        Both options open your messaging app pre-filled with your details — review and send.
      </p>
    </form>
  );
}

function TypeButton({ active, onClick, icon: Icon, label }: { active: boolean; onClick: () => void; icon: any; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
        active ? "bg-background shadow-soft text-foreground" : "text-muted-foreground hover:text-foreground"
      }`}
    >
      <Icon className="size-4" />
      {label}
    </button>
  );
}

function InspectionForm() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", city: "", date: "" });
  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      `*Inspection booking request — EcoShield Website*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*City:* ${form.city || "—"}`,
      `*Preferred date:* ${form.date || "—"}`,
      ``,
      `Please confirm an available slot for a free on-site inspection.`,
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`;
    openExternal(url);
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-2xl bg-secondary/50 p-8 text-center">
        <CheckCircle2 className="size-10 mx-auto text-primary" />
        <p className="mt-3 font-semibold">Inspection request opened in WhatsApp — hit send to confirm.</p>
      </div>
    );
  }
  return (
    <form onSubmit={submit} className="grid sm:grid-cols-2 gap-4">
      <Field label="Name" name="iname" required value={form.name} onChange={update("name")} />
      <Field label="Phone" name="iphone" required value={form.phone} onChange={update("phone")} />
      <Field label="City" name="icity" value={form.city} onChange={update("city")} />
      <Field label="Preferred date" name="idate" type="date" value={form.date} onChange={update("date")} />
      <div className="sm:col-span-2">
        <button type="submit" className="magnetic-btn w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3.5 text-sm font-semibold shadow-elegant">
          <MessageCircle className="size-4" /> Book via WhatsApp <ArrowRight className="size-4" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label, name, type = "text", required, value, onChange,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
