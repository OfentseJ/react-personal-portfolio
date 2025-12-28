import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      provider: "Microsoft",
      certs: [
        {
          name: "AZ-900: Azure Fundamentals",
          link: "https://learn.microsoft.com/api/credentials/share/en-us/OfentseMakhutja-8865/680FECAF141D66F9?sharingId",
        },
        {
          name: "DP-900: Azure Data Fundamentals",
          link: "https://learn.microsoft.com/api/credentials/share/en-us/OfentseMakhutja-8865/43E1BBFB203FF580?sharingId",
        },
      ],
    },
    {
      provider: "freeCodeCamp",
      certs: [
        {
          name: "Responsive Web Design",
          link: "https://www.freecodecamp.org/certification/ofentsemakhutja/responsive-web-design",
        },
        {
          name: "JavaScript Algorithms and Data Structures",
          link: "https://www.freecodecamp.org/certification/ofentsemakhutja/javascript-algorithms-and-data-structures-v8",
        },
      ],
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-[#43cea2]">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((provider, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 hover:border-[#43cea2] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#43cea2]/10 text-[#43cea2] group-hover:bg-[#43cea2] group-hover:text-white transition-all duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold group-hover:text-[#43cea2] transition-colors">
                  {provider.provider}
                </h3>
              </div>

              <div className="space-y-4">
                {provider.certs.map((cert, i) => (
                  <a
                    key={i}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group/cert"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#43cea2] mt-2 flex-shrink-0"></span>
                    <span className="flex-1 text-gray-700 dark:text-gray-300 group-hover/cert:text-[#43cea2] transition-colors">
                      {cert.name}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover/cert:text-[#43cea2] transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
