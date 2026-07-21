import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import Intro from "./_components/intro";
import Suppercharge from "./_components/supercharge";
import HowItWorks from "./_components/how-it-works";
import Ready from "./_components/ready";
import Tools from "./_components/tools";
import CanDoWithStacks from "./_components/can-do-with-stacks";

const description =
	"Stack money together with your trusted group: everyone contributes the same amount each round and one member claims the pooled lump sum, taking turns until everyone has claimed. Savings circles onchain — no loans, no credit.";

export const metadata: Metadata = {
	title: "Stacks",
	description,
	alternates: { canonical: "/stacks" },
	openGraph: {
		title: "Stacks | Bread Cooperative",
		description,
		url: "/stacks",
		siteName: "Bread Cooperative",
		type: "website",
	},
};

const Page = () => {
	return (
		<div className="min-h-screen overflow-x-hidden bg-paper-main flex flex-col">
			<Navbar static />
			<main>
				<Intro />
				<HowItWorks />
				<CanDoWithStacks />
				<Suppercharge />
				<Tools />
				<Ready />
			</main>
			<Footer mode="transparent" />
		</div>
	);
};

export default Page;
