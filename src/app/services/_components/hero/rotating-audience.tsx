"use client";

import { useEffect, useState } from "react";

/* Rotate the audience, not the tech — every visitor sees themselves in the headline.
   TODO: adjust the word list once the marketing .md arrives. */
const AUDIENCES = [
	"everyday humans",
	"fast-moving startups",
	"bold founders",
	"communities",
];

const RotatingAudience = () => {
	const [index, setIndex] = useState(0);
	const [reducedMotion, setReducedMotion] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		);
		setReducedMotion(mediaQuery.matches);
		const onChange = (event: MediaQueryListEvent) =>
			setReducedMotion(event.matches);
		mediaQuery.addEventListener("change", onChange);
		return () => mediaQuery.removeEventListener("change", onChange);
	}, []);

	useEffect(() => {
		if (reducedMotion) return;
		const interval = setInterval(
			() => setIndex((current) => (current + 1) % AUDIENCES.length),
			2600,
		);
		return () => clearInterval(interval);
	}, [reducedMotion]);

	const word = reducedMotion ? AUDIENCES[0] : AUDIENCES[index];
	const longestWord = AUDIENCES.reduce((a, b) =>
		b.length > a.length ? b : a,
	);

	return (
		// The invisible sizer reserves the height of the longest word so the
		// hero doesn't jump when shorter words rotate in
		<span className="relative block">
			<span className="invisible block" aria-hidden="true">
				{longestWord}
			</span>
			<span
				key={word}
				className="absolute inset-0 text-blue-1 animate-[word-in_0.45s_ease-out]"
			>
				{word}
			</span>
		</span>
	);
};

export default RotatingAudience;
