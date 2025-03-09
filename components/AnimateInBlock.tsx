import React from "react";

interface AnimateInBlockProps {
  children: React.ReactNode;
  order: number;
  duration?: number;
}

export function AnimateInBlock({
  children,
  order,
  duration = 500,
}: AnimateInBlockProps) {
  const delay = `${100 + (order - 1) * 200}ms`;

  return (
    <div
      className="opacity-0 animate-[slideUp_ease-out_forwards]"
      style={{
        animationDelay: delay,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
