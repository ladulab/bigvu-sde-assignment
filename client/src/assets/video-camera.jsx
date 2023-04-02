export const VideoCamera = ({
  width = "20",
  height = "12",
  fill = "white",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_813_4"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={width}
        height={height}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.3415 2C13.3415 0.89543 12.4117 0 11.2648 0H2.95819C1.81128 0 0.881531 0.89543 0.881531 2V10C0.881531 11.1046 1.81128 12 2.95819 12H11.2648C12.4117 12 13.3415 11.1046 13.3415 10V2ZM19.5714 3C19.5714 2.44772 19.1066 2 18.5331 2H17.4948C16.3479 2 15.4181 2.89543 15.4181 4V8C15.4181 9.10457 16.3479 10 17.4948 10H18.5331C19.1066 10 19.5714 9.55229 19.5714 9V3Z"
          fill={fill}
        />
      </mask>
      <g mask="url(#mask0_813_4)">
        <rect x="-2.23346" y="-6" width="24.9199" height="24" fill={fill} />
      </g>
    </svg>
  );
};
