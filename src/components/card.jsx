const Card = ({ bgColor = "bg-white", children, className }) => {
  return (
    <div
      className={`${bgColor} rounded-3xl p-4 lg:py-6 lg:px-8 h-full w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
