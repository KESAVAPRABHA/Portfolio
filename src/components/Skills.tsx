import React from 'react';
import { useInView } from 'react-intersection-observer';

type Skill = {
  name: string;
  logo: string;
};

type Language = {
  name: string;
  proficiency: number;
};

const technicalSkills: Skill[] = [
  { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
  { name: 'ReactJS', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
  { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
  { name: 'C', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png' },
  { name: 'HTML', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
  { name: 'SQL', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png' },
  { name: 'MongoDB', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThmT8HtltidnDUJvGcRYzg8B9h8zM-2O-FZw&s' },
];

const softSkills: Skill[] = [
  { name: 'Leadership', logo: 'https://cdn-icons-png.flaticon.com/512/1048/1048941.png' },
  { name: 'Communication', logo: 'https://cdn-icons-png.flaticon.com/512/2598/2598510.png' },
  { name: 'Time Management', logo: 'https://cdn-icons-png.flaticon.com/512/1827/1827504.png' },
  { name: 'Problem Solving', logo: 'https://cdn-icons-png.flaticon.com/512/2920/2920277.png' },
];

const languages: Language[] = [
  { name: 'Tamil', proficiency: 80 },
  { name: 'English', proficiency: 70 },
  { name: 'German', proficiency: 30 },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const direction = index % 2 === 0 ? '-translate-x-10' : 'translate-x-10';

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center p-4 bg-white rounded-xl shadow-lg transform transition duration-700 hover:scale-105 ${
        inView ? 'opacity-100 translate-x-0' : `opacity-0 ${direction}`
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <img src={skill.logo} alt={skill.name} className="w-16 h-16 object-contain mb-3" />
      <p className="text-gray-800 font-semibold text-center">{skill.name}</p>
    </div>
  );
};

// Updated LanguageBar with animated width
const LanguageBar = ({ name, proficiency, inView, delay }: Language & { inView: boolean; delay: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-gray-800 font-medium">{name}</span>
        <span className="text-gray-600">{proficiency}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${proficiency}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { ref: langRef, inView: langInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="glow-text text-3xl font-bold text-center mb-16 text-gray-800 relative">
          My Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
        </h2>

        {/* Technical Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {technicalSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Soft Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {softSkills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index + technicalSkills.length} />
            ))}
          </div>
        </div>

        {/* Languages Known */}
        <div ref={langRef}>
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Languages Known</h3>
          <div className="max-w-md mx-auto">
            {languages.map((lang, index) => (
              <LanguageBar
                key={lang.name}
                name={lang.name}
                proficiency={lang.proficiency}
                inView={langInView}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
