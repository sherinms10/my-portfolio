import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";


const Projects = () => {
  const projects: Project[] = [

    {
      id: 1,
      title: 'E-Cartify',
      description: '• Built a modern e-commerce SPA featuring dynamic product catalogs, cart management, and a seamless checkout flow. • Eliminated data loss on browser refresh by implementing localStorage for persistent cart data. ',
      technologies: ['React.js', 'Tailwind CSS', 'React Router', 'Local Storage'],
      githubUrl: 'https://github.com/sherinms10/e-cartify',
      liveUrl: 'https://e-cartify.vercel.app/'
    },

     {
      id: 2,
      title: 'SkyCast',
      description: '• Created a fully responsive weather application with city search, GPS detection, and display of realtime weather metrics. • Implemented local timezone detection to show accurate local time and date for any searched location',
      technologies: ['React.js', 'Tailwind CSS', 'OpenWeatherMap API '],
      githubUrl: 'https://github.com/sherinms10/SkyCast',
      liveUrl: 'https://skycast-mu.vercel.app/'
    },
    // {
    //   id: 1,
    //   title: 'NuCamp - Camp Management Portal',
    //   description: 'Comprehensive camp management portal handling medical, food, accommodation, and transport services for employees with secure data management.',
    //   technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'React Router'],
    //   githubUrl: '#',
    //   liveUrl: '#'
    // },
    // {
    //   id: 2,
    //   title: 'NuService - Fire Safety System',
    //   description: 'Fire safety inspection and maintenance system for tracking extinguisher status and client compliance reports, reducing manual tracking time by 50%.',
    //   technologies: ['React.js', 'Tailwind CSS', 'React Router'],
    //   githubUrl: '#',
    //   liveUrl: '#'
    // },
    
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-dark mb-12">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-dark mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                      <Github className=" w-5 h-5" /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                      <ExternalLink className=" w-5 h-5"/> Live Demo
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

export default Projects;