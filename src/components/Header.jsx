import LogoLight from "/images/logo-light.svg";
import LogoDark from "/images/logo-dark.svg";
import SunIcon from "/images/icon-sun.svg";
import MoonIcon from "/images/icon-moon.svg";

const Header = ({ onToggleTheme }) => {
  return (
    <section className="flex items-center justify-between py-2 px-3 bg-Neutral-0 dark:bg-Neutral-800 rounded-[10px] shadow-md">
      <div>
        <img src={LogoLight} alt="logo" className="block dark:hidden" />
        <img src={LogoDark} alt="Logo" className="hidden dark:block" />
      </div>

      <div>
        {/* Light Theme Button */}
        <button
          aria-label="Switch to dark mode"
          className="block dark:hidden p-3.5 bg-Neutral-100 rounded-xl cursor-pointer"
          onClick={onToggleTheme}
        >
          <img
            src={MoonIcon}
            alt=""
            className="h-[22px] w-[22px]"
            aria-hidden="true"
          />
        </button>

        {/* Dark Theme Button */}

        <button
          aria-label="Switch to light mode"
          className=" hidden dark:block p-3.5 bg-Neutral-700 rounded-md cursor-pointer"
          onClick={onToggleTheme}
        >
          <img
            src={SunIcon}
            alt="Switch to light mode"
            className=" h-5 w-5 md:h-[22px] md:w-[22px] hidden dark:block"
          />
        </button>
      </div>
    </section>
  );
};

export default Header;
