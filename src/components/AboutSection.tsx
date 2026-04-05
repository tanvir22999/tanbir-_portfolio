import { motion } from "framer-motion";
import { GraduationCap, Code, Cpu, Users } from "lucide-react";

const skills = [
  { category: "Programming", items: ["C", "C++", "Python"], icon: Code },
  { category: "Tools", items: ["Excel", "Photoshop", "Canva", "VS Code"], icon: Cpu },
  { category: "Interests", items: ["Web Dev", "Data Analysis", "AI", "ML"], icon: Cpu },
  { category: "Soft Skills", items: ["Problem Solving", "Communication", "Teamwork"], icon: Users },
];

const education = [
  { degree: "BSc in Software Engineering", school: "IICT, Shahjalal University of Science & Technology", year: "2024 – 2029" },
  { degree: "HSC", school: "Comilla Commerce College", year: "2023" },
];

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const AboutSection = () => (
  <section id="about" className="py-24">
    <div className="container">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5 }} variants={fadeUp}>
        <p className="font-mono text-primary text-sm mb-2">Get to know me</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
      </motion.div>

      <motion.p
        className="text-muted-foreground max-w-3xl mb-12 leading-relaxed"
        initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} variants={fadeUp}
      >
        I'm a 22-year-old Software Engineering student from Cumilla, Bangladesh, currently pursuing my BSc at IICT, Shahjalal University of Science and Technology. I'm passionate about building elegant software solutions and exploring the frontiers of AI, Machine Learning, and Data Science. With hands-on freelance experience on Fiverr — creating websites, logos, banners, and Excel dashboards — I blend technical skill with creative design.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} variants={fadeUp}>
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <GraduationCap className="text-primary" size={22} /> Education
          </h3>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.degree} className="p-4 rounded-lg bg-card border border-border hover:border-glow transition-colors">
                <p className="font-semibold">{e.degree}</p>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="text-xs font-mono text-primary mt-1">{e.year}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} variants={fadeUp}>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            {skills.map((s) => (
              <div key={s.category} className="p-4 rounded-lg bg-card border border-border hover:border-glow transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <s.icon className="text-primary" size={16} />
                  <p className="font-semibold text-sm">{s.category}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
