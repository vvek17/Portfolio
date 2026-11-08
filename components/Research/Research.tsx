"use client";
import styles from "./Research.module.scss";
import Shuffle from "../Shuffle";
import { motion } from "framer-motion";

const research = [
    {
        id: 1,
        title: "ALERT — Phishing-Susceptibility Digital Twin",
        image: "/images/alert.svg",
        alt: "alert-digital-twin",
        venue: "IHR Lab, Temple University · Advisor: Prof. Huanmei Wu",
        period: "Oct 2026 — Present",
        description:
            "Staff at a fictional hospital get simulated phishing and real email. ALERT predicts whether each person will click, report, or ignore a message. It never sees why they act. It only counts what it observes, as P(click) = yes / (yes + no). I wanted to know how far counting alone gets you. So I benchmarked the counting twin against a scikit-learn pipeline on the same data, and graded both on emails neither had seen. An email generator builds new phishing out of real messages. It swaps the details, like reference numbers, wards, days and times, then adds the things that make a message look fake. A SQLite schema seeds the personas. A Streamlit app runs the training and an instructor workspace. Backend and frontend stay split: if a module draws, it is frontend; if it decides, it is backend. Nothing in the backend imports Streamlit. Every name, domain and record is made up.",
        highlights: ["25 simulated staff", "Counting twin benchmarked against scikit-learn", "Graded on held-out emails", "Fully synthetic data"],
        technologies: ["Python", "scikit-learn", "pandas", "NumPy", "Streamlit", "Altair", "SQLite", "pytest"],
        url: "https://github.com/vvek17/Digital_twin",
    },
    {
        id: 2,
        title: "Alzheimer's AI Agent — M.S. Capstone",
        image: "/images/alzheimer.svg",
        alt: "alzheimers-ai-agent",
        venue: "Temple University · Advisor: Prof. Xinghua Mindy Shi",
        period: "In progress",
        description:
            "My Master's capstone, advised by Prof. Xinghua Mindy Shi: an agentic AI system for Alzheimer's, built so that every diagnostic tool it calls can be tested on its own. The imaging tool is the part that exists today, and I built and measured it on chest X-rays first, across four classes: Covid-19, Normal, Pneumonia and Tuberculosis. Nothing in it is fine-tuned. I froze Google's MedSigLIP encoder and trained only a linear probe on its embeddings. That reached 95.6% on a 2,791-image test set. Frozen DINOv2 scored 88.8% and RAD-DINO 87.9% under the same protocol. The same encoder used zero-shot scores 48.6%, so nearly all of the accuracy comes from the probe. I also ran a prompt-engineering study on MedGemma, with a strict 10/20/70 try-validate-test photo split. Adding one solved example per class took Normal vs Pneumonia to 90.71% on a 140-image held-out test (macro F1 0.9071, MCC 0.8144). Two lessons stuck. Short prompts beat elaborate ones on a small model. And naming a sign like “hazy” in the prompt makes the model see it in healthy lungs. The agent layer and the Alzheimer's-specific work are in progress, and I'll write them up as they take shape.",
        highlights: ["Imaging tool: 95.6% across four classes", "98.35% Normal vs Pneumonia", "MedGemma few-shot: 90.71%, macro F1 0.9071", "2,791-image test set", "No fine-tuning — frozen encoder"],
        technologies: ["Agentic AI", "PyTorch", "MedSigLIP", "MedGemma", "DINOv2", "RAD-DINO", "Hugging Face", "scikit-learn", "Streamlit", "Prompt Engineering"],
        url: "https://github.com/vvek17/chest-xray-agentic-ai",
    },
    {
        id: 3,
        title: "HOOT — Helpful Owl Of Temple",
        image: "/images/hoot.svg",
        alt: "hoot-research",
        venue: "Temple University · OpenOwls · Advisor: Prof. Alex Pang",
        period: "Jun 2026 — Present",
        description:
            "A RAG assistant that answers Temple faculty questions about HR, benefits and policy. It uses only Temple's own published documents, and every answer links back to its source. Retrieval is hybrid: dense vectors from ChromaDB plus BM25 sparse search, combined through LangChain's EnsembleRetriever and re-ranked with FlashRank. The part I care about most is the deferral guard. When nothing retrieved matches the question, the system says so instead of guessing. I also wrote HOOT's architecture, LLM-integration and deployment specs for the AI/ML engineer and DevOps engineer roles.",
        highlights: ["Hybrid dense + BM25 retrieval", "FlashRank re-ranking", "15 passing unit tests on the deferral guard"],
        technologies: ["Python", "LangChain", "Claude API", "ChromaDB", "BM25", "FlashRank", "RAG", "pytest"],
        url: "https://github.com/OpenOwls-at-Temple/hoot",
    },
    {
        id: 4,
        title: "A Comparative Study of Faithfulness Detection Methods in RAG",
        image: "/images/rag.jpg",
        alt: "rag-hallucination-detection",
        venue: "Temple University · M.S. research",
        period: "Jun 2026 — Jul 2026",
        description:
            "Comparing ways to catch a RAG system answering with something its source documents never said, measured across 10,000 HaluEval examples. Zero-shot NLI with BART-MNLI and DeBERTa-v3-Large reached 68.8% accuracy (F1 0.657) with no training at all, ahead of SummaC-Zero at 67.2%. The fine-tuned DeBERTa-v3-small looked like a dead end at first. Loss sat at 0.693, which is exactly ln 2, and it predicted one class for every example. I ruled out the obvious suspects by testing them: a raw PyTorch loop with the same learning rate and the same data converged inside one epoch. The real cause was a custom WeightedTrainer. It applied inverse-class-frequency loss weighting to a dataset that was already balanced 5,010 to 4,990, on top of label smoothing and a cosine schedule. Swapping it for plain cross-entropy gave 97.1% accuracy and F1 0.971 on a 3,000-example validation split. I also found the write-up had HaluEval's hallucination label documented backwards. The code was right; the prose was not.",
        highlights: ["10,000 HaluEval examples", "68.8% zero-shot, no training", "97.1% accuracy after root-causing the fine-tune", "Degenerate-training bug diagnosed, not guessed"],
        technologies: ["PyTorch", "Hugging Face", "DeBERTa-v3", "BART-MNLI", "SummaC-Zero", "HaluEval", "LLM-as-Judge"],
        url: "https://github.com/vvek17/A-Comparative-Study-of-Faithfulness-Detection-Methods-",
    },
];

