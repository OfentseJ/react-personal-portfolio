export default function NavBar() {
  return (
    <>
      <div className="endless-river flex justify-between p-4 min-w-screen fixed shadow-2xl text-zinc-100 items-center">
        <h2 className="font-bold text-2xl">Ofentse.</h2>
        <nav className="flex gap-6 pr-2 font-medium">
          <a href="#about-me" className="hover:border-b-zinc-400">
            About Me
          </a>
          <a href="#education" className="hover:border-b-zinc-400>">
            Education
          </a>
          <a href="#certifications" className="hover:border-b-zinc-400">
            Certications
          </a>
          <a href="#projects" className="hover:border-b-zinc-400">
            Projects
          </a>
          <a href="#" className="hover:border-b-zinc-400">
            Contacts
          </a>
        </nav>
      </div>
    </>
  );
}
