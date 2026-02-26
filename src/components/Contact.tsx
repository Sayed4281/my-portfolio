import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const isInView = useInView(ref, { once: true });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback({ type: null, message: '' });

    emailjs
      .sendForm('service_d41lcvh', 'template_ulk7ogm', formRef.current!, {
        publicKey: 'Fg3N5vAQJxjsFNjRp',
      })
      .then(
        () => {
          setFeedback({ type: 'success', message: 'Message sent successfully!' });
          if (formRef.current) formRef.current.reset();
          setTimeout(() => {
            setFeedback({ type: null, message: '' });
          }, 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setFeedback({
            type: 'error',
            message: `Failed to send: ${error.text || JSON.stringify(error) || 'Unknown error'}`
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sayedshahloobpofficial@gmail.com',
      link: 'mailto:sayedshahloobpofficial@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9567220971',
      link: 'tel:+919567220971',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Angadipuram, Malappuram, Kerala',
      link: '#',
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <span className="text-violet-500 text-xs font-medium tracking-[0.3em] uppercase mb-4 block">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-4">
            Get In Touch
          </h2>
          <div className="section-line mb-6"></div>
          <p className="text-neutral-500 max-w-2xl text-base">
            I'm currently available for exciting opportunities. Let's discuss how we can work together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 bg-white/[0.02] p-4 rounded-xl border border-white/[0.06] hover:border-violet-500/20 transition-all duration-500 group"
              >
                <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors duration-300">
                  <info.icon className="text-violet-400" size={18} />
                </div>
                <div>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider">{info.title}</p>
                  <p className="text-white text-sm font-medium">{info.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">Connect</p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: "https://github.com/Sayed4281" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/er-sayed-shahloob-p/" },
                  { icon: WhatsAppIcon, href: "https://wa.me/919567220971" },
                ].map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/[0.03] rounded-lg flex items-center justify-center border border-white/[0.06] hover:border-violet-500/20 hover:bg-violet-500/10 transition-all duration-300 text-neutral-500 hover:text-violet-400"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white/[0.02] rounded-xl p-6 md:p-8 border border-white/[0.06]"
          >
            <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-neutral-500 mb-1.5 text-xs uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm placeholder-neutral-600 focus:border-violet-500/40 focus:outline-none focus:ring-1 focus:ring-violet-500/20 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-neutral-500 mb-1.5 text-xs uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm placeholder-neutral-600 focus:border-violet-500/40 focus:outline-none focus:ring-1 focus:ring-violet-500/20 transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-neutral-500 mb-1.5 text-xs uppercase tracking-wider">Subject</label>
                <select
                  name="subject"
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm focus:border-violet-500/40 focus:outline-none focus:ring-1 focus:ring-violet-500/20 transition-all duration-300 [&>option]:bg-[#111111]"
                >
                  <option value="" disabled selected className="text-neutral-600">Select a subject</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="Website Design/Redesign">Website Design/Redesign</option>
                  <option value="SEO Audit & Optimization">SEO Audit & Optimization</option>
                  <option value="Portfolio Building for Professionals">Portfolio Building for Professionals</option>
                </select>
              </div>
              <div>
                <label className="block text-neutral-500 mb-1.5 text-xs uppercase tracking-wider">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Your message here..."
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm placeholder-neutral-600 focus:border-violet-500/40 focus:outline-none focus:ring-1 focus:ring-violet-500/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {feedback.message && (
                <div
                  className={`p-3 rounded-lg text-sm ${feedback.type === 'success'
                    ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20'
                    : 'bg-red-500/10 text-red-400 border border-red-500/20'
                    }`}
                >
                  {feedback.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSending}
                className={`w-full px-6 py-3 bg-violet-500 text-black text-sm font-semibold rounded-lg hover:bg-violet-400 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-violet-500/20 ${isSending ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {isSending ? (
                  <>Sending...</>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;