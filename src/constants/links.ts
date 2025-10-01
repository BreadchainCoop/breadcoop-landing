export const LINKS = {
  contributorForm:
    "https://docs.google.com/forms/d/15f9dR00sEj6FB3hhzLiqTO3NRq15SSak1MrpxAVdTbE/preview?edit_requested=true",
  dashboard: "https://dune.com/breadchain_cooperative/breadchain",
  discord: "https://discord.com/invite/zmNqsHRHDa",
  docs: "https://docs.bread.coop",
  docsBreadToken: "https://docs.bread.coop/bread-token/",
  docsManifesto: "https://docs.bread.coop/manifesto",
  docsHowToBecomeAMemberProject:
    "https://docs.bread.coop/how-to-become-a-member-project",
  docsVotingPower: "https://docs.bread.coop/voting-power",
  farcaster: "https://farcaster.xyz/~/channel/cryptoleft",
  giveth: "https://giveth.io/project/breadchain-cooperative",
  github: "http://github.com/BreadchainCoop",
  linkedin: "https://www.linkedin.com/company/breadchain-cooperative/",
  newsletter: "http://paragraph.com/@breadcoop",
  openCollective: "https://opencollective.com/breadchain-cooperative",
  postCapitalistIdea: "https://form.typeform.com/to/opwqWG8j",
  projectApplicationForm: "https://forms.gle/DeTETFxCxZbKRCzS7",
  solidarityFund: "https://app.breadchain.xyz",
  sourdoughSystems: "https://www.sourdough.systems/",
  twitter: "https://x.com/breadchain_",
  youtube: "https://www.youtube.com/@BreadchainCooperative/",
} as const;

export type LinkKey = keyof typeof LINKS;
