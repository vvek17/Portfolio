"use client";
import styles from "./Projects.module.scss"
import Shuffle from '../Shuffle'
import { motion } from "framer-motion";



const projects = [
    {
        "id": 1,
        "title": "HOOT — Helpful Owl Of Temple",
        "image": "/images/hoot.svg",
        "alt": "hoot-research",
        "description": "An ongoing research collaboration under Temple's OpenOwls student org: a citation-backed RAG assistant that answers Temple faculty HR, benefits, and policy questions using only Temple's own published documents, each answer linked back to its source. Built with a deferral guard so the LLM stays silent rather than guessing when retrieval comes up empty, section-aware chunking, and BM25 + FlashRank re-ranking on top of dense retrieval.",
        "technologies": ["Python", "LangChain", "Claude API", "ChromaDB", "Sentence Transformers", "Streamlit", "RAG"],
        "url": "https://github.com/OpenOwls-at-Temple/hoot"
    },
    {
        "id": 2,
        "title": "Lyra AI",
        "image": "/images/lyraai.png",
        "alt": "lyra-ai",
        "description": "A full-stack text-to-speech and speech-to-speech web app covering the pipeline behind tools like ElevenLabs: typed text becomes natural speech in a chosen voice and language, and spoken recordings can be transcribed, translated, and re-spoken in another language. Includes accounts, credit tracking, and project-based history, built entirely on free-tier services.",
        "technologies": ["Next.js", "Node.js", "Express", "JWT Auth", "Speech-to-Text", "Text-to-Speech"],
        "url": "https://github.com/vvek17/LyraAI"
    },
    {
        "id": 3,
        "title": "Customer Segmentation",
        "image": "/images/custmor.jpg",
        "alt": "customer-segmentation",
        "description": "Built a customer segmentation platform analyzing 973 retail customers from 38 countries using Python (pandas, NumPy, scikit-learn, SciPy). Engineered 10 behavioral features from 50,000+ transactions: RFM analysis (Recency, Frequency, Monetary value), purchase patterns, and engagement metrics. Applied K-Means clustering (k=3) to identify 3 actionable customer segments: High-Value Loyal ($1,450 avg spend, 110 customers), Mid-Value Regular ($629 avg spend, 176 customers), and Low-Value Infrequent ($331 avg spend, 606 customers). Validated clustering with hierarchical analysis producing consistent 3-group structure. Implemented outlier removal (99th percentile) to refine dataset from 973 to 892 customers, improving segment interpretability.",
        "technologies": [ "Python", "Pandas", "NumPy", "scikit-learn", "SciPy", "Matplotlib", "Seaborn", "Jupyter Notebook" ],
        "url": "https://github.com/vvek17/Customer-segmentation-"
    },
    {
        "id": 4,
        "title": "Gulf Laser Tag",
        "image": "/images/gulflasertag.png",
        "alt": "gulflasertag",
        "description": "Gulf Laser Tag is a comprehensive platform offering premium laser-tag equipment, custom arena design, and business consultation services across the UAE and KSA. It supports clients from equipment selection through to venue launch and ongoing operation.",
        "technologies": ["Next.js", "React.js", "SCSS", "Node.js", "Express.js", "MongoDB"],
        "url": "https://www.gulflasertag.net/"
    },
    {
        "id": 5,
        "title": "A Comparative Study of Faithfulness Detection Methodsin Retrieval-Augmented Generation Systems",
        "image": "/images/rag.jpg",
        "alt": "RAG-Hallucination-Detection",
        "description": "Evaluated multiple hallucination detection methods on HaluEval (10,000 examples). Zero-shot NLI with BART-MNLI and DeBERTa-v3-Large achieved 68.8% accuracy, F1=0.657 with no training. Compared SummaC-Zero (67.2% accuracy) and fine-tuned DeBERTa-v3-small (failed to converge, loss=0.693). Established production-ready RAG hallucination detection baseline requiring zero training overhead..",
        "technologies": ["Python", "Hugging Face Transformers", "PyTorch", "scikit-learn", "HaluEval benchmark", "BART-MNLI", "DeBERTa-v3-Large", "DeBERTa-v3-small", "SummaC-Zero"], 
        "url": "https://github.com/vvek17/A-Comparative-Study-of-Faithfulness-Detection-Methods-.pdf"
    },
    {
        "id": 6,
        "title": "Voise.ai",
        "image": "/images/voise.png",
        "alt": "voise",
        "description": "Voise.ai is an advanced AI-powered text-to-speech platform that enables users to generate human-like voiceovers in multiple languages and accents. Tailored for content creators, educators, and businesses, it offers a seamless solution for creating engaging audio content for videos, podcasts, and presentations.",
        "technologies": ["Next.js", "React.js", "SCSS", "TailWind", "Node.js", "Express.js", "MongoDB"],
        "url": "https://voise.ai/"
    },
    {
        "id": 7,
        "title": "Neo4j Baseball Knowledge Graph",
        "image": "/images/neo4j_baseball.jpg",
        "alt": "neo4j-baseball-graph",
        "description": "Full-stack knowledge graph platform using Neo4j AuraDB to model 20+ college baseball programs. Ingests roster data from 800+ players, 40 coaches, and conference hierarchies. Features transfer detection, semantic player queries, and graph visualization with Cypher.",
        "technologies": ["Neo4j", "Cypher", "Python", "Selenium", "JavaScript", "Graph Database"],
        "url": "https://github.com/vvek17/DimondKG-Project"
    },
    {
        "id": 8,
        "title": "ScriptToVid",
        "image": "/images/scripttovid.png",
        "alt": "scripttovid",
        "description": "Freelance frontend build for an AI-driven storytelling platform that turns written scripts or audio files into narrated videos, with an in-browser video generator for scripting, characters, and backgrounds.",
        "technologies": ["Next.js", "React.js", "UI/UX Design"],
        "url": ""
    },
    {
        "id": 9,
        "title": "Taylor Sterling",
        "image": "/images/taylorsterling.png",
        "alt": "taylorsterling",
        "description": "Freelance marketing website for Taylor Sterling, an executive search firm serving the Middle East's built-environment sector, built to showcase their leadership placement services and press coverage.",
        "technologies": ["Next.js", "React.js", "SCSS", "UI/UX Design"],
        "url": ""
    },
    {
        "id": 10,
        "title": "Purposeful Network",
        "image": "/images/bitcorpen.png",
        "alt": "bitcorpen",
        "description": "Freelance landing page for a professional networking community platform, designed to drive membership sign-ups with a clean, welcoming brand identity.",
        "technologies": ["Next.js", "React.js", "UI/UX Design"],
        "url": ""
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