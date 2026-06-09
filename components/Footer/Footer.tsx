"use client"
import React from 'react'
import styles from "./Footer.module.scss"
import { FaPhoneAlt, FaHeart, FaEnvelope, FaLocationArrow, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


function Footer() {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
    }


    const navItems = [
        { name: 'Home', id: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' }
    ]

    const socialLinks = [
        { name: 'LinkedIn', icon: <FaLinkedin />, url: "https://www.linkedin.com/in/vivek-solanki1/" },
        { name: 'GitHub', icon: <FaGithub />, url: "https://github.com/vvek17" },
    ]

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Top Section */}
                <div className={styles.topSection}>
                    {/* Brand Column */}
                    <div className={styles.brandColumn}>
                        <h2 className={styles.logo}>Vivek Solanki</h2>
                        <p className={styles.tagline}>
                            Belives in building one component at a time.
                        </p>

                        <button
                            className={styles.ctaWrapper}
                        >
                            <p className={styles.cta}
                                onClick={() => scrollToSection('contact')}>
                                Let's Work Together
                            </p>
                        </button>

                    </div>

                    {/* Navigation Column */}
                    <div className={styles.navColumn}>
                        <h3 className={styles.columnTitle}>Quick Links</h3>
                        <nav className={styles.footerNav}>
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    className={styles.navLink}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Column */}
                    <div className={styles.contactColumn}>
                        <h3 className={styles.columnTitle}>Get in Touch</h3>
                        <div className={styles.contactInfo}>
                            <a href="mailto:vivek.s171202@gmail.com" className={styles.contactLink}>
                                <FaEnvelope /> vivek.s171202@gmail.com
                            </a>
                            <a href="tel:+12673017876" className={styles.contactLink}>
                                <FaPhoneAlt /> +1 2673017876
                            </a>

                        </div>
                    </div>

                    {/* Social Column */}
                    <div className={styles.socialColumn}>
                        <h3 className={styles.columnTitle}>Connect</h3>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    title={social.name}
                                >
                                    <span className={styles.socialIcon}>{social.icon}</span>
                                    <span className={styles.socialName}>{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className={styles.bottomSection}>
                    <div className={styles.copyright}>
                        <p>© 2026 Vivek Solanki. All rights reserved.</p>
                        <p className={styles.madeWith}>
                            Made with <span className={styles.heartIcon}><FaHeart /></span> by Vivek
                        </p>
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer
