import { useQuery } from "@tanstack/react-query";

interface TotalBread {
    _col0: number;
}

export const useTotalBread = () => {
	return useQuery({
		queryKey: ["total-bread"],
		queryFn: async () => {
			const total = (await (await fetch("/api/total-bread")).json()) as TotalBread;

      return total._col0;
		},
	});
};
