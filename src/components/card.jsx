const Card = ({
  bgColor = "bg-white",
  children,
  className,
}) => {
  return (
    <div
      className={`transition-colors duration-300 ${bgColor}  dark:bg-gray-800 rounded-3xl p-4 lg:py-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
