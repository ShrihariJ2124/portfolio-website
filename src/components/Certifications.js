import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Namaste JavaScript",
      organization: "NamasteDev.com",
      date: "2024",
      image: "/images/certificates/namaste-javascript.jpg",
      credentialId: "ND-JS-001",
      description:
        "Completed an in-depth JavaScript course covering core programming concepts, advanced ES6+ features, and deep insights into how JS works under the hood — taught by Akshay Saini.",
      category: "Frontend Development",
      status: "Active",
      verifyLink:
        "https://namastedev.com/shriharikodiyala13/certificates/namaste-javascript",
    },
    {
      title: "Namaste React",
      organization: "NamasteDev.com",
      date: "2024",
      image: "/images/certificates/namaste-react.jpg",
      credentialId: "ND-REACT-002",
      description:
        "Comprehensive React course focusing on modern component architecture, hooks, context API, and performance optimization for production-ready applications.",
      category: "Frontend Development",
      status: "Active",
      verifyLink:
        "https://namastedev.com/shriharikodiyala13/certificates/namaste-react",
    },
    {
      title: "Advanced DSA Live Training Program (C++)",
      organization: "GeeksforGeeks",
      date: "2023",
      image: "/images/certificates/gfg-dsa-cpp.jpg",
      credentialId: "GFG-DSA-003",
      description:
        "Live advanced training on Data Structures and Algorithms using C++, focusing on problem-solving, optimization, and competitive programming techniques.",
      category: "Programming",
      status: "Active",
      verifyLink:
        "https://media.geeksforgeeks.org/courses/certificates/7fde1f0a30f2059d9b1cb6a21858057e.pdf",
    },
    {
      title: "Programming in Java",
      organization: "NPTEL (IIT Certification)",
      date: "2023",
      image: "/images/certificates/nptel-java.jpg",
      credentialId: "NPTEL-JAVA-004",
      description:
        "Successfully completed the NPTEL-certified Java Programming course under IIT faculty, demonstrating strong understanding of OOPs and backend concepts.",
      category: "Backend Development",
      status: "Active",
      verifyLink:
        "https://archive.nptel.ac.in/content/noc/NOC23/SEM2/Ecertificates/106/noc23-cs74/Course/NPTEL23CS74S84910025020377297.pdf",
    },
    {
      title:
        "International Conference on Micro, Nano, and Smart Systems (ISSS 2024)",
      organization: "ISSS & IISc Bengaluru",
      date: "July 2024",
      image: "/images/certificates/isss-conference.jpg",
      credentialId: "ISSS-2024",
      description:
        "Among the top 24 teams selected across India to present research at the prestigious ISSS International Conference on Micro, Nano, and Smart Systems held at IISc Bengaluru. Gained exposure to groundbreaking advancements in nano and smart technologies.",
      category: "Research & Innovation",
      status: "Recognition",
    },
  ];

  const getCategoryColor = (category) => {
    const colors = {
      "Frontend Development": "from-purple-500 to-pink-500",
      "Backend Development": "from-green-500 to-emerald-500",
      "Programming": "from-blue-500 to-cyan-500",
      "Research & Innovation": "from-orange-500 to-yellow-500",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Verified certifications and academic achievements reflecting my
            dedication to learning, research, and professional excellence.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Status */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium border border-green-500/30">
                    {cert.status}
                  </span>
                </div>

                {/* Category */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(
                      cert.category
                    )} text-white rounded-full text-xs font-medium`}
                  >
                    {cert.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <div className="flex items-center space-x-2 mb-3">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="text-blue-400 font-medium">
                    {cert.organization}
                  </span>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>

                {/* Credential ID & Verify */}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    ID: {cert.credentialId}
                  </div>

                  {/* Remove verify button if ISSS */}
                  {cert.title.includes("ISSS") ? null : (
                    <a
                      href={cert.verifyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      Verify →
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
};

export default Certifications;
