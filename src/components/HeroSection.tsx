import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
    {/* Background grid */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: "linear-gradient(hsl(217 91% 60%) 1px, transparent 1px), linear-gradient(90deg, hsl(217 91% 60%) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />

    <div className="container relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-4">Hello, I'm</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Md Tanbir<br />
            <span className="text-gradient">Hossain</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0">
            Software Engineer & Freelance Designer — specializing in Programming, Web Development, Graphic Design, AI & Data Science.
          </p>

          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-blue transition-all hover:scale-105"
            >
              Get in Touch
            </a>
            <a
              href="#portfolio"
              className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all"
            >
              View Work
            </a>
          </div>

          <div className="flex items-center gap-4 mt-8 justify-center lg:justify-start">
            <a href="https://github.com/tanvir22999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/tanvir-hossain-50475635b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-cyan-500 opacity-50 blur-xl" />
            <img
              src={profileImg}
              alt="Md Tanbir Hossain"
              width={320}
              height={320}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-2 border-primary/30"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown className="text-muted-foreground" size={20} />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
