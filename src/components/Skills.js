import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: 90, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
        { name: "JavaScript (ES6+)", level: 88, icon: "🟨", color: "from-yellow-400 to-orange-500" },
        //{ name: "TypeScript", level: 75, icon: "🔷", color: "from-blue-600 to-blue-800" },
        //{ name: "Next.js", level: 75, icon: "⏭️", color: "from-gray-600 to-gray-800" },
        { name: "HTML5", level: 95, icon: "🌐", color: "from-orange-500 to-red-500" },
        { name: "CSS3 / SCSS", level: 92, icon: "🎨", color: "from-blue-500 to-purple-500" },
        { name: "Tailwind CSS", level: 90, icon: "💨", color: "from-cyan-400 to-blue-500" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, icon: "🟢", color: "from-green-500 to-green-700" },
        { name: "Express.js", level: 82, icon: "🚂", color: "from-gray-600 to-gray-800" },
        { name: "RESTful APIs", level: 90, icon: "🔗", color: "from-indigo-500 to-blue-600" },
        { name: "MongoDB / Mongoose", level: 85, icon: "🍃", color: "from-green-400 to-green-600" },
        { name: "MySQL", level: 78, icon: "🐬", color: "from-blue-600 to-blue-800" },
        { name: "Python", level: 85, icon: "🐍", color: "from-yellow-400 to-blue-500" },
        { name: "Firebase", level: 75, icon: "🔥", color: "from-orange-500 to-yellow-500" },
        { name: "JWT / OAuth2", level: 80, icon: "🔑", color: "from-purple-500 to-indigo-500" },
        { name: "OpenAI API", level: 85, icon: "🤖", color: "from-teal-500 to-cyan-500" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 85, icon: "📝", color: "from-orange-500 to-red-500" },
        { name: "AWS (EC2, S3)", level: 60, icon: "☁️", color: "from-yellow-400 to-orange-500" },
        { name: "Thunder Client", level: 80, icon: "⚡", color: "from-yellow-500 to-orange-500" },
        { name: "Postman", level: 85, icon: "📮", color: "from-orange-500 to-red-500" },
        { name: "Docker (Basics)", level: 60, icon: "🐳", color: "from-blue-500 to-blue-700" },
        { name: "Figma", level: 85, icon: "🎨", color: "from-purple-500 to-pink-500" },
        { name: "VS Code", level: 95, icon: "💻", color: "from-blue-500 to-purple-500" },
        { name: "API Security (CORS, Rate Limiting)", level: 75, icon: "🛡️", color: "from-red-500 to-rose-700" }
      ]
    },
  ];

  const otherSkills = [
    , "Agile", "Scrum", "Responsive Design", "Testing & Debugging","OpenCV", "TensorFlow", "Keras", "Data Visualization (Matplotlib, Seaborn)"
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={categoryIndex * 200}>
              <h3 className="text-2xl font-semibold text-white mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                      <span className="text-sm font-medium text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Other Skills */}
        <div className="mt-16" data-aos="fade-up" data-aos-duration="1000">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">
            Other Skills & Knowledge
          </h3>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="flex flex-wrap gap-3 justify-center">
              {otherSkills.map((skill, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-pink-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30 hover:border-blue-400/50 hover:bg-blue-500/30 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16" data-aos="fade-up" data-aos-duration="1000">
          <div className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-300 mb-6">
                I'm constantly expanding my skill set and staying updated with the latest technologies
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  🚀 Currently Learning: Advanced React 
                </span>
                <span className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-full text-sm font-medium border border-pink-500/30">
                  🎯 Next Goal: AI Integration
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
