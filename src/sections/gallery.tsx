'use client';

import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import gallery1 from "@/assets/images/gallery-image-1.jpg";
import gallery2 from "@/assets/images/gallery-image-2.jpg";
import { motion, useAnimation, useInView } from "motion/react";

const galleryItems = [
  {
    image: gallery1,
    title: "First Prize in Flash Hackathon",
    description: "Won the first prize for developing a Medication recommender website, Collaborated with Sahil Pareek & Mohana Surendra.",
  },
  {
    image: gallery2,
    title: "Annual Academic Excellence Award",
    description: "The award was presented by the Vice-Chancellor of Andhra University for academic excellence among top-performing students.",
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
          transition={{ duration: 0.6, ease: "easeOut" }} className="text-4xl md:text-7xl lg:text-8xl sm:text-center">Gallery</motion.h2>

        <div className="mt-8 md:mt-16 lg:mt-18 grid grid-cols-1 md:grid-cols-2 gap-12">
          {galleryItems.map(({ image, title, description }, idx) => (
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
                <h3 className="text-2xl md:text-3xl font-semibold">
                  {title}
                </h3>
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
