import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import Hero from "./_components/Hero";
import WhatWeCanDevelop from "./_components/WhatWeCanDevelop";
import IndustryClients from "./_components/IndustryClients";
import Testimonials from "./_components/Testimonials";
import HowWeDeliver from "./_components/HowWeDeliver";
import FinalCTA from "./_components/FinalCTA";

/* TODO: refine title/description keywords once the marketing .md arrives */
export const metadata: Metadata = {
	title: "Services | Bread Cooperative",
	description:
		"A worker-owned development team that researches, designs, and ships real products. Smart contracts, treasury systems, and infrastructure — built fast and built to last.",
};

const Page = () => {
	return (
		<div className="min-h-screen overflow-x-hidden bg-paper-main flex flex-col">
			<Navbar static />
			<main>
				<Hero />
				<WhatWeCanDevelop />
				<IndustryClients />
				<Testimonials />
				<HowWeDeliver />
				<FinalCTA />
			</main>
			<Footer />
		</div>
	);
};

export default Page;
