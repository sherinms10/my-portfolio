import { Download, Github, Linkedin, Mail } from "lucide-react";
import '../App.css'
import { useEffect, useState } from "react";
import useTypewriter from "../Hooks/useTypewriter";
// import MS from '../assets/img/sherin.jpg'




const Hero = () => {
  const { displayText, isTyping } = useTypewriter("Hi, I'm Sherin", 100, 500);
  const [showSubtitle, setShowSubtitle] = useState<boolean>(false);

  useEffect(() => {
    // Show subtitle after name typing completes
    if (!isTyping) {
      const timer = setTimeout(() => {
        setShowSubtitle(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isTyping]);

  const handleDownloadCV = (): void => {
    const link = document.createElement('a');
    link.href = '/SHERIN_M.pdf';
    link.download = 'SHERIN_M_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="md:grid md:grid-cols-2 gap-12 items-center flex flex-col-reverse">
          <div className="flex flex-col">
            {/* Main Title with Cursor */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-dark mb-4 min-h-[1.2em]">
              <span className="relative">
                {displayText}
                {isTyping && (
                  <span className="ml-1 animate-pulse">|</span>
                )}
              </span>
            </h1>
            
            {/* Animated Subtitle */}
            <h2 className={`text-xl md:text-2xl lg:text-3xl text-secondary mb-6 transition-all duration-500 ${
              showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Frontend Developer
            </h2>
            
            {/* Description */}
            <p className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-500 delay-200 ${
              showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              I build scalable, responsive web applications using React.js, TypeScript, and Tailwind CSS. 
              Passionate about creating user-centric designs and optimizing performance.
            </p>
            
            {/* Buttons & Social Links */}
            <div className={`flex flex-wrap gap-4 transition-all duration-500 delay-300 ${
              showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
             <button 
  onClick={handleDownloadCV}
  className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 shadow-sm hover:opacity-90"
>
  <Download className="w-4 h-4" />
  Download CV
</button>
              
              <div className="flex gap-3">
                <a 
                  href="https://www.linkedin.com/in/sherinm14/" 
                  className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin size={18} />
                </a>
              <a 
                  href="https://github.com/sherinms10" 
                  className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={18} />
                </a>

                <a 
                  href="mailto:msherin1110@gmail.com" 
                  className="p-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-300 shadow-sm hover:shadow-md"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
         <div className={`relative mb-8 md:mb-0 ${
              showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>

            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
              <div className="w-56 h-56 md:w-72 md:h-72 bg-white rounded-full flex items-center justify-center shadow-inner">
                <span className="text-4xl md:text-6xl font-bold text-gray-800">SM</span>
              </div>
            </div>
            
            {/* <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-xl">
              <div className="w-72 h-72 bg-white rounded-full overflow-hidden flex items-center justify-center">
  <img 
    src={MS} 
    alt="Sherin" 
    className="w-full h-full object-cover"
  />
</div>

            </div> */}
            
            {/* Optional: Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;