"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "@/providers/react-query";

interface ClientProvidersProps {
  children: ReactNode;
}

export function ClientProviders({ children }: ClientProvidersProps) {
  return <QueryClientProvider>{children}</QueryClientProvider>;
}
