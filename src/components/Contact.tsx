import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sayedshahloobp@gmail.com',
      link: 'mailto:sayedshahloobp@gmail.com',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9567220971',
      link: 'tel:+919567220971',
      gradient: 'from-cyan-500 to-indigo-500'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Angadipuram, Malappuram, Kerala',
      link: '#',
      gradient: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            I'm currently available for exciting opportunities. Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Contact Information</h3>

            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-4 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-blue-600/50 transition-all duration-300 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{info.title}</p>
                  <p className="text-white font-semibold">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-xl font-bold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Sayed4281"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300"
                >
                  <Github size={24} className="text-white" />
                </a>
                <a
                  href="https://linkedin.com/in/sayed-shahloob-p"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-all duration-300"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
          >
            <h3 className="text-3xl font-bold text-white mb-6">Send Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2">Your Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message *</label>
                <textarea
                  rows={5}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-bold hover:shadow-lg hover:shadow-blue-600/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;