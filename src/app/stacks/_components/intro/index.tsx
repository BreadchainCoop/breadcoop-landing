import { Body, Heading1, Heading2, Heading3 } from "@breadcoop/ui";
import DashboardPages from "../dashboard-pages";
import OverlappedHeading from "@/components/overlapped-heading";
import Deposit from "./deposit";

const Intro = () => {
	return (
		// <div className="page-layout mb-12">
		<div className="page-layout py-12">
			<OverlappedHeading
				title="STACK MONEY TOGETHER"
				subTitle="With friends"
				className="tablet:max-w-[30rem] xl:max-w-[41rem]"
				// titleClassName="xl:text-[120px] xl:leading-[94px]"
			/>
			<div className="xl:flex xl:items-end xl:gap-12">
				<div>
					<Body className="mb-6 tablet:max-w-[41rem]">
						Stacks helps you to collectively save and distribute
						funds in a predetermined order. Each member is eligible
						for receiving the pool of deposits when their turn
						arrives.
					</Body>
					<DashboardPages className="mb-12 xl:flex-col xl:-mb-0.5" />
				</div>
				<section>
					<Heading3 className="mb-4 text-2xl font-bold xl:max-w-[23.625rem] xl:leading-[100%]">
						What do you wanna save every month/week deposit?
					</Heading3>
					<Body className="mb-4 text-xs">Description here</Body>
					<Body className="mb-[3.8125rem] text-xs">*All USD amounts are actually $BREAD.</Body>
					<Deposit />
				</section>
			</div>
		</div>
	);
};

export default Intro;
