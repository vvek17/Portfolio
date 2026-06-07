"use client";
import { motion } from "framer-motion";
import styles from "./Skills.module.scss"
import Shuffle from "../Shuffle";
import FallingText from "../FallingText";



export default function skills() {


    return (

        <section className={styles.skillsSection} id="skills">
            <div className={styles.skillsMain}>
                <Shuffle
                    text="Skills"
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
                    className="shuffle"
                />
            </div>

            <FallingText
                images={[
                    './icons/html.svg',
                    './icons/css.svg',
                    './icons/js.svg',
                    './icons/react.svg',
                    './icons/nextjs.jpg',
                    './icons/git.png',
                    './icons/github.png',
                    './icons/python.png',
                    './icons/npm.png',
                    './icons/node.png',
                    './icons/python.png',
                    './icons/sql.png',
                    './icons/pandas.png',
                    './icons/numpy.png',
                    './icons/scikit-learn.png',
                    './icons/tensorflow.png',
                    './icons/neo4j.png'
                ]}
                trigger="hover"
                backgroundColor="transparent"
                wireframes={false}
                gravity={0.56}
                imageSize={70}
                mouseConstraintStiffness={0.9}
                className={styles.fallDiv}
            />



        </section>
    );
}
