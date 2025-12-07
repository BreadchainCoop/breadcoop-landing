import {
	LiftedButton as LibLiftedButton,
	LiftedButtonProps,
} from "@breadcoop/ui";

const bgs = {
	primary: "bg-primary-blue",
	secondary: "bg-[#B9D5FF] text-primary-blue",
	stroke: "",
	positive: "",
	destructive: "",
};

const LocalLiftedButton = ({
	preset = "primary",
	className,
	...props
}: LiftedButtonProps) => {
	const allClassName = `${className} ${preset ? bgs[preset] : ""}`;

	return <LibLiftedButton {...props} className={allClassName} />;
};

export default LocalLiftedButton;
