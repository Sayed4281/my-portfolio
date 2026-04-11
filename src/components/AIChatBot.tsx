import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, MessageSquare } from 'lucide-react';

const AIChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: "Initializing Neural Interface... I am Sayed's Virtual Assistant. Experience, skills, or projects—how can I assist your inquiry today?"
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
        skills: "Sayed is proficient in React.js, Next.js, TypeScript, Flutter, Node.js, MongoDB, and SEO. He also has experience with AI/ML integration and project management.",
        experience: "Sayed currently works as a Jr. Software Developer at Hirush Global LLP (React development), Frontend Engineer at Pro26 LLP (Flutter & React), and SEO Analyst at Hirush Global. He previously coordinated software projects at Edutalim International LLP.",
        projects: "Sayed has led web development for clients like 1001 Nights Shawarma and Gueston Travels at Hirush Global. He also builds CRM systems and mobile apps.",
        contact: "You can reach Sayed via email, LinkedIn, GitHub, or directly on WhatsApp! Scroll down to the Contact section for all the links.",
        education: "Sayed is pursuing his education with a focus on software development and has completed various technical certifications.",
        default: "Request received. Analyzing... Feel free to explore the portfolio to learn more about Sayed's work, or ask me about his skills, experience, projects, or how to contact him."
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
        } else if (lowerInput.includes('project')) {
            response = quickResponses.projects;
        } else if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('reach')) {
            response = quickResponses.contact;
        } else if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('degree')) {
            response = quickResponses.education;
        }

        setTimeout(() => {
            const botMessage = { type: 'bot', text: response };
            setMessages(prev => [...prev, botMessage]);
        }, 500);

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
            {/* Liquid-Metal Floating Bot Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 w-20 h-20 flex items-center justify-center group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', delay: 2 }}
            >
                {/* Orbital Ring */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-white/10 rounded-full border-dashed"
                />

                {/* Main Sphere */}
                <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-black backdrop-blur-md rounded-full border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent animate-shimmer" />
                </div>

                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            className="relative z-10"
                        >
                            <X className="text-white" size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="relative z-10 flex flex-col items-center"
                        >
                            <MessageSquare className="text-white fill-white/10" size={24} />
                            <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Tactical Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20, x: 20 }}
                        className="fixed bottom-32 right-8 z-50 w-[380px] h-[550px] bg-black border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-2xl"
                    >
                        {/* Status Header */}
                        <div className="p-6 bg-white/[0.02] border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                    <Sparkles size={18} className="text-white" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-black text-white uppercase tracking-widest">Neural Lynx</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-tighter">Secure Connection</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Neural Messages */}
                        <div className="h-[360px] overflow-y-auto p-6 space-y-6 scrollbar-hide">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: message.type === 'user' ? 20 : -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-4 rounded-2xl text-[11px] leading-relaxed tracking-wide font-medium ${message.type === 'user'
                                            ? 'bg-white text-black font-black'
                                            : 'bg-white/5 text-neutral-400 border border-white/5'
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Core */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Input signal..."
                                    className="w-full bg-white/5 border border-white/10 text-white text-[11px] px-5 py-4 rounded-2xl focus:outline-none focus:border-white/30 transition-all placeholder-neutral-600"
                                />
                                <motion.button
                                    onClick={handleSend}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="absolute right-3 p-2 bg-white rounded-xl text-black hover:bg-neutral-200 transition-colors"
                                >
                                    <Send size={14} />
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
