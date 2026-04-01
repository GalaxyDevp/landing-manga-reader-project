import Card from "../../../components/card";

const Hero = () => {
  return (
    <section className="bg-violet-50 py-12 md:py-10 lg:pt-10 xl:pt-10 lg:pb-28 2xl:pb-50">
      <div className="grid grid-cols-12 pt-16 layout">
        <div className="col-span-12 md:col-span-7 xl:col-span-6 lg:pt-10 2xl:pt-20">
          <div className="text-[50px] leading-[55px] md:text-[70px] md:leading-[75px] font-semibold text-balance">
            <h1>Read unlimited manga, anytime, anywhere</h1>
          </div>

          <div className="">
            <p className="py-12 text-[18px] leading-[28px] text-pretty">
              Access thousands of manga titles with crystal-clear pages,
              personalized recommendations, and offline reading. Start your
              journey today.
            </p>
            <div className="flex justify-start gap-x-8">
              <button className="bg-violet-600 text-white rounded-xl py-3 px-6 hover:bg-violet-800">
                Try free trial
              </button>
              <button className="border border-2 border-violet-600 text-violet-600 flex py-3 px-6 gap-2 items-center justify-center rounded-xl hover:bg-violet-800 hover:text-white">
                View Plans
              </button>
            </div>
            <div className="flex flex-row items-center gap-4 pt-12">
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
        </div>
        <div className="col-span-12 md:col-span-5 xl:col-span-6  border"></div>
      </div>
    </section>
  );
};

export default Hero;
