import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        className="w-full flex justify-between items-center px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/20 transition-all duration-200"
        onClick={() => setOpen((o) => !o)}
      >
        <span>{value || placeholder || 'Select an option'}</span>
        <ChevronDown className={`ml-2 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} size={18} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 mt-2 w-full bg-slate-800 border border-slate-600/50 rounded-lg shadow-lg overflow-hidden max-h-44 overflow-y-auto custom-scrollbar"
            style={{scrollbarWidth: 'thin'}}
          >
            {options.map((option) => (
              <li
                key={option}
                className={`px-4 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-emerald-500/30 hover:to-cyan-500/30 text-white transition-all duration-150 ${option === value ? 'bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 font-semibold' : ''}`}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </motion.ul>
// Custom scrollbar styles
// Add this to your global CSS if not already present
// .custom-scrollbar::-webkit-scrollbar {
//   width: 6px;
//   background: transparent;
// }
// .custom-scrollbar::-webkit-scrollbar-thumb {
//   background: linear-gradient(to bottom, #34d399, #06b6d4);
//   border-radius: 6px;
// }
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
