import type { Skill } from "../types";
import HTML from '../assets/img/HTML.png'
import CSS from '../assets/img/CSS.png'
import JS from '../assets/img/JS.png'
import React from '../assets/img/React.png'
import Vite from '../assets/img/Vite.png'
import TypeScript from '../assets/img/Typescript.png'
import Next from '../assets/img/Next.png'
import Tailwind from '../assets/img/Tailwind.png'
import Git from '../assets/img/Git.png'
import Postman from '../assets/img/Postman.png'
import VScode from '../assets/img/VS.png'

const Skills = () => {
  const skills: Skill[] = [
    { name: 'HTML', img: HTML },
    { name: 'CSS', img: CSS },
    { name: 'JavaScript', img: JS },
    { name: 'React.js', img: React },
    { name: 'Vite', img: Vite },
    { name: 'TypeScript', img: TypeScript },
    { name: 'Next.js', img: Next },
    { name: 'Tailwind CSS', img: Tailwind },
    { name: 'Git', img: Git },
    { name: 'Postman', img: Postman },
    { name: 'VS Code', img: VScode },
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Technical <span className="text-blue-600">Skills</span></h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:shadow-lg shadow-md hover:bg-gray-50 transition-all duration-200"
            >
              {skill.img && (
                <div className="w-16 h-16 mb-3 flex items-center justify-center  rounded-lg p-2">
                  <img 
                    src={skill.img} 
                    alt={skill.name} 
                    className="w-12 h-12 object-contain"
                  />
                </div>
              )}
              <span className="font-medium text-gray-800 text-center text-sm md:text-base">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;