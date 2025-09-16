export const LINKS = {
  dashboard: "https://dune.com/breadchain_cooperative/breadchain",
  discord: "https://discord.com/invite/zmNqsHRHDa",
  docs: "https://docs.bread.coop",
  farcaster: "ttps://farcaster.xyz/~/channel/cryptoleft",
  giveth: "https://giveth.io/project/breadchain-cooperative",
  github: "http://github.com/BreadchainCoop",
  linkedin: "https://www.linkedin.com/company/breadchain-cooperative/",
  newsletter: "http://paragraph.com/@breadcoop",
  openCollective: "https://opencollective.com/breadchain-cooperative",
  solidarityFund: "https://app.breadchain.xyz",
  sourdoughSystems: "https://www.sourdough.systems/",
  twitter: "https://x.com/breadchain_",
  youtube: "https://www.youtube.com/@BreadchainCooperative/",
} as const;

export type LinkKey = keyof typeof LINKS;
