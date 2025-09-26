import EducationSection from "./Education";
import Experiences from "./Experience";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl  font-bold text-foreground ">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experienced Frontend Developer with a strong foundation in modern web technologies, specializing in creating intuitive and high-performing user interfaces. Skilled in optimizing performance, implementing best practices, and collaborating effectively within teams to deliver scalable and efficient solutions. Passionate about continuously learning and adopting new technologies to drive innovation and enhance user experiences.
          </p>
        </div>
        </div>
      <EducationSection/>
      <Experiences/>

      
      {/* <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-dark mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">Frontend Developer with 2+ Years Experience</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I specialize in building modern, responsive web applications using cutting-edge technologies. 
                My focus is on creating seamless user experiences with clean, maintainable code.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-medium">Location: Kanyakumari, India</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-medium">Email: msherin1ll0@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="font-medium">Phone: +91 90039 76090</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold mb-4">What I Do</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Responsive Web Application Development
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  REST API Integration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Performance Optimization
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Cross-browser Compatibility
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      
    </section>
  );
};

export default About;