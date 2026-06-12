import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import Hero from "./_components/Hero";
import WhatWeCanDevelop from "./_components/WhatWeCanDevelop";
import IndustryClients from "./_components/IndustryClients";
import Testimonials from "./_components/Testimonials";
import HowWeDeliver from "./_components/HowWeDeliver";
import FinalCTA from "./_components/FinalCTA";

export const metadata: Metadata = {
	title: "Services | Bread Cooperative",
	description:
		"Worker-owned development cooperative. Smart contract development, stablecoin and treasury systems, full-stack dApp and mobile development, AI agents and automation, UX/UI design and frontend. Trusted by the Ethereum Foundation, Curve Labs, and European Commission-funded projects.",
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
