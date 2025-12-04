import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import CloudSVG from "./CloudSVG";

const ProjectSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const cloudY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="project" className="py-32 px-6 bg-secondary/30 relative overflow-hidden" ref={containerRef}>
      {/* Decorative cloud with parallax */}
      <motion.div className="absolute top-20 right-0 opacity-30" style={{ y: cloudY }}>
        <CloudSVG variant="medium" />
      </motion.div>

      <motion.div className="max-w-4xl mx-auto relative z-10" ref={ref} style={{ y }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-body text-foreground/50 tracking-widest mb-4 block"
        >
          FEATURED PROJECT
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8"
        >
          Face Recognition Tool
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="gradient-card p-8 md:p-12 rounded-2xl border border-border"
        >
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-1.5 bg-primary/20 text-primary text-sm font-body rounded-full">
              Azure Cognitive Services
            </span>
            <span className="px-4 py-1.5 bg-primary/20 text-primary text-sm font-body rounded-full">
              Cloud APIs
            </span>
            <span className="px-4 py-1.5 bg-primary/20 text-primary text-sm font-body rounded-full">
              Computer Vision
            </span>
          </div>

          <p className="text-foreground/80 font-body text-lg mb-8 leading-relaxed">
            A robust face recognition system designed to securely identify and authenticate 
            individuals using Azure's AI capabilities.
          </p>

          <div className="space-y-4">
            <h4 className="font-display text-lg text-foreground">Key Highlights</h4>
            <ul className="space-y-3">
              {[
                "Implemented advanced computer vision and ML algorithms for accurate face detection",
                "Integrated Azure cloud APIs for scalable processing and low latency",
                "Designed for use cases like secure authentication, automated attendance, and identity verification",
                "Emphasized reliability, security, and real-time recognition performance",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 text-foreground/70 font-body"
                >
                  <span className="text-primary text-lg">✦</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Interests */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="font-display text-xl text-foreground mb-6">Interests</h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Full-Stack Development",
              "Web Application Architecture",
              "RDBMS & OOPS",
              "Cloud-based AI tools",
            ].map((interest) => (
              <span
                key={interest}
                className="px-4 py-2 bg-background/50 text-foreground/70 text-sm font-body rounded-full border border-border/50"
              >
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectSection;
