import React from "react";
import OverlappedHeading from "@/components/overlapped-heading";

const HowItWorks = () => {
	return (
		<section className="page-layout stack-page-section">
			<OverlappedHeading
				title="HOW IT WORKS"
				subTitle="Lump sum payments among your trusted group, no loans nor credit"
				className="xl:mb-0"
				titleClassName="xl:text-[5rem]!"
				subTitleClassName="max-w-[56.6666666667rem]! xl:mt-[-2.6rem]!"
			/>
			<div className="flex items-center justify-center">
				<picture>
					<source
						media="(min-width: 1280px)"
						srcSet="/how-it-works-desktop.svg"
					/>

					<source
						media="(min-width: 834px)"
						srcSet="/how-it-works-tablet.svg"
					/>

					<img src="/how-it-works.svg" alt="Hero illustration" />
				</picture>
			</div>
		</section>
	);
};

export default HowItWorks;
