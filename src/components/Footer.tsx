'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
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
        <footer className="bg-slate-50 border-t border-slate-200 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
                    
                    {/* Brand Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-6 lg:col-span-5"
                    >
                        <div className="flex items-center gap-2.5 mb-3">
                            <span className="w-8 h-8 rounded-lg bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center tracking-tight">
                                SS
                            </span>
                            <h3 className="text-lg font-black text-slate-950 font-display tracking-tight">
                                SAYED SHAHLOOB P
                            </h3>
                        </div>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
                            Software Developer, Technical Project Lead, and Enterprise Business Analyst specializing in scalable ERP/HRMS architecture, robust backend workflows, and cross-functional engineering execution.
                        </p>

                        {/* Social Links Row */}
                        <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2.5">
                                Channels & Profiles
                            </span>
                            <div className="flex gap-2 flex-wrap">
                                {socialLinks.map((social, i) => (
                                    <a
                                        key={i}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.name}
                                        className="w-10 h-10 bg-white border border-slate-200 rounded-xl text-slate-700 hover:text-slate-950 hover:border-slate-900 hover:bg-slate-100 transition-all flex items-center justify-center shadow-2xs"
                                    >
                                        <social.icon size={16} />
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
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-3 lg:col-span-3"
                    >
                        <h4 className="text-slate-900 text-xs uppercase tracking-wider font-extrabold mb-4">
                            Navigation
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            {[
                                { label: 'Home', href: '/' },
                                { label: 'About', href: '/about' },
                                { label: 'Services', href: '/services' },
                                { label: 'Projects', href: '/projects' },
                                { label: 'Contact', href: '/contact' },
                            ].map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="text-slate-600 hover:text-slate-950 font-medium transition-colors py-1 block"
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
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="md:col-span-3 lg:col-span-4"
                    >
                        <h4 className="text-slate-900 text-xs uppercase tracking-wider font-extrabold mb-4">
                            Direct Inquiries
                        </h4>
                        <div className="space-y-2.5 text-xs">
                            <a
                                href="mailto:sayedshahloobpofficial@gmail.com"
                                className="block text-slate-600 hover:text-slate-950 font-medium transition-colors truncate"
                            >
                                ✉️ sayedshahloobpofficial@gmail.com
                            </a>
                            <a
                                href="tel:+919567220971"
                                className="block text-slate-600 hover:text-slate-950 font-medium transition-colors"
                            >
                                📞 +91 9567220971
                            </a>
                            <p className="text-slate-500 pt-1">
                                📍 Malappuram, Kerala, India (IST UTC+5:30)
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center text-slate-500 text-xs font-medium">
                        <span>Designed & Built with precision by</span>
                        <span className="ml-1.5 text-slate-900 font-bold">
                            Sayed Shahloob P
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-slate-500 text-xs">
                            © 2026 All rights reserved.
                        </span>

                        <motion.button
                            onClick={scrollToTop}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Scroll back to top"
                            className="w-9 h-9 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-700 hover:text-slate-950 hover:border-slate-900 transition-all shadow-2xs"
                        >
                            <ArrowUp size={15} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;