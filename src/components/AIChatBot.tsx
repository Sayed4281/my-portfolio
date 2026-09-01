import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, MessageSquare } from 'lucide-react';

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
        scrollToBottom();
    }, [messages]);

    const quickResponses: Record<string, string> = {
        skills: "Sayed is proficient in Project Management (Agile, Jira, Scope), Business Analysis, React.js, Next.js, TypeScript, Flutter, Node.js, PostgreSQL, RBAC, and QA Testing.",
        experience: "Sayed works as Software Developer & Technical Lead at Hirush Global LLP, Frontend Engineer at Pro26 LLP, and previously Application Manager at Eduthalim International.",
        projects: "Sayed's primary showcase is Hirush ERP (HRMS, CRM, Finance, Payroll, Attendance, RBAC). He also built Resort Booking Management Systems and Attendance PWAs.",
        contact: "You can reach Sayed via email, LinkedIn, WhatsApp, or download his CV! Scroll down to the Contact section for all links.",
        education: "Sayed holds a B.Tech in Computer Science Engineering (8.08 CGPA) and has published research at ICETI4T 2025.",
        default: "Request received. Feel free to explore the portfolio to learn more about Sayed's work, or ask me about his skills, experience, projects, or how to contact him."
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { type: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);

        const lowerInput = input.toLowerCase();
        let response = quickResponses.default;

        if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('tech stack')) {
            response = quickResponses.skills;
        } else if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job')) {
            response = quickResponses.experience;
        } else if (lowerInput.includes('project') || lowerInput.includes('erp')) {
            response = quickResponses.projects;
        } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
            response = quickResponses.contact;
        } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('degree')) {
            response = quickResponses.education;
        }

        setTimeout(() => {
            const botMessage = { type: 'bot', text: response };
            setMessages(prev => [...prev, botMessage]);
        }, 400);

        setInput('');
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Corporate Floating Bot Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 flex items-center justify-center group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 1 }}
            >
                <div className="absolute inset-0 bg-blue-600 rounded-full shadow-lg shadow-blue-500/30 group-hover:bg-blue-500 transition-all duration-300 flex items-center justify-center border border-blue-400/30">
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

            {/* Corporate Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        className="fixed bottom-28 right-8 z-50 w-[360px] h-[500px] bg-[#172033] border border-[#263449] rounded-[2rem] shadow-2xl overflow-hidden backdrop-blur-2xl flex flex-col justify-between"
                    >
                        {/* Header */}
                        <div className="p-5 bg-[#0B1220] border-b border-[#263449] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-300">
                                    <Sparkles size={16} />
                                </div>
                                <div>
                                    <h3 className="text-xs font-black text-white uppercase tracking-wider">Assistant</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                                        <span className="text-[10px] font-bold text-[#94A3B8] uppercase tracking-tighter">Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-5 space-y-4">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: message.type === 'user' ? 15 : -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed font-medium ${message.type === 'user'
                                            ? 'bg-blue-600 text-white font-semibold'
                                            : 'bg-[#0B1220] text-[#94A3B8] border border-[#263449]'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Core */}
                        <div className="p-4 bg-[#0B1220] border-t border-[#263449]">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your question..."
                                    className="w-full bg-[#172033] border border-[#263449] text-white text-xs px-4 py-3 rounded-xl focus:outline-none focus:border-blue-500 transition-all placeholder:text-[#94A3B8]/50 pr-10"
                                />
                                <motion.button
                                    onClick={handleSend}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="absolute right-2 p-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-colors"
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
