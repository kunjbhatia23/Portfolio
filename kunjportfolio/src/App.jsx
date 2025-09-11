import React, { useState, useEffect, useRef } from 'react';
import {
    FaGithub, FaLinkedin, FaEnvelope, FaCode, FaPaintBrush, FaLaptopCode, FaRocket,
    FaBriefcase, FaGraduationCap, FaTrophy, FaCertificate, FaExternalLinkAlt, FaMobileAlt,
    FaPenNib, FaCameraRetro, FaDownload, FaSun, FaMoon, FaBars, FaTimes, FaBehance
} from 'react-icons/fa';

// --- CUSTOM HOOKS (No Changes Here) ---

const useTypewriter = (text, speed = 50) => {
    const [displayText, setDisplayText] = useState('');
    useEffect(() => {
        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(text.substring(0, i + 1));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);
        return () => clearInterval(typingInterval);
    }, [text, speed]);
    return displayText;
};

const useIntersectionObserver = (options) => {
    const [entry, setEntry] = useState(null);
    const [node, setNode] = useState(null);
    const observer = useRef(new IntersectionObserver(([entry]) => setEntry(entry), options));
    useEffect(() => {
        const { current: currentObserver } = observer;
        currentObserver.disconnect();
        if (node) {
            currentObserver.observe(node);
        }
        return () => currentObserver.disconnect();
    }, [node]);
    return [setNode, entry];
};

// --- RESUME DATA (No Changes Here) ---

