import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "CYBAUG",
    position: "Software Engineer Intern",
    location: "Pretoria, Gauteng",
    period: "Aug 2025 - Jan 2026",
    description: [
      "Developed web applications using React, Laravel and Tailwind CSS.",
      "Collaborated with cross-functional teams to deliver high-quality software.",
      "Optimized front-end performance, reducing load times by 20%.",
    ],
  },
  {
    company: "Dynamic DNA",
    position: "Learnership program",
    location: "Randburg, Gauteng",
    period: "Aug 2024 - July 2025",
    description: [
      "Completed a comprehensive ICT learnership focused on systems support and network architecture.",
      "Set up local networks (LAN/WLAN), troubleshooting connectivity issues and ensuring secure data transmission.",
      "Collaborated on software development assessments, applying coding principles to solve practical business scenarios.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Work <span className="text-[#43cea2]">Experience</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          My professional journey and the roles where I've applied my technical
          skills.
        </p>

        {/* Timeline Container */}
        <div className="relative">
          {/* THE CONNECTING LINE: This div creates the continuous vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 group">
                {/* Timeline Dot: Positioned exactly on the line */}
                <div className="absolute -left-[7px] top-6 w-4 h-4 rounded-full bg-[#43cea2] shadow-[0_0_10px_#43cea2] z-10 transition-transform duration-300 group-hover:scale-125"></div>

                {/* The Card: Consistent with Projects.jsx */}
                <div className="rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 md:p-8 hover:border-[#43cea2] hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-white group-hover:text-[#43cea2] transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-[#185a9d] dark:text-[#43cea2] font-semibold mt-1">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Description: Consistent with About.jsx bullet style */}
                  <ul className="space-y-3">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-gray-600 dark:text-gray-400 flex items-start gap-3"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#43cea2] shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
