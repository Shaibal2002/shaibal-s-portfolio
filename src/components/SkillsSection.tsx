import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const technicalSkills = [
  { category: "Languages", skills: ["Java", "Python", "TypeScript", "JavaScript"] },
  { category: "Frontend", skills: ["Angular", "Responsive UI", "React"] },
  { category: "Backend", skills: ["Node.js", "RESTful APIs"] },
  { category: "Database", skills: ["MySQL", "RDBMS"] },
  { category: "Tools & Practices", skills: ["Git", "CI/CD", "Jasmine", "Karma", "Jest"] },
];

const softSkills = [
  "Attention to Detail",
  "Teamwork",
  "Multi-tasking",
  "Problem Solving",
  "Clear Communication",
];

const SkillsSection = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <section id="skills" className="py-32 px-6 relative overflow-hidden" ref={containerRef}>
      <motion.div className="max-w-4xl mx-auto" ref={ref} style={{ y }}>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-body text-foreground/50 tracking-widest mb-4 block"
        >
          🛠️ SKILLS
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-16"
        >
          Technical Expertise
        </motion.h2>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {technicalSkills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="gradient-card p-6 rounded-xl border border-border"
            >
              <h3 className="font-display text-lg text-primary mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background/50 text-foreground/80 text-sm font-body rounded-full border border-border/50 hover:border-primary/50 hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-display text-xl text-foreground mb-6">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="px-4 py-2 border border-primary/30 text-foreground/80 text-sm font-body rounded-full hover:bg-primary/10 hover:border-primary transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
