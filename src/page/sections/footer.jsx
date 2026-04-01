import FacebookIcon from "../../assets/icons/facebook";
import TwitterIcon from "../../assets/icons/twitter";
import InstagramIcon from "../../assets/icons/instagram";
import YoutubeIcon from "../../assets/icons/youtube";

const Footer = () => {
  const productItems = [
    { title: "Features", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Library", href: "#" },
    { title: "Mobile App", href: "#" },
  ];
  const companyItems = [
    { title: "About", href: "#" },
    { title: "Blog", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Press Kit", href: "#" },
  ];
  const supportItems = [
    { title: "Help Center", href: "#" },
    { title: "Contact us", href: "#" },
    { title: "FAQ", href: "#" },
  ];
  const legalItems = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Cookie Policy", href: "#" },
  ];
  return (
    <footer className="bg-black text-white py-12">
      <div className="layout mx-auto px-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-4">
            <h3 className="text-[22px] font-semibold mb-4">Mangaus</h3>
            <p className="text-gray-400">
              Your ultimate destination for reading manga online. Thousands of
              titles, crystal-clear pages, and an amazing community.
            </p>
            <div className="flex gap-4 mt-4 ">
              <a
                href="#"
                className="bg-gray-900 rounded-full p-2 flex items-center transition hover:bg-violet-800"
              >
                <FacebookIcon className="fill-white" width={20} height={20} />
              </a>
              <a
                href="#"
                className="bg-gray-900 rounded-full p-2 flex items-center transition hover:bg-violet-800"
              >
                <TwitterIcon className="fill-white" width={20} height={20} />
              </a>
              <a
                href="#"
                className="bg-gray-900 rounded-full p-2 flex items-center transition hover:bg-violet-800"
              >
                <InstagramIcon className="fill-white" width={20} height={20} />
              </a>
              <a
                href="#"
                className="bg-gray-900 rounded-full p-2 flex items-center transition hover:bg-violet-800"
              >
                <YoutubeIcon className="fill-white" width={20} height={20} />
              </a>
            </div>
          </div>
          <div className="col-span-4 md:col-span-2 md:justify-self-end">
            <h3 className="text-[22px] font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {productItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-4 md:col-span-3 md:justify-self-end">
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-4 md:col-span-3 md:justify-self-end">
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              {supportItems.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-500">
              &copy; 2026 Manga Reader. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {legalItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-500 hover:text-white"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
