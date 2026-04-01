import MenuIcon from "../assets/icons/menu.jsx";
import ThemeToggle from "./themeToggle";
const NavBar = () => {
  const menuList = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Features",
      href: "#",
    },
    {
      name: "Pricing",
      href: "#",
    },
    {
      name: "Reviews",
      href: "#",
    },
    {
      name: "FAQ",
      href: "#",
    },
  ];
  return (
    <nav className="fixed w-full layout z-50 backdrop-blur-md">
      <div className="flex flex-row items-center justify-between">
        <div className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold line-height-[30px] text-[36px]">
          Mangaus
        </div>
        <div className="flex flex-row gap-4 hidden">
          {menuList.map((item) => (
            <a
              className="hover:text-violet-600 dark:text-white hover:dark:text-violet-400"
              href={item.href}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <ThemeToggle />
          <button className="hover:text-violet-600 dark:text-white hover:dark:text-violet-400">
            Sign In
          </button>
          <button className="transition bg-violet-600 text-white rounded-lg py-2 px-4 hover:bg-violet-800">
            Sign Up
          </button>
        </div>
        <button className="hidden">
          <MenuIcon width={20} height={20} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
