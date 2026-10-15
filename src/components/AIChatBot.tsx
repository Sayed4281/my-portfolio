'use client';

import { useState, useRef, useEffect } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, MessageSquare, ChevronRight } from 'lucide-react';

const AIChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: "Welcome! I am Sayed's Virtual Assistant. Experience, skills, or ERP projects—how can I assist your inquiry today?"
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const quickResponses: Record<string, string> = {
        skills: "Sayed is proficient in Enterprise ERP architecture, Project Management (Agile, Jira, Scope), Technical SEO, React.js, Next.js 15, TypeScript, Flutter, Node.js, and PostgreSQL. See his tech stack overview on the Services page (/services#technologies).",
        experience: "Sayed is Software Developer & Technical Lead at Hirush Global LLP, Frontend Engineer at Pro26 LLP, and previously Application Manager at Eduthalim International. View his full career timeline on the About page (/about#experience).",
        projects: "Sayed's flagship system is Hirush ERP (HRMS, CRM, Finance, Payroll, Attendance, RBAC) and NeuVitX AI (ICETI4T 2025 research publication). View full case studies on the Projects page (/projects).",
        contact: "You can reach Sayed via email (sayedshahloobpofficial@gmail.com), phone/WhatsApp (+91 9567220971), or the Contact page (/contact).",
        education: "Sayed holds a B.Tech in Computer Science & Engineering (8.08 CGPA) from MEA Engineering College / APJ Abdul Kalam Technological University and published research at ICETI4T 2025.",
        cv: "You can download Sayed's verified Curriculum Vitae directly using the 'Resume' button in the Header or on the About page!",
        default: "Request received. Feel free to explore the portfolio to learn more about Sayed's work, or ask me about his projects, experience, services, or how to contact him."
    };

    const sendQuery = (queryText: string) => {
        if (!queryText.trim()) return;

        const userMessage = { type: 'user', text: queryText };
        setMessages(prev => [...prev, userMessage]);

        const lowerInput = queryText.toLowerCase();
        let response = quickResponses.default;

        if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('tech stack')) {
            response = quickResponses.skills;
        } else if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
            response = quickResponses.experience;
        } else if (lowerInput.includes('project') || lowerInput.includes('erp') || lowerInput.includes('hirush')) {
            response = quickResponses.projects;
        } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach') || lowerInput.includes('phone')) {
            response = quickResponses.contact;
        } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('degree')) {
            response = quickResponses.education;
        } else if (lowerInput.includes('cv') || lowerInput.includes('resume')) {
            response = quickResponses.cv;
        }

        setTimeout(() => {
            const botMessage = { type: 'bot', text: response };
            setMessages(prev => [...prev, botMessage]);
        }, 350);

        setInput('');
    };

    const handleSend = () => {
        sendQuery(input);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const suggestionChips = [
        "Hirush ERP Details",
        "Technical Stack",
        "Work Experience",
        "Contact Information",
        "Download Resume"
    ];

    return (
        <>
            {/* Corporate Floating Bot Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center group min-h-[56px] min-w-[56px]"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 1 }}
                aria-label="Toggle AI Virtual Assistant"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full shadow-xl shadow-blue-500/30 group-hover:scale-105 transition-all duration-300 flex items-center justify-center border border-white/40">
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                            >
                                <X className="text-white" size={22} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.5, opacity: 0 }}
                            >
                                <MessageSquare className="text-white" size={22} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.button>

            {/* Corporate Chat Modal Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 right-4 sm:right-8 z-50 w-[calc(100vw-2rem)] sm:w-[380px] h-[520px] max-h-[80vh] bg-white border border-slate-200/90 rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-2xl flex flex-col justify-between"
                    >
                        {/* Header */}
                        <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200/80 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                                    <Sparkles size={16} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">AI Portfolio Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Instant Support</span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition-colors"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Body */}
                        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 bg-slate-50/30">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: message.type === 'user' ? 15 : -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed font-medium ${
                                            message.type === 'user'
                                            ? 'bg-blue-600 text-white font-semibold shadow-md'
                                            : 'bg-white text-slate-700 border border-slate-200/80 shadow-xs'
                                        }`}
                                    >
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Suggestion Chips */}
                        <div className="px-4 py-2 bg-slate-50/80 border-t border-slate-200/80 overflow-x-auto no-scrollbar flex items-center gap-1.5">
                            {suggestionChips.map((chip, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => sendQuery(chip)}
                                    className="px-2.5 py-1 text-[10px] font-bold text-blue-600 bg-white border border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 rounded-full whitespace-nowrap transition-all shrink-0 flex items-center gap-1 shadow-xs"
                                >
                                    <span>{chip}</span>
                                    <ChevronRight size={12} className="text-blue-500" />
                                </button>
                            ))}
                        </div>

                        {/* Input Core */}
                        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200/80">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your question..."
                                    className="w-full bg-white border border-slate-200 text-slate-900 text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-slate-400 pr-10 shadow-xs"
                                />
                                <motion.button
                                    onClick={handleSend}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute right-2 p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition-colors"
                                >
                                    <Send size={12} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatBot;

