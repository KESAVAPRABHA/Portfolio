import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Github as GitHub } from 'lucide-react';

type ProjectData = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  previewImage: string;
  liveDemoLink?: string; // Optional for live demo link
};

const ProjectCard = ({ project, index, isVisible }: { project: ProjectData; index: number; isVisible: boolean }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      } ${isHovered ? 'scale-[1.03]' : 'scale-100'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-48 overflow-hidden relative">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{ 
            backgroundImage: `url(${project.previewImage})`,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex} 
              className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-start space-x-4 mt-auto">
          <a 
            href={project.githubLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
          >
            <GitHub size={18} className="mr-1" />
            <span>Code</span>
          </a>
          
          {/* Display live demo link if available */}
          {project.liveDemoLink && (
            <a 
              href={project.liveDemoLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <span className="mr-1">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects: ProjectData[] = [
    {
      id: 1,
      title: 'Bank System with Transactions',
      description: 'A fully functional banking system with transaction capabilities and user authentication.',
      technologies: ['MongoDB', 'JavaScript', 'Node.js', 'Express.js', 'HTML'],
      githubLink: 'https://github.com/KESAVAPRABHA/Bank_Mongo',
      previewImage: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 2,
      title: 'Forest Fire Prediction',
      description: 'Machine learning model to predict forest fires based on environmental data.',
      technologies: ['Python', 'Streamlit', 'RandomForest', 'Scikit-learn'],
      githubLink: 'https://github.com/KESAVAPRABHA/ForestFire',
      previewImage: 'https://images.pexels.com/photos/51951/forest-fire-fire-smoke-conservation-51951.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 3,
      title: 'Book Recommendation Website',
      description: 'A web application that provides personalized book recommendations to users.',
      technologies: ['React', 'MongoDB', 'Node.js', 'RESTful APIs', 'JWT'],
      githubLink: 'https://github.com/KESAVAPRABHA/FullStack',
      previewImage: 'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 4,
      title: 'Python Billing System',
      description: 'A desktop GUI application for billing and invoice generation using Tkinter.',
      technologies: ['Python', 'Tkinter'],
      githubLink: 'https://github.com/KESAVAPRABHA/Billing_System',
      previewImage: 'https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1600'
    },
    {
      id: 5,
      title: 'Movie Recommendation App',
      description: 'An interactive Streamlit web app that recommends movies based on user preferences using similarity metrics.',
      technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn'],
      githubLink: 'https://github.com/KESAVAPRABHA/Movie_Recommendation',
      previewImage: 'https://i2.wp.com/thecleverprogrammer.com/wp-content/uploads/2020/06/Untitled.jpg?fit=580%2C263&ssl=1',
      liveDemoLink: 'https://movierecommendation234.streamlit.app/' // Live demo link
    },
    {
      id: 6,
      title: 'Quote App Deployment with Helm',
      description: 'A full-stack Quote Generator app deployed using Helm charts on a Kubernetes cluster. Demonstrates CI/CD and cloud-native deployment strategies.',
      technologies: ['Helm', 'Kubernetes', 'React', 'Node.js', 'YAML'],
      githubLink: 'https://github.com/KESAVAPRABHA/Helm',
      previewImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyK3BqdeEv4C2DtkeyR_J9Xn8EXveId4tAmYBwHS5nqw&s&ec=72940542'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div ref={ref}>
          <h2 className="glow-text text-3xl font-bold text-center mb-16 text-gray-800 relative">
            Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 mt-2"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isVisible={inView} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
