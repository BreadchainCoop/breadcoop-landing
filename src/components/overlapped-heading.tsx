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
					"text-h1 text-primary-blue text-5xl leading-12 tablet:text-[4rem] tablet:leading-14 xl:text-[5rem] xl:leading-16",
					centered ? "text-center" : "",
					titleClassName
				)}
			>
				{title}
			</h2>
			<h3
				className={clsx(
					"text-h2 text-2xl -mt-[0.85rem] leading-6 max-w-[38rem] tablet:-mt-4 tablet:text-[2.5rem] xl:text-5xl xl:max-w-[45.875rem] xl:leading-12 xl:-mt-5",
					centered ? "text-center" : "text-right ml-auto",
					subTitleClassName
				)}
			>
				{subTitle}
			</h3>
		</header>
	);
};

export default OverlappedHeading;
