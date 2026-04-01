import MoonIcon from "../assets/icons/moon";
import SunIcon from "../assets/icons/sun";
import { useThemeStore } from "../store/themeStore";

const ThemeToggle = () => {
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  const theme = useThemeStore((state) => state.theme);
  return (
    <button onClick={() => toggleTheme()}>
      <div className="transition bg-violet-600 p-2 rounded-full hover:bg-violet-800">
        {theme === "light" ? (
          <MoonIcon width={20} height={20} />
        ) : (
          <SunIcon width={20} height={20} />
        )}
      </div>
    </button>
  );
};
export default ThemeToggle;
