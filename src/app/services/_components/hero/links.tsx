"use client";

import { LINKS } from "@/constants/links";
import { LiftedButton } from "@breadcoop/ui";
import Link from "next/link";
import React from "react";
import { ArrowDownIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

const HeroLinks = () => {
	return (
		<div className="flex flex-col gap-4 md:flex-row xl:gap-6">
			<Link
				href={LINKS.servicesForm}
				target="_blank"
				rel="noopener noreferrer"
			>
				<LiftedButton
					className="w-full md:w-[12.5rem]"
					rightIcon={<ArrowUpRightIcon />}
				>
					<span>Start a project</span>
				</LiftedButton>
			</Link>
			<div className="hidden md:block">
				<LiftedButton
					preset="secondary"
					className="h-14 w-full md:w-[12.5rem]"
					rightIcon={<ArrowDownIcon />}
					scrollTo="what-we-develop"
				>
					<span>Our work</span>
				</LiftedButton>
			</div>
		</div>
	);
};

export default HeroLinks;
