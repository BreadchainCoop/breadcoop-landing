"use client";

import { useEffect, useRef } from "react";
import { PlayIcon, XIcon } from "@phosphor-icons/react";
import { LiftedButton } from "@breadcoop/ui";

/**
 * "How does it work?" button that plays an explainer video
 * (public/videos/<video>.mp4, poster <video>.jpg) in a modal, like the
 * Stacks and Solidarity Fund apps. Uses a native <dialog>, which handles Esc
 * and focus on its own.
 */
export const HowItWorksVideo = ({
	video,
	title,
	color = "var(--color-primary-blue)",
	className,
}: {
	/** File name in public/videos, without extension. */
	video: string;
	/** Read out to screen readers when the video opens. */
	title: string;
	/** Colour of the play icon. */
	color?: string;
	className?: string;
}) => {
	const dialogRef = useRef<HTMLDialogElement>(null);
	const videoRef = useRef<HTMLVideoElement>(null);
	const src = `/videos/${video}.mp4`;

	const open = () => {
		dialogRef.current?.showModal();
		videoRef.current?.play().catch(() => {});
	};

	const close = () => dialogRef.current?.close();

	// The dialog closes on Esc as well as through close(); pause in every case.
	useEffect(() => {
		const dialog = dialogRef.current;
		const pause = () => videoRef.current?.pause();
		dialog?.addEventListener("close", pause);
		return () => dialog?.removeEventListener("close", pause);
	}, []);

	return (
		<>
			<div className={`max-w-[13rem] ${className ?? ""}`}>
				<LiftedButton
					preset="stroke"
					className="border border-black !py-1 px-4 !h-8"
					onClick={open}
					leftIcon={<PlayIcon weight="fill" color={color} />}
				>
					How does it work?
				</LiftedButton>
			</div>
			<dialog
				ref={dialogRef}
				aria-label={title}
				// Clicks on the backdrop land on the dialog itself
				onClick={(e) => e.target === e.currentTarget && close()}
				className="m-auto w-11/12 max-w-[60rem] bg-paper-main p-5 shadow-[0px_4px_12px_0px_#1B201A26] backdrop:bg-[#F0F0F0]/90"
			>
				<div className="flex flex-col gap-2">
					<button
						type="button"
						onClick={close}
						aria-label="Close video"
						className="self-end p-2"
					>
						<XIcon className="size-6" color={color} />
					</button>
					<video
						ref={videoRef}
						className="w-full aspect-video bg-black"
						src={src}
						poster={`/videos/${video}.jpg`}
						controls
						playsInline
						preload="none"
					>
						Your browser can&apos;t play this video.{" "}
						<a href={src} className="underline">
							Download it instead
						</a>
						.
					</video>
				</div>
			</dialog>
		</>
	);
};
