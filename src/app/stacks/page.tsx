import { Footer } from "@/components/Footer/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import Intro from "./_components/intro";
import Suppercharge from "./_components/supercharge";
import HowItWorks from "./_components/how-it-works";
import Ready from "./_components/ready";
import Tools from "./_components/tools";

const Page = () => {
	return (
		<div className="min-h-screen overflow-x-hidden bg-paper-main flex flex-col">
			<Navbar static />
			<main>
				<Intro />
				<HowItWorks />
				<Suppercharge />
				<Tools />
				<Ready />
			</main>
			<Footer mode="transparent" />
		</div>
	);
};

export default Page;
