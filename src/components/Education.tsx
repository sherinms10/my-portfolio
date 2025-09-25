
import type { Education } from '../types';
import { GraduationCap } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';


const EducationSection = () => {

const education: Education[] = [
   
    {
      degree: "BTech in Information Technology",
      institution: "Jeppiaar Institute of Technology, Chennai",
      period: "2019 to 2023",
      score: "8.15 CGPA"
    },
    {
      degree: "HSC in Computer Science",
      institution: "Pius Xi Higher Secondary School, Thoothoor",
      period: "2018",
      score: "66.3%"
    },
    {
      degree: "SSLC",
      institution: "Pius Xi Higher Secondary School, Thoothoor",
      period: "2016",
      score: "80.6%"
    }
  ]

  return (
  <div className="p-5">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 mr-3 text-primary" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-card transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {edu.degree}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                  <p className="text-primary font-semibold">{edu.score}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

  );
};

export default EducationSection;