import { Body, Heading3 } from "@breadcoop/ui";
import OverlappedHeading from "@/components/overlapped-heading";
import Deposit from "./deposit";

const Intro = () => {
	return (
		// <div className="page-layout py-12 xl:py-[7.5rem]">
		<div className="page-layout stack-page-section xl:py-[7.5rem]">
			<OverlappedHeading
				title="STACK MONEY TOGETHER"
				subTitle="Your people, your rules"
				className=""
				subTitleClassName="max-w-[33.0625rem]"
			/>
			<section className="pt-6">
				<header className="mb-6">
					<Heading3 className="mb-4 tracking-normal text-surface-ink font-bold text-2xl">
						Stacks calculator
					</Heading3>
					<Body>See how much you can save together.</Body>
				</header>
				<Deposit />
			</section>
		</div>
	);
};

export default Intro;
