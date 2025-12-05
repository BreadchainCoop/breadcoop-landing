"use client";

import LocalLiftedButton from "@/components/lifted-button";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import clsx from "clsx";

const DashboardPages = ({ className }: { className?: string }) => {
	return (
		<div
			className={clsx("mb-6 flex items-center justify-center flex-col gap-4 md:flex-row", className)}
		>
			<a
				href="http://"
				target="_blank"
				rel="noopener noreferrer"
				className="lifted-button-container"
			>
				<LocalLiftedButton rightIcon={<ArrowUpRightIcon />}>
					Create a Stack
				</LocalLiftedButton>
			</a>
			<a
				href="http://"
				target="_blank"
				rel="noopener noreferrer"
				className="lifted-button-container"
			>
				<LocalLiftedButton
					preset="secondary"
					rightIcon={<ArrowUpRightIcon />}
				>
					Explore Stacks
				</LocalLiftedButton>
			</a>
		</div>
	);
};

export default DashboardPages;
