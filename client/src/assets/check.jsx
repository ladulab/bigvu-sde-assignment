export const Check = ({ width = 20, height = 20, stroke = "#00D096" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 9.65803L7.22832 15L18 4"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      />
    </svg>
  );
};
