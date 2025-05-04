import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Users } from 'lucide-react';

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  isVisible: boolean;
  delay: number;
  icon: React.ReactNode;
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  isVisible,
  delay,
  icon,
}) => {
  return (
    <div
      className={`relative flex items-start space-x-6 transition-all duration-700 transform ${
        isVisible ? 'translate-x-0 opacity-100 animate-fadeInLeft' : 'translate-x-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>
      
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <h4 className="text-lg font-medium text-blue-600 mt-1">{company}</h4>
        <p className="text-gray-500 mt-1">{period}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: 'Web Developer',
      company: 'Prodigy Infotech',
      period: 'Apr 2024 - May 2024',
      icon: <Briefcase className="w-6 h-6" />,
    },
    {
      title: 'ML Intern',
      company: 'Generative AI Consortium',
      period: 'Jul 2024 - Oct 2024',
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  const memberships = [
    {
      title: 'Executive Member',
      company: 'Computer Science and Engineering Association',
      period: '2023-2024',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Member',
      company: 'Computer Society of India',
      period: 'Current',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
        <div ref={ref}>
          <h2 className={`glow-text text-3xl font-bold text-center mb-16 text-gray-800 relative ${
            inView ? 'animate-fadeInUp' : ''
          }`}>
            Experience & Memberships
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            <div className={`w-full max-w-md text-left ${inView ? 'animate-fadeInLeft' : ''}`}>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Internships</h3>
              <div className="space-y-10">
                {experiences.map((exp, index) => (
                  <ExperienceItem
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    isVisible={inView}
                    delay={index * 200}
                    icon={exp.icon}
                  />
                ))}
              </div>
            </div>

            <div className={`w-full max-w-md text-left ${inView ? 'animate-fadeInRight' : ''}`}>
              <h3 className="text-2xl font-semibold text-gray-700 mb-8">Memberships</h3>
              <div className="space-y-10">
                {memberships.map((membership, index) => (
                  <ExperienceItem
                    key={index}
                    title={membership.title}
                    company={membership.company}
                    period={membership.period}
                    isVisible={inView}
                    delay={(index + experiences.length) * 200}
                    icon={membership.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
