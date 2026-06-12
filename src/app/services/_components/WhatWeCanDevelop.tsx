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

/* TODO: replace placeholder descriptions and link targets with final copy */
const SERVICES = [
	{
		chip: "Gas Killer integration",
		chipColor: "orange" as ChipColor,
		title: "Smart Contract Development",
		description:
			"We identified a significant challenge in the infrastructure for restaking and AVS. To address this, we implemented targeted development strategies that enhanced the overall framework, ensuring a more robust and efficient system.",
		link: LINKS.servicesForm,
	},
	{
		chip: "Infrastructure",
		chipColor: "jade" as ChipColor,
		title: "Democratic Treasury Systems",
		description:
			"We identified a significant challenge in the infrastructure for restaking and AVS. To address this, we implemented targeted development strategies that enhanced the overall framework, ensuring a more robust and efficient system.",
		link: LINKS.servicesForm,
	},
	{
		chip: "Eigenlayer",
		chipColor: "blue" as ChipColor,
		title: "AVS Architecture",
		description:
			"We identified a significant challenge in the infrastructure for restaking and AVS. To address this, we implemented targeted development strategies that enhanced the overall framework, ensuring a more robust and efficient system.",
		link: LINKS.servicesForm,
	},
	{
		chip: "Infrastructure",
		chipColor: "jade" as ChipColor,
		title: "Yield Distribution Mechanisms",
		description:
			"We identified a significant challenge in the infrastructure for restaking and AVS. To address this, we implemented targeted development strategies that enhanced the overall framework, ensuring a more robust and efficient system.",
		link: LINKS.servicesForm,
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
				subTitle="We solve problems with solutions"
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
						<div className="flex flex-col gap-4">
							<Heading3 className="text-surface-ink">{service.title}</Heading3>
							<Body className="text-surface-grey-2">{service.description}</Body>
						</div>
						<Link
							href={service.link}
							className="border border-surface-ink bg-paper-main px-4 py-1 shadow-[2px_2px_0px_0px_black] flex items-center gap-2 text-surface-ink hover:bg-paper-2 transition-colors"
						>
							<Body>View work</Body>
							<ArrowUpRightIcon className="w-5 h-5" />
						</Link>
					</article>
				))}
			</div>
		</section>
	);
};

export default WhatWeCanDevelop;
