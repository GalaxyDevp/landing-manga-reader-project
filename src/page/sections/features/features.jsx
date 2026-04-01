import smartphone from "../../../assets/icons/smartphone.svg";
import download from "../../../assets/icons/download.svg";
import sparkles from "../../../assets/icons/sparkles.svg";
import bookmarked from "../../../assets/icons/book-marked.svg";
import users from "../../../assets/icons/users.svg";
import zap from "../../../assets/icons/zap.svg";
import Card from "../../../components/card";

const Features = () => {
  const features = [
    {
      icon: smartphone,
      title: "Read Anywhere",
      description:
        "Access your favorite manga on any device. Start on your phone, continue on your tablet, and finish on your laptop.",
    },
    {
      icon: download,
      title: "Offline Reading",
      description:
        "Download your favorite chapters and read them even without an internet connection.",
    },
    {
      icon: sparkles,
      title: "Smart Recommendations",
      description:
        "Discover new manga based on your reading history and preferences.",
    },
    {
      icon: bookmarked,
      title: "Custom Libraries",
      description:
        "Organize your collection with personalized reading lists and bookmarks",
    },
    {
      icon: users,
      title: "Community Features",
      description:
        "Connect with fellow readers, share reviews and join discussions",
    },
    {
      icon: zap,
      title: "Instant Updates",
      description:
        "Get notified when new chapters of your favorite manga are released",
    },
  ];
  return (
    <section>
      <div className="layout py-12 md:py-10 lg:py-34 2xl:py-44">
        <div className="pb-20 2xl:pb-26">
          <h1 className="text-[34px] font-bold text-balance text-center">
            Everything you need to enjoy read manga
          </h1>
          <p className="text-[18px] leading-[28px] text-pretty text-center">
            Powerfull features designed for manga lovers, from casual readers to
            hardcore collectors.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-span-12 md:col-span-6 xl:col-span-4"
            >
              <Card bgColor="bg-gray-50" className="flex flex-col gap-2">
                <div className="bg-violet-600 rounded-lg p-2 w-fit">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="text-[18px] font-semibold">{feature.title}</h3>

                <p>{feature.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Features;
