"use client";
import styles from "./Projects.module.scss"
import Shuffle from '../Shuffle'
import { motion } from "framer-motion";



const projects = [
    {
        "id": 1,
        "title": "Lyra AI",
        "image": "/images/lyraai.png",
        "alt": "lyra-ai",
        "description": "A full-stack text-to-speech and speech-to-speech web app covering the pipeline behind tools like ElevenLabs: typed text becomes natural speech in a chosen voice and language, and spoken recordings can be transcribed, translated, and re-spoken in another language. Includes accounts with JWT, Google and OTP sign-in, per-user credit tracking, and project-based history, built entirely on free-tier services.",
        "technologies": ["Next.js", "Node.js", "Express", "MongoDB", "JWT Auth", "Speech-to-Text", "Text-to-Speech"],
        "url": "https://github.com/vvek17/LyraAI"
    },
    {
        "id": 2,
        "title": "Customer Segmentation",
        "image": "/images/custmor.jpg",
        "alt": "customer-segmentation",
        "description": "Segmentation of 973 retail customers across 38 countries, built in Python with pandas, NumPy, scikit-learn and SciPy. I engineered 10 behavioral features from 50,000+ transactions, including RFM analysis, purchase patterns and engagement metrics, then used K-Means at k=3 to pull out three segments worth marketing to differently: High-Value Loyal (110 customers, $1,450 average spend), Mid-Value Regular (176 customers, $629), and Low-Value Infrequent (606 customers, $331). Hierarchical clustering produced the same three-group structure, and trimming outliers at the 99th percentile narrowed the set from 973 to 892 and made the segments cleaner to read.",
        "technologies": ["Python", "Pandas", "NumPy", "scikit-learn", "SciPy", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        "url": "https://github.com/vvek17/Customer-segmentation-"
    },
    {
        "id": 3,
        "title": "Neo4j Baseball Knowledge Graph",
        "image": "/images/neo4j_baseball.jpg",
        "alt": "neo4j-baseball-graph",
        "description": "A knowledge graph in Neo4j AuraDB modeling 20+ college baseball programs, ingesting 800+ players, 40 coaches and the conference hierarchies above them into 589 nodes and 575 relationships. Roster data comes from a custom Python, Selenium and BeautifulSoup scraping pipeline. On top of it sit transfer detection, semantic player queries and graph visualization, all driven through Cypher.",
        "technologies": ["Neo4j", "Cypher", "Python", "Selenium", "BeautifulSoup", "Graph Database"],
        "url": "https://github.com/vvek17/DimondKG-Project"
    },
    {
        "id": 4,
        "title": "Voise.ai",
        "image": "/images/voise.png",
        "alt": "voise",
        "description": "Voise.ai is an AI text-to-speech platform that generates human-like voiceovers in multiple languages and accents. It is aimed at content creators, educators and businesses who need audio for videos, podcasts and presentations without a recording setup.",
        "technologies": ["Next.js", "React.js", "SCSS", "TailWind", "Node.js", "Express.js", "MongoDB"],
        "url": "https://voise.ai/"
    },
    {
        "id": 5,
        "title": "Gulf Laser Tag",
        "image": "/images/gulflasertag.png",
        "alt": "gulflasertag",
        "description": "A platform for a laser-tag equipment and arena-design business operating across the UAE and KSA, covering clients from equipment selection through venue launch and ongoing operation.",
        "technologies": ["Next.js", "React.js", "SCSS", "Node.js", "Express.js", "MongoDB"],
        "url": "https://www.gulflasertag.net/"
    }
]

function Projects() {


    const handleMouseMove = (e: any, card: HTMLElement) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Reduced to 5deg for very subtle tilt
        const rotateY = ((x - centerX) / centerX) * 5;
        const rotateX = ((centerY - y) / centerY) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = (card: HTMLElement) => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        card.style.transition = 'transform 0.5s ease';
    };



    return (

        <section className={styles.projectSection} id="projects">
            <div className={styles.projectMain}>
                <Shuffle
                    text="Projects"
                    shuffleDirection="right"
                    duration={0.35}
                    animationMode="evenodd"
                    shuffleTimes={1}
                    ease="power3.out"
                    stagger={0.03}
                    threshold={0.1}
                    triggerOnce={true}
                    triggerOnHover={false}
                    respectReducedMotion={true}
                />
            </div>

            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        className={styles.projectCard}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        onClick={project.url ? () => window.open(project.url, '_blank', 'noopener,noreferrer') : undefined}
                        style={{ cursor: project.url ? 'pointer' : 'default' }}
                    >
                        <div className={styles.projectImage}>
                            <img src={project.image} alt={project.alt} />
                        </div>
                        <div className={styles.projectContent}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className={styles.projectTechnologies}>
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className={styles.tech}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    )
}

export default Projects