export const LINKS = {
  newsletter: "http://paragraph.com/@breadcoop",
  solidarityFund: "https://app.breadchain.xyz",
  dashboard: "https://dune.com/breadchain_cooperative/breadchain",
  giveth: "https://giveth.io/project/breadchain-cooperative",
  openCollective: "https://opencollective.com/breadchain-cooperative",
  github: "http://github.com/BreadchainCoop",
} as const;

export type LinkKey = keyof typeof LINKS;
