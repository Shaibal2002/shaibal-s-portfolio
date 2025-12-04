import { motion } from "framer-motion";

interface CloudSVGProps {
  className?: string;
  variant?: "large" | "medium" | "small";
  flip?: boolean;
}

const CloudSVG = ({ className = "", variant = "large", flip = false }: CloudSVGProps) => {
  const sizes = {
    large: { width: 300, height: 200 },
    medium: { width: 200, height: 130 },
    small: { width: 120, height: 80 },
  };

  const { width, height } = sizes[variant];

  return (
    <motion.svg
      width={width}
      height={height}
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Cloud outline - hand-drawn style */}
      <path
        d="M50 150 C20 150 10 120 30 100 C20 80 40 50 70 60 C80 30 120 20 150 40 C180 20 220 30 230 60 C270 50 290 80 280 110 C300 130 290 160 260 160 C260 180 230 190 200 180 C180 200 140 200 120 180 C90 190 60 180 50 150 Z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        className="text-foreground/40"
      />
      {/* Inner cloud detail */}
      <path
        d="M80 140 C70 135 75 120 90 125 C85 115 100 100 115 110 C120 95 145 90 155 105 C170 95 190 100 195 115 C210 108 225 115 220 130 C235 130 240 145 225 150"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        className="text-foreground/25"
      />
    </motion.svg>
  );
};

export default CloudSVG;
