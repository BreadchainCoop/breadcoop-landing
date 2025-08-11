export type LiftedButtonPreset = keyof typeof LIFTED_BUTTON_PRESETS

/** Merge chosen preset + manual overrides, then emit CSS vars. */
export function colorsToStyleVars(c: LiftedButtonColors): React.CSSProperties {
  return {
    ["--btn-bg" as any]: asCssValue(c.bg),
    ["--btn-text" as any]: asCssValue(c.text),
    ["--btn-hover-bg" as any]: asCssValue(c.hoverBg),
    ["--btn-hover-text" as any]: asCssValue(c.hoverText),
    ["--btn-shadow" as any]: asCssValue(c.shadowBg),
  };
}

function asCssValue(v: string): string {
  if (!v) return "";
  return v.startsWith("--") ? `var(${v})` : v;
}

export type LiftedButtonColors = {
  bg: string;
  text: string;
  hoverBg: string;
  hoverText: string;
  shadowBg: string;
};

export const LIFTED_BUTTON_PRESETS = {
  primary: {
    bg: "--color-primary-orange",
    text: "--color-paper-main",
    hoverBg: "--color-orange-1",
    hoverText: "#ffffff",
    shadowBg: "#595959",
  },
  secondary: {
    bg: "#FBDED1",
    text: "--color-primary-orange",
    hoverBg: "#FFF1EA",
    hoverText: "--color-primary-orange",
    shadowBg: "#595959",
  },
  destructive: {
    bg: "--color-system-red",
    text: "--color-paper-main",
    hoverBg: "#BF0A00",
    hoverText: "#ffffff",
    shadowBg: "#595959",
  },
  positive: {
    bg: "--color-system-green",
    text: "--color-paper-main",
    hoverBg: "#2B8F00",
    hoverText: "#ffffff",
    shadowBg: "#595959",
  },
}