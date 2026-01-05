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
        projects: "Sayed has led web development for clients like Brookvalley Resort, 1001 Nights Shawarma, and Gueston Travels at Hirush Global. He also builds CRM systems and mobile apps.",
        contact: "You can reach Sayed via email, LinkedIn, GitHub, or directly on WhatsApp! Scroll down to the Contact section for all the links.",
        education: "Sayed is pursuing his education with a focus on software development and has completed various technical certifications.",
        default: "That's a great question! Feel free to explore the portfolio to learn more about Sayed's work, or ask me about his skills, experience, projects, or how to contact him."
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { type: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);

        // Simple keyword-based responses
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
                className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center hover:shadow-purple-500/50 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                animate={isOpen ? {} : {
                    boxShadow: [
                        '0 0 20px rgba(168, 85, 247, 0.5)',
                        '0 0 40px rgba(168, 85, 247, 0.8)',
                        '0 0 20px rgba(168, 85, 247, 0.5)',
                    ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="text-white" size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            className="relative"
                        >
                            <MessageCircle className="text-white" size={28} />
                            <motion.div
                                className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="fixed bottom-28 right-8 z-50 w-96 h-[500px] bg-gradient-to-br from-slate-900/95 to-purple-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/20 overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center gap-3">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                            >
                                <Sparkles className="text-white" size={24} />
                            </motion.div>
                            <div>
                                <h3 className="text-white font-bold text-lg">AI Assistant</h3>
                                <p className="text-white/80 text-xs">Ask me anything!</p>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-[340px] overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-slate-800">
                            {messages.map((message, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl ${message.type === 'user'
                                            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                            : 'bg-slate-700/50 text-gray-200 border border-slate-600/30'
                                            }`}
                                    >
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-800/50 backdrop-blur-sm border-t border-slate-700/50">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-1 bg-slate-700/50 text-white px-4 py-2 rounded-xl border border-slate-600/30 focus:outline-none focus:border-purple-500/50 transition-colors"
                                />
                                <motion.button
                                    onClick={handleSend}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-xl hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                                >
                                    <Send className="text-white" size={20} />
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
