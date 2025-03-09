import React from "react";

interface AnimateInBlockProps {
  children: React.ReactNode;
  order: number;
  durationMs?: number;
  delayMs?: number;
  as?: React.ElementType;
}

export function AnimateInBlock({
  children,
  order,
  durationMs = 500,
  delayMs = 200,
  as: Component = "div",
}: AnimateInBlockProps) {
  const delay = `${100 + (order - 1) * delayMs}ms`;

  return (
    <Component
      className="opacity-0 animate-[slideUp_ease-out_forwards]"
      style={{
        animationDelay: delay,
        animationDuration: `${durationMs}ms`,
      }}
    >
      {children}
    </Component>
  );
}
