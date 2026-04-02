import { Link } from "react-router";

const CTA = () => {
  return (
    <section>
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 py-28 text-white">
        <div className="layout">
          <div className="flex flex-col items-center justify-center gap-2 tracking-wide">
            <h1 className="text-[40px] font-semibold text-center">
              Start you manga journey today
            </h1>
            <p className="text-[18px] text-center">
              Join millions of readers and get instant access to 50,000+ manga
              titles. 14-day free trial, cancel anytime.
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 tracking-wide py-8">
            <button className="bg-white font-semibold py-3 px-8 rounded-xl text-violet-600 dark:text-violet-400 dark:bg-gray-900 dark:hover:bg-gray-800">
              <Link to="/register">Start Free trial</Link>
            </button>
            <a
              href="#plans"
              className="border border-2 border-white font-semibold hover:border-violet-600 py-3 px-8 rounded-xl transition hover:bg-violet-600 hover:text-white"
            >
              View All Plans
            </a>
          </div>
          <div className="">
            <p className="text-center text-[14px] font-light">
              No credit card required • Cancel anytime • 14-day money-back
              guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
