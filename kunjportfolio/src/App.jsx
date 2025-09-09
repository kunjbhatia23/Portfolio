import React, { useState, useEffect, useRef } from 'react';
import { 
    FaGithub, FaLinkedin, FaEnvelope, FaCode, FaPaintBrush, FaLaptopCode, FaRocket, 
    FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate, FaExternalLinkAlt, FaMobileAlt, FaPenNib, FaCameraRetro
} from 'react-icons/fa';

// --- CUSTOM HOOKS for advanced interactivity ---

// Hook for the typewriter effect
const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState('');
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(prevText => prevText + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};

// Hook for observing when an element enters the viewport
const useIntersectionObserver = (options) => {
    const [entry, setEntry] = useState(null);
    const [node, setNode] = useState(null);

    const observer = useRef(new IntersectionObserver(([entry]) => setEntry(entry), options));

    useEffect(() => {
        const { current: currentObserver } = observer;
        currentObserver.disconnect();

        if (node) currentObserver.observe(node);

        return () => currentObserver.disconnect();
    }, [node]);
    
    return [setNode, entry];
};


// --- RESUME DATA ---
const portfolioData = {
    name: "KUNJ BHATIA",
    headline: "Aspiring Software Developer skilled in MERN Stack, React Native, and UI/UX Design.",
    bio: "MCA student and aspiring software developer with hands-on experience in MERN Stack, React Native, and UI/UX design. Skilled in building responsive web and mobile applications, API integration, and database management. Strong foundation in C++, Python, and MySQL, with a proven ability to deliver user-friendly, functional solutions in team environments.",
    contact: { 
        email: "kunjbhatia23@gmail.com", 
        phone: "+91-9971074726", 
        socials: { 
            linkedin: "https://linkedin.com/in/kunj-bhatia", 
            github: "https://github.com/kunjbhatia23" 
        },
        resumeUrl: "./KunjBhatia_Resume.pdf" // Add the path to your resume PDF here
    },
    experience: [{ role: "Full Stack & React Native Developer", company: "Aap Ka Bazar, Dwarka", duration: "May 2025", description: ["Developed mobile features for delivery workflow, improving efficiency.", "Integrated APIs for real-time order fetching & optimized image uploads with Multer.", "Enhanced UI across multiple screens for improved UX."] }, { role: "React.js Frontend Intern", company: "Globtier Infotech, Noida", duration: "Jul – Aug 2024", description: ["Developed projects including a Book List app, an API-integrated chatbot, and a To-Do List.", "Collaborated using GitHub workflows, reducing merge conflicts and improving delivery speed."] }],
    education: [{ degree: "Master of Computer Applications (MCA)", institution: "Jagan Institute of Management Studies, New Delhi", duration: "2024–2026", cgpa: "8.36 CGPA" }, { degree: "Bachelor of Computer Applications (BCA)", institution: "Sirifort Institute of Management Studies, New Delhi", duration: "2021–2024", cgpa: "8.88 CGPA" }],
    skills: ["C++", "Python", "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS", "JavaScript", "Figma", "Canva", "SQL", "MongoDB", "Node.js", "Express.js", "RESTful API", "Git/GitHub", "VSCode", "Vercel", "Render"],
    services: [
        { icon: <FaCode />, title: "Frontend Development", description: "Building responsive and interactive user interfaces with React.js, Next.js, and modern CSS frameworks." },
        { icon: <FaLaptopCode />, title: "Full-Stack Development", description: "Creating complete web applications using the MERN stack (MongoDB, Express.js, React, Node.js)." },
        { icon: <FaMobileAlt />, title: "Mobile App Development", description: "Developing cross-platform mobile applications with React Native for both iOS and Android." },
        { icon: <FaPaintBrush />, title: "UI/UX Design", description: "Designing user-friendly and visually appealing interfaces with Figma and Adobe XD." },
        { icon: <FaPenNib />, title: "Graphic Design", description: "Creating logos, icons, and other graphic elements for your brand." },
        { icon: <FaCameraRetro />, title: "Photo/Video Editing", description: "Editing and enhancing photos and videos for a professional look and feel." }
    ],
    projects: [{ title: "AI Test Case Generator for GitHub", description: "A web app that connects to public GitHub repos, selects code files, and uses the Gemini API to automatically generate test case summaries and full test code.", tags: ["React", "Gemini API", "Jest", "RTL", "Tailwind CSS"], liveUrl: "#", codeUrl: "#" }, { title: "Budget Guru – Personal Finance Dashboard", description: "Multi-profile budgeting, expense splitting, and asset tracking with interactive charts.", tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind"], liveUrl: "#", codeUrl: "#" }, { title: "Alumnify – Student-Alumni Portal", description: "Features a matching algorithm, mentor chats, forums, and alumni engagement tools.", tags: ["React.js", "Python", "MongoDB"], liveUrl: "#", codeUrl: "#" }, { title: "GameTalk – Gaming Community Platform", description: "AI chatbot, real-time news, esports tracking, and an integrated merchandise store.", tags: ["React.js", "Node.js", "OpenAI API"], liveUrl: "#", codeUrl: "#" }, { title: "Invoicely – Invoicing Tool", description: "Generates GST-compliant invoices with transaction filtering and advanced search.", tags: ["MERN Stack"], liveUrl: "#", codeUrl: "#" }, { title: "Ride-O-Holic – Motorcycle Reservation System", description: "A bike reservation platform with model selection, dealer connections, and recommendations.", tags: ["HTML", "CSS", "JavaScript"], liveUrl: "#", codeUrl: "#" }],
    achievements: ["First Place in Generative AI Panel Discussion", "Second Runner-Up – Code Blitz Hackathon (25+ teams)", "Top 12 – Hack Vortex Hackathon (110+ teams)", "Hosted multiple tech events"],
    certifications: ["Full Web Development Bootcamp", "Adobe XD UI/UX Design", "Adobe Premiere Pro Masterclass"]
};
// --- END OF DATA ---


// --- Main App Component ---
export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => setMousePosition({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div id="top" className="portfolio-wrapper">
      <StyleTag />
      <div className="spotlight" style={{ top: `${mousePosition.y}px`, left: `${mousePosition.x}px` }}></div>
      <div className="aurora-background">
        <div className="aurora-shape shape1"></div>
        <div className="aurora-shape shape2"></div>
        <div className="aurora-shape shape3"></div>
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


// --- Section Components ---
const Header=()=>(<header className="header"><div className="container"><a href="#top" className="logo">{portfolioData.name.split(' ')[0]}</a><nav><a href="#about">About</a><a href="#services">Services</a><a href="#experience">Experience</a><a href="#projects">Projects</a><a href="#education">Education</a><a href="#achievements">Achievements</a><a href="#contact">Contact</a></nav></div></header>);

const Hero = () => {
  const typedHeadline = useTypewriter(portfolioData.headline, 60);
  return (
    <section className="hero container">
      <div className="hero-text">
        <h1 className="fade-in-up" style={{ animationDelay: '0.2s' }}>{portfolioData.name}</h1>
        <p className="fade-in-up typed-text" style={{ animationDelay: '0.4s' }}>
          {typedHeadline}<span className="cursor"></span>
        </p>
        <a href={`mailto:${portfolioData.contact.email}`} className="cta-button fade-in-up" style={{ animationDelay: '0.6s' }}>
          Get In Touch <FaRocket className="icon-after" />
        </a>
      </div>
    </section>
  );
};

const About=()=>(
    <section id="about" className="about container">
        <h2 className="section-title"><FaCode className="section-icon"/> About Me</h2>
        <div className="about-content">
            <p>{portfolioData.bio}</p>
            <a href={portfolioData.contact.resumeUrl} target="_blank" rel="noopener noreferrer" className="cta-button resume-button">
                Download Resume <FaExternalLinkAlt className="icon-after" />
            </a>
            <div className="skills">
                <h3>My Toolkit:</h3>
                <div className="skill-tags">{portfolioData.skills.map((skill,index)=>(<span key={index} className="skill-tag" style={{animationDelay:`${index*0.05}s`}}>{skill}</span>))}</div>
            </div>
        </div>
    </section>
);

const TimelineItem = ({ job }) => {
    const [ref, entry] = useIntersectionObserver({ threshold: 0.5, triggerOnce: true });
    const isVisible = entry && entry.isIntersecting;

    return (
        <div ref={ref} className={`timeline-item ${isVisible ? 'is-visible' : ''}`}>
            <div className="timeline-content">
                <h3>{job.role}</h3>
                <p className="company">{job.company} <span className="duration">{job.duration}</span></p>
                <ul>{job.description.map((point, i) => <li key={i}>{point}</li>)}</ul>
            </div>
        </div>
    );
};

const Experience = () => (
    <section id="experience" className="experience container">
        <h2 className="section-title"><FaBriefcase className="section-icon" /> Professional Experience</h2>
        <div className="timeline">
            {portfolioData.experience.map((job, index) => (
                <TimelineItem key={index} job={job} />
            ))}
        </div>
    </section>
);

const Services = () => (
    <section id="services" className="services container">
        <h2 className="section-title"><FaBriefcase className="section-icon" /> Services I Offer</h2>
        <div className="services-grid">
            {portfolioData.services.map((service, index) => (
                <div key={index} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    </section>
);

const Projects=()=>(<section id="projects" className="projects container"><h2 className="section-title"><FaLaptopCode className="section-icon"/> My Projects</h2><div className="project-grid">{portfolioData.projects.map((project,index)=><ProjectCard key={index} project={project}/>)}</div></section>);
const ProjectCard=({project})=>(<div className="project-card"><div className="project-card-content"><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag=><span key={tag} className="tag">{tag}</span>)}</div></div><div className="project-links"><a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo <FaExternalLinkAlt className="link-icon"/></a><a href={project.codeUrl} target="_blank" rel="noopener noreferrer">View Code <FaGithub className="link-icon"/></a></div></div>);
const Education=()=>(<section id="education" className="education container"><h2 className="section-title"><FaGraduationCap className="section-icon"/> Education</h2><div className="education-grid">{portfolioData.education.map((edu,index)=>(<div key={index} className="education-card"><h3>{edu.degree}</h3><p className="institution">{edu.institution}</p><p className="duration">{edu.duration} | {edu.cgpa}</p></div>))}</div></section>);
const Achievements=()=>(<section id="achievements" className="achievements container"><h2 className="section-title"><FaTrophy className="section-icon"/> Achievements & Certifications</h2><div className="achievements-grid"><div className="achievement-column"><h4><FaTrophy/> Achievements</h4><ul>{portfolioData.achievements.map((ach,index)=><li key={index}>{ach}</li>)}</ul></div><div className="achievement-column"><h4><FaCertificate/> Certifications</h4><ul>{portfolioData.certifications.map((cert,index)=><li key={index}>{cert}</li>)}</ul></div></div></section>);

const Contact = () => (
    <section id="contact" className="contact container">
      <h2 className="section-title"><FaPaintBrush className="section-icon" /> Get In Touch</h2>
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-btn red"></div>
          <div className="terminal-btn yellow"></div>
          <div className="terminal-btn green"></div>
        </div>
        <div className="terminal-body">
          <p><span className="prompt">kunj@portfolio:~$</span><span className="command">./show-contact-info</span></p>
          <p className="output">Initializing contact sequence...</p>
          <p className="output">You can reach me via the following channels:</p>
          <div className="output">
            <p>- <FaEnvelope className="output-icon"/> Email: <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a></p>
            <p>- <FaLinkedin className="output-icon"/> LinkedIn: <a href={portfolioData.contact.socials.linkedin} target="_blank" rel="noopener noreferrer">/in/kunj-bhatia</a></p>
            <p>- <FaGithub className="output-icon"/> GitHub: <a href={portfolioData.contact.socials.github} target="_blank" rel="noopener noreferrer">/kunjbhatia23</a></p>
          </div>
          <p><span className="prompt">kunj@portfolio:~$</span><span className="cursor"></span></p>
        </div>
      </div>
    </section>
);

const Footer=()=>(<footer className="footer"><p>&copy; {new Date().getFullYear()} {portfolioData.name}. Crafted with <span role="img" aria-label="love">💜</span></p></footer>);

// --- STYLING ---
const StyleTag = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;700&display=swap');
    :root {
      --bg-color: #0A0A0A; --text-color: #e0e0e0; --primary-color: #9333ea;
      --card-bg-color: rgba(26, 26, 26, 0.5); --border-color: rgba(255, 255, 255, 0.1); 
      --font-heading: 'Space Mono', monospace; --font-body: 'Inter', sans-serif; --container-width: 1200px;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: var(--font-body); background-color: var(--bg-color); color: var(--text-color); line-height: 1.7; overflow-x: hidden; }
    
    .spotlight { position: fixed; width: 400px; height: 400px; border-radius: 50%; background: radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, rgba(147, 51, 234, 0) 70%); pointer-events: none; transform: translate(-50%, -50%); z-index: 0; transition: background 0.2s ease; }
    body:hover .spotlight { background: radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(147, 51, 234, 0) 60%); }
    .aurora-background { position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; z-index: -1; overflow: hidden; }
    .aurora-shape { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.4; }
    .aurora-shape.shape1 { width: 500px; height: 500px; background: #5831d1; top: -100px; left: -100px; animation: moveAurora1 20s infinite alternate ease-in-out; }
    .aurora-shape.shape2 { width: 400px; height: 400px; background: #d322c3; bottom: -50px; right: -50px; animation: moveAurora2 25s infinite alternate ease-in-out; }
    .aurora-shape.shape3 { width: 300px; height: 300px; background: #22d3ee; bottom: 100px; left: 200px; animation: moveAurora3 18s infinite alternate ease-in-out; }
    @keyframes moveAurora1 { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(200px, 300px) rotate(180deg); } }
    @keyframes moveAurora2 { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(-300px, -200px) rotate(270deg); } }
    @keyframes moveAurora3 { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(100px, -200px) rotate(90deg); } }

    .portfolio-wrapper { position: relative; z-index: 1; }
    .container { width: 90%; max-width: var(--container-width); margin: 0 auto; padding: 6rem 0; position: relative; z-index: 2; }
    h1, h2, h3 { font-family: var(--font-heading); color: #fff; font-weight: 700; letter-spacing: -0.05em; }
    h1 { font-size: 4.5rem; } h2 { font-size: 3rem; } h3 { font-size: 1.8rem; } h4 { font-size: 1.4rem; color: var(--primary-color); margin-bottom: 1rem; }
    .section-title { text-align: center; margin-bottom: 4rem; position: relative; display: flex; align-items: center; justify-content: center; gap: 15px; color: #fff; text-shadow: 0 0 10px rgba(147, 51, 234, 0.3); }
    .section-title .section-icon { font-size: 2.5rem; color: var(--primary-color); }
    .section-title::after { content: ''; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 80px; height: 5px; background-color: var(--primary-color); border-radius: 3px; }
    a { color: var(--primary-color); text-decoration: none; transition: color 0.3s ease, transform 0.2s ease; } a:hover { color: #fff; transform: translateY(-2px); }
    
    .header { position: sticky; top: 0; width: 100%; background-color: rgba(10, 10, 10, 0.7); backdrop-filter: blur(16px); z-index: 10; padding: 1.2rem 0; border-bottom: 1px solid var(--border-color); }
    .header .container { display: flex; justify-content: space-between; align-items: center; padding: 0 2rem; width: 100%; max-width: var(--container-width); margin: 0 auto; }
    a.logo { font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; color: var(--primary-color); text-shadow: 0 0 5px rgba(147, 51, 234, 0.5); }
    a.logo:hover { color: var(--primary-color); transform: scale(1.05); }
    .header nav { display: flex; flex-wrap: wrap; justify-content: center; } .header nav a { margin-left: 1.5rem; font-weight: 500; font-size: 1rem; position: relative; }
    .header nav a::after { content: ''; position: absolute; left: 0; bottom: -5px; width: 0; height: 2px; background-color: #fff; transition: width 0.3s ease; } .header nav a:hover::after { width: 100%; }
    
    .hero { min-height: 90vh; display: flex; flex-direction: column; justify-content: center; text-align: center; }
    .hero-text { max-width: 900px; margin: 0 auto; } .hero p { font-size: 1.7rem; max-width: 700px; margin: 1.5rem auto 3rem auto; font-weight: 300; color: #c0c0c0; }
    .typed-text { min-height: 80px; }
    .cursor { display: inline-block; background-color: #c0c0c0; margin-left: 8px; width: 4px; animation: blink 1s infinite; }
    @keyframes blink { 50% { opacity: 0; } }
    .cta-button { display: inline-flex; align-items: center; gap: 10px; padding: 1.2rem 2.5rem; background: linear-gradient(45deg, var(--primary-color), #da6ee0); color: #fff; border-radius: 8px; font-weight: 700; font-family: var(--font-heading); font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.3s ease; border: none; box-shadow: 0 5px 15px rgba(147, 51, 234, 0.4); }
    .cta-button:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 15px 30px rgba(147, 51, 234, 0.5); }
    .cta-button .icon-after { font-size: 1.2rem; }
    .resume-button { margin: 2rem 0; }
    
    .about-content { max-width: 900px; margin: 0 auto; text-align: center; } .skills h3 { margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary-color); font-size: 1.6rem; }
    .skill-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
    .skill-tag { background-color: rgba(42, 42, 42, 0.7); padding: 10px 20px; border: 1px solid var(--primary-color); border-radius: 25px; font-size: 0.95rem; font-weight: 500; transition: all 0.3s ease; opacity: 0; animation: fadeInUp 0.5s ease forwards; }
    .skill-tag:hover { background-color: var(--primary-color); color: #fff; transform: translateY(-3px) scale(1.05); }
    
    .timeline { max-width: 900px; margin: 0 auto; position: relative; padding: 2rem 0; }
    .timeline::before { content: ''; position: absolute; left: 20px; top: 0; bottom: 0; width: 4px; background: var(--border-color); border-radius: 2px; }
    .timeline-item { position: relative; margin-bottom: 3rem; padding-left: 60px; opacity: 0; transform: translateX(-50px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
    .timeline-item.is-visible { opacity: 1; transform: translateX(0); }
    .timeline-item::before { content: ''; position: absolute; left: 8px; top: 5px; width: 25px; height: 25px; background-color: var(--primary-color); border-radius: 50%; border: 4px solid var(--bg-color); }
    .timeline-content h3 { color: #fff; } .timeline-content .company { color: var(--primary-color); font-weight: 500; }

    .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; max-width: 1200px; margin: 0 auto; }
    .service-card { background-color: var(--card-bg-color); border: 1px solid var(--border-color); backdrop-filter: blur(10px); border-radius: 12px; padding: 2.5rem; text-align: center; transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .service-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.3); border-color: var(--primary-color); }
    .service-icon { font-size: 3.5rem; color: var(--primary-color); margin-bottom: 1.5rem; }
    .service-card h3 { margin-bottom: 1rem; color: #fff; }
    
    .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
    .project-card { background-color: var(--card-bg-color); border: 1px solid var(--border-color); backdrop-filter: blur(10px); border-radius: 12px; padding: 2.5rem; display: flex; flex-direction: column; transition: transform 0.4s ease, box-shadow 0.4s ease; transform-style: preserve-3d; }
    .project-card:hover { transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.05); box-shadow: 0 20px 40px rgba(0,0,0,0.4); border-color: var(--primary-color); }
    .project-card-content { display: flex; flex-direction: column; flex-grow: 1; }
    .project-card h3 { color: var(--primary-color); }
    .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; padding-top: 1rem; border-top: 1px dashed rgba(255,255,255,0.1); }
    .project-tags .tag { background-color: rgba(147, 51, 234, 0.2); color: var(--primary-color); font-size: 0.85rem; padding: 6px 12px; border-radius: 6px; }
    .project-links { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); display: flex; gap: 1.5rem; }
    .project-links a { display: inline-flex; align-items: center; gap: 8px; color: #fff; background-color: var(--primary-color); padding: 0.7rem 1.2rem; border-radius: 5px; }
    .project-links a:nth-child(2) { background-color: transparent; border: 2px solid var(--primary-color); color: var(--primary-color); }
    .project-links a:hover { background-color: #fff; color: var(--primary-color); }
    .project-links a:nth-child(2):hover { background-color: var(--primary-color); color: #fff; }
    
    .education-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; max-width: 900px; margin: 0 auto; }
    .education-card { background: var(--card-bg-color); border-left: 5px solid var(--primary-color); padding: 2rem; border-radius: 8px; backdrop-filter: blur(10px); }
    
    .achievements-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 900px; margin: 0 auto; }
    .achievement-column { background: var(--card-bg-color); padding: 2rem; border-radius: 8px; backdrop-filter: blur(10px); }
    .achievement-column ul { list-style: none; } .achievement-column ul li { padding: 0.5rem 0; position: relative; padding-left: 25px; }
    .achievement-column ul li::before { content: '🏆'; position: absolute; left: 0; } .achievement-column:last-child ul li::before { content: '📜'; }

    /* --- NEW Terminal Contact Section --- */
    .terminal-window { max-width: 800px; margin: 2rem auto; background: #1e1e1e; border: 1px solid var(--border-color); border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); }
    .terminal-header { background: #333; padding: 8px; border-top-left-radius: 7px; border-top-right-radius: 7px; display: flex; align-items: center; }
    .terminal-btn { width: 12px; height: 12px; border-radius: 50%; margin-right: 8px; }
    .terminal-btn.red { background: #ff5f56; } .terminal-btn.yellow { background: #ffbd2e; } .terminal-btn.green { background: #27c93f; }
    .terminal-body { padding: 1.5rem; font-family: var(--font-heading); font-size: 1rem; line-height: 1.8; }
    .terminal-body .prompt { color: #27c93f; } .terminal-body .command { color: #e0e0e0; margin-left: 0.5rem; }
    .terminal-body .output { color: #c0c0c0; } .terminal-body .output-icon { margin-right: 0.5rem; color: var(--primary-color); }
    .terminal-body .output a { color: #38bdf8; text-decoration: underline; } .terminal-body .output a:hover { color: #7dd3fc; }

    .footer { text-align: center; padding: 3rem 0; border-top: 1px solid var(--border-color); color: #888; margin-top: 4rem; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
    .fade-in-up { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.17, 0.84, 0.44, 1) forwards; }
    @media (max-width: 768px) { .spotlight { display: none; } }
  `}</style>
);