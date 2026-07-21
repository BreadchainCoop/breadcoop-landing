"use client";

import {
	QueryClient,
	QueryClientProvider as Provider,
} from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient();

export const QueryClientProvider = ({ children }: { children: ReactNode }) => {
	return <Provider client={queryClient}>{children}</Provider>;
};
