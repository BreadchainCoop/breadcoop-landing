"use client";

import LocalLiftedButton from "@/components/lifted-button";
import { LINKS } from "@/constants/links";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { MouseEventHandler } from "react";

const DashboardPages = ({ className }: { className?: string }) => {
	const createStacks: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
    
    const form = document.getElementById('create-stacks') as HTMLFormElement;
    const formData = new FormData(form);
    
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      params.append(key, value.toString());
    });
    
    const url = `${LINKS.stacks}/new?${params.toString()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
	}

	return (
		<div
			className={clsx("mb-6 flex items-center justify-center flex-col gap-4 md:flex-row", className)}
		>
			<div className="lifted-button-container">
				<LocalLiftedButton rightIcon={<ArrowUpRightIcon />} onClick={createStacks}>
					Create a Stack
				</LocalLiftedButton>
			</div>
			<a
				href={LINKS.stacks}
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
