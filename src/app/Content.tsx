"use client";

import { Providers } from "@/providers";

import { type ReactNode, useEffect, useState } from "react";

export default function Content({ children }: { children: ReactNode }) {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) return null;

	return <Providers>{children}</Providers>;
}
