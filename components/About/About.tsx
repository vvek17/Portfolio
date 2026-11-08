"use client";
import { motion } from "framer-motion";
import Shuffle from "../Shuffle";
import styles from "./About.module.scss"


export default function About() {
    const content = [
        "Hey, I'm Vivek. I'm doing a Master's in Computational Data Science at Temple University, and most of my work now sits in one place: AI systems you can actually trust to tell you when they don't know.",

        "That sounds abstract, so here is what it looks like. On HOOT, a RAG assistant for Temple faculty policy questions, I spent most of my time on the guard that keeps it quiet when retrieval comes up empty. A confident wrong answer about someone's benefits is worse than no answer. On a hallucination-detection study across 10,000 HaluEval examples, the fine-tuned model sat at exactly chance for a while. Chasing down why taught me more than the result did. It turned out to be a loss-weighting scheme quietly sabotaging an already-balanced dataset.",

        "I like problems where the honest answer is a number. Can a frozen medical encoder with nothing but a linear probe on top classify chest X-rays well enough to be a tool inside an agentic system? It turned out yes, 95.6% across four classes. Can a model predict who in an office clicks a phishing email purely by counting what it observes, with no access to their reasoning? That one I'm still finding out.",

        "Before the Master's I was building rather than researching. I worked as a Frontend Developer Intern, writing Angular for a diamond-industry client. Then as a Python Data Analyst Intern, cleaning 45,000+ records into something a model could use. I currently support classroom technology at Temple. I've also built things for their own sake: Voise.ai and Lyra AI for text-to-speech, a cloud image-processing app on Django with EC2 and S3, a financial-transaction NER system in spaCy, and a Neo4j knowledge graph of college baseball rosters.",

        "I'm looking for AI and ML engineering work where the evaluation matters as much as the model. If you have something in that direction, my inbox is open."

    ];

    return (

        <section className={styles.aboutSection} id="about">

            <div className={styles.aboutMain}>
                <Shuffle
                    text="About Me"
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

            <div className={styles.aboutContent}>
                {content.map((line, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        {line}
                    </motion.p>
                ))}
            </div>
        </section>
    );
}
