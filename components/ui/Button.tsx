import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  fullWidth = false,
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full";
  
  const variants = {
    primary: "bg-gradient-to-r from-sky-500 to-violet-500 text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] border border-transparent",
    secondary: "bg-white text-black hover:bg-zinc-200 border border-transparent",
    outline: "bg-transparent border border-zinc-700 text-white hover:border-zinc-500 hover:bg-zinc-900",
    ghost: "bg-transparent text-zinc-300 hover:text-white hover:bg-zinc-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
