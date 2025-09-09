import image from "../assets/static/IMG_2189.JPEG";
import cv from "../assets/docs/Ofentse CV.pdf";
import ContactForm from "./ContactForm";
import { useForm, ValidationError } from "@formspree/react";

export default function BodySection() {
  const [state, handleSubmit] = useForm("xjkepzlb");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <section className="endless-river pt-30 min-h-[100vh] space-y-3 flex items-center flex-col">
        <img src={image} className="rounded-full size-60 mb-8 " />
        <div className="font-bold text-xl flex items-center flex-col ">
          <p>Hey😁👋, I'm Ofentse Makhutja</p>
          <p className="text-[#43cea2]">Full Stack Developer</p>
        </div>
      </section>
      <section
        id="about-me"
        className="endless-river items-center space-y-8 py-20"
      >
        <div className="flex flex-col px-10 ">
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
      <section id="education" className="endless-river px-10 py-20">
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
      <section id="certifications" className="endless-river px-10 py-20 ">
        <h1>Certifications</h1>
        <div className="flex justify-center items-center pt-4">
          <div className="borderedDivs mb-10 w-5xl flex gap-6">
            <div>
              <h3>Microsoft</h3>
              <div className="flex flex-col ml-4">
                <span>
                  - AZ-900
                  <a
                    href="https://learn.microsoft.com/api/credentials/share/en-us/OfentseMakhutja-8865/680FECAF141D66F9?sharingId"
                    target="_blank"
                  >
                    {" "}
                    <i class="ri-external-link-line"></i>
                  </a>
                </span>
                <span>
                  - DP-900
                  <a
                    href=" https://learn.microsoft.com/api/credentials/share/en-us/OfentseMakhutja-8865/43E1BBFB203FF580?sharingId "
                    target="_blank"
                  >
                    {" "}
                    <i class="ri-external-link-line"></i>
                  </a>
                </span>
              </div>
            </div>
            <div>
              <h3>freeCodeCamp</h3>
              <div className="flex flex-col ml-4">
                <span>
                  - Responsive Web Design
                  <a
                    href="https://www.freecodecamp.org/certification/ofentsemakhutja/responsive-web-design"
                    target="_blank"
                  >
                    {" "}
                    <i class="ri-external-link-line"></i>
                  </a>
                </span>
                <span>
                  - JavaScript Algoriths and Data Structuse
                  <a
                    href="https://www.freecodecamp.org/certification/ofentsemakhutja/javascript-algorithms-and-data-structures-v8"
                    target="_blank"
                  >
                    {" "}
                    <i class="ri-external-link-line"></i>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="endless-river px-10 py-20">
        <h1>Projects</h1>
        <div className="flex gap-4 flex-wrap items-center justify-center pt-6">
          <div className="borderedDivs w-sm">
            <h3>Banking App Backend</h3>
            <p>
              A backend system that performs CRUD operations on users. User
              information is stored in a JSON file as the database.
            </p>
            <a
              href="https://github.com/OfentseJ/node-react-banking-app"
              target="_blank"
            >
              Click here to view
            </a>
          </div>
          <div className="borderedDivs w-sm">
            <h3>Rick & Morty API</h3>
            <p>View characters found on the Rick & Morty TV Series.</p>
            <a
              href="https://ofentsej.github.io/rick---morty-characters/"
              target="_blank"
            >
              Click here to view
            </a>
          </div>
          <div className="borderedDivs w-sm">
            <h3>Technical Documentation</h3>
            <p>Python API Documentation. Built using html and css.</p>
            <a
              href="https://github.com/OfentseJ/technical-documentation.git"
              target="_blank"
            >
              Click here to view
            </a>
          </div>
          <div className="borderedDivs w-sm">
            <h3>All-Goods</h3>
            <p>
              E-Commerce website Built using Java, Glassfish and Derby for the
              database.
            </p>
            <a
              href="https://github.com/OfentseJ/all-goods-homework"
              target="_blank"
            >
              Click here to view
            </a>
          </div>
          <div className="borderedDivs w-sm">
            <h3>Thriftville</h3>
            <p>E-commerce store. Bulit using django, html and css.</p>
            <a
              href="https://github.com/OfentseJ/Thriftville.git"
              target="_blank"
            >
              Click here to view
            </a>
          </div>
        </div>
      </section>
      <section id="contacts" className="px-10 py-20">
        <h1>Contacts</h1>
        <div className="pl-10 pt-10 flex flex-col items-center justify-center">
          <h2 className="font-bold text-2xl">Send me a Message</h2>
          <ContactForm />
          <h2 className="pt-10">Want to work together?</h2>
          <p className="text-[#43cea2] pb-4">Contact Me:</p>
          <div class="flex flex-col">
            <a
              href="mailto:ofentsemakhutja@icloud.com"
              target="_blank"
              id="profile-link"
            >
              <i class="ri-mail-line"></i> ofentsemakhutja@icloud.com
            </a>
            <a
              href="https://www.linkedin.com/in/ofentse-makhutja-13b4112a2/"
              target="_blank"
              id="profile-link"
            >
              <i class="ri-linkedin-fill"></i> LinkedIn
            </a>
            <a
              href="https://github.com/OfentseJ"
              target="_blank"
              id="profile-link"
            >
              <i class="ri-github-fill"></i> github
            </a>
            <a href="tel:061 446 7573" target="_blank" id="profile-link">
              <i class="ri-phone-fill"></i> 061 446 7573
            </a>
            <a href={cv} download class="download-btn" target="_blank">
              <i class="ri-file-download-line"></i> Download CV
            </a>
          </div>
        </div>
      </section>
      <footer className="endless-river flex justify-center items-center p-4 border-t-2">
        <p>
          <i className="ri-copyright-line"></i>2025 Ofentse Makhutja. All rights
          reserved
        </p>
      </footer>
    </>
  );
}
