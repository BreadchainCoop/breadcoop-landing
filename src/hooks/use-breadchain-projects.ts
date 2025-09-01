import { useQuery } from "@tanstack/react-query";

interface BreadChainProject {
    address: `0x${string}`;
    project_name: string;
}

export const useBreadchainProjects = () => {
	return useQuery({
		queryKey: ["breadchain-projects"],
		queryFn: async () => {
			const projects = (await (await fetch("/api/breadchain-projects")).json()) as BreadChainProject[];

      return projects;
		},
	});
};
