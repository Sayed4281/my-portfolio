'use client';

import Link from 'next/link';
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
        <footer className="bg-slate-100/90 border-t border-slate-200/80 relative overflow-hidden text-slate-700">
            {/* Subtle ambient light background glow */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-blue-500/[0.06] rounded-full blur-[100px]" />
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
                        <h3 className="text-xl font-black text-slate-900 mb-3 font-display tracking-tight">
                            SAYED SHAHLOOB P<span className="text-blue-600">.</span>
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
                            Software Developer, Technical Project Lead, and Business Analyst bridging client requirements with scalable enterprise software delivery.
                        </p>

                        {/* Social Links Row */}
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-blue-700 block mb-3">
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
                                        className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:text-blue-600 hover:border-blue-400 transition-all shadow-sm group min-h-[44px] min-w-[44px] flex items-center justify-center"
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
                        <h4 className="text-blue-700 text-xs uppercase tracking-[0.2em] font-black mb-4">
                            Navigation
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About', href: '/about' },
                                { label: 'Projects', href: '/projects' },
                                { label: 'Services', href: '/services' },
                                { label: 'Contact', href: '/contact' },
                                { label: 'Career Timeline', href: '/about#experience' },
                                { label: 'How I Work', href: '/about#how-i-work' },
                                { label: 'Technologies', href: '/services#technologies' },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors py-1 block"
                                >
                                    {link.label}
                                </Link>
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
                        <h4 className="text-blue-700 text-xs uppercase tracking-[0.2em] font-black mb-4">
                            Direct Contact
                        </h4>
                        <div className="space-y-2 text-xs">
                            <a
                                href="mailto:sayedshahloobpofficial@gmail.com"
                                className="block text-slate-600 hover:text-blue-600 transition-colors truncate font-medium"
                            >
                                ✉️ sayedshahloobpofficial@gmail.com
                            </a>
                            <a
                                href="tel:+919567220971"
                                className="block text-slate-600 hover:text-blue-600 transition-colors font-medium"
                            >
                                📞 +91 9567220971
                            </a>
                            <p className="text-slate-500 pt-1">
                                📍 Angadipuram, Malappuram, Kerala, India
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center text-slate-500 text-xs">
                        <span>Crafted with</span>
                        <motion.div
                            animate={{ scale: [1, 1.25, 1] }}
                            transition={{ duration: 1.8, repeat: Infinity }}
                            className="mx-1.5"
                        >
                            <Heart size={14} className="text-red-500 fill-red-500" />
                        </motion.div>
                        <span>by Sayed Shahloob P · © {new Date().getFullYear()}</span>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-blue-600 hover:border-blue-300 text-xs font-semibold transition-all shadow-sm group"
                    >
                        <span>Back to top</span>
                        <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;