const portfolioData = {
    name: "KUNJ BHATIA",
    headline: "Aspiring Software Developer skilled in MERN Stack, React Native, and UI/UX Design.",
    bio: "MCA student and aspiring software developer with hands-on experience in MERN Stack, React Native, and UI/UX design. Skilled in building responsive web and mobile applications, API integration, and database management. Strong foundation in C++, Python, and MySQL, with a proven ability to deliver user-friendly, functional solutions in team environments.",
    contact: {
        email: "kunjbhatia23@gmail.com",
        phone: "+91-9971074726",
        socials: {
            linkedin: "https://linkedin.com/in/kunj-bhatia",
            github: "https://github.com/kunjbhatia23",
            behance: "https://www.behance.net/kunjbhatia23"
        },
        resumeUrl: "https://drive.google.com/file/d/1g0iZ9gVS0D18gKqQd1IaX-5z0mnCAFRN/"
    },
    experience: [
        {
            role: "Full Stack & React Native Developer",
            company: "Aap Ka Bazar, Dwarka",
            duration: "May 2024 - Present",
            description: [
                "Developed mobile features for delivery workflow, improving efficiency.",
                "Integrated APIs for real-time order fetching & optimized image uploads with Multer.",
                "Enhanced UI across multiple screens for improved UX."
            ]
        },
        {
            role: "React.js Frontend Intern",
            company: "Globtier Infotech, Noida",
            duration: "Jul – Aug 2023",
            description: [
                "Developed projects including a Book List app, an API-integrated chatbot, and a To-Do List.",
                "Collaborated using GitHub workflows, reducing merge conflicts and improving delivery speed."
            ]
        }
    ],
    education: [
        {
            degree: "Master of Computer Applications (MCA)",
            institution: "Jagan Institute of Management Studies, New Delhi",
            duration: "2024–2026",
            cgpa: "8.36 CGPA"
        },
        {
            degree: "Bachelor of Computer Applications (BCA)",
            institution: "Sirifort Institute of Management Studies, New Delhi",
            duration: "2021–2024",
            cgpa: "8.88 CGPA"
        }
    ],
    skills: [
        "C++", "Python", "React.js", "Next.js", "HTML", "CSS", "Tailwind CSS",
        "JavaScript", "Figma", "Canva", "SQL", "MongoDB", "Node.js", "Express.js",
        "RESTful API", "Git/GitHub", "VSCode", "Vercel", "Render"
    ],
    services: [
        { icon: <FaCode />, title: "Frontend Development", description: "Building responsive and interactive user interfaces with React.js, Next.js, and modern CSS frameworks." },
        { icon: <FaLaptopCode />, title: "Full-Stack Development", description: "Creating complete web applications using the MERN stack (MongoDB, Express.js, React, Node.js)." },
        { icon: <FaMobileAlt />, title: "Mobile App Development", description: "Developing cross-platform mobile applications with React Native for both iOS and Android." },
        { icon: <FaPaintBrush />, title: "UI/UX Design", description: "Designing user-friendly and visually appealing interfaces with Figma and Adobe XD." },
        { icon: <FaPenNib />, title: "Graphic Design", description: "Creating logos, icons, and other graphic elements for your brand." },
        { icon: <FaCameraRetro />, title: "Photo/Video Editing", description: "Editing and enhancing photos and videos for a professional look and feel." }
    ],
    projects: [
        { title: "AI Test Case Generator for GitHub", description: "A web app that connects to public GitHub repos, selects code files, and uses the Gemini API to automatically generate test case summaries and full test code.", tags: ["React", "Gemini API", "Jest", "RTL", "Tailwind CSS"], liveUrl: "https://kunjaitestcasegenerator.vercel.app/", codeUrl: "https://github.com/kunjbhatia23/test-case-generator" },
        { title: "Budget Guru – Personal Finance Dashboard", description: "Multi-profile budgeting, expense splitting, and asset tracking with interactive charts.", tags: ["Next.js", "TypeScript", "MongoDB", "Tailwind"], liveUrl: "https://budget-guru-proj.vercel.app/", codeUrl: "https://github.com/kunjbhatia23/Budget_Guru" },
        { title: "Alumnify – Student-Alumni Portal", description: "Features a matching algorithm, mentor chats, forums, and alumni engagement tools.", tags: ["React.js", "Python", "MongoDB"], liveUrl: "#", codeUrl: "https://github.com/Samartho7/Student_alumni" },
        { title: "GameTalk – Gaming Community Platform", description: "AI chatbot, real-time news, esports tracking, and an integrated merchandise store.", tags: ["React.js", "Node.js", "OpenAI API"], liveUrl: "#", codeUrl: "" },
        { title: "Invoicely – Invoicing Tool", description: "Generates GST-compliant invoices with transaction filtering and advanced search.", tags: ["Next.js", "TypeScript", "Drizzle ORM", "Hono.js", "PostgreSQL"], liveUrl: "https://invoicely-manager.vercel.app/sign-in", codeUrl: "https://github.com/Sourav-Goyal19/Invoicely" },
        { title: "Ride-O-Holic – Motorcycle Reservation System", description: "A bike reservation platform with model selection, dealer connections, and recommendations.", tags: ["HTML", "CSS", "JavaScript"], liveUrl: "https://kunjbhatia23.github.io/rideoholic/", codeUrl: "https://github.com/kunjbhatia23/rideoholic" }
    ],
    achievements: [
        "First Place in Generative AI Panel Discussion",
        "Second Runner-Up – Code Blitz Hackathon (25+ teams)",
        "Top 12 – Hack Vortex Hackathon (110+ teams)",
        "Hosted multiple tech events"
    ],
    certifications: [
        "Full Web Development Bootcamp",
        "Adobe XD UI/UX Design",
        "Adobe Premiere Pro Masterclass"
    ]
};

// --- Main App Component (No Changes Here) ---

export default function App() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'dark';
    });
    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = `${theme}-theme`;
    }, [theme]);
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };
    return (
        <div id="top" className="portfolio-wrapper">
            <StyleTag />
            <div
                className="spotlight"
                style={{
                    top: `${mousePosition.y}px`,
                    left: `${mousePosition.x}px`
                }}
            />
            <div className="aurora-background">
                <div className="aurora-shape shape1" />
                <div className="aurora-shape shape2" />
                <div className="aurora-shape shape3" />
            </div>
            <Header currentTheme={theme} toggleTheme={toggleTheme} />
            <main>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Projects />
                <Achievements />
                <Services />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}


// --- Section Components ---

