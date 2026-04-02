import LockIcon from "../../assets/icons/lock";
import MailIcon from "../../assets/icons/mail";
import Card from "../../components/card";
import SocialMediaSignIn from "./socialMediaSignIn";

const SignInCard = () => {
  return (
    <Card className="flex">
      <div className="tracking-wide dark:text-white">
        <h1 className="text-[28px] font-semibold text-center">Welcome back</h1>
        <p className="text-center">Sign in to your account</p>
        <div>
          <form action="" className="flex flex-col gap-y-4 py-6">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name">Email address</label>
              <div className="relative">
                <MailIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-gray-400 text-gray-500" />
                <input
                  className="input-auth bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  type="email"
                  placeholder="youremail@example.com"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Password</label>
              <div className="relative">
                <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-gray-400 text-gray-500" />
                <input
                  className="input-auth bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  type="password"
                  placeholder="youremail@example.com"
                />
              </div>
            </div>
            <div className="flex flex-row justify-between">
              {" "}
              <div className="flex items-center gap-x-2 text-sm">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms" className="text-sm">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-violet-500 hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-600"
              >
                Forgot password?
              </a>
            </div>

            <button
              className="rounded-xl py-2 px-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 dark:from-orange-400 dark:via-pink-400 dark:to-purple-400 transition-colors duration-300 dark:hover:from-orange-600 dark:hover:to-purple-600 shadow-lg hover:shadow-xl"
              type="submit"
            >
              <p className="text-white">Sign In</p>
            </button>
            <p className="text-sm text-center">
              Don't have an account?{" "}
              <a
                href="#"
                className="text-violet-500 font-semibold hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-600"
              >
                Register for free
              </a>
            </p>
          </form>
          <div className="flex flex-col gap-4 border-t-1 border-gray-200 pt-4 justify-center items-center">
            <p className="text-sm">
              <span className="text-gray-500 dark:text-gray-400">
                Or continue with
              </span>
            </p>
            <div>
              <SocialMediaSignIn />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
export default SignInCard;
