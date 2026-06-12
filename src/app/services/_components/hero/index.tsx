import { Body, Heading1 } from "@breadcoop/ui";
import Image from "next/image";
import RotatingAudience from "./rotating-audience";
import HeroLinks from "./links";

/* TODO: confirm real stats */
const STATS = [
	{ value: "10+", label: "Years building for web3" },
	{ value: "10+", label: "Projects overall" },
	{ value: "20+", label: "Countries" },
];

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

			<div className="relative z-10 mx-auto max-w-7xl px-4 xl:px-12">
				<div className="w-full px-4 py-20 xl:px-4">
					<div className="mx-auto max-w-[24.25rem] md:max-w-[48rem] xl:max-w-7xl">
						<Heading1 className="text-primary-orange">
							We build for
							<RotatingAudience />
						</Heading1>

						<div className="grid grid-cols-2 items-start gap-4 xl:gap-12">
							<div className="col-span-2 md:col-span-1">
								<Body className="my-6 max-w-[30rem] text-2xl leading-snug text-paper-main xl:my-8">
									We research, design, and ship real products,
									from smart contracts to mobile apps. Fast,
									and built to last.
								</Body>

								<HeroLinks />

								{/* Stats proof strip */}
								<div className="mt-10 flex gap-10">
									{STATS.map((stat) => (
										<div
											key={stat.label}
											className="max-w-[7.5rem]"
										>
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
										className="h-[18.75rem] w-[25rem] object-cover"
									/>
									<div className="absolute inset-0 bg-paper-0 mix-blend-color" />
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Floating team photo - desktop only */}
				<div className="absolute bottom-0 right-0 hidden w-[35rem] xl:block">
					<div className="relative bg-surface-grey-2">
						<Image
							src="/services-team.png"
							alt="The Bread Cooperative team"
							width={560}
							height={420}
							className="h-[26.25rem] w-full object-cover"
						/>
						<div className="absolute inset-0 bg-paper-0 mix-blend-color" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
