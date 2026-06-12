import { Body } from "@breadcoop/ui";
import OverlappedHeading from "@/components/overlapped-heading";

/* TODO: replace text placeholders with real client logos (SVG/PNG in /public) */
const CLIENT_LOGOS = [
	"Ethereum Foundation",
	"Curve Labs",
	"Web3 Privacy Now",
	"European Commission",
];

const IndustryClients = () => {
	return (
		<section className="page-layout stack-page-section max-w-[1280px]">
			<OverlappedHeading
				title="WORKED WITH THE BEST"
				subTitle="View our clients"
				titleClassName="text-primary-orange"
			/>
			<div className="grid grid-cols-2 gap-6 pt-6 tablet:grid-cols-4">
				{CLIENT_LOGOS.map((name, index) => (
					<div
						key={index}
						className="flex h-[90px] items-center justify-center bg-paper-1"
					>
						<Body className="text-surface-grey uppercase">{name}</Body>
					</div>
				))}
			</div>
		</section>
	);
};

export default IndustryClients;
