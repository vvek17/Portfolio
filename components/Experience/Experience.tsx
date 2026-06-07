"use client";
import { motion } from "framer-motion";
import styles from "./Experiencce.module.scss";
import Shuffle from "../Shuffle";

const experiences = [
    {
        id: 1,
        title: "PYTHON DATA ANALYST INTERN",
        company: " JR Dreams",
        duration: "June 2024 - September 2024",
        description:
            "As a Python Developer Intern, I worked with large-scale datasets using Python, Pandas, and NumPy to improve data quality and streamline processing workflows. By automating data-cleaning and validation tasks, I enhanced data completeness, reduced pipeline errors, and supported data-driven decision-making for machine learning and analytics projects.",
    },
    {
        id: 2,
        title: "FRONTEND DEVELOPER INTERN",
        company: "GatiSoftech",
        duration: "Febuary 2024 - May 2024 ",
        description:
            "Worked as a Frontend Developer Intern, collaborating with senior developers to build responsive Angular applications and transform wireframes into user-friendly interfaces. As my undergraduate final project, I independently designed and developed a frontend website, applying modern web development and UI/UX principles."
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
