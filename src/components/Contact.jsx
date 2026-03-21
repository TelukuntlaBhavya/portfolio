import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">
          Get In <span className="text-gradient uppercase">Touch</span>
        </h2>
        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full shadow-lg shadow-blue-500/20"></div>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-black mb-8 text-white tracking-tight leading-none italic uppercase">
            Let's build <br /><span className="text-primary-light not-italic text-5xl">Something New</span>
          </h3>
          <p className="text-gray-400 mb-12 leading-relaxed text-lg max-w-md">
            Currently open to new opportunities, collaborations, or just a quick chat about technology. Drop a message—I'd love to hear from you!
          </p>

          <div className="space-y-8 mb-12">
            {[
              { icon: MapPin, label: "Location", value: "India", sub: "Available Remotely" },
              { icon: Mail, label: "Email", value: "siripurambhavya10@gmail.com", href: "mailto:siripurambhavya10@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91-8074139492", href: "tel:+918074139492" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary-light group-hover:scale-110 group-hover:bg-primary-light group-hover:text-white transition-all duration-500 shadow-xl">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-1">{item.label}</h4>
                  {item.href ? (
                    <a href={item.href} className="text-xl font-bold text-white hover:text-primary-light transition-colors">{item.value}</a>
                  ) : (
                    <p className="text-xl font-bold text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/TelukuntlaBhavya" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all shadow-xl">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/telukuntla-bhavya/" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:scale-110 transition-all shadow-xl">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="bg-[#0f172a]/40 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] border border-white/10 flex flex-col gap-8 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-colors"></div>
            
            <h3 className="text-2xl font-black text-white italic tracking-tight">Drop me a message</h3>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="name" className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="px-6 py-4 rounded-2xl bg-[#020617]/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all w-full font-bold"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="email@example.com"
                className="px-6 py-4 rounded-2xl bg-[#020617]/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all w-full font-bold"
              />
            </div>
            
            <div className="flex flex-col gap-3">
              <label htmlFor="message" className="text-xs font-black text-gray-500 uppercase tracking-widest ml-1">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Write something here..."
                className="px-6 py-4 rounded-2xl bg-[#020617]/50 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all w-full resize-none font-bold"
              ></textarea>
            </div>
            
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 transition-all transform hover:scale-[1.03] disabled:opacity-50 shadow-xl shadow-blue-500/20 group/btn"
            >
              {status === 'sending' ? (
                'Processing...'
              ) : status === 'success' ? (
                'Transmitted!'
              ) : (
                <>Send Message <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" /></>
              )}
            </button>
            
            {status === 'success' && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-green-400 text-center font-bold text-sm tracking-wide"
              >
                Transmission Successful. I'll get back to you soon.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
