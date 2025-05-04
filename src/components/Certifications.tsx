import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

type CertificationProps = {
  title: string;
  issuer: string;
  isVisible: boolean;
  delay: number;
};

const CertificationCard = ({ title, issuer, isVisible, delay }: CertificationProps) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-700 transform ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-10 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms`, transitionTimingFunction: 'ease-out' }}
    >
      <Award className="h-8 w-8 text-blue-500 mb-4" />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{issuer}</p>
    </div>
  );
};

const Certifications = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const certifications = [
    {
      title: 'Privacy and Security in Online Social Media',
      issuer: 'NPTEL - Elite Silver',
    },
    {
      title: 'Extract Transport and Load Data in PowerBI',
      issuer: 'Coursera',
    },
    {
      title: 'Preparing Data for Analysis with Microsoft Excel',
      issuer: 'Coursera',
    },
    {
      title: 'MongoDB Associate Developer',
      issuer: 'MongoDB',
    },
  ];

  const achievements = [
    {
      title: 'Third Prize for Paper on "Optimization of Biodiesel Composition using ANN"',
      issuer: 'IIT Madras',
    },
    {
      title: 'Third Prize for Paper on "Blue Eye Technology"',
      issuer: 'Hindusthan College of Technology',
    },
    {
      title: 'First Prize for Paper on "Women Safety Analytics Software"',
      issuer: 'Government College of Engineering, Erode',
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref}>
          <h2 className="glow-text text-3xl font-bold text-center mb-16 text-gray-800 dark:text-white relative">
            Certifications & Achievements
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8 text-center">
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard
                  key={index}
                  title={cert.title}
                  issuer={cert.issuer}
                  isVisible={inView}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-8 text-center">
              Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <CertificationCard
                  key={index}
                  title={achievement.title}
                  issuer={achievement.issuer}
                  isVisible={inView}
                  delay={(index + certifications.length) * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
