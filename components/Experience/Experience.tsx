"use client";
import { motion } from "framer-motion";
import styles from "./Experiencce.module.scss";
import Shuffle from "../Shuffle";

const experiences = [
    {
        id: 1,
        title: "CLASSROOM TECHNOLOGY SUPPORT SPECIALIST",
        company: "Temple University",
        duration: "August 2025 - Present",
        description:
            "I keep Temple's teaching spaces running, handling 20+ support requests a week across hardware, software, network and AV, and resolving 95%+ of them on time. Most of it is diagnosing a problem fast while a class waits, which has made me a good deal quicker at narrowing down where a fault actually is.",
    },
    {
        id: 2,
        title: "PYTHON DATA ANALYST INTERN",
        company: "JR Dreams",
        duration: "June 2024 - September 2024",
        description:
            "I worked on large, messy datasets in Python with Pandas and NumPy, processing 45,000+ bug reports and help-desk tickets. Automating the cleaning and validation steps lifted data completeness by 40% for downstream ML inputs, and debugging the pipelines brought recurring errors down from 20 a week to 5, saving the team 8+ engineering hours every week.",
    },
    {
        id: 3,
        title: "FRONTEND DEVELOPER INTERN",
        company: "GatiSoftech",
        duration: "February 2024 - May 2024",
        description:
            "Built responsive Angular applications for a diamond-industry client, turning wireframes into cross-browser UI components alongside senior developers. For my undergraduate final project I designed and built a frontend website on my own, applying what I had picked up about modern web development and UI/UX.",
    },
];

const cardVariants: any = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
};

export default function Experience() {
    return (
        <section className={styles.experienceSection} id="experience">
            <div className={styles.experienceHeader}>
                <Shuffle
                    text="Experience"
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

            <div className={styles.timelineWrapper}>
                <div className={styles.timelineLine}></div>

                {experiences.map((exp, i) => (

                    <motion.div
                        key={exp.id}
                        className={`${styles.timelineCard} ${i % 2 === 0 ? styles.left : styles.right}`}
                        custom={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
                            e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
                        }}
                    >

                        <div className={styles.cardDot}></div>
                        <div className={styles.cardContent}>
                            <h3>{exp.title}</h3>
                            <h4>{exp.company}</h4>
                            <span className={styles.duration}>{exp.duration}</span>
                            <p>{exp.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
