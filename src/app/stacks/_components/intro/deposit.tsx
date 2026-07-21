"use client";

import LocalLiftedButton from "@/components/lifted-button";
import { Slider } from "@/components/slider";
import { LINKS } from "@/constants/links";
import { Body, Caption, Heading2, LiftedButton } from "@breadcoop/ui";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { FormEventHandler, ReactNode, useState } from "react";

const MIN = 10;
const MAX = 1_000;
const STEP = 1;

type Period = "weekly" | "monthly";

function formatUSD(value: number): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	}).format(value);
}

function Card({
	title,
	subTitle,
	footer,
	children,
	footerBold,
	className,
	titleAlign = "center",
}: {
	title: string;
	footer: string;
	children: ReactNode;
	subTitle?: string;
	footerBold?: boolean;
	className?: string;
	titleAlign?: "left" | "center";
}) {
	return (
		<div className={`bg-paper-0 p-4 border border-paper-2 ${className}`}>
			<Body
				bold
				className={`mb-2 ${titleAlign === "center" ? "text-center" : "text-left"}`}
			>
				{title}
			</Body>
			{subTitle && (
				<Body className="text-xs">
					Each member chips in the same amount every round. Together,
					it becomes a lump sum one member claims.
				</Body>
			)}
			{children}
			<Caption
				className={`mt-6 text-center tracking-normal ${footerBold ? "font-bold text-surface-grey" : ""}`}
			>
				{footer}
			</Caption>
		</div>
	);
}

const Deposit = () => {
	const [deposit, setDeposit] = useState(MAX / 2);
	const [members, setMembers] = useState(1);
	const [period, setPeriod] = useState<Period>("monthly");
	const updateMembers = (by: number) => {
		setMembers((prev) => {
			let newM = prev + by;

			if (newM < 0) newM = 0;

			return newM;
		});
	};
	const changeDeposit = (v: number[]) => setDeposit(v[0]);

	const changePeriod = (period: Period) => {
		setPeriod(period);
	};

	const createStack: FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const params = new URLSearchParams();
		params.set("interval", period === "weekly" ? "1week" : "1month");
		params.set("members", `${members}`);
		params.set("amount", `${deposit}`);

		window.open(`${LINKS.stacks}/new?${params.toString()}`, "_blank");
	};

	return (
		<form onSubmit={createStack} id="create-stacks">
			<div className="flex flex-col gap-4 tablet:flex-row">
				<Card
					titleAlign="left"
					title="How much can you set aside each round?"
					subTitle="Each member chips in the same amount every round. Together, it becomes a lump sum one member claims."
					footer="*All USD amounts are actually $BREAD."
					className="tablet:flex-3/5 tablet:shrink-0"
				>
					<div className="flex items-center justify-between gap-2.5 mt-[4.6625rem]">
						<Heading2 className="shrink-0 tracking-[-2%] text-2xl">
							$ {MIN}
						</Heading2>
						<Slider
							name="amount"
							value={[deposit]}
							min={MIN}
							max={MAX}
							step={STEP}
							onValueChange={changeDeposit}
							showTooltip
							formatValue={(v) => `$ ${v.toLocaleString()}`}
							className=""
						/>
						<Heading2 className="shrink-0 tracking-[-2%] text-2xl">
							$ {MAX}
						</Heading2>
					</div>
				</Card>
				<div className="flex gap-4 justify-center">
					<Card
						title="Group Size"
						footer="How many people are saving together?"
						footerBold
						className="flex flex-col"
					>
						<div className="flex items-center justify-center my-auto">
							<LiftedButton
								preset="stroke"
								className="w-8 h-8 p-0! text-primary-blue"
								onClick={() => updateMembers(-1)}
							>
								-
							</LiftedButton>
							<input
								id="members"
								name="members"
								type="number"
								value={members}
								onChange={(e) => {
									const val = parseInt(e.target.value);

									setMembers(val || 0);
								}}
								className="h-8 max-w-16 font-black tracking-[-2%] text-[2.5rem] mb-[0.6rem] text-center focus:outline-0"
							/>
							<LiftedButton
								preset="stroke"
								className="w-8 h-8 p-0! text-primary-blue"
								onClick={() => updateMembers(1)}
							>
								+
							</LiftedButton>
						</div>
					</Card>
					<Card
						title="How often?"
						footer="Pick a rhythm that works for everyone."
						footerBold
						className="flex flex-col"
					>
						<div className="flex flex-col items-center gap-4 my-auto">
							<Body className="font-breadDisplay text-h2 text-2xl tracking-[-2%] font-black leading-1">
								<label
									htmlFor="weekly"
									className={`cursor-pointer ${period === "weekly" ? "text-primary-blue" : ""}`}
								>
									<input
										type="radio"
										name="interval"
										id="weekly"
										value="1week"
										checked={period === "weekly"}
										onChange={() => changePeriod("weekly")}
										className="sr-only"
									/>
									<span>Weekly</span>
								</label>
							</Body>
							<div className="w-full h-px bg-[#D9D9D9]" />
							<Body className="font-breadDisplay text-h2 text-2xl tracking-[-2%] font-black leading-1">
								<label
									htmlFor="monthly"
									className={`cursor-pointer ${period === "monthly" ? "text-primary-blue" : ""}`}
								>
									<input
										type="radio"
										name="interval"
										id="monthly"
										value="1month"
										checked={period === "monthly"}
										onChange={() => changePeriod("monthly")}
										className="sr-only"
									/>
									<span>Monthly</span>
								</label>
							</Body>
						</div>
					</Card>
				</div>
			</div>
			<div className="mt-4 flex flex-col gap-4 tablet:flex-row">
				<div className="flex flex-col gap-4 tablet:flex-row tablet:flex-3/5 tablet:shrink-0">
					<Card
						title="Each round, one member claims"
						footer={`Your ${formatUSD(deposit)} × ${members} members,  paid out ${period}.`}
						footerBold
						className="bg-paper-2 tablet:w-full"
					>
						<Body className="font-breadDisplay text-h2 text-[2.5rem] tracking-[-2%] text-center text-primary-blue my-4">
							{formatUSD(deposit * members)}
						</Body>
					</Card>
					<Card
						title={`Over ${members} rounds, the group saves`}
						footer="Everyone gets their turn to claim."
						footerBold
						className="border-blue-2! bg-blue-0! tablet:w-full"
					>
						<Body className="font-breadDisplay text-h2 text-[2.5rem] tracking-[-2%] text-center text-primary-blue my-4">
							{formatUSD(deposit * members * members)}
						</Body>
					</Card>
				</div>
				<div>
					<Body className="mb-3">
						Stacks turns small, steady contributions into lump sums.
						Agree on an order, then take turns claiming the pool,
						round after round, everyone wins.
					</Body>
					<div className="lifted-button-container ">
						<LocalLiftedButton
							rightIcon={<ArrowUpRightIcon size={24} />}
							type="submit"
						>
							Create Stack
						</LocalLiftedButton>
					</div>
				</div>
			</div>
		</form>
	);
};

export default Deposit;
