import AppleIcon from "../../assets/icons/apple";
import GoogleIcon from "../../assets/icons/google";

const SocialMediaSignIn = () => {
  return (
    <div className="flex gap-4">
      <button className="btn-social border-gray-300 dark:border-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
        <p className="flex items-center gap-2">
          <GoogleIcon className="dark:fill-white w-5 h-5" />
          <span>Sign in with Google</span>
        </p>
      </button>
      <button className="btn-social border-gray-300 dark:border-gray-600 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
        <p className="flex items-center gap-2">
          <AppleIcon className="dark:fill-white w-5 h-5" />
          <span>Sign in with Apple</span>
        </p>
      </button>
    </div>
  );
};
export default SocialMediaSignIn;
