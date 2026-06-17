"use client";

import { Body, Heading1, LiftedButton } from "@breadcoop/ui";
import { ArrowDownIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { LINKS } from "@/constants/links";

/* Rotate the audience, not the tech — every visitor sees themselves in the headline.
   TODO: adjust the word list once the marketing .md arrives. */
const AUDIENCES = [
	"everyday humans",
	"fast-moving startups",
	"bold founders",
	"communities",
];

/* TODO: confirm real stats */
const STATS = [
	{ value: "10+", label: "Years building for web3" },
	{ value: "10+", label: "Projects overall" },
	{ value: "20+", label: "Countries" },
];

function RotatingAudience() {
	const [index, setIndex] = useState(0);
	const [reducedMotion, setReducedMotion] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
		setReducedMotion(mediaQuery.matches);
		const onChange = (event: MediaQueryListEvent) =>
			setReducedMotion(event.matches);
		mediaQuery.addEventListener("change", onChange);
		return () => mediaQuery.removeEventListener("change", onChange);
	}, []);

	useEffect(() => {
		if (reducedMotion) return;
		const interval = setInterval(
			() => setIndex((current) => (current + 1) % AUDIENCES.length),
			2600
		);
		return () => clearInterval(interval);
	}, [reducedMotion]);

	const word = reducedMotion ? AUDIENCES[0] : AUDIENCES[index];
	const longestWord = AUDIENCES.reduce((a, b) =>
		b.length > a.length ? b : a
	);

	return (
		// The invisible sizer reserves the height of the longest word so the
		// hero doesn't jump when shorter words rotate in
		<span className="relative block">
			<span className="invisible block" aria-hidden="true">
				{longestWord}
			</span>
			<span
				key={word}
				className="absolute inset-0 text-blue-1 animate-[word-in_0.45s_ease-out]"
			>
				{word}
			</span>
		</span>
	);
}

const Hero = () => {
	return (
		<section className="relative bg-surface-ink overflow-hidden">
			{/* Background texture */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/grain-texture.jpg"
					alt=""
					fill
					className="object-cover"
				/>
			</div>

			<div className="relative z-10 mx-auto max-w-[1280px] px-4 xl:px-12">
				<div className="w-full px-4 py-20 xl:px-4">
					<div className="mx-auto max-w-[388px] md:max-w-[768px] xl:max-w-7xl">
						<Heading1 className="text-primary-orange">
							We build for
							<RotatingAudience />
						</Heading1>

						<div className="grid grid-cols-2 items-start gap-4 xl:gap-12">
							<div className="col-span-2 md:col-span-1">
								<Body className="my-6 max-w-[480px] text-2xl leading-snug text-paper-main xl:my-8">
									We research, design, and ship real products, from smart
									contracts to mobile apps. Fast, and built to last.
								</Body>

								<div className="flex flex-col gap-4 md:flex-row xl:gap-6">
									<Link
										href={LINKS.servicesForm}
										target="_blank"
										rel="noopener noreferrer"
									>
										<LiftedButton
											className="w-full md:w-[200px]"
											rightIcon={<ArrowUpRightIcon />}
										>
											<span>Start a project</span>
										</LiftedButton>
									</Link>
									<div className="hidden md:block">
										<LiftedButton
											preset="secondary"
											className="h-[56px] w-full md:w-[200px]"
											rightIcon={<ArrowDownIcon />}
											scrollTo="what-we-develop"
										>
											<span>Our work</span>
										</LiftedButton>
									</div>
								</div>

								{/* Stats proof strip */}
								<div className="mt-10 flex gap-10">
									{STATS.map((stat) => (
										<div key={stat.label} className="max-w-[120px]">
											<p className="font-breadDisplay font-[900] tracking-tight text-primary-orange text-4xl leading-10">
												{stat.value}
											</p>
											<Body className="mt-2 text-paper-main">
												{stat.label}
											</Body>
										</div>
									))}
								</div>
							</div>

							{/* Team photo - tablet */}
							<div className="relative col-span-1 ml-12 hidden md:block xl:hidden">
								<div className="relative mt-8 bg-surface-grey-2">
									<Image
										src="/services-team.png"
										alt="The Bread Cooperative team"
										width={400}
										height={300}
										className="h-[300px] w-[400px] object-cover"
									/>
									<div className="absolute inset-0 bg-paper-0 mix-blend-color" />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Floating team photo - desktop only */}
				<div className="absolute bottom-0 right-0 hidden w-[560px] xl:block">
					<div className="relative bg-surface-grey-2">
						<Image
							src="/services-team.png"
							alt="The Bread Cooperative team"
							width={560}
							height={420}
							className="h-[420px] w-full object-cover"
						/>
						<div className="absolute inset-0 bg-paper-0 mix-blend-color" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
