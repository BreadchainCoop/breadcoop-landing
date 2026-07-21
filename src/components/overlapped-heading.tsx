import clsx from "clsx";

interface OverlappedHeadingProps {
	title: string;
	subTitle: string;
	className?: string;
	centered?: boolean;
	titleClassName?: string;
	subTitleClassName?: string;
}

const OverlappedHeading = ({
	title,
	subTitle,
	className,
	centered,
	titleClassName,
	subTitleClassName,
}: OverlappedHeadingProps) => {
	return (
		<header className={clsx("mb-6 tablet:mb-8", className)}>
			<h2
				className={clsx(
					"font-breadDisplay text-h1 text-primary-blue text-5xl leading-9 tracking-[-3%]",
					"tablet:text-[4rem] tablet:leading-14",
					"xl:text-[7.5rem] xl:leading-[5.875rem]",
					centered ? "text-center" : "",
					titleClassName,
				)}
			>
				{title}
			</h2>
			<h3
				className={clsx(
					"font-breadDisplay text-h2 text-2xl -mt-[0.85rem] leading-6 tracking-[-2%]",
					"tablet:text-[2.5rem] tablet:leading-9 tablet:-mt-4",
					"xl:text-5xl xl:leading-12 xl:-mt-5",
					centered ? "text-center" : "text-right ml-auto",
					subTitleClassName,
				)}
			>
				{subTitle}
			</h3>
		</header>
	);
};

export default OverlappedHeading;
