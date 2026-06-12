import { Body, Heading1 } from "@breadcoop/ui";
import Section from "../section";
import CTA from "./cta";

const FinalCTA = () => {
	return (
		<Section>
			<div className="flex flex-col items-center gap-8 py-12 text-center xl:py-20">
				<Heading1 className="uppercase text-primary-orange">
					Let&apos;s work together
				</Heading1>
				<Body className="max-w-[55.375rem] text-surface-ink">
					Got something to build? Tell us about it and let&apos;s
					figure out how we can ship it together.
				</Body>

				<CTA />
			</div>
		</Section>
	);
};

export default FinalCTA;
