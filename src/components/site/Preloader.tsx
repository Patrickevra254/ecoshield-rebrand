import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import logo from "@/assets/ecoshield-logo-transparent.png";

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const routerState = useRouterState();
  const isNavigating = routerState.status === "pending";

  // Initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 600);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Route transitions
  const [routeLoading, setRouteLoading] = useState(false);
  useEffect(() => {
    if (isNavigating) {
      setRouteLoading(true);
    } else {
      const timer = setTimeout(() => setRouteLoading(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isNavigating]);

  if (!visible && !routeLoading) return null;

  const isInitial = visible && !routeLoading;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fading && isInitial ? "opacity-0 pointer-events-none" : "opacity-100"
      } ${routeLoading && !isInitial ? "opacity-100" : ""} ${!routeLoading && !visible ? "opacity-0 pointer-events-none" : ""}`}
      style={{
        background:
          "linear-gradient(135deg, oklch(0.18 0.015 170) 0%, oklch(0.24 0.04 165) 50%, oklch(0.38 0.11 165) 100%)",
      }}
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 size-[300px] bg-lime/15 blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 size-[250px] bg-primary/20 blur-3xl animate-blob delay-300" />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* Outer ring pulse */}
          <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] scale-150" />
          <div className="absolute inset-0 rounded-full border border-lime/30 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite_0.5s] scale-125" />

          <img
            src={logo}
            alt="EcoShield"
            className="h-20 w-auto object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] animate-fade-in"
          />
        </div>

        <h2 className="mt-6 text-xl font-bold tracking-tight text-white animate-fade-in delay-100">
          EcoShield
        </h2>
        <p className="mt-1 text-sm text-white/60 animate-fade-in delay-200">
          Cleaning Services & Pest Control
        </p>

        {/* Progress bar */}
        <div className="mt-8 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-lime to-primary animate-[shimmer_1.5s_ease-in-out_infinite]"
            style={{
              backgroundSize: "200% 100%",
              width: isInitial ? "100%" : "60%",
            }}
          />
        </div>
      </div>
    </div>
  );
}
