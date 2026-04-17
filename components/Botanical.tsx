type Side = "topLeft" | "bottomRight";

export function Botanical({
  side,
  className = "",
}: {
  side: Side;
  className?: string;
}) {
  const rotate = side === "topLeft" ? "" : "rotate-180";

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 360"
      className={`pointer-events-none select-none ${rotate} ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g stroke="#6D7D58" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M8 16 C 36 68, 66 118, 96 166 C 118 202, 138 240, 152 282"
          opacity="0.85"
        />

        <g transform="translate(34 76)">
          <path
            d="M0 0 C -22 2, -40 14, -44 30 C -24 26, -6 18, 2 4 Z"
            fill="#A9B79D"
            fillOpacity="0.55"
          />
          <path d="M0 0 C -20 6, -34 16, -42 28" opacity="0.7" />
        </g>

        <g transform="translate(68 132)">
          <path
            d="M0 0 C -26 -4, -46 6, -54 22 C -34 22, -14 16, 0 2 Z"
            fill="#A9B79D"
            fillOpacity="0.5"
          />
        </g>

        <g transform="translate(104 188)">
          <path
            d="M0 0 C -22 8, -36 22, -38 40 C -20 34, -6 22, 2 6 Z"
            fill="#A9B79D"
            fillOpacity="0.45"
          />
        </g>

        <g transform="translate(132 236)">
          <path
            d="M0 0 C 20 -8, 36 -4, 46 10 C 30 14, 14 10, 2 2 Z"
            fill="#A9B79D"
            fillOpacity="0.5"
          />
        </g>
      </g>

      <g transform="translate(168 298)">
        <g stroke="#8B6470" strokeWidth="1" strokeLinecap="round">
          <path
            d="M0 -24 C 4 -16, 2 -8, -4 -2 C -12 -10, -12 -18, -6 -24 C -2 -28, 2 -28, 0 -24 Z"
            fill="#E9C8CC"
            fillOpacity="0.85"
          />
          <path
            d="M10 -18 C 16 -10, 14 0, 6 6 C -2 0, -2 -10, 4 -18 C 8 -22, 12 -22, 10 -18 Z"
            fill="#E9C8CC"
            fillOpacity="0.75"
          />
          <path
            d="M-14 -8 C -8 -2, -4 8, -10 16 C -20 10, -22 0, -18 -6 C -16 -10, -12 -12, -14 -8 Z"
            fill="#E9C8CC"
            fillOpacity="0.8"
          />
          <path
            d="M14 -4 C 24 2, 26 14, 18 22 C 8 18, 4 8, 10 0 C 12 -4, 16 -6, 14 -4 Z"
            fill="#E9C8CC"
            fillOpacity="0.7"
          />
          <path
            d="M-4 12 C 4 18, 6 28, -2 34 C -12 30, -14 20, -10 14 C -8 10, -2 10, -4 12 Z"
            fill="#E9C8CC"
            fillOpacity="0.8"
          />
        </g>

        <circle cx="0" cy="-2" r="6" fill="#7E8D72" />
        <path
          d="M-2 -6 L 2 -6 L 4 -2 L 2 2 L -2 2 L -4 -2 Z"
          fill="#6D7D58"
          opacity="0.6"
        />
      </g>

      <g
        transform="translate(152 282)"
        stroke="#6D7D58"
        strokeWidth="1"
        strokeLinecap="round"
      >
        <path d="M0 0 C 6 -10, 14 -14, 22 -14" opacity="0.7" />
        <path d="M22 -14 C 26 -16, 30 -14, 32 -10" opacity="0.7" />
      </g>
    </svg>
  );
}
