import OverlappedHeading from "@/components/overlapped-heading";
import { Body } from "@breadcoop/ui";
import React from "react";
import DashboardPages from "./dashboard-pages";
import SiteLogoBg from "@/components/site-logo-bg";

const Ready = () => {
	return (
		<section className="bg-paper-2 py-12 relative z-0 overflow-hidden">
			<div className="z-[1] absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
				<SiteLogoBg />
			</div>
			<div className="page-layout z-[2] static">
				<OverlappedHeading
					centered
					title="READY TO EXPLORE THE FUTURE OF INSURANCE?"
					subTitle="Create your Stack"
					titleClassName="max-w-[62rem] mx-auto"
					subTitleClassName="max-w-none mx-auto"
				/>
				<Body className="text-center mb-6">
					Experience the power of community coverage, amplified by
					blockchain.
				</Body>
				<DashboardPages className="gap-6 tablet:[&>a]:max-w-[21.125rem]" />
			</div>
		</section>
	);
};

export default Ready;
