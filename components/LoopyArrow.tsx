"use client";
import { useState, useEffect, useRef } from "react";

let idCounter = 0;

interface LoopyArrowProps {
  /** Wrapper div classes (e.g., to control max-width/height/overflow) */
  containerClassName?: string;
  /** Wrapper inline style */
  containerStyle?: React.CSSProperties;
  /** Extra DOM props for the wrapper */
  containerProps?: React.HTMLAttributes<HTMLDivElement>;

  /** SVG viewBox for cropping/zooming the path */
  viewBox?: string; // e.g. "200 200 600 300"
  /** SVG width (px, %, etc.) */
  width?: string | number;  // e.g. "60%" or 480
  /** SVG height (px, %, etc.) */
  height?: string | number; // e.g. "180px"

  /** Stroke width of the dashed path */
  strokeWidth?: number;
  /** Dash pattern for the path (e.g. "10 20") */
  dash?: string;
  /** Animation duration in seconds */
  duration?: number;
}

export default function LoopyArrow({
  containerClassName = "",
  containerStyle,
  containerProps,
  viewBox = "0 0 1300 750",
  width = "100%",
  height = "200px",
  strokeWidth = 2,
  dash = "10 20",
  duration = 6,
}: LoopyArrowProps) {
  const [start, setStart] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const uniqueId = `arrow-${++idCounter}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Start the animation when at least half of the component is in view.
        setStart(entries.some((e) => e.isIntersecting));
      },
      { threshold: 0.5 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex justify-center items-center ${containerClassName}`}
      style={containerStyle}
      {...containerProps}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={width}
        height={height}
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Dashed path */}
        <path
          d="M20.2 679.7c210.3-19.1 398.9-219.6 236.5-257.5
             -170.5-16.8-132.5 146.2-6.8 184.7
             141.6 55.7 242.3-9.9 215.3-89.3
             -43.7-94-330-292-85-347.3
             135.5-18.7 251 54.7 302.9 141.5
             50.2 85 25.5 183.8 136.6 248.6
             C1000 627 1037.7 427 1039 395.7
             c20.3-196.6-133.8-218-199.5-170
             s-11.3 138.5 107 114
             S1126.7 147.6 1092.6 67
             c-2.4-12.2-1.4-23.1 9.2-31.8
             100.8-49.4 112.2 198.4 239-23.8"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={dash}
          className="text-[var(--accent)]"
        />

        {/* YOUR ORIGINAL ARROWHEAD GROUP (restored) */}
        <g id={uniqueId} transform="translate(-100 -650)">
          <g fill="currentColor">
            <path
              d="M77.4 651.4a13.3 13.3 0 00-14.8-11.6c-19 2.2-29.8 17-55.5 20 25.7-3 39.7 8.7 58.7 6.4a13.3 13.3 0 0011.6-14.8z"
              opacity=".5"
            />
            <path d="M77.4 651.4a9 9 0 00-9.9-7.8c-12.7 1.5-20 11.4-37.1 13.4 17.2-2 26.5 5.8 39.2 4.3a9 9 0 007.8-9.9z" />
          </g>
          <g fill="var(--accent)">
            <path d="M111.9 669.7l-15.1 13.7a8.4 8.4 0 01-6.7 2.1l-23-2.8a1 1 0 01-1-1.1 1 1 0 01.2-.5l14-19.7z" />
            <path d="M106.7 625.4L89 615.5a8.4 8.4 0 00-7-.5l-21.8 8a1 1 0 00-.3 1.7l18.2 16z" />
          </g>
          <circle cx="123.2" cy="646" r="11.7" fill="var(--accent)" />
        </g>

        {/* Animate along the path */}
        {start && (
          <animateMotion
            xlinkHref={`#${uniqueId}`}
            dur={`${duration}s`}
            rotate="auto"
            repeatCount="indefinite"
            begin="0s"
            path="M20.2 679.7c210.3-19.1 398.9-219.6 236.5-257.5
                  -170.5-16.8-132.5 146.2-6.8 184.7
                  141.6 55.7 242.3-9.9 215.3-89.3
                  -43.7-94-330-292-85-347.3
                  135.5-18.7 251 54.7 302.9 141.5
                  50.2 85 25.5 183.8 136.6 248.6
                  C1000 627 1037.7 427 1039 395.7
                  c20.3-196.6-133.8-218-199.5-170
                  s-11.3 138.5 107 114
                  S1126.7 147.6 1092.6 67
                  c-2.4-12.2-1.4-23.1 9.2-31.8
                  100.8-49.4 112.2 198.4 239-23.8"
          />
        )}
      </svg>
    </div>
  );
}
