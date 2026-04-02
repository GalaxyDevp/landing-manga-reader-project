import AppleIcon from "../../assets/icons/apple";
import GoogleIcon from "../../assets/icons/google";
import LockIcon from "../../assets/icons/lock";
import MailIcon from "../../assets/icons/mail";
import UserIcon from "../../assets/icons/user";
import Card from "../../components/card";
import SocialMediaSignIn from "./socialMediaSignIn";

const RegisterCard = () => {
  return (
    <Card className="flex">
      <div className="tracking-wide dark:text-white">
        <h1 className="text-[28px] font-semibold text-center">
          Create your account
        </h1>
        <p className="text-center">start your manga journey today</p>
        <div>
          <form
            action=""
            className="flex flex-col gap-y-4 py-6"
            autoComplete="off"
          >
            <div className="flex flex-col gap-y-2">
              <label htmlFor="name">Full name</label>
              <div className="relative">
                <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-gray-400 text-gray-500" />
                <input
                  className="input-auth bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  type="text"
                  placeholder="Jane Doe"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email">Email address</label>
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
              <label htmlFor="password">Password</label>
              <div className="relative">
                <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-gray-400 text-gray-500" />
                <input
                  className="input-auth bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="confirm-password">Confirm password</label>
              <div className="relative">
                <LockIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 dark:text-gray-400 text-gray-500" />
                <input
                  className="input-auth bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Confirm password"
                />
              </div>
            </div>
            <div className="flex items-center gap-x-2 text-sm">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-violet-500 font-semibold hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-600"
                >
                  Terms of Service
                </a>{" "}
                and
                <a
                  href="#"
                  className="text-violet-500 font-semibold hover:text-violet-700 dark:text-violet-400 dark:hover:text-violet-600"
                >
                  {" "}
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              className="rounded-xl py-2 px-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 dark:from-orange-400 dark:via-pink-400 dark:to-purple-400 transition-colors duration-300 dark:hover:from-orange-600 dark:hover:to-purple-600 shadow-lg hover:shadow-xl"
              type="submit"
            >
              <p className="text-white">Sign In</p>
            </button>
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

export default RegisterCard;
