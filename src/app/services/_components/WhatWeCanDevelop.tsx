import { Body, Heading3 } from "@breadcoop/ui";
import OverlappedHeading from "@/components/overlapped-heading";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { LINKS } from "@/constants/links";

type ChipColor = "orange" | "jade" | "blue";

const CHIP_COLORS: Record<ChipColor, string> = {
	orange: "border-primary-orange text-primary-orange",
	jade: "border-primary-jade text-primary-jade",
	blue: "border-primary-blue text-primary-blue",
};

const SERVICES = [
	{
		chip: "Solidity · EVM",
		chipColor: "orange" as ChipColor,
		title: "Smart Contracts & Onchain Systems",
		description:
			"Smart contract development, architecture, and review across EVM chains. Onchain treasuries with distribution logic, yield mechanisms, and gas-optimised custom infrastructure: from Gas Killer to Eigenlayer AVS.",
		link: LINKS.github,
		linkLabel: "View our code",
	},
	{
		chip: "$BREAD engine",
		chipColor: "jade" as ChipColor,
		title: "Stablecoin & Treasury Systems",
		description:
			"Stablecoin issuance and redemption, yield-bearing deposits, peg and collateral management, and programmable payments. We built the $BREAD engine and the Solidarity Fund's distribution system.",
		link: LINKS.solidarityFund,
		linkLabel: "See it live",
	},
	{
		chip: "Contracts to frontend",
		chipColor: "blue" as ChipColor,
		title: "Full-Stack dApp & Mobile Development",
		description:
			"Full-stack Web3 app development from contracts through frontend. Mobile apps for iOS and Android, wallet integration, savings-circle (ROSCA) mechanisms like Stacks, and onchain data dashboards.",
		link: LINKS.stacks,
		linkLabel: "See it live",
	},
	{
		chip: "Open rails",
		chipColor: "orange" as ChipColor,
		title: "AI Agents & Automation",
		description:
			"AI agents and bots that work where your people are. Messaging bots on open rails like Signal, workflow automation, and LLM integration built into your real processes instead of bolted on top.",
		link: LINKS.servicesForm,
		linkLabel: "Start a project",
	},
	{
		chip: "Kohaku",
		chipColor: "blue" as ChipColor,
		title: "UX/UI Design & Frontend",
		description:
			"Frontend engineering, performance optimisation, and UX/UI design. We designed and built the Kohaku Extension for the Ethereum Foundation, a reference for private-by-default wallets.",
		link: LINKS.servicesForm,
		linkLabel: "Start a project",
	},
	{
		chip: "Workshops",
		chipColor: "jade" as ChipColor,
		title: "Advisory, Content & Education",
		description:
			"Technical consultation, integration support, and workshops. Content strategy, narrative development, documentation, and user guides. We explain the work as well as we do it.",
		link: LINKS.servicesForm,
		linkLabel: "Book a session",
	},
];

const WhatWeCanDevelop = () => {
	return (
		<section
			id="what-we-develop"
			className="page-layout stack-page-section max-w-[1280px]"
		>
			<OverlappedHeading
				title="WHAT WE CAN DEVELOP"
				subTitle="We solve real problems with working software"
				titleClassName="text-primary-orange text-right"
				subTitleClassName="text-left mr-auto ml-0"
			/>
			<div className="grid gap-6 tablet:grid-cols-2 tablet:gap-x-[52px] tablet:gap-y-12 pt-6">
				{SERVICES.map((service) => (
					<article
						key={service.title}
						className="bg-paper-1 flex flex-col items-start gap-5 p-4"
					>
						<span
							className={`border bg-paper-main px-4 py-1 text-base font-bold ${
								CHIP_COLORS[service.chipColor]
							}`}
						>
							{service.chip}
						</span>
						<div className="flex flex-col gap-4 flex-1">
							<Heading3 className="text-surface-ink">{service.title}</Heading3>
							<Body className="text-surface-grey-2">{service.description}</Body>
						</div>
						<Link
							href={service.link}
							{...(service.link.startsWith("http")
								? { target: "_blank", rel: "noopener noreferrer" }
								: {})}
							className="border border-surface-ink bg-paper-main px-4 py-1 shadow-[2px_2px_0px_0px_black] flex items-center gap-2 text-surface-ink hover:bg-paper-2 transition-colors"
						>
							<Body>{service.linkLabel}</Body>
							<ArrowUpRightIcon className="w-5 h-5" />
						</Link>
					</article>
				))}
			</div>
		</section>
	);
};

export default WhatWeCanDevelop;
