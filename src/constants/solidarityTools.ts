import { LINKS } from "./links";
import { type LogoColor } from "@breadcoop/ui";

export interface SolidarityTool {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  color: LogoColor;
  buttonClass: string;
  colorOverrides?: {
    bg: string;
    hoverBg: string;
  };
  webLink?: string;
  comingSoon: boolean;
}

export const SOLIDARITY_TOOLS: SolidarityTool[] = [
  {
    id: "solidarity-fund",
    title: "Solidarity Fund",
    shortDescription: "Fund post-capitalism.",
    description:
      "Community coming together to fund what matters to us. Bake $BREAD and support projects you believe in.",
    color: "orange",
    buttonClass: "bg-primary-orange text-white",
    webLink: LINKS.solidarityFund,
    comingSoon: false,
  },
  {
    id: "stacks",
    title: "Stacks",
    shortDescription: "Save money together.",
    description: "Financial goals. Achieved together.",
    color: "blue",
    buttonClass: "",
    colorOverrides: {
      bg: "--color-primary-blue",
      hoverBg: "--color-blue-2",
    },
    comingSoon: true,
  },
  {
    id: "safety-net",
    title: "Safety Net",
    shortDescription: "Cover each other.",
    description:
      "Collective support guides us through crisis. Build emergency funds with people you trust.",
    color: "jade",
    buttonClass: "",
    colorOverrides: {
      bg: "--color-primary-jade",
      hoverBg: "--color-jade-2",
    },
    comingSoon: true,
  },
];

// Helper function to get tools by IDs
export function getSolidarityToolsByIds(ids: string[]): SolidarityTool[] {
  return SOLIDARITY_TOOLS.filter((tool) => ids.includes(tool.id));
}

// Helper function to get all tools except hidden ones
export function getVisibleSolidarityTools(
  hiddenIds: string[] = []
): SolidarityTool[] {
  return SOLIDARITY_TOOLS.filter((tool) => !hiddenIds.includes(tool.id));
}
