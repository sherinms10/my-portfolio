import { Download, Github, Linkedin, Mail } from "lucide-react";


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-dark mb-4">
              Hi, I'm <span className="text-primary">Sherin</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-secondary mb-6">Frontend Developer</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I build scalable, responsive web applications using React.js, TypeScript, and Tailwind CSS. 
              Passionate about creating user-centric designs and optimizing performance.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="bg-primary text-black px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <Download /> Download Resume
              </a>
              
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/sherinm14/" className="p-3 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/sherinms10" className="p-3 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="mailto:msherin1110@gmail.com" className="p-3 bg-gray-100 rounded-lg hover:bg-primary hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-primary">SM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;