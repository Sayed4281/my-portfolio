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
            {/* Subtle ambient background glow */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-600/[0.05] rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 py-12 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
                    
                    {/* Brand Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-6 lg:col-span-5"
                    >
                        <h3 className="text-xl font-black text-white mb-3 font-display tracking-tight">
                            SAYED SHAHLOOB P<span className="text-cyan-400">.</span>
                        </h3>
                        <p className="text-[#94A3B8] text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
                            Software Developer, Technical Project Lead, and Business Analyst bridging client requirements with scalable enterprise software delivery.
                        </p>

                        {/* Social Links Row */}
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 block mb-3">
                                Connect & Follow
                            </span>
                            <div className="flex gap-2.5 flex-wrap">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.name}
                                        className="p-2.5 bg-[#172033] border border-[#263449] rounded-xl text-[#94A3B8] hover:text-cyan-300 hover:border-blue-500/40 transition-all group min-h-[44px] min-w-[44px] flex items-center justify-center"
                                    >
                                        <social.icon size={18} className="group-hover:scale-110 transition-transform" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="md:col-span-3 lg:col-span-3"
                    >
                        <h4 className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-black mb-4">
                            Navigation
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            {[
                                { label: 'Home', href: '#home' },
                                { label: 'About', href: '#about' },
                                { label: 'What I Do', href: '#what-i-do' },
                                { label: 'How I Work', href: '#how-i-work' },
                                { label: 'Projects', href: '#projects' },
                                { label: 'Experience', href: '#experience' },
                                { label: 'Skills', href: '#skills' },
                                { label: 'Leadership', href: '#leadership' },
                                { label: 'Contact', href: '#contact' },
                            ].map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-[#94A3B8] hover:text-cyan-300 transition-colors py-1 block"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Direct Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-3 lg:col-span-4"
                    >
                        <h4 className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-black mb-4">
                            Direct Contact
                        </h4>
                        <div className="space-y-2 text-xs">
                            <a
                                href="mailto:sayedshahloobpofficial@gmail.com"
                                className="block text-[#94A3B8] hover:text-white transition-colors truncate"
                            >
                                ✉️ sayedshahloobpofficial@gmail.com
                            </a>
                            <a
                                href="tel:+919567220971"
                                className="block text-[#94A3B8] hover:text-white transition-colors"
                            >
                                📞 +91 9567220971
                            </a>
                            <p className="text-[#94A3B8] pt-1">
                                📍 Angadipuram, Malappuram, Kerala, India
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-[#263449] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center text-[#94A3B8] text-xs">
                        <span>Crafted with</span>
                        <motion.div
                            animate={{ scale: [1, 1.25, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                            className="mx-1.5"
                        >
                            <Heart className="text-cyan-400 fill-cyan-400/20" size={13} />
                        </motion.div>
                        <span>by</span>
                        <span className="ml-1.5 text-white font-bold">
                            Sayed Shahloob P
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-[#94A3B8] text-xs">
                            © 2026 All rights reserved.
                        </span>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label="Scroll back to top"
                            className="w-10 h-10 bg-[#172033] border border-[#263449] rounded-xl flex items-center justify-center text-cyan-300 hover:text-white hover:border-blue-400 transition-all min-h-[40px] min-w-[40px]"
                        >
                            <ArrowUp size={16} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;