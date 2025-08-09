import React from "react";

// Boilerplate for typesafe inputs
export type LiftedButtonProps = {
  children: React.ReactNode;
  rightIcon?: React.ReactNode;
  bgCol?: string;
  textCol?: string;
  hoverBgCol?: string;
  hoverTextCol?: string;
  shadowBgCol?: string;
  offsetPx?: number;
  durationMs?: number;
  className?: string;
} & React.ComponentPropsWithoutRef<'button'>;

/**
 * LiftedButton — a square-edged button that floats up-left of a dark base layer.
 * - Hover: fades to alternate colors.
 * - Active: depresses button and colors return to normal.
 * - Transition duration defaults to 500ms.
 * - Icon can be rendered on the right.
 */
export default function LiftedButton({
  children,
  rightIcon,
  bgCol = "#e11d48", // rose-600
  textCol = "#ffffff",
  hoverBgCol = "#fb7185", // rose-400
  hoverTextCol = "#ffffff",
  shadowBgCol = "#111827", // gray-900
  offsetPx = 4,
  durationMs = 500,
  className = "",
  type = "button",
  ...rest // Add extra props to apply to the button
}: LiftedButtonProps) {
  // Turn out inputs into CSS variables for use with tailwind.
  // More bloody boilerplate really.
  const styleVars: React.CSSProperties = {
    // colors
    ["--btn-bg" as any]: bgCol,
    ["--btn-text" as any]: textCol,
    ["--btn-hover-bg" as any]: hoverBgCol,
    ["--btn-hover-text" as any]: hoverTextCol,
    ["--btn-shadow" as any]: shadowBgCol,
    // offset
    ["--btn-offset" as any]: `${offsetPx}px`,
    ["--btn-off-x" as any]: `calc(-1 * var(--btn-offset))`,
    ["--btn-off-y" as any]: `calc(-1 * var(--btn-offset))`,
    // timing
    ["--btn-duration" as any]: `${durationMs}ms`,
  };

  return (
    <span
      className={[
        "relative inline-block select-none align-middle",
        "group", // allows us to inherit hover activity on this parent in the children
      ].join(" ")}
      style={styleVars}
    >
      {/* Background layer */}
      <span
        aria-hidden
        className="absolute inset-0 bg-[var(--btn-shadow)]"
      />

      {/* Main button */}
      <button
        type={type}
        className={[
          // layout (can have text and button, always horizontally and vertivally centered)
          "relative z-10 inline-flex items-center justify-center gap-2",
          // padding
          "px-4 py-2",
          // idle colors
          "bg-[var(--btn-bg)] text-[var(--btn-text)]",
          // hover colors
          "group-hover:bg-[var(--btn-hover-bg)] group-hover:text-[var(--btn-hover-text)]",
          // on click/activate restores colors (same as idle)
          "group-active:bg-[var(--btn-bg)] group-active:text-[var(--btn-text)]",
          // motion
          "transition-all duration-[var(--btn-duration)] ease-out",
          // initial lifted offset
          "translate-x-[var(--btn-off-x)] translate-y-[var(--btn-off-y)]",
          // on active (click), snap to base (0,0)
          "group-active:translate-x-0 group-active:translate-y-0",
          // focus styles for accessibility
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          "focus-visible:ring-white/80 focus-visible:ring-offset-black/40",
          className,
        ].join(" ")}
        {...rest}
      >
        <span className="whitespace-nowrap leading-none">{children}</span>
        {rightIcon ? <span className="shrink-0" aria-hidden>{rightIcon}</span> : null}
      </button>
    </span>
  );
}

/*
Usage example (Next.js / React):

import { ArrowRight } from "lucide-react";
import LiftedButton from "@/components/ui/LiftedButton";

export default function Example() {
  return (
    <div className="p-8 bg-neutral-900 min-h-[50vh] flex items-center justify-center">
      <LiftedButton
        rightIcon={<ArrowRight size={18} />}
        bg="#dc2626" // red-600
        hoverBg="#f87171" // red-400
        shadowBg="#1f2937" // gray-800
        onClick={() => console.log("clicked")}
      >
        Click Me
      </LiftedButton>
    </div>
  );
}
*/
