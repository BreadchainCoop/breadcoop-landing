export interface ProjectMetaData {
	id: string;
	name: string;
	description: string;
	image: string;
	websiteUrl: string;
	karmagapUrl: string;
}

export const projectsMetadata: ProjectMetaData[] = [
	{
		id: "trad-dream-factory",
		name: "Traditional Dream Factory",
		description:
			"Web3-enabled regenerative ecovillage in Portugal for collective living.",
		image: "/banner_traditional_dream.png",
		websiteUrl: "https://www.traditionaldreamfactory.com",
		karmagapUrl:
			"https://www.karmahq.xyz/project/traditional-dream-factory-1/about",
	},
	{
		id: "crypto-commons",
		name: "Crypto Commons Association",
		description: "Organizations focused on new cultural inquiries.",
		image: "/banner_cca.png",
		websiteUrl: "https://www.crypto-commons.org/",
		karmagapUrl:
			"https://gap.karmahq.xyz/project/crypto-commons-association",
	},
	{
		id: "symbiota",
		name: "Symbiota",
		description: "Organizations dedicated to cultural innovation.",
		image: "/banner_symbiota.png",
		websiteUrl: "https://symbiota.coop/",
		karmagapUrl: "https://gap.karmahq.xyz/project/symbiota",
	},
	{
		id: "citizen-wallet",
		name: "Citizen Wallet",
		description: "Open source tools for Web3 community currencies.",
		image: "/banner_citizenwallet.png",
		websiteUrl: "https://citizenwallet.xyz/",
		karmagapUrl:
			"https://gap.karmahq.xyz/project/citizen-wallet---an-open-source-wallet-with-account-abstraction-for-your-community-1",
	},
	{
		id: "regen-coordination",
		name: "Regen Coordination",
		description: "Supporting regenerative initiatives globally.",
		image: "/banner_refidao.png",
		websiteUrl: "https://www.regencoordination.xyz/",
		karmagapUrl: "https://gap.karmahq.xyz/community/regen-coordination",
	},
	{
		id: "gardens",
		name: "Gardens",
		description: "Next generation community governance.",
		image: "/banner_gardens.webp",
		websiteUrl:
			"https://app.gardens.fund/gardens/100/0xa555d5344f6fb6c65da19e403cb4c1ec4a1a5ee3/0xe33e18b5887cf16ad4e351e98980eb5f50727c31/76",
		karmagapUrl: "https://gap.karmahq.xyz/project/gardens-",
	},
];

export const TOTAL_PROJECTS = projectsMetadata.length + 2; // 2 comes from bread treasury and core
