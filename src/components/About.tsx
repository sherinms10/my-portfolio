import EducationSection from "./Education";
import Experiences from "./Experience";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900  font-bold text-foreground ">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto transition-all  duration-300 transform hover:scale-105">
            Experienced Frontend Developer with a strong foundation in modern web technologies, specializing in creating intuitive and high-performing user interfaces. Skilled in optimizing performance, implementing best practices, and collaborating effectively within teams to deliver scalable and efficient solutions. Passionate about continuously learning and adopting new technologies to drive innovation and enhance user experiences.
          </p>
        </div>
        </div>
      <EducationSection/>
      <Experiences/>

      
      
    </section>
  );
};

export default About;