"use client";
import styles from "./Research.module.scss";
import Shuffle from "../Shuffle";
import { motion } from "framer-motion";

const research = [
    {
        id: 1,
        title: "HOOT — Helpful Owl Of Temple",
        image: "/images/hoot.svg",
        alt: "hoot-research",
        venue: "Temple University · OpenOwls · Advisor: Prof. Alex Pang",
        period: "Jun 2026 — Present",
        description:
            "A citation-backed RAG assistant that answers Temple faculty HR, benefits, and policy questions using only Temple's own published documents, with every answer linked back to its source. Retrieval is hybrid: dense vectors from Chroma combined with BM25 sparse search through LangChain's EnsembleRetriever, then re-ranked with FlashRank. The part I care about most is the deferral guard — when nothing retrieved actually matches the question, the system says so instead of guessing. I also wrote HOOT's architecture, LLM-integration, and deployment specs for the AI/ML and DevOps engineer roles.",
        highlights: ["Hybrid dense + BM25 retrieval", "FlashRank re-ranking", "15 passing unit tests on the deferral guard"],
        technologies: ["Python", "LangChain", "Claude API", "ChromaDB", "BM25", "FlashRank", "RAG", "pytest"],
        url: "https://github.com/OpenOwls-at-Temple/hoot",
    },
    {
        id: 2,
        title: "Chest X-Ray Classification for an Agentic AI System",
        image: "/images/chestxray.svg",
        alt: "chest-xray-agentic-ai",
        venue: "Temple University · M.S. research",
        period: "Oct 2026 — Present",
        description:
            "Classifying chest X-rays as Covid-19, Normal, Pneumonia, or Tuberculosis, built as the imaging tool for a planned agentic AI system. Nothing here is fine-tuned. I froze Google's MedSigLIP encoder and trained only a linear probe on top of its embeddings, which reached 95.6% on a 2,791-image test set and beat frozen DINOv2 (88.8%) and RAD-DINO (87.9%) run the same way. For reference, the same encoder used zero-shot scores 48.6%, so almost all of that accuracy comes from the probe. Separately I ran a prompt-engineering study on MedGemma with a strict 10/20/70 try-validate-test photo split, where adding one solved example per class took Normal vs Pneumonia to 90.71% on a 140-image held-out test (macro F1 0.9071, MCC 0.8144). Two lessons stuck: short prompts beat elaborate ones on a small model, and naming a sign like \"hazy\" in the prompt makes the model see it in healthy lungs.",
        highlights: ["95.6% four-class accuracy", "98.35% Normal vs Pneumonia", "MedGemma few-shot: 90.71%, macro F1 0.9071", "2,791-image test set", "No fine-tuning — frozen encoder"],
        technologies: ["PyTorch", "MedSigLIP", "MedGemma", "DINOv2", "RAD-DINO", "Hugging Face", "scikit-learn", "Streamlit", "Prompt Engineering"],
        url: "https://github.com/vvek17/chest-xray-agentic-ai",
    },
    {
        id: 3,
        title: "A Comparative Study of Faithfulness Detection Methods in RAG",
        image: "/images/rag.jpg",
        alt: "rag-hallucination-detection",
        venue: "Temple University · M.S. research",
        period: "Jun 2026 — Jul 2026",
        description:
            "Comparing ways to catch a RAG system answering with something its source documents never said, measured across 10,000 HaluEval examples. Zero-shot NLI with BART-MNLI and DeBERTa-v3-Large reached 68.8% accuracy (F1 0.657) with no training at all, ahead of SummaC-Zero at 67.2%. The fine-tuned DeBERTa-v3-small initially looked like a dead end: loss pinned at 0.693, which is exactly ln 2, and one class predicted for every example. Rather than accept that, I ruled out the obvious suspects empirically — a raw PyTorch loop with the same learning rate and the same data converged inside one epoch. The real culprit was a custom WeightedTrainer applying inverse-class-frequency loss weighting to a dataset that was already balanced 5,010 to 4,990, stacked with label smoothing and a cosine schedule. Dropping it for plain cross-entropy took the model to 97.1% accuracy and F1 0.971 on a 3,000-example validation split. I also found the write-up had HaluEval's hallucination label documented backwards; the code was right, the prose was not.",
        highlights: ["10,000 HaluEval examples", "68.8% zero-shot, no training", "97.1% accuracy after root-causing the fine-tune", "Degenerate-training bug diagnosed, not guessed"],
        technologies: ["PyTorch", "Hugging Face", "DeBERTa-v3", "BART-MNLI", "SummaC-Zero", "HaluEval", "LLM-as-Judge"],
        url: "https://github.com/vvek17/A-Comparative-Study-of-Faithfulness-Detection-Methods-",
    },
    {
        id: 4,
        title: "ALERT — Phishing-Susceptibility Digital Twin",
        image: "/images/alert.svg",
        alt: "alert-digital-twin",
        venue: "Temple University · M.S. research",
        period: "Oct 2026 — Present",
        description:
            "Staff at a fictional hospital receive simulated phishing and legitimate email. ALERT learns to predict whether each person will click, report, or ignore a message, and it is never allowed to see why they really do it — it only counts what it observes, as P(click) = yes / (yes + no). The point of the constraint is to find out how far pure observation gets you, so I benchmarked the counting twin head-to-head against a scikit-learn pipeline on the same data and graded both on emails they had never seen. Supporting it is an email generator that builds fresh phishing from genuine messages by swapping entities and applying the modifications that make a message phishy, a SQLite schema seeding the personas, and a Streamlit app with an instructor workspace. Backend and frontend are strictly split: if a module draws it is frontend, if it decides it is backend, and nothing in backend imports Streamlit. Every name, domain, and record is fabricated.",
        highlights: ["25 simulated staff", "Counting twin benchmarked against scikit-learn", "Graded on held-out emails", "Fully synthetic data"],
        technologies: ["Python", "scikit-learn", "pandas", "NumPy", "Streamlit", "Altair", "SQLite", "pytest"],
        url: "https://github.com/vvek17/Digital_twin",
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
                            <ul className={styles.highlights}>
                                {item.highlights.map((h, i) => (
                                    <li key={i}>{h}</li>
                                ))}
                            </ul>
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
