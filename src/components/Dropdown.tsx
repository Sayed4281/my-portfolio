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
        className="w-full flex justify-between items-center px-4 py-3 bg-white/[0.03] border border-white/[0.06] rounded-lg text-white text-sm focus:border-violet-500/40 focus:outline-none focus:ring-1 focus:ring-violet-500/20 transition-all duration-300"
        onClick={() => setOpen((o) => !o)}
      >
        <span className={value ? 'text-white' : 'text-neutral-600'}>{value || placeholder || 'Select an option'}</span>
        <ChevronDown className={`ml-2 text-neutral-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} size={16} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 mt-2 w-full bg-[#111111] border border-white/[0.06] rounded-lg shadow-xl overflow-hidden max-h-44 overflow-y-auto"
            style={{ scrollbarWidth: 'thin' }}
          >
            {options.map((option) => (
              <li
                key={option}
                className={`px-4 py-3 cursor-pointer text-sm hover:bg-violet-500/10 hover:text-violet-400 text-neutral-400 transition-all duration-200 ${option === value ? 'bg-violet-500/10 text-violet-400 font-medium' : ''}`}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
