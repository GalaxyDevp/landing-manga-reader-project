import Card from "../../components/card";
import checkIcon from "../../assets/icons/check.jsx";
import StarIcon from "../../assets/icons/star.jsx";
const Plans = () => {
  const plansList = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for beginners",
      features: [
        "Access to 1,000+ free manga",
        "Read on 1 device",
        "Ad-supported reading",
        "Basic recommendations",
        "Community access",
      ],
      popular: false,
      buttonText: "Get Started",
    },
    {
      name: "Premium",
      price: "$9.99",
      features: [
        "Access to 50,000+ manga titles",
        "Read on unlimited devices",
        "Ad-free experience",
        "Download up to 100 chapters",
        "Advanced recommendations",
        "Early access to new releases",
        "Priority customer support",
      ],
      popular: true,
      buttonText: "Start Free Trial",
    },
    {
      name: "Ultimate",
      price: "$14.99",
      features: [
        "All Premium features",
        "Unlimited downloads",
        "Exclusive titles and simulpubs",
        "High-definition pages",
        "Family sharing (up to 5 users)",
        "Exclusive community perks",
      ],
      popular: false,
      buttonText: "Start Free Trial",
    },
  ];
  return (
    <section id="plans" className="bg-pink-50/60 scroll-mt-5">
      <div className="layout py-22 flex flex-col justify-center items-center dark:bg-gray-900/90 dark:text-white">
        <div className="flex flex-col items-center text-center tracking-wide">
          <h1 className="text-[40px] font-semibold">Choose your plan</h1>
          <p className="text-[20px] text-gray-500 dark:text-gray-300">
            Start with a 14-day free trial. No credit card required. Cancel
            anytime.
          </p>
        </div>
        <div className="grid grid-cols-12 gap-4 lg:gap-6 py-12 px-0 lg:px-8">
          {plansList.map((plan) => (
            <div className="col-span-12 md:col-span-4">
              <Card
                className={
                  plan.popular
                    ? "border-4 border-violet-600 transform md:scale-105 dark:border-violet-500"
                    : "dark:border-gray-700 dark:border-1"
                }
              >
                <div key={plan.name}>
                  {plan.popular && (
                    <div className="bg-violet-600 text-white px-3 py-1 rounded-full w-fit dark:bg-violet-500">
                      <p className="text-[14px] flex items-center gap-2">
                        <StarIcon fill="white" width={18} height={18} />
                        Most Popular
                      </p>
                    </div>
                  )}
                  <h2 className="text-[26px]">{plan.name}</h2>
                  <p>
                    <span className="text-[36px]">{plan.price}</span>
                    <span className="text-[14px] text-gray-500">/month</span>
                  </p>
                  <p className="text-[14px] text-gray-500">
                    {plan.description}
                  </p>
                  <div className="py-6">
                    <button
                      className={`transition 
                      ${
                        plan.popular
                          ? "bg-violet-600 text-white hover:bg-violet-800"
                          : "border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white dark:border-violet-500 dark:text-violet-500 dark:hover:bg-violet-600 dark:hover:border-violet-600"
                      } 
                      px-4 py-3 rounded-lg w-full font-semibold`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                  <ul className="">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2 py-2">
                        <img src={checkIcon} alt="" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <p className="text-[14px] text-gray-500 dark:text-gray-300 text-center">
          All plans include a 14-day money-back guarantee. Promotion valid for
          new users only. <a href="#">See terms</a>
        </p>
      </div>
    </section>
  );
};
export default Plans;
