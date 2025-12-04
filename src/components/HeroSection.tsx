import { motion } from "framer-motion";
import CloudSVG from "./CloudSVG";

const HeroSection = () => {
  return (
    <section
      id="hello"
      className="min-h-screen relative flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Decorative Clouds */}
      <div className="absolute bottom-0 left-0 animate-float-slow">
        <CloudSVG variant="large" />
      </div>
      <div className="absolute bottom-20 right-0 animate-float" style={{ animationDelay: "1s" }}>
        <CloudSVG variant="large" flip />
      </div>
      <div className="absolute top-40 left-10 animate-drift opacity-50">
        <CloudSVG variant="small" />
      </div>
      <div className="absolute top-60 right-20 animate-float-slow opacity-40" style={{ animationDelay: "2s" }}>
        <CloudSVG variant="medium" flip />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center z-10 max-w-5xl"
      >
        {/* Stylized Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-primary tracking-tight leading-none mb-8"
          style={{
            textShadow: "2px 4px 20px rgba(0,0,0,0.2)",
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
