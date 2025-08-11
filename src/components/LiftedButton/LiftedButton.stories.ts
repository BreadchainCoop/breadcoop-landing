import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import * as React from "react";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import LiftedButton from "./LiftedButton";

const meta: Meta<typeof LiftedButton> = {
  title: "Components/LiftedButton",
  component: LiftedButton,
  argTypes: {
    bgCol: { control: "color" },
    textCol: { control: "color" },
    hoverBgCol: { control: "color" },
    hoverTextCol: { control: "color" },
    shadowBgCol: { control: "color" },
    offsetPx: { control: { type: "number", min: 0, max: 20, step: 1 } },
    durationMs: { control: { type: "number", min: 100, max: 2000, step: 50 } },
  },
};

export default meta;

type Story = StoryObj<typeof LiftedButton>;

export const Default: Story = {
  args: {
    children: "Click Me"
  },
};

export const WithIcons: Story = {
  args: {
    children: "Next",
    leftIcon: React.createElement(ArrowRight, { size: 18, weight: "bold" }),
    rightIcon: React.createElement(ArrowRight, { size: 18, weight: "bold" }),
  },
};

export const CustomColors: Story = {
  args: {
    children: "Custom Colors",
    rightIcon: React.createElement(ArrowRight, { size: 18, weight: "bold" }),
    bgCol: "#dc2626", // red-600
    textCol: "#ffffff",
    hoverBgCol: "#f87171", // red-400
    hoverTextCol: "#000000",
    shadowBgCol: "#1f2937", // gray-800
  },
};

export const LargeOffsetSlowTransition: Story = {
  args: {
    children: "Lifted Slow",
    rightIcon: React.createElement(ArrowRight, { size: 18, weight: "bold" }),
    offsetPx: 10,
    durationMs: 1000,
  },
};