// ====================================================================
// CRITICAL CHANGE #1: UPDATED HEADER COMPONENT WITH SCROLL LOCK LOGIC
// ====================================================================
const Header = ({ currentTheme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollPosition = useRef(0);

    useEffect(() => {
        if (isMenuOpen) {
            // Save the current scroll position
            scrollPosition.current = window.scrollY;
            // Add the lock class to the body
            document.body.classList.add('body-no-scroll');
            // Apply a negative top margin to keep the view in place
            document.body.style.top = `-${scrollPosition.current}px`;
        } else {
            // Remove the lock class
            document.body.classList.remove('body-no-scroll');
            // Remove the inline style
            document.body.style.top = '';
            // Restore the scroll position
            window.scrollTo(0, scrollPosition.current);
        }
        return () => {
            document.body.classList.remove('body-no-scroll');
            document.body.style.top = '';
        };
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="header">
            <div className="container">
                <a href="#top" className="logo" onClick={closeMenu}>{portfolioData.name.split(' ')[0]}</a>
                <nav className={isMenuOpen ? 'nav-open' : ''}>
                    <a href="#about" onClick={closeMenu}>About</a>
                    <a href="#education" onClick={closeMenu}>Education</a>
                    <a href="#experience" onClick={closeMenu}>Experience</a>
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                    <a href="#achievements" onClick={closeMenu}>Achievements</a>
                    <a href="#services" onClick={closeMenu}>Services</a>
                    <a href="#contact" onClick={closeMenu}>Contact</a>
                </nav>
                <div className="header-actions">
                    <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                        {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>
                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
        </header>
    );
};

// --- Other Components (No Changes Here) ---

const Hero = () => { /* ... same as before ... */ 
    const typedHeadline = useTypewriter(portfolioData.headline, 60);
    return (
        <section className="hero container">
            <div className="hero-text">
                <h1 className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {portfolioData.name}
                </h1>
                <p className="fade-in-up typed-text" style={{ animationDelay: '0.4s' }}>
                    {typedHeadline}
                    <span className="cursor" />
                </p>
                <a
                    href={`mailto:${portfolioData.contact.email}`}
                    className="cta-button fade-in-up"
                    style={{ animationDelay: '0.6s' }}
                >
                    Get In Touch <FaRocket className="icon-after" />
                </a>
            </div>
        </section>
    );
};
const About = () => { /* ... same as before ... */ 
    return (
        <section id="about" className="about container">
            <h2 className="section-title">
                <FaCode className="section-icon" /> About Me
            </h2>
            <div className="about-content">
                <p>{portfolioData.bio}</p>
                <a
                    href={portfolioData.contact.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button resume-button"
                >
                    Download Resume <FaExternalLinkAlt className="icon-after" />
                </a>
                <div className="skills">
                    <h3>My Toolkit:</h3>
                    <div className="skill-tags">
                        {portfolioData.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="skill-tag"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
const TimelineItem = ({ job }) => { /* ... same as before ... */ 
    const [ref, entry] = useIntersectionObserver({ threshold: 0.5, triggerOnce: true });
    const isVisible = entry && entry.isIntersecting;
    return (
        <div ref={ref} className={`timeline-item ${isVisible ? 'is-visible' : ''}`}>
            <div className="timeline-content">
                <h3>{job.role}</h3>
                <p className="company">
                    {job.company} <span className="duration">{job.duration}</span>
                </p>
                <ul>
                    {job.description.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
const Experience = () => { /* ... same as before ... */ 
    return (
        <section id="experience" className="experience container">
            <h2 className="section-title">
                <FaBriefcase className="section-icon" /> Professional Experience
            </h2>
            <div className="timeline">
                {portfolioData.experience.map((job, index) => (
                    <TimelineItem key={index} job={job} />
                ))}
            </div>
        </section>
    );
};
const Services = () => { /* ... same as before ... */ 
    return (
        <section id="services" className="services container">
            <h2 className="section-title">
                <FaBriefcase className="section-icon" /> Services I Offer
            </h2>
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
};
const ProjectCard = ({ project }) => { /* ... same as before ... */ 
    return (
        <div className="project-card">
            <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
            </div>
            <div className="project-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo <FaExternalLinkAlt className="link-icon" />
                </a>
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    View Code <FaGithub className="link-icon" />
                </a>
            </div>
        </div>
    );
};
const Projects = () => { /* ... same as before ... */ 
    return (
        <section id="projects" className="projects container">
            <h2 className="section-title">
                <FaLaptopCode className="section-icon" /> My Projects
            </h2>
            <div className="project-grid">
                {portfolioData.projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
};
const Education = () => { /* ... same as before ... */ 
    return (
        <section id="education" className="education container">
            <h2 className="section-title">
                <FaGraduationCap className="section-icon" /> Education
            </h2>
            <div className="education-grid">
                {portfolioData.education.map((edu, index) => (
                    <div key={index} className="education-card">
                        <h3>{edu.degree}</h3>
                        <p className="institution">{edu.institution}</p>
                        <p className="duration">{edu.duration} | {edu.cgpa}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
const Achievements = () => { /* ... same as before ... */ 
    return (
        <section id="achievements" className="achievements container">
            <h2 className="section-title">
                <FaTrophy className="section-icon" /> Achievements & Certifications
            </h2>
            <div className="achievements-grid">
                <div className="achievement-column">
                    <h4><FaTrophy /> Achievements</h4>
                    <ul>
                        {portfolioData.achievements.map((ach, index) => (
                            <li key={index}>{ach}</li>
                        ))}
                    </ul>
                </div>
                <div className="achievement-column">
                    <h4><FaCertificate /> Certifications</h4>
                    <ul>
                        {portfolioData.certifications.map((cert, index) => (
                            <li key={index}>{cert}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
const Contact = () => { /* ... same as before ... */ 
    return (
        <section id="contact" className="contact container">
            <h2 className="section-title">
                <FaPaintBrush className="section-icon" /> Get In Touch
            </h2>
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-btn red" />
                    <div className="terminal-btn yellow" />
                    <div className="terminal-btn green" />
                </div>
                <div className="terminal-body">
                    <p>
                        <span className="prompt">kunj@portfolio:~$</span>
                        <span className="command">./show-contact-info</span>
                    </p>
                    <p className="output">Initializing contact sequence...</p>
                    <p className="output">You can reach me via the following channels:</p>
                    <div className="output">
                        <p>
                            - <FaEnvelope className="output-icon" /> Email: <a href={`mailto:${portfolioData.contact.email}`}>{portfolioData.contact.email}</a>
                        </p>
                        <p>
                            - <FaLinkedin className="output-icon" /> LinkedIn: <a href={portfolioData.contact.socials.linkedin} target="_blank" rel="noopener noreferrer">/kunj-bhatia</a>
                        </p>
                        <p>
                            - <FaGithub className="output-icon" /> GitHub: <a href={portfolioData.contact.socials.github} target="_blank" rel="noopener noreferrer">/kunjbhatia23</a>
                        </p>
                        <p>
                           - <FaBehance className="output-icon"/> Behance: <a href={portfolioData.contact.socials.behance} target="_blank" rel="noopener noreferrer">/kunjbhatia23</a>
                        </p>
                        <p>
                           - <FaDownload className="output-icon"/> Resume: <a href={portfolioData.contact.resumeUrl} target="_blank" rel="noopener noreferrer">Download Resume</a>
                        </p>
                    </div>
                    <p>
                        <span className="prompt">kunj@portfolio:~$</span>
                        <span className="cursor" />
                    </p>
                </div>
            </div>
        </section>
    );
};
const Footer = () => { /* ... same as before ... */ 
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} {portfolioData.name}. Crafted with <span role="img" aria-label="love">💜</span></p>
        </footer>
    );
};


// ===============================================
// CRITICAL CHANGE #2: UPDATED STYLES
// ===============================================

const StyleTag = () => (
    <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&family=Inter:wght@400;500;700&display=swap');
        
        /* --- THEME AND GLOBAL STYLES --- */
        :root {
            --font-heading: 'Roboto Mono', monospace;
            --font-body: 'Inter', sans-serif;
            --container-width: 1200px;
            --transition-speed: 0.3s;
        }

        .dark-theme {
            --bg-color: #0A0A0A;
            --text-color: #e0e0e0;
            --primary-color: #9333ea;
            --heading-color: #ffffff;
            --card-bg-color: rgba(26, 26, 26, 0.5);
            --border-color: rgba(255, 255, 255, 0.1);
            --spotlight-color: rgba(147, 51, 234, 0.15);
            --spotlight-hover-color: rgba(147, 51, 234, 0.2);
            --header-bg: rgba(10, 10, 10, 0.7);
            --terminal-bg: #1e1e1e;
            --terminal-header-bg: #333;
        }

        .light-theme {
            --bg-color: #F5F5F5;
            --text-color: #333333;
            --primary-color: #7c3aed;
            --heading-color: #111111;
            --card-bg-color: rgba(255, 255, 255, 0.6);
            --border-color: rgba(0, 0, 0, 0.1);
            --spotlight-color: rgba(124, 58, 237, 0.1);
            --spotlight-hover-color: rgba(124, 58, 237, 0.15);
            --header-bg: rgba(245, 245, 245, 0.7);
            --terminal-bg: #ffffff;
            --terminal-header-bg: #e0e0e0;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        body {
            font-family: var(--font-body);
            background-color: var(--bg-color);
            color: var(--text-color);
            line-height: 1.7;
            overflow-x: hidden;
            transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;
        }

        /* NEW, ROBUST SCROLL LOCK STYLE */
        .body-no-scroll {
            position: fixed;
            width: 100%;
            overflow-y: scroll; /* Prevents content shift from scrollbar disappearing */
        }

        /* --- BACKGROUND EFFECTS (No Change) --- */
        .spotlight {
            position: fixed; width: 400px; height: 400px; border-radius: 50%;
            background: radial-gradient(circle, var(--spotlight-color) 0%, rgba(147, 51, 234, 0) 70%);
            pointer-events: none; transform: translate(-50%, -50%); z-index: 0; transition: background 0.2s ease;
        }
        body:hover .spotlight {
            background: radial-gradient(circle, var(--spotlight-hover-color) 0%, rgba(147, 51, 234, 0) 60%);
        }
        .aurora-background {
            position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
            z-index: -1; overflow: hidden;
        }
        .aurora-shape { position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.4; }
        .aurora-shape.shape1 { width: 500px; height: 500px; background: #5831d1; top: -100px; left: -100px; animation: moveAurora1 20s infinite alternate ease-in-out; }
        .aurora-shape.shape2 { width: 400px; height: 400px; background: #d322c3; bottom: -50px; right: -50px; animation: moveAurora2 25s infinite alternate ease-in-out; }
        .aurora-shape.shape3 { width: 300px; height: 300px; background: #22d3ee; bottom: 100px; left: 200px; animation: moveAurora3 18s infinite alternate ease-in-out; }
        @keyframes moveAurora1 { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(200px, 300px) rotate(180deg); } }
        @keyframes moveAurora2 { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(-300px, -200px) rotate(270deg); } }
        @keyframes moveAurora3 { from { transform: translate(0, 0) rotate(0deg); } to { transform: translate(100px, -200px) rotate(90deg); } }

        /* --- GENERAL STYLING (No Change) --- */
        .portfolio-wrapper { position: relative; z-index: 1; }
        .container { width: 90%; max-width: var(--container-width); margin: 0 auto; padding: 6rem 0; position: relative; z-index: 2; }
        h1, h2, h3 { font-family: var(--font-heading); color: var(--heading-color); font-weight: 700; }
        h1 { font-size: 4.5rem; } h2 { font-size: 3rem; } h3 { font-size: 1.8rem; } h4 { font-size: 1.4rem; color: var(--primary-color); margin-bottom: 1rem; }
        .section-title { text-align: center; margin-bottom: 4rem; position: relative; display: flex; align-items: center; justify-content: center; gap: 15px; color: var(--heading-color); text-shadow: 0 0 10px rgba(147, 51, 234, 0.3); }
        .section-title .section-icon { font-size: 2.5rem; color: var(--primary-color); }
        .section-title::after { content: ''; position: absolute; bottom: -15px; left: 50%; transform: translateX(-50%); width: 80px; height: 5px; background-color: var(--primary-color); border-radius: 3px; }
        a { color: var(--primary-color); text-decoration: none; transition: color 0.3s ease, transform 0.2s ease; }
        a:hover { color: var(--heading-color); transform: translateY(-2px); }

        /* --- HEADER (No Change to Desktop) --- */
        .header { position: sticky; top: 0; width: 100%; background-color: var(--header-bg); backdrop-filter: blur(16px); z-index: 10; padding: 1.2rem 0; border-bottom: 1px solid var(--border-color); }
        .header .container { display: flex; justify-content: space-between; align-items: center; padding: 0 2rem; width: 100%; max-width: var(--container-width); margin: 0 auto; }
        a.logo { font-family: var(--font-heading); font-size: 1.8rem; font-weight: 700; color: var(--primary-color); text-shadow: 0 0 5px rgba(147, 51, 234, 0.5); }
        a.logo:hover { color: var(--primary-color); transform: scale(1.05); }
        .header nav { display: flex; gap: 1.5rem; }
        .header nav a { font-weight: 500; font-size: 1rem; position: relative; color: var(--text-color); }
        .header nav a::after { content: ''; position: absolute; left: 0; bottom: -5px; width: 0; height: 2px; background-color: var(--heading-color); transition: width 0.3s ease; }
        .header nav a:hover::after { width: 100%; }
        .header-actions { display: flex; align-items: center; gap: 1rem; }
        .theme-toggle, .menu-toggle { background: none; border: none; color: var(--text-color); font-size: 1.5rem; cursor: pointer; transition: color 0.3s, transform 0.3s; }
        .theme-toggle:hover, .menu-toggle:hover { color: var(--primary-color); transform: scale(1.1); }
        .menu-toggle { display: none; z-index: 1001; }
        
        /* --- ALL OTHER STYLES (No Change) --- */
        .hero { min-height: 90vh; display: flex; flex-direction: column; justify-content: center; text-align: center; }
        .hero-text { max-width: 900px; margin: 0 auto; }
        .hero p { font-size: 1.7rem; max-width: 700px; margin: 1.5rem auto 3rem auto; font-weight: 300; color: var(--text-color); }
        .typed-text { min-height: 80px; }
        .cursor { display: inline-block; background-color: var(--text-color); margin-left: 8px; width: 4px; animation: blink 1s infinite; }
        @keyframes blink { 50% { opacity: 0; } }
        .cta-button { display: inline-flex; align-items: center; gap: 10px; padding: 1.2rem 2.5rem; background: linear-gradient(45deg, var(--primary-color), #da6ee0); color: #fff; border-radius: 8px; font-weight: 700; font-family: var(--font-heading); font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.3s ease; border: none; box-shadow: 0 5px 15px rgba(147, 51, 234, 0.4); }
        .cta-button:hover { transform: translateY(-5px) scale(1.02); box-shadow: 0 15px 30px rgba(147, 51, 234, 0.5); }
        .cta-button .icon-after { font-size: 1.2rem; }
        .resume-button { margin: 2rem 0; }
        .about-content { max-width: 900px; margin: 0 auto; text-align: center; }
        .skills h3 { margin-top: 3rem; margin-bottom: 1.5rem; color: var(--primary-color); font-size: 1.6rem; }
        .skill-tags { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; }
        .skill-tag { background-color: rgba(42, 42, 42, 0.7); padding: 10px 20px; border: 1px solid var(--primary-color); border-radius: 25px; font-size: 0.95rem; font-weight: 500; transition: all 0.3s ease; opacity: 0; animation: fadeInUp 0.5s ease forwards; }
        .light-theme .skill-tag { background-color: rgba(255, 255, 255, 0.8); }
        .skill-tag:hover { background-color: var(--primary-color); color: #fff; transform: translateY(-3px) scale(1.05); }
        .timeline { max-width: 900px; margin: 0 auto; position: relative; padding: 2rem 0; }
        .timeline::before { content: ''; position: absolute; left: 20px; top: 0; bottom: 0; width: 4px; background: var(--border-color); border-radius: 2px; }
        .timeline-item { position: relative; margin-bottom: 3rem; padding-left: 60px; opacity: 0; transform: translateX(-50px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }
        .timeline-item.is-visible { opacity: 1; transform: translateX(0); }
        .timeline-item::before { content: ''; position: absolute; left: 8px; top: 5px; width: 25px; height: 25px; background-color: var(--primary-color); border-radius: 50%; border: 4px solid var(--bg-color); }
        .timeline-content h3 { color: var(--heading-color); }
        .timeline-content .company { color: var(--primary-color); font-weight: 500; }
        .service-card, .project-card, .education-card, .achievement-column { background-color: var(--card-bg-color); border: 1px solid var(--border-color); backdrop-filter: blur(10px); border-radius: 12px; padding: 2.5rem; transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
        .service-card:hover, .project-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); border-color: var(--primary-color); }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
        .service-card { text-align: center; }
        .service-icon { font-size: 3.5rem; color: var(--primary-color); margin-bottom: 1.5rem; }
        .service-card h3 { margin-bottom: 1rem; color: var(--heading-color); }
        .project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
        .project-card { display: flex; flex-direction: column; }
        .project-card:hover { transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) scale(1.05); }
        .project-card-content { flex-grow: 1; }
        .project-card h3 { color: var(--primary-color); }
        .project-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; padding-top: 1rem; border-top: 1px dashed rgba(255,255,255,0.1); }
        .light-theme .project-tags { border-top-color: rgba(0,0,0,0.1); }
        .project-tags .tag { background-color: rgba(147, 51, 234, 0.2); color: var(--primary-color); font-size: 0.85rem; padding: 6px 12px; border-radius: 6px; }
        .project-links { margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color); display: flex; gap: 1.5rem; flex-wrap: wrap; }
        .project-links a { display: inline-flex; align-items: center; gap: 8px; color: #fff; background-color: var(--primary-color); padding: 0.7rem 1.2rem; border-radius: 5px; }
        .project-links a:nth-child(2) { background-color: transparent; border: 2px solid var(--primary-color); color: var(--primary-color); }
        .project-links a:hover { background-color: var(--heading-color); color: var(--bg-color); }
        .project-links a:nth-child(2):hover { background-color: var(--primary-color); color: #fff; }
        .education-grid { display: grid; grid-template-columns: 1fr; gap: 1.5rem; max-width: 900px; margin: 0 auto; }
        .education-card { border-left: 5px solid var(--primary-color); }
        .achievements-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; max-width: 900px; margin: 0 auto; }
        .achievement-column ul { list-style: none; }
        .achievement-column ul li { padding: 0.5rem 0; position: relative; padding-left: 25px; }
        .achievement-column ul li::before { content: '🏆'; position: absolute; left: 0; }
        .achievement-column:last-child ul li::before { content: '📜'; }
        .terminal-window { max-width: 800px; margin: 2rem auto; background: var(--terminal-bg); border: 1px solid var(--border-color); border-radius: 8px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); }
        .terminal-header { background: var(--terminal-header-bg); padding: 8px; border-top-left-radius: 7px; border-top-right-radius: 7px; display: flex; align-items: center; }
        .terminal-btn { width: 12px; height: 12px; border-radius: 50%; margin-right: 8px; }
        .terminal-btn.red { background: #ff5f56; }
        .terminal-btn.yellow { background: #ffbd2e; }
        .terminal-btn.green { background: #27c93f; }
        .terminal-body { padding: 1.5rem; font-family: var(--font-heading); font-size: 1rem; line-height: 1.8; }
        .terminal-body .prompt { color: #27c93f; }
        .terminal-body .command { color: var(--text-color); margin-left: 0.5rem; }
        .terminal-body .output { color: var(--text-color); opacity: 0.8; }
        .terminal-body .output-icon { margin-right: 0.5rem; color: var(--primary-color); }
        .terminal-body .output a { color: #38bdf8; text-decoration: underline; }
        .terminal-body .output a:hover { color: #7dd3fc; }
        .footer { text-align: center; padding: 3rem 0; border-top: 1px solid var(--border-color); color: #888; margin-top: 4rem; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in-up { opacity: 0; animation: fadeInUp 0.8s cubic-bezier(0.17, 0.84, 0.44, 1) forwards; }

        /* --- RESPONSIVE DESIGN --- */
        @media (max-width: 992px) {
            h1 { font-size: 3.5rem; }
            h2 { font-size: 2.5rem; }
            .hero p { font-size: 1.5rem; }
        }

        /* MOBILE DEVICES - THIS SECTION CONTAINS THE KEY FIX */
        @media (max-width: 768px) {
            .spotlight { display: none; }
            h1 { font-size: 2.5rem; }
            h2 { font-size: 2rem; }
            .hero p { font-size: 1.2rem; }
            .container { padding: 4rem 0; }

            /* THIS IS THE CRITICAL FIX FOR THE MENU LAYOUT */
            .header nav {
                /* Make it a full-screen fixed overlay */
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100vh;
                z-index: 1000; /* Ensure it's on top of other content */
                
                /* Layout for menu items */
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                /* Appearance and Animation */
                background-color: var(--bg-color);
                transform: translateX(100%);
                transition: transform 0.3s ease-in-out;
            }
            .header nav.nav-open {
                transform: translateX(0);
            }
            .header nav a {
                font-size: 2rem;
                margin: 1rem 0;
            }
            .menu-toggle {
                display: block;
                z-index: 1001; /* Ensure it's above the nav overlay */
            }

            .timeline::before { left: 10px; }
            .timeline-item { padding-left: 40px; }
            .timeline-item::before { left: -2px; }
            .project-grid, .services-grid, .achievements-grid { grid-template-columns: 1fr; }
            .terminal-body { font-size: 0.9rem; line-height: 1.6; padding: 1rem; }
        }
    `}
    </style>
);