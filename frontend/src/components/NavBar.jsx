export default function NavBar() {
  return (
    <>
      <div className="bg-sky-600 flex justify-between p-4 min-w-screen fixed shadow-2xl text-zinc-100">
        <h1 className="font-bold text-2xl">Ofentse</h1>
        <div className="flex gap-4 pr-2 font-medium">
          <a href="#">About Me</a>
          <a href="#">Education</a>
          <a href="#">Certication</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
        </div>
      </div>
    </>
  );
}
