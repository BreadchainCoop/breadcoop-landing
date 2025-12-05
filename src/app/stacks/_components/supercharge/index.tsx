import OverlappedHeading from "@/components/overlapped-heading";
import { Body, Heading3 } from "@breadcoop/ui";
import { Globe, MagnifyingGlass, ShieldWarning, UsersThree } from "./icons";

const benefits = [
	{
		icon: MagnifyingGlass,
		title: "Full Transparency",
		desc: "All transactions and rules are publicly visible on the blockchain.",
	},
	{
		icon: Globe,
		title: "Global Access",
		desc: "Join from anywhere in the world with just a crypto wallet.",
	},
	{
		icon: UsersThree,
		title: "Member Control",
		desc: "Vote on rules, claims, and important decisions together.",
	},
	{
		icon: ShieldWarning,
		title: "Custom Rules",
		desc: "Tailor coverage and requirements to your community's needs.",
	},
];

const Suppercharge = () => {
	return (
		<section className="stack-page-section page-layout section">
			<OverlappedHeading
				title="The Crypto Supercharge"
				subTitle="The benefits"
				className="xl:max-w-[1128px]"
				titleClassName="xl:text-[4rem]! xl:leading-[3.9375rem]!"
			/>
			<Body className="mb-6 leading-[150%] max-w-[46.25rem]">
				Savings circles have met community needs for generations. With
				Bread Stacks, this time-tested system goes global
			</Body>
			<ul className="tablet:grid tablet:grid-cols-2 tablet:gap-8">
				{benefits.map((benefit) => {
					return (
						<li
							key={benefit.title}
							className="bg-paper-1 p-4 flex flex-col gap-3 mb-6 last:mb-0 tablet:mb-0 xl:gap-4"
						>
							<figure className="flex items-center justify-center p-[0.8rem] bg-paper-2 w-16 h-16">
								{<benefit.icon />}
							</figure>
							<Heading3 className="font-bold text-2xl">
								{benefit.title}
							</Heading3>
							<Body>{benefit.desc}</Body>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Suppercharge;
