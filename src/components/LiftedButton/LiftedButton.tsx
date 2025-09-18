"use client";

import React from "react";
import {
  LiftedButtonColors,
  LiftedButtonPreset,
  LIFTED_BUTTON_PRESETS,
  colorsToStyleVars,
} from "./LiftedButtonPresets";

// Helper function to clone React element and add classes
const cloneWithClasses = (
  element: React.ReactNode,
  additionalClasses: string
): React.ReactNode => {
  if (React.isValidElement(element)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const existingClassName = (element.props as any).className || "";
    const newClassName = `${existingClassName} ${additionalClasses}`.trim();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return React.cloneElement(element as React.ReactElement<any>, {
      className: newClassName,
    });
  }
  return element;
};

// Boilerplate for typesafe inputs
export type LiftedButtonProps = {
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  disabled?: boolean;
  preset?: LiftedButtonPreset;
  colorOverrides?: Partial<LiftedButtonColors>;
  offsetPx?: number;
  durationMs?: number;
  className?: string;
  width?: "full" | "auto" | "mobile-full";
  scrollTo?: string; // Element ID to scroll to
} & React.ComponentPropsWithoutRef<"button">;

/**
 * LiftedButton — a square-edged button that floats up-left of a dark base layer.
 * - Preset: Choose "primary" (default), "secondary", "destructive", or "positive"
 * - ColorOverrides: Pass in a dict specifying manual colours
 * - Hover: fades to alternate colors.
 * - Active: depresses button and colors return to normal.
 * - Transition duration defaults to 500ms.
 * - Icons can be rendered on the right or left.
 */
export default function LiftedButton({
  children,
  leftIcon,
  rightIcon,
  disabled = false,
  preset = "primary",
  colorOverrides = {},
  offsetPx = 4,
  durationMs = 300,
  className = "",
  type = "button",
  width = "auto",
  scrollTo,
  ...rest // Add extra props to apply to the button
}: LiftedButtonProps) {
  // Turn out inputs into CSS variables for use with tailwind.
  // More bloody boilerplate really.
  const base = LIFTED_BUTTON_PRESETS[preset];
  const mergedColors: LiftedButtonColors = { ...base, ...colorOverrides };
  const styleVars: React.CSSProperties = {
    ...colorsToStyleVars(mergedColors),
    ["--btn-offset" as string]: `${offsetPx}px`,
    ["--btn-duration" as string]: `${durationMs}ms`,
  };

  const baseClassNames = [
    "relative z-10 inline-flex items-center justify-center gap-[8px]",
    "text-body text-[16px]",
    "px-[32px] h-14",
    disabled ? "cursor-not-allowed" : "cursor-pointer",
    width === "full" ? "w-full" : "",
    width === "mobile-full" ? "w-full xl:w-auto" : "",
  ];

  const activeClassNames = [
    // idle colours
    "bg-[var(--btn-bg)] text-[var(--btn-text)]",
    // hover colours
    "group-hover:bg-[var(--btn-hover-bg)] group-hover:text-[var(--btn-hover-text)]",
    // active (returns to idle colours)
    "group-active:bg-[var(--btn-bg)] group-active:text-[var(--btn-text)]",
    // motion
    "transition-all duration-[var(--btn-duration)] ease-out",
    // lifted offset
    "-translate-x-[var(--btn-offset)] -translate-y-[var(--btn-offset)]",
    // depress to base on active
    "group-active:translate-x-0 group-active:translate-y-0",
  ];

  const disabledClassNames = ["bg-[var(--color-surface-grey)]  opacity-50"];

  const classNames = baseClassNames.concat(
    disabled ? disabledClassNames : activeClassNames
  );
  classNames.push(className);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If scrollTo is provided, handle smooth scrolling
    if (scrollTo) {
      e.preventDefault();
      document.getElementById(scrollTo)?.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Call the original onClick handler if provided
    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return (
    <span
      className={[
        width === "full"
          ? "relative block select-none align-middle"
          : width === "mobile-full"
          ? "relative block md:inline-block select-none align-middle"
          : "relative inline-block select-none align-middle",
        "group", // allows us to inherit hover activity on this parent in the children
      ].join(" ")}
      style={styleVars}
    >
      {/* Background layer */}
      {disabled ? null : (
        <span aria-hidden className="absolute inset-0 bg-[var(--btn-shadow)]" />
      )}

      {/* Main button */}
      <button
        type={type}
        className={classNames.join(" ")}
        onClick={handleClick}
        {...rest}
      >
        {leftIcon ? (
          <span
            className="shrink-0 py-[5px] flex items-center justify-center"
            aria-hidden
          >
            {cloneWithClasses(leftIcon, "w-6 h-6")}
          </span>
        ) : null}
        <span className="whitespace-nowrap mt-1 leading-none p-[5px]">
          {children}
        </span>
        {rightIcon ? (
          <span
            className="shrink-0 py-[5px] flex items-center justify-center"
            aria-hidden
          >
            {cloneWithClasses(rightIcon, "w-6 h-6")}
          </span>
        ) : null}
      </button>
    </span>
  );
}
