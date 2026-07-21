import { Body } from "@breadcoop/ui";
import OverlappedHeading from "@/components/overlapped-heading";
import Section from "./section";

export const TESTIMONIALS = [
	{
		quote:
			"Bread Cooperative was our Web3 partner on a project funded by the European Commission. They delivered the technical components reliably while patiently breaking down each piece so everyone involved understood what they were using and why. They're as good at explaining the work as they are at doing it.",
		name: "Alessandro Longo",
		role: "Curve Labs",
	},
	{
		quote:
			"Bread Cooperative is one of my favorite curatorial partners. They're working on fascinating things and know how to share them with a broad audience. Their sessions are always among the busiest and most engaged at any event we've done together.",
		name: "Beth McCarthy",
		role: "Web3 Privacy Now",
	},
	{
		quote:
			"Bread Cooperative did the design and frontend for our Kohaku Extension, a reference implementation for private-by-default Ethereum wallets. They brought a fresh, untraditional approach to wallet design and the Web3 frontend expertise to pull it off, all while staying true to Ethereum's values. They helped make our vision real.",
		name: "Kassandra.eth",
		role: "Ethereum Foundation",
	},
];

const Testimonials = () => {
	return (
		<Section>
			<OverlappedHeading
				title="READ WHAT THEY SAY"
				subTitle="What our clients think"
				titleClassName="text-primary-orange text-right"
				subTitleClassName="text-left mr-auto ml-0"
			/>
			<div className="grid gap-6 pt-6 tablet:grid-cols-3">
				{TESTIMONIALS.map((testimonial) => (
					<figure
						key={testimonial.name}
						className="flex flex-col justify-between gap-6 bg-paper-1 p-6"
					>
						<blockquote>
							<Body className="text-surface-ink">
								&ldquo;{testimonial.quote}&rdquo;
							</Body>
						</blockquote>
						<figcaption>
							<Body bold className="text-surface-ink">
								{testimonial.name}
							</Body>
							<Body className="text-surface-grey-2">
								{testimonial.role}
							</Body>
						</figcaption>
					</figure>
				))}
			</div>
		</Section>
	);
};

export default Testimonials;
