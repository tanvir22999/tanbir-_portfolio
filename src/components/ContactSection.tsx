import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Loader2, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send("service_caaaye9", "template_mpuytv4", {
        from_name: form.name,
        from_email: form.email,
        from_phone: form.phone,
        from_address: form.address,
        message: form.message,
      }, "xYnEnkPO20peKjB3a");
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setForm({ name: "", email: "", phone: "", address: "", message: "" });
    } catch {
      toast({ title: "Failed to send", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p className="font-mono text-primary text-sm mb-2">Let's connect</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Contact Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind or want to collaborate? Feel free to reach out through the form or any of my contact channels below.
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "tanvir22999629@gmail.com", href: "mailto:tanvir22999629@gmail.com" },
                { icon: Phone, label: "01322999629", href: "tel:01322999629" },
                { icon: MapPin, label: "Sylhet, Bangladesh", href: "#" },
                { icon: Github, label: "github.com/tanvir22999", href: "https://github.com/tanvir22999" },
                { icon: Linkedin, label: "LinkedIn Profile", href: "https://www.linkedin.com/in/tanvir-hossain-50475635b/" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <c.icon size={18} className="text-primary" />
                  <span className="text-sm">{c.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground text-sm transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground text-sm transition-colors"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Your Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground text-sm transition-colors"
              />
              <input
                type="text"
                placeholder="Your Address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground text-sm transition-colors"
              />
            </div>
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground text-sm transition-colors resize-none"
            />
            <button
              type="submit"
              disabled={sending}
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:glow-blue transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <>Send Message <Send size={16} /></>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
