"use client";

import { getVisibleSolidarityTools } from "@/constants/solidarityTools";
import { Body, Heading2, LiftedButton } from "@breadcoop/ui";
import Link from "next/link";
import { LinkArrow } from "./tools-icon";
import Image from "next/image";
import "./stacks.css";

const Tools = () => {
	const tools = getVisibleSolidarityTools(["stacks"]);

	return (
		<section className="py-12 bg-[url('/stack-tools-mobile-bg.png')] tablet:mt-12 tablet:bg-[url('/stack-tools-tablet-bg.png')] tablet:bg-no-repeat tablet:bg-cover">
			<div className="page-layout text-paper-main">
				<div className="solidarity-tools-stack mb-6 tablet:mb-16 tablet:grid tablet:grid-cols-2 tablet:gap-6 xl:gap-y-9 xl:gap-x-16 xl:mb-[156px]">
					<div className="solidarity-tools-stack-bg hidden tablet:block tablet:-mt-24">
						<Image
							src="/bread-cooperative-bakery-2.png"
							alt=""
							width={356}
							height={251}
							className="w-full"
						/>
					</div>
					<header className="solidarity-tools-stack-title tablet:self-end">
						<Heading2 className="text-primary-blue mb-4 tablet:text-[4rem] tablet:leading-14 tablet:m-0 tablet:mb-[-0.7rem]">
							WHAT SOLIDARITY LOOKS LIKE
						</Heading2>
					</header>
					{/* <Body className="solidarity-tools-stack-desc mb-6 xl:max-w-[25.1875rem] xl:mx-auto xl:mb-[156px]"> */}
					<Body className="solidarity-tools-stack-desc xl:max-w-[26.1875rem] xl:mx-auto">
						A community that never gives up <br />
						Tools that are open to use. A way to Fund people that
						are focused on building something post-capitalist.
						<br className="hidden xl:inline" /> The way to save
						money together with crypto, Insurance with each other
						for when times are rough.
					</Body>
				</div>
				<div className="xl:flex xl:items-center xl:justify-between">
					{tools.map((tool) => {
						return (
							<section
								key={tool.id}
								className={`max-w-[calc(12.3rem+20vw)] sm:max-w-[calc(15rem+20vw)] tablet:max-w-[364px] tablet:relative tablet:z-0 xl:max-w-[25.0625rem] ${
									tool.id === "solidarity-fund"
										? "mb-[2.625rem] ml-auto tablet:ml-0"
										: "tablet:ml-auto xl:ml-0"
								}`}
							>
								<div className="hidden tablet:block tablet:absolute tablet:left-[10.8125rem] tablet:top-[-7.5rem] tablet:-z-1 xl:left-[12.8875rem] xl:top-[-6.3rem]">
									<Image
										src={`logo-line-${tool.color}.svg`}
										alt="Logo"
										width={180}
										height={180}
										className="w-45 h-45"
									/>
								</div>
								<h3
									className={`text-h2 text-[2.5rem] xl:text-5xl ${
										tool.id === "solidarity-fund"
											? "text-[#B83C08]"
											: "text-primary-jade"
									}`}
								>
									{tool.title}
								</h3>
								<Body className="my-4 tablet:my-6">
									{tool.description}
								</Body>
								{tool.comingSoon ? (
									<LiftedButton
										rightIcon={<LinkArrow />}
										className={`${tool.buttonClass}`}
										disabled={tool.comingSoon}
										colorOverrides={tool.colorOverrides}
									>
										Coming soon
									</LiftedButton>
								) : (
									<Link href={`/${tool.id}`}>
										<LiftedButton
											rightIcon={<LinkArrow />}
											className={`${tool.buttonClass}`}
											colorOverrides={tool.colorOverrides}
										>
											Learn more
										</LiftedButton>
									</Link>
								)}
							</section>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Tools;
