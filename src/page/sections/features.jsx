import Card from "../../components/card";
import BookMarkedIcon from "../../assets/icons/book-marked.jsx";
import SmartphoneIcon from "../../assets/icons/smartphone.jsx";
import DownloadIcon from "../../assets/icons/download.jsx";
import SparklesIcon from "../../assets/icons/sparkles.jsx";
import UsersIcon from "../../assets/icons/users.jsx";
import ZapIcon from "../../assets/icons/zap.jsx";

const Features = () => {
  const features = [
    {
      icon: <SmartphoneIcon />,
      title: "Read Anywhere",
      description:
        "Access your favorite manga on any device. Start on your phone, continue on your tablet, and finish on your laptop.",
    },
    {
      icon: <DownloadIcon />,
      title: "Offline Reading",
      description:
        "Download your favorite chapters and read them even without an internet connection.",
    },
    {
      icon: <SparklesIcon />,
      title: "Smart Recommendations",
      description:
        "Discover new manga based on your reading history and preferences.",
    },
    {
      icon: <BookMarkedIcon />,
      title: "Custom Libraries",
      description:
        "Organize your collection with personalized reading lists and bookmarks",
    },
    {
      icon: <UsersIcon />,
      title: "Community Features",
      description:
        "Connect with fellow readers, share reviews and join discussions",
    },
    {
      icon: <ZapIcon />,
      title: "Instant Updates",
      description:
        "Get notified when new chapters of your favorite manga are released",
    },
  ];
  return (
    <section>
      <div className="layout py-12 md:py-10 lg:py-34 2xl:py-40 dark:bg-gray-900">
        <div className="pb-20 2xl:pb-26 tracking-wide dark:text-white">
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
              <Card
                bgColor="bg-gray-50 hover:bg-violet-50"
                className="flex flex-col gap-2 dark:text-white dark:hover:bg-gray-700 dark:border-gray-700 dark:border-1 w-full h-full"
              >
                <div className="bg-violet-600 rounded-lg p-2 w-fit">
                  {feature.icon}
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
