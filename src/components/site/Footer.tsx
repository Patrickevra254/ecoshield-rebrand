import { Link } from "@tanstack/react-router";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-dark mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <Link to="/" className="flex items-center gap-2">
            <span className="grid place-items-center size-9 rounded-xl bg-lime text-lime-foreground">
              <Leaf className="size-5" />
            </span>
            <span className="font-bold tracking-tight text-lg text-white">
              EcoShield
            </span>
          </Link>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Creating cleaner, healthier, and safer environments through professional
            cleaning, pest control, fumigation and mold remediation services.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-lime transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-lime transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-lime transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-center gap-2"><Phone className="size-4 text-lime" /> +234 800 000 0000</li>
            <li className="flex items-center gap-2"><Mail className="size-4 text-lime" /> hello@ecoshield.co</li>
            <li className="flex items-start gap-2"><MapPin className="size-4 text-lime mt-0.5" /> Lagos, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} EcoShield Cleaning Services and Pest Control. All rights reserved.</p>
          <p>Creating Cleaner, Healthier, and Safer Environments.</p>
        </div>
      </div>
    </footer>
  );
}
