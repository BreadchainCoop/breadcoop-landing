"use client";

import { LINKS } from "@/constants/links";
import { LiftedButton } from "@breadcoop/ui";
import Link from "next/link";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

const CTA = () => {
	return (
		<Link
			href={LINKS.servicesForm}
			target="_blank"
			rel="noopener noreferrer"
			className="w-full tablet:w-[27.5rem]"
		>
			<LiftedButton
				preset="primary"
				width="full"
				rightIcon={<ArrowUpRightIcon />}
			>
				<span>Start a project</span>
			</LiftedButton>
		</Link>
	);
};

export default CTA;
