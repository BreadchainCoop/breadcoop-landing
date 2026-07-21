import type { Metadata } from "next";
import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import Hero from "./_components/hero";
import WhatWeCanDevelop, { SERVICES } from "./_components/what-we-can-develop";
import IndustryClients from "./_components/industry-clients";
import HowWeDeliver from "./_components/how-we-deliver";
import FinalCTA from "./_components/final-cta";
import Testimonials, { TESTIMONIALS } from "./_components/testimonials";

const description =
	"Worker-owned development cooperative. Smart contract development, stablecoin and treasury systems, full-stack dApp and mobile development, AI agents and automation, UX/UI design and frontend. Trusted by the Ethereum Foundation, Curve Labs, and European Commission-funded projects.";

export const metadata: Metadata = {
	title: "Services",
	description,
	alternates: { canonical: "/services" },
	openGraph: {
		title: "Services | Bread Cooperative",
		description,
		url: "/services",
		siteName: "Bread Cooperative",
		type: "website",
	},
};

// Page-level structured data, built from the same data the page renders
// (SERVICES / TESTIMONIALS) so there is one source of truth — no duplicated,
// hand-maintained copies and no fabricated ratings.
const servicesLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Bread Cooperative",
	url: "https://bread.coop",
	hasOfferCatalog: {
		"@type": "OfferCatalog",
		name: "Services",
		itemListElement: SERVICES.map((service) => ({
			"@type": "Offer",
			itemOffered: {
				"@type": "Service",
				name: service.title,
				description: service.description,
			},
		})),
	},
};

const reviewsLd = TESTIMONIALS.map((testimonial) => ({
	"@context": "https://schema.org",
	"@type": "Review",
	itemReviewed: { "@type": "Organization", name: "Bread Cooperative" },
	author: {
		"@type": "Person",
		name: testimonial.name,
		worksFor: { "@type": "Organization", name: testimonial.role },
	},
	reviewBody: testimonial.quote,
}));

const breadcrumbLd = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{ "@type": "ListItem", position: 1, name: "Home", item: "https://bread.coop/" },
		{
			"@type": "ListItem",
			position: 2,
			name: "Services",
			item: "https://bread.coop/services",
		},
	],
};

const servicesJsonLd = [servicesLd, ...reviewsLd, breadcrumbLd];

const Page = () => {
	return (
		<div className="min-h-screen overflow-x-hidden bg-paper-main flex flex-col">
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
			/>
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
