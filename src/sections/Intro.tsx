'use client';
import { stagger, useAnimate, useInView } from "motion/react";
import { FC, useEffect } from "react";
import SplitType from "split-type";

const Intro: FC = () => {
  const[scope,animate] = useAnimate();
  const inView = useInView(scope,{
    once:true
  });

  useEffect(()=>{
    new SplitType(scope.current.querySelector('h2'),{
        types: 'lines,words',
        tagName: 'span',
      })
  }, [scope]);

  useEffect(()=>{
    if(inView){
      animate(
        scope.current.querySelectorAll(".word"),
        {
          transform: "translateY(0%)",
        },
        {
          duration: 0.5,
          delay: stagger(0.2),
        },
      )
    }
  }, [inView, animate, scope]);
  return <section id="about" className="py-20 md:py-32 mt-16 md:mt-16 lg:py-38 lg:mt-16" ref={scope}>
    <div className="container">
      <h2 className="text-4xl md:text-7xl lg:text-6.5xl lg:w-{95%} ">I build visually striking, high-performance websites with clean, scalable code and thoughtful, user-focused design. My goal is to help your business grow, connect with your audience, and stand out in today’s competitive digital landscape.</h2>
    </div>
  </section>;
};

export default Intro;
