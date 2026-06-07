"use client"
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills/Skills";
import { Toaster } from "react-hot-toast"
import styles from "./Home.module.scss"
import { LuLaptopMinimal } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <Toaster reverseOrder={false} />

      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}