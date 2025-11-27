import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "PDF Book Reader",
      description:
        "PDF book reader. Built using Node.js, React and mysql to store the books. Features CRUD operations to Books.",
      tech: ["React", "Tailwind", "Node.js"],
      link: "https://github.com/OfentseJ/pdf-book-reader",
      demo: "https://pdf-reader-frontend.onrender.com/",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Banking App Backend",
      description:
        "A backend system that performs CRUD operations on users. User information is stored in a JSON file as the database.",
      tech: ["Node.js", "Express", "JSON"],
      link: "https://github.com/OfentseJ/node-react-banking-app",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Rick & Morty API",
      description:
        "View characters found on the Rick & Morty TV Series. Interactive character browser with search and filtering.",
      tech: ["JavaScript", "API", "HTML", "CSS"],
      link: "https://github.com/OfentseJ/rick---morty-characters",
      demo: "https://ofentsej.github.io/rick---morty-characters/",
      color: "from-green-400 to-green-600",
    },
    {
      title: "FPL Squad Craft",
      description:
        "Get live statistics, current transfer trends, including a squad builder. The Squad builder allows users to build or import their current squard from fpl.",
      tech: ["React", "Vite", "Api"],
      link: "https://github.com/OfentseJ/fpl-squad-craft.git",
      demo: "https://ofentsej.github.io/fpl-squad-craft/",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "All-Goods",
      description:
        "E-Commerce website built using Java, Glassfish and Derby for the database. Features product management and user authentication.",
      tech: ["Java", "JSP", "Derby", "Glassfish"],
      link: "https://github.com/OfentseJ/all-goods-homework",
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Thriftville",
      description:
        "E-commerce store for thrift shopping. Built using Django with HTML and CSS. Features product listings and cart functionality.",
      tech: ["Django", "Python", "HTML", "CSS"],
      link: "https://github.com/OfentseJ/Thriftville.git",
      color: "from-pink-400 to-pink-600",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          My <span className="text-[#43cea2]">Projects</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects showcasing my skills in web
          development, APIs, and full-stack applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-[#43cea2] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-[#43cea2] transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-[#43cea2]/10 text-[#43cea2] rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-[#43cea2] hover:text-white transition-all duration-300 group/btn"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">Code</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#43cea2] text-white rounded-lg hover:bg-[#185a9d] transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
