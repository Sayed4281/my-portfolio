import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { name: "GitHub", icon: Github, href: "https://github.com/Sayed4281" },
        { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/er-sayed-shahloob-p/" },
        { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_sayed_4281_?utm_source=qr&igsi=MTA2dW5nZDhyeHN1Yg==" },
        { name: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/919567220971" },
        { name: "Email", icon: Mail, href: "mailto:sayedshahloobpofficial@gmail.com" }
    ];

    return (
        <footer className="bg-[#0B1220] border-t border-[#263449] relative overflow-hidden">
            {/* Subtle ambient dots */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-blue-400/20 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            opacity: [0.1, 0.5, 0.1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 3,
                            repeat: Infinity,
                            delay: Math.random() * 3,
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10">
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-3 font-display">
                            SAYED SHAHLOOB P<span className="text-cyan-400">.</span>
                        </h3>
                        <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                            Software Developer, Technical Project Lead, and Business Analyst bridging client requirements with scalable enterprise software delivery.
                        </p>

                        {/* Social Links Row in Footer */}
                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-3">Follow & Connect</span>
                            <div className="flex gap-2.5 flex-wrap">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.name}
                                        className="p-2.5 bg-[#172033] border border-[#263449] rounded-xl text-[#94A3B8] hover:text-cyan-300 hover:border-blue-500/40 transition-all group"
                                    >
                                        <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-bold mb-4">Navigation</h4>
                        <div className="space-y-2.5">
                            {['What-I-Do', 'How-I-Work', 'Lifecycle', 'Leadership', 'Projects', 'Skills', 'Experience', 'About', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-[#94A3B8] hover:text-cyan-300 transition-colors duration-300 text-sm"
                                >
                                    {link.replace('-', ' ')}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h4 className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-bold mb-4">Get In Touch</h4>
                        <div className="space-y-2.5 text-sm">
                            <a
                                href="mailto:sayedshahloobpofficial@gmail.com"
                                className="block text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300"
                            >
                                sayedshahloobpofficial@gmail.com
                            </a>
                            <a
                                href="tel:+919567220971"
                                className="block text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300"
                            >
                                +91 9567220971
                            </a>
                            <a
                                href="https://www.instagram.com/_sayed_4281_?utm_source=qr&igsi=MTA2dW5nZDhyeHN1Yg=="
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[#94A3B8] hover:text-[#F8FAFC] transition-colors duration-300"
                            >
                                Instagram: @_sayed_4281_
                            </a>
                            <p className="text-[#94A3B8] text-xs leading-relaxed pt-2">
                                📍 Angadipuram, Malappuram, Kerala, India
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#263449] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center text-[#94A3B8] text-xs">
                        <span>Crafted with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="mx-1.5"
                        >
                            <Heart className="text-cyan-400" size={12} />
                        </motion.div>
                        <span>by</span>
                        <span className="ml-1.5 text-white font-medium">
                            Sayed Shahloob P
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="text-[#94A3B8] text-xs">
                            © 2026 All rights reserved.
                        </span>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-9 h-9 bg-[#172033] border border-[#263449] rounded-lg flex items-center justify-center text-cyan-300 hover:text-white hover:border-blue-500/40 transition-all duration-300"
                        >
                            <ArrowUp size={14} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;