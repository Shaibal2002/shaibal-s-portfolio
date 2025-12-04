import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CloudSVG from "./CloudSVG";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax transforms for clouds
  const cloudY1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const cloudY2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const cloudY3 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const cloudX1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const cloudX2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      id="hello"
      className="min-h-screen relative flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Decorative Clouds with Parallax */}
      <motion.div
        className="absolute bottom-0 left-0"
        style={{ y: cloudY1, x: cloudX1 }}
      >
        <CloudSVG variant="large" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-0"
        style={{ y: cloudY2, x: cloudX2 }}
      >
        <CloudSVG variant="large" flip />
      </motion.div>
      
      <motion.div
        className="absolute top-40 left-10 opacity-50"
        style={{ y: cloudY3 }}
      >
        <CloudSVG variant="small" />
      </motion.div>
      
      <motion.div
        className="absolute top-60 right-20 opacity-40"
        style={{ y: cloudY1 }}
      >
        <CloudSVG variant="medium" flip />
      </motion.div>

      {/* Main Content with Parallax */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="text-center z-10 max-w-5xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Stylized Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary tracking-tight leading-none mb-8"
            style={{
              textShadow: "2px 4px 20px rgba(0,0,0,0.25)",
            }}
          >
            <span className="italic">S</span>HAIBAL
            <br />
            <span className="italic">M</span>ALLICK
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            Full Stack Developer based in Kolkata, working independently with a focus on{" "}
            <span className="inline-flex items-center gap-1 px-3 py-1 border border-foreground/30 rounded-full text-sm">
              scalable web applications →
            </span>{" "}
            Building reliable backend APIs with clean, maintainable code that genuinely makes an impact.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-6 text-xs text-foreground/50 font-body"
      >
        FULL STACK DEVELOPER
      </motion.div>
      <motion.a
        href="https://www.linkedin.com/in/shaibal-mallick"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 right-6 text-xs text-foreground/50 font-body fancy-underline hover:text-foreground/80 transition-colors"
      >
        LINKEDIN.COM/IN/SHAIBAL-MALLICK
      </motion.a>
    </section>
  );
};

export default HeroSection;
