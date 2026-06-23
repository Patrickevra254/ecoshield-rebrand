import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import logo from "@/assets/ecoshield-logo-transparent.png";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_NUMBER } from "./FloatingActions";

export function Footer() {
  return (
    <footer className="bg-dark mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 max-w-md">
          <Link to="/" className="inline-flex items-center" aria-label="EcoShield home">
            <img
              src={logo}
              alt="EcoShield Cleaning Services and Pest Control"
              className="h-16 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            />
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
            <li>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-lime transition-colors">
                <MessageCircle className="size-4 text-lime" /> WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-lime transition-colors">
                <Mail className="size-4 text-lime" /> {EMAIL}
              </a>
            </li>
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
