import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/2348000000000"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="magnetic-btn grid place-items-center size-12 rounded-full bg-lime text-lime-foreground shadow-elegant"
      >
        <MessageCircle className="size-5" />
      </a>
      <a
        href="tel:+2348000000000"
        aria-label="Call now"
        className="magnetic-btn grid place-items-center size-12 rounded-full bg-primary text-primary-foreground shadow-elegant"
      >
        <Phone className="size-5" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="magnetic-btn grid place-items-center size-12 rounded-full glass animate-fade-in"
        >
          <ArrowUp className="size-5" />
        </button>
      )}
    </div>
  );
}
