'use client';
import { FC, useEffect, useRef, useState } from "react";
import heroImage from "@/assets/images/hero_image.jpg";
import Image from "next/image";
import Button from "@/components/button";
import SplitType from "split-type";
import { motion, stagger, useAnimate, useScroll, useTransform } from "motion/react";
import FlipCard from "@/components/flipcard";

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
              className="text-5xl md:text-6xl mt-40 md:mt-0 lg:text-7xl lg:w-[80%]"
            >
              Crafting digital experiences through code and creative design
            </motion.h1>
            <div className="flex flex-col mt-10 items-start gap-6 md:flex md:flex-row md:items-center">
              <motion.div
                initial={{ opacity: 0, y: '100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.75 }}
              >
                <Button
                  className="hover:bg-orange-900 transition-all duration-500"
                  variant="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-5 flex flex-col">
                      <div className="h-5 w-10 group-hover/button:-translate-y-full transition-transform duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth="1.5" stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                          strokeWidth="1.5" stroke="currentColor" className="size-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  <span>My Works</span>
                </Button>
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
          <div className="pt-12 pb-0"><FlipCard/></div>
          
        </div>
      </div>

      <div className="md:h-[200vh]" ref={scrolingDiv}></div>
    </section>
  );
};

export default Hero;
