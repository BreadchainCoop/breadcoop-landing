export const LINKS = {
  newsletter: "http://paragraph.com/@breadcoop",
  solidarityFund: "https://app.breadchain.xyz",
  docs: "https://docs.bread.coop",
  dashboard: "https://dune.com/breadchain_cooperative/breadchain",
  discord: "https://discord.com/invite/zmNqsHRHDa",
  farcaster: "ttps://farcaster.xyz/~/channel/cryptoleft",
  giveth: "https://giveth.io/project/breadchain-cooperative",
  openCollective: "https://opencollective.com/breadchain-cooperative",
  github: "http://github.com/BreadchainCoop",
  twitter: "https://x.com/breadchain_",
  sourdoughSystems: "https://www.sourdough.systems/",
} as const;

export type LinkKey = keyof typeof LINKS;
