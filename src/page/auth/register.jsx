import "./styles.css";
import RegisterCard from "./registerCard";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 transition-colors duration-300 dark:from-gray-900/90 dark:via-orange-900/90 dark:to-purple-900/90">
      <div className="w-full flex justify-center items-center pt-22 2xl:pt-30">
        <RegisterCard />
      </div>
    </div>
  );
};
export default Register;
