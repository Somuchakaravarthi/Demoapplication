import React from "react";

export const Weathericon = () => {
  return (
    <svg
      width="50"
      height="58"
      viewBox="0 0 318 318"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.931135"
        y="0.931135"
        width="315.965"
        height="315.965"
        rx="94.6654"
        stroke="url(#paint1_linear_101_15)"
        stroke-width="1.86227"
      />
      <g filter="url(#filter0_f_101_15)"></g>
      <path
        d="M228.19 159.1C228.19 197.257 197.257 228.19 159.1 228.19C120.943 228.19 90.0098 197.257 90.0098 159.1C90.0098 120.942 120.943 90.0097 159.1 90.0097C197.257 90.0097 228.19 120.942 228.19 159.1Z"
        fill="url(#paint2_linear_101_15)"
      />
      <defs>
        <filter
          id="filter0_f_101_15"
          x="71.387"
          y="262.58"
          width="175.053"
          height="39.1077"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="7.44908"
            result="effect1_foregroundBlur_101_15"
          />
        </filter>
        <radialGradient
          id="paint0_radial_101_15"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(158.914 158.914) rotate(90) scale(158.914)"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#D9E6EA" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_101_15"
          x1="30.4671"
          y1="38.8718"
          x2="312.025"
          y2="312.025"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_101_15"
          x1="186.932"
          y1="96.4063"
          x2="128.723"
          y2="228.175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFD88B" />
          <stop offset="1" stop-color="#FFA900" />
        </linearGradient>
      </defs>
    </svg>
  );
};
