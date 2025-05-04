import React from 'react';
import { useInView } from 'react-intersection-observer';

type EducationItemProps = {
  title: string;
  institution: string;
  period: string;
  description: string;
  isVisible: boolean;
  delay: number;
};

const EducationItem: React.FC<EducationItemProps> = ({
  title,
  institution,
  period,
  description,
  isVisible,
  delay,
}) => {
  return (
    <div
      className={`relative pl-10 pb-12 transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute left-1 top-1.5 w-4 h-4 bg-blue-600 rounded-full shadow-md" />
      <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-gray-300" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <h4 className="text-lg text-blue-600 mt-1">{institution}</h4>
      <p className="text-sm text-gray-500 mt-0.5">{period}</p>
      <p className="text-gray-700 mt-3">{description}</p>
    </div>
  );
};

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const educationData = [
    {
      title: 'B.E. Computer Science and Engineering',
      institution: 'Kongu Engineering College, Erode',
      period: '2022 - 2026',
      description: 'Currently pursuing with a CGPA of 9.30 (till 5th semester).',
    },
    {
      title: 'Higher Secondary Education',
      institution: 'Richmond Matric Hr Sec School',
      period: '2021 - 2022',
      description: 'Completed HSC with 94%.',
    },
    {
      title: 'Secondary Education',
      institution: 'Richmond Matric Hr Sec School',
      period: '2019 - 2020',
      description: 'Completed SSLC with 98.8%.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref} className="transition-opacity duration-1000">
          <h2 className="glow-text text-3xl font-bold text-center text-gray-800 mb-16 relative">
            Education
            <span className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-20 h-1 bg-blue-500 bottom-0" />
          </h2>
          <div className="max-w-3xl mx-auto">
            {educationData.map((item, index) => (
              <EducationItem
                key={index}
                title={item.title}
                institution={item.institution}
                period={item.period}
                description={item.description}
                isVisible={inView}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
