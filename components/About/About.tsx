"use client";
import { motion } from "framer-motion";
import Shuffle from "../Shuffle";
import styles from "./About.module.scss"


export default function About() {
    const content = [
        "Hey! I'm Vivek Solanki, a Master's student in Computational Data Science at Temple University with interests in Software Engineering, Machine Learning, Artificial Intelligence, Data Science, SQL, and Cloud Computing.", 

        "My journey started with programming and problem-solving, but I quickly became fascinated by how software and data can work together to solve real-world challenges. Through internships, academic projects, and personal work, I've gained experience in software development, data engineering, machine learning, and cloud technologies.",

        "I've worked as a Frontend Developer Intern, a Python Developer Intern, and currently support technology operations at Temple University. These experiences have helped me develop strong technical, analytical, and problem-solving skills while working with diverse technologies and real-world systems.",

        "Some of my favorite projects include Voise.ai, an AI-powered text-to-speech platform; a cloud-based image processing application built with Django, AWS EC2, and Amazon S3; a Financial Transaction NER system using spaCy and NLP; and a Recently, I researched hallucination detection in RAG systems using Hugging Face transformer models, including BART and DeBERTa, comparing zero-shot classification and fine-tuning approaches to evaluate the reliability of AI-generated responses.",

        "I'm passionate about building impactful solutions at the intersection of software, data, and AI. Whether it's developing applications, designing databases, creating machine learning models, or deploying cloud-based systems, I enjoy learning new technologies and solving meaningful problems."

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
