import image from "../assets/static/IMG_2189.JPEG";

export default function BodySection() {
  return (
    <>
      <section className="pt-30 endless-river min-h-[100vh] space-y-3 flex items-center flex-col">
        <img src={image} className="rounded-full size-60 mb-8 " />
        <div className="font-bold text-xl flex items-center flex-col ">
          <p>Hey😁👋, I'm Ofentse Makhutja</p>
          <p className="text-[#43cea2]">Programmer</p>
        </div>
      </section>
      <section id="about-me" className="endless-river items-center space-y-8">
        <div className="flex flex-col px-10">
          <h1>About Me</h1>
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
      <section id="education" className=" endless-river p-10">
        <h1>Education</h1>
        <div className="flex flex-wrap flex-row gap-8 items-center justify-center mt-4">
          <div className="borderedDivs">
            <h3>Diploma in Computer Science</h3>
            <p>Tshwane University of Technology</p>
            <p>2022-2025</p>
            <p>Currently Studying</p>
          </div>
          <div className="borderedDivs">
            <h3>National Senior Certificate</h3>
            <p>Allanridge Secondary School</p>
            <p>Math, Physical Sci, Life Sci, Geo, Eng, Afr</p>
            <p>2017 - 2021</p>
          </div>
          <div className="borderedDivs">
            <h3>Business Support Systems Level 5</h3>
            <p>Dynamic DNA</p>
            <p>Learnership for work readiness program</p>
            <p>2024 - 2025</p>
          </div>
        </div>
      </section>
      <section id="certifications" className="endless-river px-10">
        <h1>Certifications</h1>
        <div className="flex justify-center items-center pt-4">
          <div className="borderedDivs mb-10 w-5xl flex gap-6">
            <div>
              <h3>Microsoft</h3>
              <div className="flex flex-col ml-4">
                <a
                  href="https://learn.microsoft.com/api/credentials/share/en-us/OfentseMakhutja-8865/680FECAF141D66F9?sharingId"
                  target="_blank"
                >
                  - AZ-900 <i class="ri-external-link-line"></i>
                </a>
                <a
                  href=" https://learn.microsoft.com/api/credentials/share/en-us/OfentseMakhutja-8865/43E1BBFB203FF580?sharingId "
                  target="_blank"
                >
                  - DP-900 <i class="ri-external-link-line"></i>
                </a>
              </div>
            </div>
            <div>
              <h3>freeCodeCamp</h3>
              <div className="flex flex-col ml-4">
                <a
                  href="https://www.freecodecamp.org/certification/ofentsemakhutja/responsive-web-design"
                  target="_blank"
                >
                  - Responsive Web Design <i class="ri-external-link-line"></i>
                </a>
                <a
                  href="https://www.freecodecamp.org/certification/ofentsemakhutja/javascript-algorithms-and-data-structures-v8"
                  target="_blank"
                >
                  - JavaScript Algoriths and Data Structuse{" "}
                  <i class="ri-external-link-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
