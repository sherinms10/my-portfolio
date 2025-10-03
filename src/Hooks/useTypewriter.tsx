import { useEffect, useState } from "react";

const useTypewriter = (text: string, speed: number = 100, delay: number = 0): { displayText: string; isTyping: boolean } => {
  const [displayText, setDisplayText] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          setIsTyping(false);
          clearInterval(typing);
        }
      }, speed);

      return () => clearInterval(typing);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return { displayText, isTyping };
};

export default useTypewriter;