function Research() {
    const handleMouseMove = (e: any, card: HTMLElement) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = ((x - centerX) / centerX) * 5;
        const rotateX = ((centerY - y) / centerY) * 5;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = "transform 0.1s ease-out";
    };

    const handleMouseLeave = (card: HTMLElement) => {
        card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)";
        card.style.transition = "transform 0.5s ease";
    };

    return (
        <section className={styles.researchSection} id="research">
            <div className={styles.researchMain}>
                <Shuffle
                    text="Research"
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

            <div className={styles.researchGrid}>
                {research.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={styles.researchCard}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.6, delay: (index % 2) * 0.15 }}
                        onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                        onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        onClick={item.url ? () => window.open(item.url, "_blank", "noopener,noreferrer") : undefined}
                        style={{ cursor: item.url ? "pointer" : "default" }}
                    >
                        <div className={styles.researchImage}>
                            <img src={item.image} alt={item.alt} />
                        </div>
                        <div className={styles.researchContent}>
                            <h3>{item.title}</h3>
                            <div className={styles.meta}>
                                <span className={styles.venue}>{item.venue}</span>
                                <span className={styles.period}>{item.period}</span>
                            </div>
                            <p>{item.description}</p>
                            {item.highlights.length > 0 && (
                                <ul className={styles.highlights}>
                                    {item.highlights.map((h, i) => (
                                        <li key={i}>{h}</li>
                                    ))}
                                </ul>
                            )}
                            <div className={styles.researchTechnologies}>
                                {item.technologies.map((tech, techIndex) => (
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
    );
}

export default Research;
