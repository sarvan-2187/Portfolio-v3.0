'use client';

import Button from "@/components/button";
import Avatar_Linkedin from "@/components/linkedin";
import Avatar_Github from "@/components/github";
import Avatar_Instagram from "@/components/instagram";
import { FC ,useEffect, } from "react";
import { stagger, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useRef } from "react";

import SplitType from "split-type";
import { useAnimate, useScroll, useTransform } from "motion/react";

const navItems = [
  {
    href: '#',
    label: 'Home',
  },
  {
    href: '#',
    label: 'Projects',
  },
  {
    href: '#',
    label: 'FAQs',
  },
  {
    href: '#',
    label: 'About',
  },
  {
    href: '#',
    label: 'Contact',
  },
]
const Footer: FC = () => {
const ref = useRef(null);
const isInView = useInView(ref, { once: true, amount: 0.2 });
  return <footer id="contact" className="bg-stone-950 text-white">
    <div className="container">
      <div className="py-8 md:py-32 lg:py-30">
                  <div className="flex items-center gap-4 mb-2">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <p className="text-sm font-semibold text-green-400 tracking-wide uppercase">Available for new projects</p>
          </div>
        <div className="md:grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              
              <motion.h2
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mt-6 text-4xl md:text-7xl lg:text-8xl font-extralight"
              >
                Enough talk, Let&apos;s make something great together.
              </motion.h2>

              <a href="mailto:sarvankumarnagarampalli478@gmail.com">
              <Button variant="secondary" className="hover:bg-orange-900 transition-all duration-500 mt-8" iconAfter={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>}>Mail Me </Button>
              </a>
            </div>
            <div className="md:col-span-1">
              <nav className="flex flex-col md:items-end gap-8 mt-16 md:mt-0">
                {navItems.map(({href, label})=>(
                  <a className="uppercase text-lg h-auto px-0 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full" href={href} key={label}>{label}</a>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex flex-row pt-6 gap-4">
            <Avatar_Linkedin/>
            <Avatar_Github/>
            <Avatar_Instagram/>
          </div>
      </div>
      <p className="py-10 md:py-16 lg:py-10 text-white/30 text-sm">&copy; Sarvan Kumar &bull; All rights reserved.</p>
    </div>
  </footer>;
};

export default Footer;
function useTextRevealAnimation() {
  throw new Error("Function not implemented.");
}

