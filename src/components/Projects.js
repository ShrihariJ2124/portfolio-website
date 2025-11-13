import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Helper function to get project image path
  // Upload your project screenshots to public/images/projects/ with naming: projectname.jpg
  // Example: "Content Generator Platform" -> "content-generator-platform.jpg"
  const getProjectImage = (projectTitle) => {
    // Convert title to lowercase, replace spaces with hyphens, remove special characters
    const imageName = projectTitle
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    return `/images/projects/${imageName}.jpg`;
  };

  const projects = [
    {
      title: "Content Generator Platform",
      description:
        "A full-stack AI-powered content generation platform enabling users to instantly generate, edit, and manage written content. Integrated secure authentication, payment gateway, and user dashboards for seamless user experience.",
      image: getProjectImage("Content Generator Platform"),
      tech: ["React.js", "Node.js", "MongoDB", "OpenAI API", "Stripe", "Tailwind CSS"],
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      title: "AI Writing Assistant",
      description:
        "An AI-driven writing tool that performs grammar correction, rephrasing, and spell checking using OpenAI's GPT API. Integrated JWT authentication and multi-login support via email, Google, and phone.",
      image: getProjectImage("AI Writing Assistant"),
      tech: ["React", "Node.js", "OpenAI API", "JWT", "Tailwind CSS"],
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      title: "Real-Time Chat Application",
      description:
        "A responsive, real-time chat platform enabling instant communication using Socket.io. Includes live typing indicators, user authentication, and online/offline status for multiple concurrent users.",
      image: getProjectImage("Real-Time Chat Application"),
      tech: ["React", "Node.js", "Socket.io", "Express.js", "MongoDB"],
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      title: "Weather Forecasting App",
      description:
        "A clean and intuitive weather forecasting application that fetches real-time data using the OpenWeather API. Includes responsive UI, search by city, and dynamic weather icons for better UX.",
      image: getProjectImage("Weather Forecasting App"),
      tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      title: "GitHub User Finder",
      description:
        "A web application to search GitHub users and fetch profile data using the GitHub REST API. Features search suggestions and clean UI built with vanilla JavaScript and Fetch API.",
      image: getProjectImage("GitHub User Finder"),
      tech: ["HTML", "CSS", "JavaScript", "Fetch API", "GitHub REST API"],
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React, Tailwind CSS, and Framer Motion, featuring smooth animations and dark mode support.",
      image: getProjectImage("Portfolio Website"),
      tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
      github: "https://github.com/",
      demo: "https://demo.com/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="gradient-text bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work — each project showcases creativity, scalability, and practical problem-solving using modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    e.target.src = "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-700/50 text-white rounded-lg hover:bg-gray-600/50 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.373 0 12a12.01 12.01 0 008.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.3 11.3 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.01 12.01 0 0024 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-blue-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Want to explore more?
            </h3>
            <p className="text-gray-300 mb-6">
              Visit my GitHub profile to explore more projects, open-source contributions, and experiments.
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.373 0 12a12.01 12.01 0 008.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.3 11.3 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.01 12.01 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span>View All Projects</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
