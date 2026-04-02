import haikyuu from "../assets/images/haikyuu.webp";
import hanako from "../assets/images/hanako.webp";
import kimetsu from "../assets/images/kimetsu.webp";

const HeroImg = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <img src={haikyuu} alt="" className="w-full h-auto rounded-xl" />
      <div className="flex flex-row gap-x-2 md:flex-col md:gap-2 lg:flex-row lg:gap-x-2">
        <img src={hanako} className="w-full h-auto rounded-xl" />
        <img src={kimetsu} className="w-full h-auto rounded-xl" />
      </div>
    </div>
  );
};
export default HeroImg;
