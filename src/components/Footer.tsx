import { Github, Linkedin, Mail } from "lucide-react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Sherin M</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          
          <div className="flex gap-6 mb-6 md:mb-0">
            <a href="https://github.com/sherinms10" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/sherinm14/" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:msherin1110@gmail.com" className="text-gray-400 hover:text-gray-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Sherin M. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;