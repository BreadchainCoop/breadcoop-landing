import Image from "next/image";
import { Body, Heading4 } from "@breadcoop/ui";
import { HowItWorksVideo } from "@/components/how-it-works-video";

// One explainer per stack type, matching the type picker in the Stacks app.
const stackTypes = [
	{
		video: "stacks-rosca",
		title: "Rotating savings",
		description:
			"Deposit a fixed amount each round and take turns claiming the whole pot.",
	},
	{
		video: "stacks-goal",
		title: "Shared goal",
		description:
			"Pool contributions toward a shared target. If the group hits the goal, funds release. If not, everyone gets their money back.",
	},
	{
		video: "stacks-conditional-grant",
		title: "Conditional grant",
		description:
			"Advance money to one grantee with no interest. Escrow a grant that unlocks once the advance is paid back.",
		// Only deployed on Celo so far, so only reachable from MiniPay
		badge: "In MiniPay",
	},
];

const StackVideos = () => (
	<div className="grid gap-6 mt-12 md:grid-cols-3">
		{stackTypes.map(({ video, title, description, badge }) => (
			<div
				key={video}
				className="flex flex-col border border-paper-2 bg-paper-0"
			>
				<Image
					src={`/videos/${video}.jpg`}
					alt=""
					width={1280}
					height={720}
					className="w-full aspect-video object-cover border-b border-paper-2"
				/>
				<div className="flex flex-1 flex-col gap-3 p-6">
					<div className="flex flex-wrap items-center gap-2">
						<Heading4 className="font-bold">{title}</Heading4>
						{badge && (
							<span className="bg-primary-blue px-2 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
								{badge}
							</span>
						)}
					</div>
					<Body className="flex-1">{description}</Body>
					<HowItWorksVideo
						video={video}
						title={`How ${title.toLowerCase()} stacks work`}
					/>
				</div>
			</div>
		))}
	</div>
);

export default StackVideos;
