import image from "../assets/static/IMG_2189.JPEG";

export default function IntroSection() {
  return (
    <section className="pt-30 bg-sky-500 min-h-[100vh] space-y-3 flex items-center flex-col">
      <div className="mb-12 font-bold text-zinc-100 text-xl flex items-center flex-col">
        <p>Hey, I'm Ofentse Makhutja</p>
        <p>Software Developer</p>
      </div>
      <img src={image} className="rounded-full size-80" />
    </section>
  );
}
