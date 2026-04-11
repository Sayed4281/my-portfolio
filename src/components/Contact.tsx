import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
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

  return (
    <section id="contact" className="py-24 relative bg-[#000000]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="mb-16">
            <span className="text-violet-600 text-xs font-bold tracking-widest uppercase mb-4 block">CONTACT</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-transparent mb-8" />
            <p className="text-neutral-500 text-lg max-w-xl">
              I'm currently available for exciting opportunities. Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Left Column: Contact Cards */}
            <div className="space-y-4">
              {contactOptions.map((item, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-6 p-6 bg-white/[0.03] border border-white/[0.05] rounded-2xl group transition-all hover:bg-white/[0.05]"
                >
                  <div className="w-12 h-12 bg-violet-600/10 rounded-xl flex items-center justify-center">
                    <item.icon size={20} className="text-violet-500" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase mb-1">{item.label}</p>
                    <p className="text-white font-medium text-sm">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-8">
                <p className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase mb-6">CONNECT</p>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: "https://github.com/Sayed4281" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/er-sayed-shahloob-p/" },
                    { icon: WhatsAppIcon, href: "https://wa.me/919567220971" }
                  ].map((social, i) => (
                    <a 
                      key={i} 
                      href={social.href} 
                      target="_blank"
                      className="w-12 h-12 bg-white/[0.03] border border-white/[0.05] rounded-xl flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/[0.1] transition-all"
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-8 md:p-12">
              <h3 className="text-xl font-bold text-white mb-8">Send a Message</h3>
              
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase">NAME</label>
                  <input
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-[#111] border border-white/[0.05] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-violet-600 transition-all placeholder:text-neutral-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase">EMAIL</label>
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-[#111] border border-white/[0.05] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-violet-600 transition-all placeholder:text-neutral-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase">SUBJECT</label>
                  <select
                    name="subject"
                    required
                    className="w-full bg-[#111] border border-white/[0.05] rounded-xl px-6 py-4 text-neutral-400 focus:outline-none focus:border-violet-600 transition-all appearance-none"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'rgba(255,255,255,0.3)\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\' /%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.2rem' }}
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="Project">Project Collaboration</option>
                    <option value="Freelance">Freelance Inquiry</option>
                    <option value="Hiring">Job Opportunity</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-neutral-500 tracking-wider uppercase">MESSAGE</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full bg-[#111] border border-white/[0.05] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-violet-600 transition-all resize-none placeholder:text-neutral-700"
                  />
                </div>

                {feedback.message && (
                  <div className={`text-xs font-bold p-4 rounded-xl ${feedback.type === 'success' ? 'bg-violet-600/10 text-violet-400' : 'bg-red-500/10 text-red-400'}`}>
                    {feedback.message}
                  </div>
                )}

                <button
                  disabled={isSending}
                  className="w-full py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
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