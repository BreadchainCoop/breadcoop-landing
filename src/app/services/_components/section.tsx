import { ReactNode } from "react";

const Section = ({ id, children }: { id?: string; children: ReactNode }) => {
	return (
		<section id={id} className="page-layout stack-page-section max-w-7xl">
			{children}
		</section>
	);
};

export default Section;
