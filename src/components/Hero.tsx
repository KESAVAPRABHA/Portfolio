import React, { useEffect, useState } from 'react';
import { Github as GitHub, Linkedin, Mail, PhoneCall } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130497/pexels-photo-7130497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-5"></div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100 animate-fadeInUp' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-4">
                <h2 className="text-blue-600 font-medium text-lg mb-2 animate-slideInBottom">
                  Hello, I'm
                </h2>

                <h1 className="glow-text text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 animate-popIn">
                  <Typewriter
                    words={['Kesava Prabha L']}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>

                <h3 className="text-xl md:text-2xl text-gray-600 mb-6 animate-slideInBottom">
                  <Typewriter
                    words={['Web Developer', 'Data Analyst']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </h3>

                <p className="text-gray-600 max-w-xl text-justify mb-6 animate-fadeInUp">
                  As a dedicated and highly motivated professional, I am continuously seeking to enhance my skills and contribute effectively in a dynamic, collaborative environment. I pride myself on my attention to detail, strong problem-solving abilities and commitment to excellence.
                </p>
              </div>

              <div className="flex space-x-4 mt-8 animate-float">
                {/* Add your icons and links here */}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className={`transition-all duration-1000 ease-out delay-300 transform ${isVisible ? 'translate-y-0 opacity-100 animate-fadeInRight' : 'translate-y-10 opacity-0'}`}>
              <div className="relative w-64 h-64 md:w-80 md:h-80 border-8 border-white rounded-full overflow-hidden shadow-xl animate-morphing">
                <img
                  src="src/photo.jpg"
                  alt="Kesava Prabha"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
