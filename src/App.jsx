import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Menu, X, ArrowUpRight, Code2, Cpu, Wrench } from 'lucide-react';

// Custom hook for scroll-triggered animations
const useScrollAnimation = (threshold = 0.1) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return [ref, isVisible];
};


// Main App Component
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Data for your portfolio ---
  const personalInfo = {
    name: "Your Name",
    title: "Full-Stack Developer & Designer",
    bio: "I craft beautiful, responsive, and efficient web applications. With a passion for both design and development, I bring ideas to life from concept to deployment.",
    email: "your.email@example.com",
    socials: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
    }
  };
  
  // --- Updated Skills Data with Individual Icons ---
  const skills = {
    "Languages & Frameworks": [
        { name: "C", icon: "https://cdn.worldvectorlogo.com/logos/c-1.svg" },
        { name: "C++", icon: "https://cdn.worldvectorlogo.com/logos/c.svg" },
        { name: "Python", icon: "https://cdn.worldvectorlogo.com/logos/python-5.svg" },
        { name: "ROS", icon: "https://cdn.worldvectorlogo.com/logos/ros-1.svg" },
        { name: "MATLAB", icon: "https://cdn.worldvectorlogo.com/logos/matlab.svg" },
        { name: "Verilog", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/verilog/verilog-original.svg" },
        { name: "Java", icon: "https://cdn.worldvectorlogo.com/logos/java-4.svg" },
        { name: "HTML/CSS", icon: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
        { name: "JavaScript", icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
        { name: "React", icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
        { name: "Node.js", icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
        { name: "SQL", icon: "https://www.svgrepo.com/show/303229/sql-database-sql-logo.svg" },
    ],
    "Development Boards": [
        { name: "Arduino", icon: "https://cdn.worldvectorlogo.com/logos/arduino-1.svg" },
        { name: "Raspberry Pi", icon: "https://cdn.worldvectorlogo.com/logos/raspberry-pi.svg" },
        { name: "Basys 3 FPGA", icon: "https://cdn.worldvectorlogo.com/logos/xilinx.svg" },
        { name: "STM32", icon: "https://www.st.com/etc/clientlibs/publish/main/images/logo.svg" },
        { name: "ESP32", icon: "https://cdn.worldvectorlogo.com/logos/espressif.svg" },
        { name: "Parallax Propeller", icon: "https://www.parallax.com/wp-content/uploads/2019/02/Parallax-Logo-Icon-Only.png" },
        { name: "BASIC Stamp 2", icon: "https://www.parallax.com/wp-content/uploads/2019/02/Parallax-Logo-Icon-Only.png" },
    ],
    "Hardware & Tools": [
        { name: "Franka Research 3", icon: "https://www.franka.de/assets/images/franka-logo.svg" },
        { name: "NI DAQ", icon: "https://cdn.worldvectorlogo.com/logos/ni-3.svg" },
        { name: "Google Glass", icon: "https://cdn.worldvectorlogo.com/logos/google-glass.svg" },
        { name: "Bambu Lab Printer", icon: "https://avatars.githubusercontent.com/u/104322303?s=200&v=4" },
        { name: "Glowforge", icon: "https://cdn.worldvectorlogo.com/logos/glowforge.svg" },
    ]
  };

  // --- 4 BIG PROJECTS ---
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online store built with the MERN stack. Includes product catalog, shopping cart, user authentication, and a payment gateway.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "https://placehold.co/600x400/d6c2a8/2c2c2c?text=Project+1"
    },
    {
      title: "Task Management App",
      description: "A collaborative task manager with a drag-and-drop interface, real-time updates, and user notifications. Built with React and Firebase.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "https://placehold.co/600x400/d6c2a8/2c2c2c?text=Project+2"
    },
    {
      title: "Data Visualization Dashboard",
      description: "An interactive dashboard for visualizing complex datasets, featuring various chart types and filtering options. Built with D3.js and React.",
      tags: ["React", "D3.js", "API"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "https://placehold.co/600x400/d6c2a8/2c2c2c?text=Project+3"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio site (this one!) built with React and Vite, showcasing my skills and projects in a clean, modern design.",
      tags: ["React", "Vite", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      imageUrl: "https://placehold.co/600x400/d6c2a8/2c2c2c?text=Project+4"
    }
  ];
  
  // --- 10 SMALL PROJECTS (now with image URLs) ---
  const smallProjects = [
    { title: "CLI Tool", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=CLI" },
    { title: "Discord Bot", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=Bot" },
    { title: "Browser Extension", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=Extension" },
    { title: "API Microservice", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=API" },
    { title: "Landing Page Clone", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=Clone" },
    { title: "CSS Art Piece", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=Art" },
    { title: "Game Prototype", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=Game" },
    { title: "Mobile UI Concept", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=UI" },
    { title: "Automation Script", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=Script" },
    { title: "CodePen Animation", githubUrl: "#", imageUrl: "https://placehold.co/200x150/d6c2a8/2c2c2c?text=Animation" },
  ];


  // --- Sub-components ---
  const Nav = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-black hover:text-yellow-600 transition-colors">{personalInfo.name}</a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-slate-700 hover:text-yellow-600 transition-colors font-medium">About</a>
          <a href="#projects" className="text-slate-700 hover:text-yellow-600 transition-colors font-medium">Projects</a>
          <a href="#contact" className="text-slate-700 hover:text-yellow-600 transition-colors font-medium">Contact</a>
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-yellow-600 transition-colors"><Github /></a>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-black">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4 items-center">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-yellow-600 transition-colors">About</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-yellow-600 transition-colors">Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-slate-700 hover:text-yellow-600 transition-colors">Contact</a>
            <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-yellow-600 transition-colors">GitHub</a>
          </div>
        </div>
      )}
    </nav>
  );

  const Hero = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsLoaded(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const getTransitionClass = (delay) => `transition-all duration-700 ease-in-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} ${delay}`;

    return (
        <section id="hero" className="min-h-screen flex items-center bg-white text-black">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
            <h1 className={`${getTransitionClass('delay-200')} text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-700 pb-2`}>
                {personalInfo.name}
            </h1>
            <h2 className={`${getTransitionClass('delay-300')} text-2xl md:text-3xl font-semibold text-slate-800 mt-2`}>{personalInfo.title}</h2>
            <p className={`${getTransitionClass('delay-500')} text-lg text-slate-600 mt-6 max-w-2xl mx-auto`}>{personalInfo.bio}</p>
            <div className={`${getTransitionClass('delay-700')} mt-8 flex gap-4 flex-wrap justify-center`}>
                <a href="#projects" className="inline-block bg-yellow-500 text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-500/20 transform hover:scale-105">
                View My Work
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 border border-black text-black font-semibold px-6 py-3 rounded-md hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105">
                <Mail size={20} /> Contact Me
                </a>
            </div>
            </div>
        </div>
        </section>
    );
  };

  const AnimatedSection = ({ children, id }) => {
    const [ref, isVisible] = useScrollAnimation();
    return (
        <section ref={ref} id={id} className={`py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {children}
        </section>
    );
  }

  const About = () => (
    <div id="about" className="bg-[#FBF9F4] text-black">
        <AnimatedSection>
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>
                    <div className="text-center text-slate-700 text-lg mb-12">
                        <p>I am a dedicated developer with a strong focus on creating user-friendly and performant web experiences. I thrive in collaborative environments and am always eager to learn new technologies and improve my craft.</p>
                    </div>
                    {/* --- Updated Skills Section --- */}
                    <h3 className="text-3xl font-bold text-center mb-12">My Skills</h3>
                    <div className="space-y-10">
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category}>
                                <h4 className="text-xl font-semibold text-center mb-4 text-slate-800">{category}</h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {items.map(skill => (
                                        <div key={skill.name} className="flex items-center gap-2 bg-white text-slate-800 text-sm font-medium pl-2 pr-3 py-1.5 rounded-full shadow-sm border border-slate-200">
                                            <img src={skill.icon} alt={`${skill.name} logo`} className="w-5 h-5 object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
                                            <span>{skill.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    </div>
  );

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 group">
      <div className="overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/1e293b/ffffff?text=Image+Error'; }} />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-black mb-2">{project.title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => <span key={tag} className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>)}
        </div>
        <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-700 font-semibold inline-flex items-center gap-1">Live Demo <ArrowRight size={16}/></a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-yellow-600 transition-colors"><Github /></a>
        </div>
      </div>
    </div>
  );

  const SmallProjectCard = ({ project }) => (
    <a 
      href={project.githubUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 group flex flex-col hover:border-yellow-500 transform hover:-translate-y-1"
    >
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-105" 
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x150/1e293b/ffffff?text=Error'; }} 
      />
      <div className="p-3 flex justify-between items-center">
        <h4 className="text-black font-semibold text-sm truncate">{project.title}</h4>
        <ArrowUpRight className="text-slate-400 flex-shrink-0" size={16} />
      </div>
    </a>
  );

  const Projects = () => (
    <div id="projects" className="bg-white">
        <AnimatedSection>
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-black mb-4">Featured Projects</h2>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
                </div>
            </div>
        </AnimatedSection>
    </div>
  );

  const SmallProjects = () => {
    const [ref, isVisible] = useScrollAnimation(0.05);
    return (
     <section ref={ref} id="other-projects" className="py-20 bg-[#FBF9F4]">
        <div className="container mx-auto px-6">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-3xl font-bold text-center text-black mb-4">Other Noteworthy Projects</h3>
                <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                {smallProjects.map((project, index) => (
                    <div key={index} className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: `${index * 50}ms`}}>
                        <SmallProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
     </section>
    );
  };

  const Contact = () => (
     <div id="contact" className="text-black bg-white">
        <AnimatedSection>
            <div className="container mx-auto px-6">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-yellow-500 mx-auto mb-12"></div>
                    <p className="text-slate-700 mb-8">
                        I'm currently open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.
                    </p>
                    <a href={`mailto:${personalInfo.email}`} className="inline-block bg-black text-white font-semibold px-8 py-4 rounded-md hover:bg-slate-800 transition-all duration-300 shadow-lg shadow-slate-500/20 text-lg transform hover:scale-105">
                        Say Hello
                    </a>
                    <div className="flex justify-center gap-8 mt-10">
                        <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-yellow-600 transition-colors"><Github size={28} /></a>
                        <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-yellow-600 transition-colors"><Linkedin size={28} /></a>
                    </div>
                </div>
            </div>
        </AnimatedSection>
     </div>
  );

  const Footer = () => (
    <footer className="bg-white text-slate-600 py-6 border-t border-slate-200">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );

  return (
    <div className="bg-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <SmallProjects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
