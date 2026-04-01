const CheckIcon = ({
  color = "white",
  width = 24,
  height = 24,
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-check-icon lucide-check"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};
export default CheckIcon;
