"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.scss";
import LightRays from '../LightRays';

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <LightRays
                raysOrigin="top-center"
                raysColor="#00ffff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
            />



            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Hi, I&rsquo;m <span>Vivek Solanki</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
            >
                Building data-driven applications and intelligent systems with SQL, Python, Machine Learning, and Artificial Intelligence. <span>alive</span>.
            </motion.p>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "180px" }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className={styles.underline}
            />

            <motion.div initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className={styles.ctaWrapper}>
                <motion.a
                    className={styles.cta}
                    href="#projects"

                >
                    View My Work
                </motion.a>
            </motion.div>
        </section>
    );
}
