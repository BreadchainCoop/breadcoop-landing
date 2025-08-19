"use client";

import React from "react";
import {
  LiftedButtonColors,
  LiftedButtonPreset,
  LIFTED_BUTTON_PRESETS,
  colorsToStyleVars,
} from "./LiftedButtonPresets";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

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
  durationMs = 500,
  className = "",
  type = "button",
  ...rest // Add extra props to apply to the button
}: LiftedButtonProps) {
  // Turn out inputs into CSS variables for use with tailwind.
  // More bloody boilerplate really.
  const base = LIFTED_BUTTON_PRESETS[preset];
  const mergedColors: LiftedButtonColors = { ...base, ...colorOverrides };
  const styleVars: React.CSSProperties = {
    ...colorsToStyleVars(mergedColors),
    ["--btn-offset" as any]: `${offsetPx}px`,
    ["--btn-duration" as any]: `${durationMs}ms`,
  };

  const baseClassNames = [
    "relative z-10 inline-flex items-center justify-center gap-[8px]",
    "text-body text-[16px]",
    "px-[32px] py-[16px]",
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

  const disabledClassNames = [
    "bg-[var(--color-surface-grey)] text-[var(--color-background)] opacity-50",
  ];

  const classNames = baseClassNames.concat(
    disabled ? disabledClassNames : activeClassNames
  );
  classNames.push(className);

  return (
    <span
      className={[
        "relative inline-block select-none align-middle",
        "group", // allows us to inherit hover activity on this parent in the children
      ].join(" ")}
      style={styleVars}
    >
      {/* Background layer */}
      {disabled ? null : (
        <span aria-hidden className="absolute inset-0 bg-[var(--btn-shadow)]" />
      )}

      {/* Main button */}
      <button type={type} className={classNames.join(" ")} {...rest}>
        {leftIcon ? (
          <span className="shrink-0 py-[5px]" aria-hidden>
            {leftIcon}
          </span>
        ) : null}
        <span className="whitespace-nowrap leading-none p-[5px]">
          {children}
        </span>
        {rightIcon ? (
          <span className="shrink-0 py-[5px]" aria-hidden>
            {rightIcon}
          </span>
        ) : null}
      </button>
    </span>
  );
}
