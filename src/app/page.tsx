import './globals.css';
import FAQs from "@/sections/FAQs";
import Footer from '@/sections/Footer';
import GallerySection from '@/sections/gallery';
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Skills from '@/sections/skills';

export default function Home() {
  return <>
  <Header/>
  <Hero/>
  <Intro/>
  <GallerySection/>
  <Projects/>
  <Skills/>
  <FAQs/>
  <Footer/>
  </>;
}
