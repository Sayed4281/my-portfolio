import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles } from 'lucide-react';

const AIChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: "Hi! I'm Sayed's AI assistant. Ask me anything about his skills, experience, or projects!"
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
        default: "That's a great question! Feel free to explore the portfolio to learn more about Sayed's work, or ask me about his skills, experience, projects, or how to contact him."
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
            {/* Floating Chat Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-violet-500 rounded-xl shadow-2xl shadow-violet-500/20 flex items-center justify-center hover:bg-violet-400 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="text-black" size={22} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            className="relative"
                        >
                            <MessageCircle className="text-black" size={22} />
                            <motion.div
                                className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full"
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.9 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed bottom-28 right-8 z-50 w-[360px] h-[480px] bg-[#0a0a0a] backdrop-blur-xl rounded-xl shadow-2xl border border-white/[0.06] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-[#111111] border-b border-white/[0.06] p-4 flex items-center gap-3">
                            <div className="w-8 h-8 bg-violet-500/10 rounded-lg flex items-center justify-center">
                                <Sparkles className="text-violet-400" size={16} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-sm">AI Assistant</h3>
                                <p className="text-neutral-500 text-[10px]">Ask me anything</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-[330px] overflow-y-auto p-4 space-y-3">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-xl ${message.type === 'user'
                                            ? 'bg-violet-500 text-black'
                                            : 'bg-white/[0.04] text-neutral-300 border border-white/[0.06]'
                                            }`}
                                    >
                                        <p className="text-xs leading-relaxed">{message.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-[#0a0a0a] border-t border-white/[0.06]">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-white/[0.04] text-white text-xs px-3 py-2.5 rounded-lg border border-white/[0.06] focus:outline-none focus:border-violet-500/30 transition-colors placeholder-neutral-600"
                                />
                                <motion.button
                                    onClick={handleSend}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-violet-500 p-2.5 rounded-lg hover:bg-violet-400 transition-colors"
                                >
                                    <Send className="text-black" size={14} />
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
