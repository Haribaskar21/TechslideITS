import React from "react";

export default function LineBackground() {
  return (
    <>
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          animation: "moveLines 60s linear infinite",
        }}
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.05" />
            <stop offset="100%" stopColor="white" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Vertical lines */}
        {[...Array(30)].map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 3.33}
            y1="0"
            x2={i * 3.33}
            y2="100"
            stroke="url(#lineGradient)"
            strokeWidth="0.2"
          />
        ))}

        {/* Horizontal lines */}
        {[...Array(30)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 3.33}
            x2="100"
            y2={i * 3.33}
            stroke="url(#lineGradient)"
            strokeWidth="0.2"
          />
        ))}
      </svg>

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes moveLines {
            0% {
              transform: translate(0%, 0%);
            }
            100% {
              transform: translate(-5%, -5%);
            }
          }
        `}
      </style>
    </>
  );
}
