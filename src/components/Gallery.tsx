"use client";
import * as React from "react";
import styles from "@/app/page.module.scss";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { useDimension } from "@/hooks/useDimension";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

export const Gallery: React.FC = () => {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative">
      <div ref={container} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y1} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
    </div>
  );
};

const Column = ({
  images,
  y,
}: {
  images: string[];
  y?: MotionValue<number>;
}) => {
  return (
    <motion.div style={{ y }} className={styles.column}>
      {images.map((src: any, index: any) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image
              alt="image"
              sizes="100%"
              fill
              src={`/images/gallery/${src}`}
            />
          </div>
        );
      })}
    </motion.div>
  );
};
