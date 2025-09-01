import { useQuery } from "@tanstack/react-query";

interface BreadTvl {
	date: string;
	supply: number;
}

export const useBreadTvl = () => {
	return useQuery({
		queryKey: ["bread-tvl"],
		queryFn: async () => {
			const tvl = (await (await fetch("/api/bread-tvl")).json()) as BreadTvl;

      return tvl.supply;
		},
	});
};
