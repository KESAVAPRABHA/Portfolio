import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const spark = document.createElement('div');
      spark.className = 'sparkle';
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 2000);
    }, 500); // frequency of sparkles

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h2 className="glow-text text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white relative">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg text-justify">
              I'm a Computer Science and Engineering student at Kongu Engineering College, Erode with a passion for software development and data analytics. I combine technical expertise with a commitment to continuous learning.
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg text-justify">
              My interests include Data Analytics and Web Development, and I've worked on various projects that demonstrate my skills in these areas. I enjoy tackling complex problems and developing efficient solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-lg text-justify">
              In addition to my technical skills, I value collaboration and communication. I'm fluent in Tamil, English, and have basic proficiency in German (A1). I've been recognized for my academic achievements and contributions to research papers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
