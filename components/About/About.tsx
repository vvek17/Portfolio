"use client";
import { motion } from "framer-motion";
import Shuffle from "../Shuffle";
import styles from "./About.module.scss"


export default function About() {
    // const content = [
    //     "Hello there!  I’m Punit Vadhwani, a passionate React and Next.js developer with a strong foundation in HTML, CSS, and JavaScript. My journey in web development began with pure curiosity—I was fascinated by the instant impact of code on a webpage, from changing a button color to creating interactive elements. This fascination quickly turned into a dedication to crafting seamless and dynamic user experiences.",
    //     "Starting from the basics of HTML, CSS, and JS, I gradually moved to React, where I found a perfect balance of structure, flexibility, and creativity. Diving into Next.js allowed me to build modern, high-performance, and SEO-friendly applications, which further enhanced my skills as a frontend developer.",
    //     "Over the years, I have worked on diverse projects, ranging from small interactive components to complete web applications. Each project taught me the importance of clean, maintainable code, responsive design, and attention to detail in UI/UX. I thrive on challenges that push me to learn new technologies and implement creative solutions that delight users.",
    //     "Beyond coding, I’m deeply interested in modern web trends, animation, and interactive design. I enjoy blending technical expertise with creativity, making interfaces not just functional but visually engaging and memorable. I approach every project with a user-first mindset, ensuring that every interaction feels intuitive and every design element serves a purpose.",
    //     "I’m constantly exploring new libraries, tools, and techniques, always aiming to refine my craft. My goal is to build web applications that are fast, beautiful, and enjoyable to use, while also continuously improving my skills as a frontend engineer.",
    //     "Whether it’s collaborating on a team or developing solo projects, I bring curiosity, dedication, and precision to every line of code I write. I believe that technology is most powerful when it’s thoughtfully designed, and I aim to create experiences that users love to interact with."
    // ];


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
