import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-5 h-18 shadow-2xl md:flex md:items-center md:justify-between fixed w-full">
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
        className={`md:flex md:items-center md:opacity-100 md:static
              absolute left-0 w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7
              transition-all ease-in duration-500
              ${open ? "top-[80px] opacity-100" : "top-[-400px] opacity-0"}`}
      >
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
