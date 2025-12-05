import OverlappedHeading from "@/components/overlapped-heading";
import { Body } from "@breadcoop/ui";
import SiteLogoBg, { SiteLogoRightBg } from "@/components/site-logo-bg";
import DashboardPages from "./dashboard-pages";

const possibilities = [
	"Save money for your vacations",
	"Cover tuition",
	"Put together a down payment",
	"Fund your special event",
	"Fund a certification or course",
	"Pool money for a medical procedure",
	"Cover student loans",
	"Send remittances collectively",
	"Relocating to a new city",
	"For home repairs or appliances",
	"Cover annual insurance premiums",
	"Create a group to split bills",
];

const CanDoWithStacks = () => {
	return (
		<section className="stack-page-section bg-paper-2 relative overflow-hidden z-[0]">
			<div className="z-[1] absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
				<SiteLogoBg />
			</div>
			<div className="z-[1] absolute top-1/2 -translate-y-1/2 right-0 hidden tablet:flex tablet:items-center tablet:justify-center">
				<SiteLogoRightBg />
			</div>
			<div className="page-layout z-[2] relative">
				<OverlappedHeading
					title="what can you do with stacks?"
					subTitle="Endless possibilities with Stacks"
					titleClassName="tablet:text-center! tablet:leading-[63px]! xl:text-[5rem]!"
					subTitleClassName="max-w-[56.6666666667rem]! tablet:text-center! tablet:mt-[-1.8rem]!"
				/>
				<Body className="text-center my-8">
					Experience the power of community coverage, amplified by
					blockchain.
				</Body>
				<ul className="flex items-center justify-center flex-wrap gap-3 mx-auto max-w-[45rem] xl:max-w-[60rem]">
					{possibilities.map((p) => (
						<li key={p}>
							<Body
								bold
								className="bg-paper-main border border-primary-blue text-primary-blue py-1 px-4 text-center"
							>
								{p}
							</Body>
						</li>
					))}
				</ul>
				<DashboardPages />
			</div>
		</section>
	);
};

export default CanDoWithStacks;
