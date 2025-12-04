import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);

  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden" ref={containerRef}>
      <motion.div
        className="max-w-4xl mx-auto"
        ref={ref}
        style={{ y }}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-body text-foreground/50 tracking-widest mb-4 block"
        >
          ABOUT ME
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight"
        >
          A versatile full-stack engineer with a passion for building scalable applications
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-foreground/70 font-body text-lg leading-relaxed"
        >
          <p>
            I have a strong foundation in Java, Python, Angular, TypeScript, and Node.js. I enjoy connecting 
            front-end interfaces with reliable backend APIs and solving real-world problems with clean, 
            maintainable code.
          </p>
          <p>
            Along with my engineering expertise, I've also worked in technical content, talent acquisition, 
            and quality evaluation—giving me a unique blend of analytical thinking, communication, and 
            product understanding.
          </p>
          <p className="text-primary font-medium">
            I'm driven by continuous learning, clarity in execution, and creating applications that 
            genuinely make an impact.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-8 border-t border-border"
        >
          <h3 className="font-display text-xl text-foreground mb-6">Education</h3>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-body text-foreground font-medium">B.Tech — Computer Science Engineering</p>
                <p className="text-foreground/60 text-sm">UEM Kolkata (2024)</p>
              </div>
              <span className="text-primary font-body text-sm mt-1 md:mt-0">CGPA: 8.75</span>
            </div>
            <div>
              <p className="font-body text-foreground/70 text-sm">
                Class 12 (ISC), Science — Calcutta Public School, 2020
              </p>
              <p className="font-body text-foreground/70 text-sm">
                Class 10 (ICSE), General — Calcutta Public School, 2018
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
