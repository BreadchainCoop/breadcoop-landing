import { DuneClient } from "@duneanalytics/client-sdk";
import { NextResponse } from "next/server";

export const getDuneQueryLatestResult = (envVarName: string, returnType?: "array" | "object") => {
	return async () => {
		const queryId = process.env[envVarName];

		if (!queryId) {
			return NextResponse.json(
				{
					error: "Internal Server Error",
					message: `Missing environment variable ${envVarName}`,
				},
				{ status: 500 }
			);
		}

		try {
			const dune = new DuneClient(process.env.DUNE_API_KEY ?? "");

			const queryResult = await dune.getLatestResult({
				queryId: Number(queryId),
			});

			if (!queryResult.result) {
				return NextResponse.json(
					{
						error: "Internal Server Error",
						message: queryResult.error,
					},
					{ status: 500 }
				);
			}

			const result = queryResult.result.rows;

			return NextResponse.json(returnType === "array" ? result : result[0]);
		} catch (error) {
			return NextResponse.json({ error }, { status: 500 });
		}
	};
};
