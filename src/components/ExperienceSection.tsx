import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    company: "Tata Consultancy Services",
    role: "Systems Engineer",
    period: "Currently Working",
    description: [
      "Develop and maintain scalable, responsive web applications using Angular and TypeScript",
      "Integrate Node.js services with RESTful APIs for reliable front-end ↔ backend communication",
      "Work with modern engineering practices: Git, CI/CD pipelines, Jasmine/Karma/Jest",
      "Focus on writing clean code, improving performance, and ensuring seamless deployments",
    ],
    current: true,
  },
  {
    company: "Career Comfort",
    role: "HR Recruiter",
    period: "Jan 2025 – Mar 2025",
    description: [
      "Screened and shortlisted candidates for ITES, EdTech, Sales, and Technical roles",
      "Managed end-to-end recruitment: sourcing → assessment → coordination → closure",
      "Partnered with hiring managers to align hiring strategies with business needs",
    ],
    current: false,
  },
  {
    company: "Vaidik Eduservices",
    role: "Subject Matter Expert",
    period: "Jun 2024 – Dec 2024",
    description: [
      "Delivered expertise in algorithms, data structures, and system architecture",
      "Created and reviewed technical content in Java, Python, and C++",
      "Specialized in debugging, optimization, and designing efficient solutions",
    ],
    current: false,
  },
  {
    company: "Chegg",
    role: "Subject Matter Expert",
    period: "Previous",
    description: [
      "Provided academic support by simplifying concepts and delivering accurate solutions",
    ],
    current: false,
  },
  {
    company: "Brainly",
    role: "QA/QC Engineer",
    period: "Previous",
    description: [
      "Evaluated content, ensured accuracy, and maintained high quality standards on an EdTech Q/A platform",
    ],
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-body text-foreground/50 tracking-widest mb-4 block"
        >
          PROFESSIONAL EXPERIENCE
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-16"
        >
          Where I've Worked
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors duration-300"
            >
              {exp.current && (
                <span className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse" />
              )}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div>
                  <h3 className="font-display text-xl text-foreground font-medium">
                    {exp.company}
                  </h3>
                  <p className="text-primary font-body text-sm">{exp.role}</p>
                </div>
                <span className="text-foreground/50 font-body text-sm mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-foreground/70 font-body text-sm flex items-start gap-2">
                    <span className="text-primary mt-1">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
