import { Code, Database, Palette, Users } from "lucide-react";

export default function About() {
  const skills = [
    {
      category: "Frontend",
      icon: <Palette className="w-6 h-6" />,
      items: ["HTML", "CSS", "React", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: <Code className="w-6 h-6" />,
      items: ["Java", "JavaScript", "Node.js", "Laravel"],
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      items: ["PostgreSQL", "MongoDB", "MySQL"],
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-6 h-6" />,
      items: ["Time Management", "Interpersonal", "Communication", "Teamwork"],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-[#43cea2]">Me</span>
        </h2>

        {/* About Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I’m a Full Stack Developer with a strong background in Java,
              currently delving into web development to efficiently ship
              reliable, scalable code. I’ve built multiple full-stack, web-based
              projects and primarily work with the MERN stack.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-[#43cea2] hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-[#43cea2]/10 text-[#43cea2] group-hover:bg-[#43cea2] group-hover:text-white transition-all duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[#43cea2] transition-colors">
                  {skill.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-600 dark:text-gray-400 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#43cea2]"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
