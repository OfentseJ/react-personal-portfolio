import { GraduationCap, Calendar, BookOpen } from "lucide-react";

export default function Education() {
  const education = [
    {
      degree: "Diploma in Computer Science",
      institution: "Tshwane University of Technology",
      period: "2022 - 2025",
      status: "Currently Studying",
      icon: <GraduationCap className="w-8 h-8" />,
    },
    {
      degree: "National Senior Certificate",
      institution: "Allanridge Secondary School",
      period: "2017 - 2021",
      subjects: "Math, Physical Sci, Life Sci, Geography, English, Afrikaans",
      icon: <BookOpen className="w-8 h-8" />,
    },
    {
      degree: "Business Support Systems Level 5",
      institution: "Dynamic DNA",
      period: "2024 - 2025",
      status: "Learnership for work readiness program",
      icon: <GraduationCap className="w-8 h-8" />,
    },
  ];

  return (
    <section id="education" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-[#43cea2]">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-[#43cea2] hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-4">
                <div className="inline-flex p-3 rounded-lg bg-[#43cea2]/10 text-[#43cea2] group-hover:bg-[#43cea2] group-hover:text-white transition-all duration-300">
                  {edu.icon}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-[#43cea2] transition-colors">
                {edu.degree}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 font-medium mb-3">
                {edu.institution}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-3">
                <Calendar className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>

              {edu.subjects && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span className="font-semibold">Subjects:</span>{" "}
                  {edu.subjects}
                </p>
              )}

              {edu.status && (
                <p className="text-sm text-[#43cea2] font-medium">
                  {edu.status}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
