"use client";

import { Body, Heading1, LiftedButton } from "@breadcoop/ui";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { LINKS } from "@/constants/links";

const FinalCTA = () => {
	return (
		<section className="page-layout stack-page-section max-w-[1280px]">
			<div className="flex flex-col items-center gap-8 py-12 text-center xl:py-20">
				<Heading1 className="uppercase text-primary-orange">
					Let&apos;s work together
				</Heading1>
				<Body className="max-w-[886px] text-surface-ink">
					Got something to build? Tell us about it and let&apos;s figure out
					how we can ship it together.
				</Body>
				<Link
					href={LINKS.servicesForm}
					target="_blank"
					rel="noopener noreferrer"
					className="w-full tablet:w-[440px]"
				>
					<LiftedButton
						preset="primary"
						width="full"
						rightIcon={<ArrowUpRightIcon />}
					>
						<span>Start a project</span>
					</LiftedButton>
				</Link>
			</div>
		</section>
	);
};

export default FinalCTA;
