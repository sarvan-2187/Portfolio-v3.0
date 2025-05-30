'use client';

import { useEffect } from "react";
import { useAnimate, useInView, stagger } from "motion/react";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "HTML & CSS", level: 100 },
  { name: "Git & Github", level: 100 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 50 },
  { name: "Tailwind CSS", level: 80 },
  { name: "React.js", level: 70 },
  { name: "Python", level: 70 },
  { name: "Framer & Webflow", level: 90 },
  { name: "SQL", level: 50 },
  { name: "Core Java", level: 70 },
];

const SkillSection = () => {
  const [scope, animate] = useAnimate();
  const inView = useInView(scope, { once: true });

  useEffect(() => {
    if (inView) {
      animate(
        scope.current?.querySelectorAll("article"),
        { opacity: 1, y: 0 },
        { delay: stagger(0.1), duration: 0.6, }
      );
    }
  }, [inView, animate]);

  return (
    <section
      id="skills"
      ref={scope}
      className="py-24 md:py-32 lg:py-40 bg-stone-950 text-stone-100"
    >
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl sm:text-center">My Skills</h2>

        <div className="mt-10 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2">
          {skills.map((skill) => (
            <article
              key={skill.name}
              className="opacity-0 translate-y-8 transition-transform py-6 md:py-8 "
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium">{skill.name}</h3>
                <span className="text-sm font-semibold text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
              <Progress value={skill.level} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
