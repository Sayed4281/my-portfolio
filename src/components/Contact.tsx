import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setFeedback({ type: null, message: '' });

    emailjs
      .sendForm('service_d41lcvh', 'template_ulk7ogm', formRef.current!, {
        publicKey: 'Fg3N5vAQJxjsFNjRp',
      })
      .then(
        () => {
          setFeedback({ type: 'success', message: 'Mission accomplished! Message sent.' });
          if (formRef.current) formRef.current.reset();
        },
        (error) => {
          setFeedback({ type: 'error', message: `Ugh, something went wrong: ${error.text || 'Unknown error'}` });
        }
      )
      .finally(() => setIsSending(false));
  };

  const contactOptions = [
    { icon: Mail, label: 'EMAIL', value: 'sayedshahloobpofficial@gmail.com', href: 'mailto:sayedshahloobpofficial@gmail.com' },
    { icon: Phone, label: 'PHONE', value: '+91 9567220971', href: 'tel:+919567220971' },
    { icon: MapPin, label: 'LOCATION', value: 'Angadipuram, Malappuram, Kerala', href: '#' }
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/Sayed4281" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/er-sayed-shahloob-p/" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/_sayed_4281_?utm_source=qr&igsi=MTA2dW5nZDhyeHN1Yg==" },
    { name: "WhatsApp", icon: WhatsAppIcon, href: "https://wa.me/919567220971" },
    { name: "Email", icon: Mail, href: "mailto:sayedshahloobpofficial@gmail.com" }
  ];

  return (
    <section id="contact" className="py-28 relative bg-[#0E1726]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <span className="text-cyan-400 text-xs font-black tracking-widest uppercase mb-4 block">CONTACT</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent mb-8" />
            <p className="text-[#94A3B8] text-lg max-w-xl">
              I'm currently available for project management, software lead, and business analysis opportunities. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Cards */}
            <div className="space-y-4">
              {contactOptions.map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-6 p-6 bg-[#172033] border border-[#263449] rounded-2xl group transition-all hover:border-blue-500/40"
                >
                  <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center text-cyan-300">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase mb-1">{item.label}</p>
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-8">
                <p className="text-[10px] font-bold text-cyan-400 tracking-wider uppercase mb-6">CONNECT ACROSS SOCIAL MEDIA</p>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="w-12 h-12 bg-[#172033] border border-[#263449] rounded-xl flex items-center justify-center text-[#94A3B8] hover:text-cyan-300 hover:border-blue-500/40 transition-all group"
                    >
                      <social.icon size={20} className="group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="bg-[#172033] border border-[#263449] rounded-[2.5rem] p-8 md:p-12 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-8 font-display">Send a Message</h3>
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">NAME</label>
                  <input
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-[#94A3B8]/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">EMAIL</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all placeholder:text-[#94A3B8]/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">SUBJECT</label>
                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-6 py-4 text-[#94A3B8] focus:outline-none focus:border-blue-500 transition-all appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'rgba(148,163,184,0.6)\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.2rem' }}
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="Project">Project Collaboration</option>
                    <option value="Freelance">Freelance / Consulting Inquiry</option>
                    <option value="Hiring">Job Opportunity (PM / BA / Dev Lead)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#94A3B8] tracking-wider uppercase">MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full bg-[#0B1220] border border-[#263449] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-blue-500 transition-all resize-none placeholder:text-[#94A3B8]/50"
                  />
                </div>

                {feedback.message && (
                  <div className={`text-xs font-bold p-4 rounded-xl ${feedback.type === 'success' ? 'bg-blue-500/20 text-cyan-300 border border-blue-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                    {feedback.message}
                  </div>
                )}

                <button
                  disabled={isSending}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  <Send size={18} />
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;