import React from "react";

export const Background = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        zIndex: "1"
      }}
    >
      <svg width="100%" height="100%">
        <defs>
          <pattern
            id="pattern-hex"
            x="0"
            y="0"
            width="28"
            height="49"
            viewBox="0 0 28 49"
            fill="#414141"
            patternUnits="userSpaceOnUse"
          >
            <animate
              attributeName="fill"
              values="#414141;#624b4b;#414141;"
              begin="1s"
              dur="10s"
              repeatCount="indefinite"
            />
            <g fillRule="evenodd">
              <g id="hexagons" className="backgroundHexagon" fillRule="nonzero">
                <path d="M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z" />
              </g>
            </g>
          </pattern>
        </defs>

        <rect
          x="0"
          y="0"
          className="patternFill"
          width="100%"
          height="100%"
          fill="url(#pattern-hex)"
        />
      </svg>
    </div>
  );
};
