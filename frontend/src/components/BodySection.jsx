import image from "../assets/static/IMG_2189.JPEG";

export default function BodySection() {
  return (
    <>
      <section className="pt-30 endless-river min-h-[100vh] space-y-3 flex items-center flex-col">
        <img src={image} className="rounded-full size-60 mb-8 " />
        <div className="font-bold text-zinc-100 text-xl flex items-center flex-col ">
          <p>Hey😁👋, I'm Ofentse Makhutja</p>
          <p className="text-[#43cea2]">Web Developer</p>
        </div>
      </section>
      <section
        id="about-me"
        className="endless-river text-zinc-100 items-center space-y-8"
      >
        <div className="flex flex-col px-10">
          <h1 className="font-bold text-2xl pb-4">About Me</h1>
          <div className=" p-6 rounded-2xl border-2 max-w-4xl m-auto">
            <p>
              I am a dedicated and enthusiastic programmer seeking a practical
              opportunity to apply my knowledge of programming and
              problem-solving in a professional setting. With proficiency in
              Java and a strong willingness to learn emerging technologies, I am
              particularly drawn to the fields of web and software development.
              I am committed to making meaningful contributions to projects,
              collaborating with experienced professionals, and continuously
              advancing my technical and professional skills in a dynamic work
              environment.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 ml-12 max-w-lg ">
          <div>
            <h3>Frontend</h3>
            <ul>
              <li>
                <i class="ri-html5-fill"></i> HTML
              </li>
              <li>
                <i class="ri-css3-fill"></i> CSS
              </li>
              <li>
                <i class="ri-reactjs-fill"></i> React
              </li>
              <li>
                <i class="ri-tailwind-css-fill"></i> Tailwind
              </li>
            </ul>
          </div>
          <div>
            <h3>Backend</h3>
            <ul>
              <li>
                <i class="ri-java-fill"></i> Java
              </li>
              <li>
                <i class="ri-javascript-fill"></i> JavaScript
              </li>
              <li>
                <i class="ri-nodejs-fill"></i>
                Node.js
              </li>
            </ul>
          </div>
          <div>
            <h3>Database</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
              <li>SQLite</li>
            </ul>
          </div>
          <div>
            <h3>Soft Skills</h3>
            <ul>
              <li>Time management</li>
              <li>Interpersonal</li>
              <li>Good Communication</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
