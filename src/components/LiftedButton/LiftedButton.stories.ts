/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable storybook/no-redundant-story-name */
// src/components/LiftedButton/LiftedButton.stories.ts
import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import {
  ArrowUpRightIcon,
  SignOutIcon,
  SkullIcon,
  MagicWandIcon,
} from "@phosphor-icons/react/ssr";
import "@/app/globals.css";
import { akzidenz, univers } from "@/app/fonts";

import LiftedButton from "./LiftedButton";
import type { LiftedButtonColors } from "./LiftedButtonPresets";

type IconChoice = "none" | "arrowUpRight" | "signOut" | "skull" | "magicWand";

function makeIcon(choice: IconChoice): React.ReactNode | undefined {
  switch (choice) {
    case "arrowUpRight":
      return React.createElement(ArrowUpRightIcon, { size: 22 });
    case "signOut":
      return React.createElement(SignOutIcon, { size: 22 });
    case "skull":
      return React.createElement(SkullIcon, { size: 22 });
    case "magicWand":
      return React.createElement(MagicWandIcon, { size: 22 });
    case "none":
    default:
      return undefined;
  }
}

const meta: Meta<typeof LiftedButton> = {
  title: "Components/LiftedButton",
  component: LiftedButton,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    // Preset selector (radio)
    preset: {
      control: { type: "radio" },
      options: ["primary", "secondary", "destructive", "positive"],
    },

    // Manual colors as individual color pickers (flattened for SB controls)
    // @ts-expect-error - ignore because storybook
    "colorOverrides.bg": { control: "color", name: "colorOverrides.bg" },
    "colorOverrides.text": { control: "color", name: "colorOverrides.text" },
    "colorOverrides.hoverBg": {
      control: "color",
      name: "colorOverrides.hoverBg",
    },
    "colorOverrides.hoverText": {
      control: "color",
      name: "colorOverrides.hoverText",
    },
    "colorOverrides.shadowBg": {
      control: "color",
      name: "colorOverrides.shadowBg",
    },

    // Icon radios (string choices, mapped to ReactNodes in render)
    leftIconChoice: {
      control: { type: "radio" },
      options: ["none", "arrowUpRight", "signOut", "skull", "magicWand"],
      description: "Left icon selection (mapped to React element in render).",
    },
    rightIconChoice: {
      control: { type: "radio" },
      options: ["none", "arrowUpRight", "signOut", "skull", "magicWand"],
      description: "Right icon selection (mapped to React element in render).",
    },

    // Other props
    offsetPx: { control: { type: "number", min: 0, max: 24, step: 1 } },
    durationMs: { control: { type: "number", min: 0, max: 3000, step: 50 } },
    disabled: { control: "boolean" },
    className: { control: "text" },

    // Hidden/handled manually
    leftIcon: { control: false },
    rightIcon: { control: false },
    colorOverrides: { control: false },
    type: { control: false },
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof LiftedButton>;

// Helper to collect flattened color controls into a nested object
function collectOverrides(args: any): Partial<LiftedButtonColors> {
  const keys = ["bg", "text", "hoverBg", "hoverText", "shadowBg"] as const;
  const out: Partial<LiftedButtonColors> = {};
  for (const k of keys) {
    const v = args?.[`colorOverrides.${k}`];
    if (typeof v === "string" && v.trim() !== "") {
      (out as any)[k] = v;
    }
  }
  return out;
}

/**
 * SHOWCASE — header + 3 buttons in one row (≈30px gap)
 */
export const Showcase: Story = {
  name: "Showcase",
  render: () =>
    React.createElement(
      "div",
      { className: `${akzidenz.variable} ${univers.variable}` },
      React.createElement(
        "div",
        {
          className:
            "w-full mx-auto px-6 py-12 pb-20 bg-[var(--color-paper-main)]",
        },
        React.createElement(
          "h1",
          { className: "text-h1 mb-6 text-center" },
          "Lifted Buttons"
        ),
        React.createElement(
          "div",
          {
            style: {
              display: "flex",
              gap: 30,
              alignItems: "center",
              justifyContent: "center",
            },
          },
          React.createElement(
            LiftedButton,
            // @ts-expect-error - ignore because storybook
            {
              rightIcon: React.createElement(ArrowUpRightIcon, { size: 22 }),
              preset: "primary",
            },
            "Primary"
          ),
          React.createElement(
            LiftedButton,
            // @ts-expect-error - ignore because storybook
            {
              rightIcon: React.createElement(SignOutIcon, { size: 22 }),
              preset: "secondary",
            },
            "Secondary"
          ),
          React.createElement(
            LiftedButton,
            // @ts-expect-error - ignore because storybook
            {
              rightIcon: React.createElement(SkullIcon, { size: 22 }),
              preset: "destructive",
            },
            "Destructive"
          ),
          React.createElement(
            LiftedButton,
            // @ts-expect-error - ignore because storybook
            {
              rightIcon: React.createElement(MagicWandIcon, { size: 22 }),
              preset: "positive",
            },
            "Positive"
          )
        )
      )
    ),
};

/**
 * PLAYGROUND — interactive controls with icon radios + manual colours
 * We rebuild `colorOverrides` from flattened controls and map icon choices.
 */
export const Playground: Story = {
  name: "Playground (Controls)",
  args: {
    children: "Click me",
    preset: "primary",
    colorOverrides: {}, // merged with flattened controls
    offsetPx: 4,
    durationMs: 500,
    disabled: false,
    leftIcon: "none" as IconChoice,
    rightIcon: "none" as IconChoice,
  },
  render: (rawArgs: any) => {
    const manual = collectOverrides(rawArgs);

    const left = makeIcon(rawArgs.leftIconChoice as IconChoice);
    const right = makeIcon(rawArgs.rightIconChoice as IconChoice);

    // Build final args for the actual component (don’t pass the *Choice fields through)
    const { leftIconChoice: _l, rightIconChoice: _r, ...rest } = rawArgs;

    const args = {
      ...rest,
      colorOverrides: { ...(rawArgs as any).colorOverrides, ...manual },
      leftIcon: left,
      rightIcon: right,
    };

    return React.createElement(
      "div",
      { className: `${akzidenz.variable} ${univers.variable}` },
      React.createElement(
        "div",
        { className: "w-full max-w-[720px] mx-auto px-6 py-8" },
        React.createElement(LiftedButton, args)
      )
    );
  },
};
