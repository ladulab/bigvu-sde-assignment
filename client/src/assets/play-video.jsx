export const PlayVideo = ({ width = 20, height = 20, stroke = "#253658" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="9.25" stroke={stroke} strokeWidth={1.5} />
      <path
        d="M14.1875 10.3248L8.1875 13.7889C7.9375 13.9332 7.625 13.7528 7.625 13.4641L7.625 6.5359C7.625 6.24722 7.9375 6.0668 8.1875 6.21114L14.1875 9.67524C14.4375 9.81958 14.4375 10.1804 14.1875 10.3248Z"
        stroke={stroke}
        strokeWidth={1.25}
        strokeLinejoin={"round"}
      />
    </svg>
  );
};
