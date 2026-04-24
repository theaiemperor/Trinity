"use client";

import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index} 
            className="border border-white/10 rounded-2xl bg-zinc-950/50 backdrop-blur-sm overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
            >
              <span className="font-medium text-lg text-zinc-100">{item.question}</span>
              <IconChevronDown 
                className={`w-5 h-5 text-zinc-400 transition-transform duration-300 ${isOpen ? "transform rotate-180" : ""}`} 
              />
            </button>
            <div 
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-zinc-400 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
