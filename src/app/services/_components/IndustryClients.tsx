import Image from "next/image";
import OverlappedHeading from "@/components/overlapped-heading";

const CLIENT_LOGOS = [
	{
		name: "Ethereum Foundation",
		src: "/clients/ethereum-foundation.svg",
	},
	{
		name: "Curve Labs",
		src: "/clients/curve-labs.png",
	},
	{
		name: "Optimism",
		src: "/clients/optimism-white.svg",
		// Official one-color wordmark on the brand red — keeps contrast in the grid
		tileClass: "bg-[#FF0420]",
	},
	{
		name: "Stellar",
		src: "/clients/stellar.svg",
	},
	{
		name: "European Commission",
		src: "/clients/european-commission.svg",
	},
];

const IndustryClients = () => {
	return (
		<section className="page-layout stack-page-section max-w-[1280px]">
			<OverlappedHeading
				title="WORKED WITH THE BEST"
				subTitle="View our clients"
				titleClassName="text-primary-orange"
			/>
			<div className="grid grid-cols-2 gap-6 pt-6 tablet:grid-cols-3 xl:grid-cols-5">
				{CLIENT_LOGOS.map((logo) => (
					<div
						key={logo.name}
						className={`flex h-[90px] items-center justify-center px-6 ${
							logo.tileClass ?? "bg-paper-1"
						}`}
					>
						<Image
							src={logo.src}
							alt={logo.name}
							width={160}
							height={48}
							className="h-10 w-auto max-w-full object-contain"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default IndustryClients;
