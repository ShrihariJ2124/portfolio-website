import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const education = [
    {
      degree: "Master of Computer Applications - 8.67 CGPA",
      school: "Siddaganga Institute of Technology, Tumkur",
      year: "2022 - 2024",
      description: "Specialized in software engineering and web development",
    },
    {
      degree: "Bachelor of Science in Physics, Mathematics, Computer Science - 7.89 CGPA",
      school: "JSS College of Arts, Commerce and Science, Mysore",
      year: "2019 - 2022",
      description:
        "Science stream with focus on mathematics and computer science",
    },
    {
      degree: "PUC in PCMCs",
      school: "Concorde Mahesh PU College, Mandya",
      year: "2017 - 2019",
      description: "Science stream with Physics, Chemistry, Mathematics, Computer Science",
    },
  ];

 const funFacts = [
  {
    icon: "☕",
    fact: "Fueled by coffee and curiosity — every great idea starts with a perfectly brewed cup."
  },
  {
    icon: "🎧",
    fact: "Finds flow and focus through music — code, creativity, and rhythm in perfect sync."
  },
  {
    icon: "📘",
    fact: "A lifelong learner, constantly exploring emerging technologies and innovative frameworks."
  },
  {
    icon: "💡",
    fact: "Believes great solutions are born from curiosity, collaboration, and a passion for excellence."
  },
  {
    icon: "🌍",
    fact: "Aspires to build technology that connects people globally — one line of code at a time."
  }
];


  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8" data-aos="fade-right" data-aos-duration="1000">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Who I Am
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
               I’m a results-driven Full Stack Developer specializing in building high-performance, scalable web applications 
               using the MERN stack and AI-powered technologies. My passion lies in transforming ideas into 
               digital products that blend functionality, design, and innovation to deliver meaningful user experiences.
                </p>
                <p>
                  With hands-on experience in React.js, Node.js, Express.js, MongoDB, and integrations like OpenAI APIs 
                  and Stripe, I excel at developing intelligent, secure, and efficient solutions that align with modern 
                  business needs. I approach every project with a mindset focused on quality, optimization,
                   and real-world impact..
                </p>
                <p>
                  I believe great software is built through clean code, thoughtful architecture, and continuous improvement. 
                  Collaborating in Agile teams, I thrive in environments that challenge me to learn, innovate, and push 
                  boundaries in web development. My commitment to excellence ensures every product I deliver is not 
                  just functional — but exceptional.
                </p>
                <p>
                  Driven by curiosity and purpose, I aim to create technology that inspires, empowers, and endures. For me, 
                  development isn’t just about writing code — it’s about crafting experiences that connect people, 
                  solve problems, and shape the future of digital innovation.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <p className="text-blue-400 font-medium">{edu.school}</p>
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                    <p className="text-gray-300 mt-2">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
                <svg className="w-6 h-6 text-pink-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Fun Facts
              </h3>
              <div className="grid gap-4">
                {funFacts.map((fact, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                  >
                    <span className="text-2xl">{fact.icon}</span>
                    <p className="text-gray-300 flex-1">{fact.fact}</p>
                  </div>
                ))}
              </div>
            </div>

           {/* Skills Preview */}
          {/*  <div className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <svg className="w-6 h-6 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-500">50+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">3+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">20+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500">100%</div>
                  <div className="text-gray-400 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
