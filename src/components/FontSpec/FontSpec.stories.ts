// src/components/FontSpec/FontSpec.stories.ts
import type { Meta, StoryObj } from "@storybook/nextjs";
import React from "react";
import "@/app/globals.css";
import { breadDisplay, breadBody } from "@/app/fonts";
import FontSpec from "./FontSpec";

const meta: Meta<typeof FontSpec> = {
  title: "Typography/FontSpec",
  component: FontSpec,
  parameters: { layout: "fullscreen" },
};
export default meta;

type Story = StoryObj<typeof FontSpec>;

export const Default: Story = {
  render: () =>
    React.createElement(
      "div",
      { className: `${breadDisplay.variable} ${breadBody.variable}` },
      React.createElement(FontSpec)
    ),
};
