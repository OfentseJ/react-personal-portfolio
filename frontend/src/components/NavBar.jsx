import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <nav className="p-5 h-18 md:flex md:items-center md:justify-between fixed w-full endless-river shadow-2xl">
      <div className="flex justify-between items-center">
        <span className="font-bold text-2xl cursor-pointer">Ofentse.</span>
        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={() => setOpen(!open)}
        >
          <i className={open ? "ri-close-large-line" : "ri-menu-line"}></i>
        </span>
      </div>
      <ul
        className={`
    md:flex md:items-center md:static md:w-auto md:opacity-100
    absolute left-0 w-full py-4 pl-7 transition-all ease-in duration-500 mt-[-8px]

    ${
      open
        ? "top-[80px] opacity-100 endless-river shadow-2xl flex flex-col items-center gap-2"
        : "top-[-400px] opacity-0 bg-transparent shadow-none"
    }

    md:top-auto md:opacity-100 md:shadow-none md:bg-transparent md:flex-row md:gap-6
  `}
        onClick={() => setOpen(false)}
      >
        <li>
          <button
            onClick={toggleTheme}
            className="pr-2 pt-2 cursor-pointer hover:text-[#43cea2] duration-500"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </li>
        <li>
          <a href="#about-me" className="text-xl duration-500 mx-4">
            About Me
          </a>
        </li>
        <li>
          <a href="#education" className="text-xl duration-500 mx-4">
            Education
          </a>
        </li>
        <li>
          <a href="#certifications" className="text-xl duration-500 mx-4">
            Certifications
          </a>
        </li>
        <li>
          <a href="#projects" className="text-xl duration-500 mx-4">
            Projects
          </a>
        </li>
        <li>
          <a href="#contacts" className="text-xl duration-500 mx-4">
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
}
