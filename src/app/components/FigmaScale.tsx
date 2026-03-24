import { useEffect, useRef, useState, type ReactNode } from "react";

interface FigmaScaleProps {
  children: ReactNode;
  width: number;
  height: number;
  className?: string;
}

/**
 * Wraps a Figma-exported section with fixed pixel positioning
 * and scales it to fit the viewport while preserving layout.
 */
export default function FigmaScale({ children, width, height, className = "" }: FigmaScaleProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (!containerRef.current) return;
      const parentWidth = containerRef.current.parentElement?.clientWidth ?? width;
      const newScale = Math.min(1, parentWidth / width);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, [width]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      style={{ height: height * scale }}
    >
      <div
        style={{
          width,
          height,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
