import { Body } from "@breadcoop/ui";
import OverlappedHeading from "@/components/overlapped-heading";

/* TODO: replace with real client quotes, names, and roles */
const TESTIMONIALS = [
	{
		quote:
			"Working with the Bread Cooperative team was seamless from research to launch. They shipped exactly what we needed, on time.",
		name: "Client name",
		role: "Role, Company",
	},
	{
		quote:
			"A senior team that understands both the technology and the people using it. We'd build with them again in a heartbeat.",
		name: "Client name",
		role: "Role, Company",
	},
	{
		quote:
			"They took our idea from a rough sketch to a production system without drama. Communication was clear the whole way.",
		name: "Client name",
		role: "Role, Company",
	},
];

const Testimonials = () => {
	return (
		<section className="page-layout stack-page-section max-w-[1280px]">
			<OverlappedHeading
				title="READ WHAT THEY SAY"
				subTitle="What our clients think"
				titleClassName="text-primary-orange text-right"
				subTitleClassName="text-left mr-auto ml-0"
			/>
			<div className="grid gap-6 pt-6 tablet:grid-cols-3">
				{TESTIMONIALS.map((testimonial, index) => (
					<figure
						key={index}
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
							<Body className="text-surface-grey-2">{testimonial.role}</Body>
						</figcaption>
					</figure>
				))}
			</div>
		</section>
	);
};

export default Testimonials;
