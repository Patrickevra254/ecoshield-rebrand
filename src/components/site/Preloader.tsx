import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

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
        background: "var(--color-background)",
      }}
    >
      <div className="relative z-10 flex flex-col items-center">
        {/* Circular spinner */}
        <div className="relative size-16">
          <div className="absolute inset-0 rounded-full border-4 border-primary/10" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary animate-spin" />
        </div>

        <h2 className="mt-6 text-xl font-bold tracking-tight text-foreground animate-fade-in delay-100">
          EcoShield
        </h2>
        <p className="mt-1 text-sm text-muted-foreground animate-fade-in delay-200">
          Cleaning Services & Pest Control
        </p>

        {/* Progress bar */}
        <div className="mt-8 w-48 h-1 bg-border rounded-full overflow-hidden">
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
