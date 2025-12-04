import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";
import CloudSVG from "./CloudSVG";

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_gcl8zng",
        "template_xhi2f7v",
        formRef.current,
        "xtI-X7_TE0qvhzfVw"
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      formRef.current.reset();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via LinkedIn.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Decorative clouds */}
      <div className="absolute bottom-0 left-0 animate-float-slow opacity-40">
        <CloudSVG variant="large" />
      </div>
      <div className="absolute bottom-10 right-0 animate-float opacity-30" style={{ animationDelay: "2s" }}>
        <CloudSVG variant="medium" flip />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm font-body text-foreground/50 tracking-widest mb-4 block"
        >
          GET IN TOUCH
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-foreground/70 font-body text-lg mb-12 max-w-2xl"
        >
          Have a project in mind or want to discuss opportunities? I'd love to hear from you.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="from_name" className="block text-sm font-body text-foreground/70 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block text-sm font-body text-foreground/70 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                required
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-body text-foreground/70 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg font-body text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-primary text-primary-foreground font-body font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-display text-lg text-foreground mb-4">Connect With Me</h3>
              <a
                href="https://www.linkedin.com/in/shaibal-mallick"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 border border-border rounded-full font-body text-foreground/80 hover:bg-secondary/50 hover:border-primary transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn Profile
              </a>
            </div>

            <div>
              <h3 className="font-display text-lg text-foreground mb-4">Location</h3>
              <p className="text-foreground/70 font-body">
                Kolkata, India
              </p>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-foreground/50 font-body text-sm">
                Currently open to full-stack development opportunities and interesting collaborations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
