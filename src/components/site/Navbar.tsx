import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container-x">
        <nav
          className="flex items-center justify-between px-4 md:px-6 py-3 transition-all duration-500 bg-white shadow-soft rounded-2xl"
        >
          <Link to="/" className="flex items-center gap-2 group" aria-label="EcoShield home">
            <img
              src={logo.url}
              alt="EcoShield Cleaning Services and Pest Control"
              className="h-10 md:h-11 w-auto object-contain transition-transform group-hover:scale-[1.03]"
              width={180}
              height={44}
            />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                activeProps={{
                  className:
                    "relative px-4 py-2 text-sm font-bold text-primary after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-primary",
                }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="magnetic-btn inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant"
            >
              Get Free Quote
            </Link>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden grid place-items-center size-10 rounded-xl glass"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary"
                  activeProps={{ className: "px-3 py-2.5 rounded-lg text-sm font-bold text-primary bg-secondary border-l-4 border-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
