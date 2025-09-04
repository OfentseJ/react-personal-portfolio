export default function NavBar() {
  return (
    <>
      <div className="endless-river flex justify-between p-4 min-w-screen fixed shadow-2xl text-zinc-100 items-center">
        <h2 className="font-bold text-2xl">Ofentse.</h2>
        <nav className="flex gap-6 pr-2 font-medium">
          <a href="#about-me" className="hover:border-b-2">
            About Me
          </a>
          <a href="#education" className="hover:border-b-2">
            Education
          </a>
          <a href="#certifications" className="hover:border-b-2">
            Certications
          </a>
          <a href="#" className="hover:border-b-2">
            Projects
          </a>
          <a href="#" className="hover:border-b-2">
            Contacts
          </a>
        </nav>
      </div>
    </>
  );
}
