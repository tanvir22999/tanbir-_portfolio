import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "C++ Console Game",
    desc: "An interactive console-based game demonstrating object-oriented programming, game logic, and data structures in C++.",
    tech: ["C++", "OOP", "Data Structures"],
    color: "from-primary/20 to-cyan-500/20",
  },
  {
    title: "Logo & Banner Design",
    desc: "Complete branding package for a startup — logo, banner, and social media visuals crafted in Photoshop and Canva.",
    tech: ["Photoshop", "Canva", "Branding"],
    color: "from-violet-500/20 to-primary/20",
  },
  {
    title: "Excel Sales Dashboard",
    desc: "Automated Excel dashboard with pivot tables, charts, and conditional formatting for real-time sales data analysis.",
    tech: ["Excel", "Data Analysis", "VBA"],
    color: "from-emerald-500/20 to-primary/20",
  },
];

const PortfolioSection = () => (
  <section id="portfolio" className="py-24">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className="font-mono text-primary text-sm mb-2">My work</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Portfolio</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="group relative rounded-xl overflow-hidden border border-border hover:border-glow transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
              <span className="font-mono text-primary/60 text-sm group-hover:text-primary transition-colors">
                {`{ ${p.title} }`}
              </span>
            </div>
            <div className="p-6 bg-card">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{p.title}</h3>
                <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors" size={16} />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-primary">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
