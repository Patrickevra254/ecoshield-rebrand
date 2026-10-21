import { useEffect, useState } from "react";

/**
 * Cross-fading hero background slideshow.
 * Renders stacked images that fade in/out on an interval.
 */
export function HeroSlideshow({
  images,
  interval = 4500,
  className = "",
  opacity = 0.55,
  mobileOpacity = 0.3,
}: {
  images: string[];
  interval?: number;
  className?: string;
  opacity?: number;
  mobileOpacity?: number;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => window.clearInterval(id);
  }, [images.length, interval]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className="hero-slideshow-image absolute inset-0 w-full h-full object-cover transition-opacity duration-[1600ms] ease-in-out"
          style={{
            "--hero-image-opacity": i === index ? opacity : 0,
            "--hero-image-mobile-opacity": i === index ? mobileOpacity : 0,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
