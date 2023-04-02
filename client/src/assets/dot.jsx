export const Dot = ({ initial, final, width = 6, height = 6 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 6 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="3"
        cy="3"
        r="3"
        fill={`url(#paint0_linear_1_942_${initial}_${final})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_1_942_${initial}_${final}`}
          x1="5.96107"
          y1="0.0778518"
          x2="0.0389261"
          y2="0.0778518"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={initial} />
          <stop offset="1" stopColor={final} />
        </linearGradient>
      </defs>
    </svg>
  );
};
