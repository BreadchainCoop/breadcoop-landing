import { Body, Heading2, Heading3 } from "@breadcoop/ui";
import Image from "next/image";
import CTA from "./cta";

const DELIVERY_COLUMNS = [
	{
		title: "Engagements from $10,000/month",
		subtitle: "Scoped to your project",
		description:
			"No hourly billing, no surprises. Every engagement is scoped to what you need, with the whole team behind it: engineers, designers, and strategists, building for you.",
	},
	{
		title: "Ongoing, month to month",
		subtitle: "Design · Develop · Deliver",
		description:
			"We build as your team, not a one-off vendor. Research, design, and development delivered at a steady rhythm, scoped to ship.",
	},
	{
		title: "Open Source Code",
		subtitle: "Built in the open",
		description:
			"Everything we ship is open source. You own the code, audits stay easy, and your community can verify exactly what we built.",
	},
];

const HowWeDeliver = () => {
	return (
		<section className="relative bg-surface-ink overflow-hidden">
			{/* Background texture */}
			<div className="absolute inset-0 z-0 opacity-20">
				<Image
					src="/laser-print-texture.jpg"
					alt=""
					fill
					className="object-cover"
				/>
			</div>
			<div className="relative z-10 mx-auto max-w-7xl px-4 py-12 xl:px-16 xl:py-20">
				<div className="grid gap-10 tablet:grid-cols-2 tablet:items-start">
					{/* Team photo, desaturated like the design */}
					<div className="relative bg-surface-grey-2">
						<Image
							src="/services-team.png"
							alt="The Bread Cooperative team"
							width={1024}
							height={513}
							className="h-auto w-full"
						/>
						<div className="absolute inset-0 bg-paper-0 mix-blend-color" />
					</div>
					<div className="flex flex-col gap-8 tablet:items-end tablet:text-left">
						<Heading2 className="uppercase text-primary-orange">
							How we work
						</Heading2>
						<Body className="text-paper-main tablet:max-w-[31.625rem]">
							One dedicated team. The whole cooperative builds
							for you. We design, develop, and
							deliver, working in the open from first call to
							launch.
						</Body>
					</div>
				</div>

				<div className="mt-16 grid gap-12 tablet:grid-cols-3 tablet:gap-16">
					{DELIVERY_COLUMNS.map((column) => (
						<div
							key={column.title}
							className="relative flex flex-col gap-6"
						>
							<div className="absolute right-0 top-0 opacity-30">
								<Image
									src="/logo-stroke.svg"
									alt=""
									width={180}
									height={180}
									className="h-[7.5rem] w-[7.5rem] xl:h-[11.25rem] xl:w-[11.25rem]"
								/>
							</div>
							<Heading3 className="text-orange-1">
								{column.title}
							</Heading3>
							<Body
								bold
								className="text-orange-0 text-2xl leading-none"
							>
								{column.subtitle}
							</Body>
							<Body className="text-paper-main">
								{column.description}
							</Body>
						</div>
					))}
				</div>

				<CTA />
			</div>
		</section>
	);
};

export default HowWeDeliver;
