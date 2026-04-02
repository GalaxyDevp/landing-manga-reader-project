import { Link } from "react-router";
import HeroImg from "../../components/heroImg";

const Hero = () => {
  return (
    <section className="bg-violet-50 py-12 md:py-10 lg:pt-10 xl:pt-10 lg:pb-28 2xl:pb-40 dark:bg-gray-900/90">
      <div className="grid grid-cols-12 pt-16 layout">
        <div className="col-span-12 md:col-span-7 xl:col-span-6 lg:pt-10 2xl:pt-20">
          <div className="tracking-wide">
            <h1 className="text-[50px] leading-[55px] md:text-[70px] md:leading-[75px] font-semibold text-balance dark:text-white">
              Read unlimited manga, anytime, anywhere
            </h1>
            <p className="py-12 text-[18px] leading-[28px] text-pretty dark:text-white">
              Access thousands of manga titles with crystal-clear pages,
              personalized recommendations, and offline reading. Start your
              journey today.
            </p>
          </div>
          <div className="flex justify-start gap-x-8 tracking-wide">
            <button className="transition text-white rounded-xl py-3 px-8 bg-violet-600 hover:bg-violet-800 font-semibold">
              <Link to="/register">Try free trial</Link>
            </button>
            <a
              href="#plans"
              className="transition flex py-3 px-8 gap-2 items-center justify-center rounded-xl font-semibold border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white dark:border-violet-500 dark:text-violet-500 dark:hover:bg-violet-600 dark:hover:border-violet-600"
            >
              View Plans
            </a>
          </div>
          <div className="flex flex-row items-center gap-4 pt-12 dark:text-white tracking-wide">
            <p className="flex flex-col">
              <span className="text-[26px]">10M+</span>
              <span>Active Readers</span>
            </p>
            <div className="w-px h-10 bg-gray-300"> </div>
            <p className="flex flex-col">
              <span className="text-[26px]">50K+</span>
              <span>Manga titles</span>
            </p>
          </div>
        </div>
        <div className="pt-10 md:pt-0 col-span-12 md:col-span-5 xl:col-span-6 place-self-center">
          <HeroImg />
        </div>
      </div>
    </section>
  );
};

export default Hero;
