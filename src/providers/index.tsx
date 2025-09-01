import { ReactNode } from "react";
import { QueryClientProvider } from "./react-query";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider>{children}</QueryClientProvider>
  );
}
