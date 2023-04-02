export const PlayCircle = ({
  width = 48,
  height = 48,
  fill = "#253658",
  stroke = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" r="24" fill={fill} />
      <path
        d="M20 16L28 24L20 32"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
