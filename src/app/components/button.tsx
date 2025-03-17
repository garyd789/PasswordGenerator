import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const GeneratePasswordButton = () => {
  const [password, setPassword] = useState("empty");
  const [length, setLength] = useState(12);
  const [copied, setCopied] = useState(false);

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  const handleClick = () => {
    let newPassword = ""

    for (let i = 0; i < length; i++) {
        newPassword += chars[Math.floor(Math.random() * chars.length)];
        setPassword(newPassword);
        console.log(newPassword);
    }
    console.log(password);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}  
      animate={{ opacity: 1 }}  
      transition={{ duration: 3 }}  
    >
      <button 
        className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-base font-medium text-white backdrop-blur-3xl z-10">
          Generate Password
        </span>
      </button>
      <div 
        className='pt-5 text-white cursor-pointer hover:text-blue-300 transition-colors duration-200 relative italic'
        onClick={copyToClipboard}
      >
        {password}
        {copied && (
          <span className="absolute -right-20 top-5 text-sm text-green-400">
            Copied!
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default GeneratePasswordButton;