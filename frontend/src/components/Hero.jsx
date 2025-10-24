import { useState, useEffect } from "react";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import profile from "../assets/static/profile.JPEG";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div
            className={`flex-1 text-center md:text-left space-y-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-2">
              <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
                Hey 😁👋, I'm
              </p>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-[#43cea2] to-[#185a9d] bg-clip-text text-transparent">
                  Ofentse Makhutja
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                Full Stack Developer
              </h2>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Passionate about building modern, efficient, and interactive web
              applications. Currently pursuing my Diploma in Computer Science
              with a focus on full-stack development.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-[#43cea2] to-[#185a9d] text-white rounded-lg font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                View Projects
              </a>
              <a
                href="/Ofentse_CV.pdf"
                download
                className="px-6 py-3 border-2 border-[#43cea2] text-[#43cea2] rounded-lg font-medium hover:bg-[#43cea2] hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 pt-4">
              <a
                href="https://github.com/OfentseJ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#43cea2] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ofentse-makhutja-13b4112a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#43cea2] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:ofentsemakhutja@icloud.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#43cea2] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:0614467573"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-[#43cea2] hover:text-white transition-all duration-300 hover:scale-110"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#43cea2] to-[#185a9d] rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <img
                src={profile}
                alt="Ofentse Makhutja"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#43cea2] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#43cea2] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
