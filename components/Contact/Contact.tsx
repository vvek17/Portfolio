"use client";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaInstagram, FaFileDownload } from "react-icons/fa";
import styles from "./Contact.module.scss";
import Shuffle from "../Shuffle";
import toast from "react-hot-toast"

function Contact() {
    const handleResumeDownload = () => {
        const link = document.createElement("a");
        link.href = "/punit's_resume.pdf";
        link.download = "punit's__resume.pdf";
        link.click();
        setTimeout(() => {
            toast.success("Resume Downloaded")
        }, 1000)

    };

    const handleMail = () => {
        window.location.href = "mailto:vivek.s171202@gmail.com";
    }

    const handleCall = () => {
        window.location.href = "tel:+12673017876";
    }
    return (
        <section className={styles.contactSection} id="contact">
            <div className={styles.contactHeader}>
                <Shuffle
                    text="Let's Connect"
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

            <motion.div
                className={styles.contactContent}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
            >

                <div className={styles.contactMain}>
                    <button className={styles.contactCard} onClick={handleMail}>
                        <div className={styles.iconWrapper}>
                            <FaEnvelope className={styles.icon} />
                        </div>
                        <div className={styles.textWrapper}>
                            <a>vivek.s171202@gmail.com</a>
                        </div>
                    </button>

                    <button className={styles.contactCard} onClick={handleCall}>
                        <div className={styles.iconWrapper}>
                            <FaPhoneAlt className={styles.icon} />
                        </div>
                        <div className={styles.textWrapper}>
                            <a>+1 2673017876</a>
                        </div>
                    </button>
                </div>


                <div className={styles.socialSection}>
                    <h3>Socials</h3>
                    <div className={styles.socialLinks}>
                        <a href="https://www.linkedin.com/in/vivek-solanki1/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com/vvek17" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                    </div>
                </div>


                <motion.button
                    className={styles.resumeButtonWrapper}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    onClick={handleResumeDownload}

                >
                    <motion.div className={styles.resumeButton}>
                        My Resume
                    </motion.div>
                </motion.button>


            </motion.div>
        </section>
    );
}

export default Contact;
