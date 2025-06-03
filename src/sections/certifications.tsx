'use client';

import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import gallery1 from "@/assets/images/cert-1.png";
import gallery2 from "@/assets/images/cert-2.jpg";
import gallery3 from "@/assets/images/cert-3.png";
import gallery4 from "@/assets/images/cert-4.png";
import gallery5 from "@/assets/images/cert-5.png";
import gallery6 from "@/assets/images/cert-6.png";


import { motion, useAnimation, useInView } from "motion/react";

const galleryItems = [
  {
    image: gallery1,
    title: "First Prize in Flash Hackathon",
    description: "Won the first prize for developing a Medication recommender website, Collaborated with Sahil Pareek & Mohana Surendra.",
    href:'https://app-na2.hubspot.com/academy/achievements/j9ykrpsp/en/1/nagarampalli-sarvan-kumar/seo',
  },
  {
    image: gallery2,
    title: "Academic Excellence Award",
    description: "The award was presented by the Vice-Chancellor of Andhra University for academic excellence among top-performing students.",
    href:'https://app-na2.hubspot.com/academy/achievements/j9ykrpsp/en/1/nagarampalli-sarvan-kumar/seo',
  },
  {
    image: gallery3,
    title: "SEO Certified",
    description: "Successfully cleared the Search Engine Optimization Certification exam with a score of 50/60 from Hubspot Academy.",
        href:'https://app-na2.hubspot.com/academy/achievements/j9ykrpsp/en/1/nagarampalli-sarvan-kumar/seo',

  },
  {
    image: gallery4,
    title: "Canva Essentials",
    description: "Successfully cleared the Canva Essentials Certification exam with a score of 20/20 from Canva.",
        href:'https://www.canva.com/design-school/certification-award/5328e5d4-ee86-4999-90ca-0783ad2a2c71',

  },
  {
    image: gallery5,
    title: "Postman API Fundamentals Expert",
    description: "Successfully cleared all the tasks in Postman and earned the Postman API Fundamentals Expert Badge",
        href:'https://badgr.com/public/assertions/xkHwp2KZRIOayjIDMuJyHg',

  },
  {
    image: gallery6,
    title: "CSS (Basic)",
    description: "Successfully cleared the CSS (Basic) Certification exam from HackerRank.",
        href:'https://www.hackerrank.com/certificates/bd5f2797ce74',

  },
];

const GallerySection: FC = () => {
   const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  return (
    <section
      id="gallery"
      className="py-24 md:py-32 lg:py-36 bg-stone-950 text-stone-100"
    >
      <div className="container">
        <motion.h2 ref={headingRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }} className="text-4xl md:text-7xl lg:text-8xl text-center">Certificates</motion.h2>

        <div className="mt-8 md:mt-16 lg:mt-18 grid grid-cols-1 md:grid-cols-2 gap-12">
          {galleryItems.map(({ image, title, description, href }, idx) => (
            <div key={idx} className="group">
              {/* Image */}
              <div className="overflow-hidden rounded-xl border border-stone-900 aspect-video">
                <Image
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>

              {/* Text */}
              <div className="mt-6">
                <a href={href} target="_blank" className="text-2xl md:text-3xl font-semibold">
                  {title}
                </a>
                <p className="mt-2 text-muted-foreground leading-relaxed text-base">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
