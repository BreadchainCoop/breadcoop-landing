"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { LINKS } from "@/constants/links";
import { LiftedButton } from "@breadcoop/ui";
import { usePathname } from "next/navigation";

const defaultPathConfig = {
	href: LINKS.solidarityFund,
	className: "",
};

const pathConfig = {
	"/stacks": {
		href: LINKS.stacks,
		className: "bg-primary-blue hover:bg-blue-2 active:bg-primary-blue",
	},
};

const VisitAppBtn = () => {
	const pathname = usePathname();

	const config =
		pathConfig[pathname as keyof typeof pathConfig] || defaultPathConfig;

	return (
		<a href={config.href} target="_blank" rel="noopener noreferrer">
			<LiftedButton
				preset="primary"
				rightIcon={<ArrowUpRightIcon />}
				className={`h-12 md:h-14 md:!py-2 ${config.className}`}
			>
				<span>Visit app</span>
			</LiftedButton>
		</a>
	);
};

export default VisitAppBtn;
