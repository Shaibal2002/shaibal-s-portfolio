import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-foreground/50 font-body text-sm"
        >
          © 2024 Shaibal Mallick. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/shaibal-mallick"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/50 hover:text-primary font-body text-sm fancy-underline transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-foreground/30">•</span>
          <span className="text-foreground/50 font-body text-sm">
            Built with passion
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
