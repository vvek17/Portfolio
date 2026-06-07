"use client"
import React, { useState, useEffect } from 'react'
import styles from "./Header.module.scss"

function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [isInitialRender, setIsInitialRender] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        if (menuOpen) document.body.classList.add('noScroll')
        else document.body.classList.remove('noScroll')

        return () => document.body.classList.remove('noScroll')
    }, [menuOpen])


    useEffect(() => {
        // Disable scrolling on mount
        document.body.classList.add('noScroll')

        const timer = setTimeout(() => {
            setIsInitialRender(false)
            // Re-enable scrolling after animation
            document.body.classList.remove('noScroll')
        }, 2000)

        return () => {
            clearTimeout(timer)
            // Clean up: ensure scroll is re-enabled if component unmounts
            document.body.classList.remove('noScroll')
        }
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down
                setScrolled(true)
            } else {
                // Scrolling up
                setScrolled(false)
            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
        setMenuOpen(false) // Close menu after navigation
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const navItems = [
        { name: 'Home', id: 'hero' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'Contact', id: 'contact' }
    ]

    return (
        <>
            <div className={`${styles.stringsContainer} ${scrolled ? styles.scrolled : ''} ${isInitialRender ? styles.initial : ''}`}>
                <div className={`${styles.string} ${styles.stringLeft}`}></div>
                <div className={`${styles.string} ${styles.stringRight}`}></div>
            </div>
            <nav className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${isInitialRender ? styles.initial : ''}`}>
                <div className={styles.navContainer}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={styles.navItem}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Hamburger Menu Button */}
                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ''}`}>
                <div className={styles.mobileMenuItems}>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={styles.mobileNavItem}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Overlay */}
            {menuOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </>
    )
}

export default Header