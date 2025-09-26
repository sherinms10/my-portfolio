// import React from 'react';
// import type { Experience } from '../types';

// interface ExperienceSectionProps {
//   experience: Experience[];
// }

// const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience }) => {
//   return (
//     <section className="mb-8">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Experience</h2>
//       {experience.map((exp, index) => (
//         <div key={index} className="mb-6">
//           <div className="flex justify-between items-start mb-2">
//             <div>
//               <h3 className="text-lg font-semibold text-gray-700">{exp.role}</h3>
//               <p className="text-gray-600">{exp.company}</p>
//             </div>
//             <div className="text-right">
//               <span className="text-sm text-gray-500">{exp.period}</span>
//               {exp.isCurrent && (
//                 <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
//                   Current
//                 </span>
//               )}
//             </div>
//           </div>
//           {index < experience.length - 1 && (
//             <hr className="my-4 border-gray-200" />
//           )}
//         </div>
//       ))}
//     </section>
//   );
// };

// export default ExperienceSection;

import { Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import type { Experience } from '../types';

const Experiences = () => {
  const experience: Experience[] = [
    {
      role: "Frontend Developer",
      company: "Numota Technology, Kanyakumari",
      period: "Sept 2023 to Present",
      isCurrent: true
    },
  ]

  return (
    <section  className=" bg-background p-5">
    
        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center justify-center md:justify-start">
          <Briefcase className="w-8 h-8 mr-3 text-primary" />
          Experience
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((exp, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group hover:border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {exp.role}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2 font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                {exp.isCurrent && (
                  <span className="  px-3 py-1 bg-teal-600 text-white rounded-full text-sm">
                    Current
                  </span>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      
    </section>
  );
};

export default Experiences;




// import { Calendar, MapPin } from "lucide-react";
// import type { Experience } from "../types";


// const Experiences = () => {
//   const experiences: Experience[] = [
//     {
//       id: 1,
//       company: 'Numota Technology',
//       position: 'Frontend Developer',
//       period: 'February 2024 – Present',
//       responsibilities: [
//         'Developed 20+ responsive, cross-platform web interfaces using React.js and Tailwind CSS',
//         'Integrated 15+ RESTful APIs, reducing data-loading latency by 40%',
//         'Built a library of 30+ reusable UI components, improving code reusability by 30%',
//         'Implemented state management using React Hooks and Context API'
//       ],
//       technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'Git']
//     }
//   ];

//   return (
//     <section id="experience" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-6">
//         <h2 className="text-4xl font-bold text-center text-dark mb-12">Work Experience</h2>
        
//         <div className="max-w-4xl mx-auto">
//           {experiences.map((exp) => (
//             <div key={exp.id} className="bg-white rounded-xl shadow-lg p-8 mb-8">
//               <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
//                 <div>
//                   <h3 className="text-2xl font-semibold text-dark">{exp.position}</h3>
//                   <div className="flex items-center gap-2 text-secondary mt-1">
//                     <MapPin size={14} />
//                     <span className="font-medium">{exp.company}</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2 text-gray-600 mt-2 md:mt-0">
//                   <Calendar size={14} />
//                   <span>{exp.period}</span>
//                 </div>
//               </div>
              
//               <ul className="space-y-2 mb-6">
//                 {exp.responsibilities.map((resp, index) => (
//                   <li key={index} className="flex items-start gap-3 text-gray-600">
//                     <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                     {resp}
//                   </li>
//                 ))}
//               </ul>
              
//               <div className="flex flex-wrap gap-2">
//                 {exp.technologies.map((tech) => (
//                   <span key={tech} className="px-3 py-1 bg-primary text-white rounded-full text-sm">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experiences;


