'use client';
import { FC, useEffect, useRef, useState } from "react";
import heroImage from "@/assets/images/hero_image.jpg";
import Image from "next/image";
import Button from "@/components/button";
import SplitType from "split-type";
import { motion, stagger, useAnimate, useScroll, useTransform } from "motion/react";

const Hero: FC = () => {
  const [titleScope, titleAnimate] = useAnimate();
  const scrolingDiv = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState(false);

  const { scrollYProgress } = useScroll({
    target: scrolingDiv,
    offset: ['start end', 'end end'],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ['100%', '240%']);

  useEffect(() => {
    new SplitType(titleScope.current, {
      types: 'lines,words',
      tagName: "span",
    });

    titleAnimate(titleScope.current.querySelectorAll(".word"), {
      transform: 'translateY(0)'
    }, {
      duration: 0.5,
      delay: stagger(0.2),
    });
  }, []);

  return (
    <section id="home">
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        {/* Left Side */}
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              ref={titleScope}
              className="text-4xl md:text-6xl sm:max-w-[95%]  mt-40 md:mt-0 lg:text-7xl md:w-[80%]"
            >
              Welcome!👋<br></br> I'm Sarvan Kumar.<br></br> Aspring Frontend Engineer<br></br>with Expertise in HTML, CSS, JavaScript, React, Next.JS, Tailwind CSS.</motion.h1>
            <div className="flex flex-col mt-10 mb-10 items-start gap-6 md:flex md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <a href="https://github.com/sarvan-2187" target="_blank"><Button
                  className="hover:bg-orange-900 transition-all duration-500"
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5 flex flex-col">
                      <div className="h-5 w-10 group-hover/button:-translate-y-full transition-transform duration-500">
                       <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                        <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/></svg>
                      </div>
                    </div>
                  }
                >
                  <span>View Github</span>
                </Button></a>
                
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.2 }}
              >
                <Button variant="primary" className="hover:bg-orange-600 transition-all duration-500">
                  Download CV
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="md:col-span-5 relative">
          {/* Desktop Image */}
          <motion.div
            className="mt-20 md:mt-0 md:size-full md:absolute md:right-0 max-md:hidden"
            style={{ width: portraitWidth }}
          >
            <Image
              src={heroImage}
              className="hidden md:block md:size-full md:object-cover"
              alt="My Portrait"
            />
          </motion.div>
          <div className="md:hidden lg:hidden w-full pt-12">
          <Image
              src={heroImage}
              className="md:hidden lg:hidden size-full object-cover"
              alt="My Portrait"
            />
          </div>
          
        </div>
      </div>

      <div className="md:h-[200vh]" ref={scrolingDiv}></div>
    </section>
  );
};

export default Hero;
