/* eslint-disable @next/next/no-img-element */
import { Body } from "@breadcoop/ui";
import React from "react";
import OverlappedHeading from "@/components/overlapped-heading";

const HowItWorks = () => {
	return (
		<section className="page-layout py-12">
			<OverlappedHeading
				title="HOW IT WORKS"
				subTitle="All transactions and rotations are verifiable on-chain"
				className="xl:mb-0"
			/>
			<div className="xl:max-w-[34.875rem] mb-6 tablet:mb-8">
				<Body>
					Bread Stacks, allows groups of people to collectively save
					and distribute funds in a predetermined order.
				</Body>
				<Body className="mt-10">
					Implementing a saving circle using blockchain technology
					allows for improvements in trust & transparency, automated
					execution and increased accessibility.
				</Body>
			</div>
			{/* <DashboardPages /> */}
			{/* <img
				src="/stacks-how-it-works-mobile.png" // fallback for very old browsers
				srcSet="
    			/stacks-how-it-works-mobile.png   358w,
    			/stacks-how-it-works-tablet.png   786w,
    			/stacks-how-it-works-desktop.png 1158w
  			"
				sizes="(max-width: 833px) 358px, (max-width: 1279px) 786px, 1158px"
				alt="How Stacks works"
				loading="lazy"
				decoding="async"
				className="w-full h-auto"
			/> */}
			<div className="flex items-center justify-center">
				<img
					src="/stacks-how-it-works-mobile.png"
					alt="How Stacks works"
					loading="lazy"
					decoding="async"
					className="tablet:hidden"
				/>
				<img
					src="/stacks-how-it-works-tablet.png"
					alt="How Stacks works"
					loading="lazy"
					decoding="async"
					className="hidden tablet:block xl:hidden"
				/>
				<img
					src="/stacks-how-it-works-desktop.png"
					alt="How Stacks works"
					loading="lazy"
					decoding="async"
					className="hidden xl:block"
				/>
			</div>
		</section>
	);
};

export default HowItWorks;
