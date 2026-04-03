import { motion } from "framer-motion";
import { Globe, Palette, BarChart3, Layout } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Design & Development", desc: "Custom, responsive websites built with modern technologies for optimal performance and user experience." },
  { icon: Palette, title: "Graphic Design", desc: "Professional logos, banners, and social media graphics that elevate your brand identity." },
  { icon: BarChart3, title: "Excel Data Analysis", desc: "Automated reports, dashboards, and data analysis solutions to drive business insights." },
  { icon: Layout, title: "Portfolio Website Creation", desc: "Stunning personal portfolios to showcase your work and attract opportunities." },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-card/50">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <p className="font-mono text-primary text-sm mb-2">What I offer</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Services</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="group p-6 rounded-xl bg-card border border-border hover:border-glow hover:glow-blue transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
