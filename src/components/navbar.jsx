import menu from "../assets/icons/menu.svg";
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
    <nav className="fixed w-full layout backdrop-blur-md">
      <div className="flex flex-row items-center justify-between">
        <div className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-semibold line-height-[30px] text-[36px]">
          Mangaus
        </div>
        <div className="flex flex-row gap-4 hidden md:flex">
          {menuList.map((item) => (
            <a className="hover:text-violet-600" href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="hover:text-violet-600">Sign In</button>
          <button className="bg-violet-600 text-white rounded-lg p-2 hover:bg-violet-800">
            Sign Up
          </button>
        </div>
        <button className="hidden">
          <img src={menu} alt="menu" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
