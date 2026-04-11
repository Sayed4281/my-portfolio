import { motion } from 'framer-motion';
import { Heart, ArrowUp, Code, Smartphone, Search } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#0a0a0a] border-t border-white/[0.04] relative overflow-hidden">
            {/* Subtle ambient dots */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[2px] h-[2px] bg-white/20 rounded-full"
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

            <div className="container mx-auto px-6 py-12 relative z-10">
                <div className="grid md:grid-cols-3 gap-8 mb-10">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-xl font-bold text-white mb-3 font-display">
                            SAYED SHAHLOOB P<span className="text-white/40">.</span>
                        </h3>
                        <p className="text-neutral-500 text-sm leading-relaxed mb-5">
                            Full Stack Developer, Frontend Lead, and SEO Analyst with expertise in Flutter, React,
                            and modern web technologies.
                        </p>

                        {/* Subtle animated icons */}
                        <div className="flex gap-3">
                            {[Code, Smartphone, Search].map((Icon, i) => (
                                <motion.div
                                    key={i}
                                    className="text-neutral-700"
                                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                >
                                    <Icon size={16} />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h4 className="text-neutral-400 text-xs uppercase tracking-[0.2em] mb-4">Navigation</h4>
                        <div className="space-y-2.5">
                            {['About', 'Experience', 'Achievements', 'Skills', 'Projects', 'Contact'].map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="block text-neutral-600 hover:text-white transition-colors duration-300 text-sm"
                                >
                                    {link}
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
                        <h4 className="text-neutral-400 text-xs uppercase tracking-[0.2em] mb-4">Get In Touch</h4>
                        <div className="space-y-2.5 text-sm">
                            <a
                                href="mailto:sayedshahloobpofficial@gmail.com"
                                className="block text-neutral-600 hover:text-white transition-colors duration-300"
                            >
                                sayedshahloobpofficial@gmail.com
                            </a>
                            <a
                                href="tel:+919567220971"
                                className="block text-neutral-600 hover:text-white transition-colors duration-300"
                            >
                                +91 9567220971
                            </a>
                            <p className="text-neutral-600 text-xs leading-relaxed">
                                📍 Angadipuram, Malappuram, Kerala, India
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.04] pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center text-neutral-600 text-xs">
                        <span>Crafted with</span>
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="mx-1.5"
                        >
                            <Heart className="text-white/40" size={12} />
                        </motion.div>
                        <span>by</span>
                        <span className="ml-1.5 text-white/60 font-medium">
                            Sayed Shahloob P
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <span className="text-neutral-700 text-xs">
                            © 2024 All rights reserved.
                        </span>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-9 h-9 bg-white/[0.03] border border-white/[0.06] rounded-lg flex items-center justify-center text-neutral-500 hover:text-white hover:border-white/20 transition-all duration-300"
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