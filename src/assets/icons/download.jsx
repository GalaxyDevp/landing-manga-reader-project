const DownloadIcon = ({
  color = "white",
  width = 24,
  height = 24,
  fill = "none",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="lucide lucide-download-icon lucide-download"
      fill={fill}
      height={height}
      stroke={color}
      width={width}
      viewBox="0 0 24 24"
    >
      <path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="m7 10 5 5 5-5" />
    </svg>
  );
};
export default DownloadIcon;
