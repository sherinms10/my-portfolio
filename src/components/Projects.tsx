import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../types";


const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'NuCamp - Camp Management Portal',
      description: 'Comprehensive camp management portal handling medical, food, accommodation, and transport services for employees with secure data management.',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'React Router'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 2,
      title: 'NuService - Fire Safety System',
      description: 'Fire safety inspection and maintenance system for tracking extinguisher status and client compliance reports, reducing manual tracking time by 50%.',
      technologies: ['React.js', 'Tailwind CSS', 'React Router'],
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 3,
      title: 'E-Cartify - E-commerce SPA',
      description: 'Modern e-commerce single-page application with dynamic product catalogs, cart management, and seamless checkout flow.',
      technologies: ['React.js', 'Tailwind CSS', 'Local Storage'],
      githubUrl: '#',
      liveUrl: '#'
    }
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
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a href={project.githubUrl} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                      <Github /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                      <ExternalLink /> Live Demo
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