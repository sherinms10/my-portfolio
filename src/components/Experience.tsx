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
            <Card key={index} className="bg-card border-border  transition-all duration-300 group hover:border-primary/20">
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






