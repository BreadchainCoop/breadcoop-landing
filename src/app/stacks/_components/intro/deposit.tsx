"use client";

import { Slider } from "@/components/slider";
import { Body } from "@breadcoop/ui";
import { ChangeEventHandler, ReactNode, useState } from "react";

const MIN = 200;
const MAX = 4000;
const STEP = 10;

const MAX_MONTH_PERIOD = 24;
const MAX_WEEK_PERIOD = (52 * MAX_MONTH_PERIOD) / 2;

type Period = {
	type: "weekly" | "monthly";
	value: number;
};

function formatUSD(value: number): string {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		maximumFractionDigits: 0,
	}).format(value);
}

const Deposit = () => {
	const [deposit, setDeposit] = useState(MAX / 2);
	const [members, setMembers] = useState(1);
	const [period, setPeriod] = useState<Period>({ type: "monthly", value: 1 });
	const changeDeposit = (v: number[]) => setDeposit(v[0]);
	// const changePeriodValue = (rawValue: string) => {
	// 	let value = parseInt(rawValue, 10);

	// 	if (isNaN(value) || value < 0) value = 0;

	// 	const max =
	// 		period.type === "monthly" ? MAX_MONTH_PERIOD : MAX_WEEK_PERIOD;
	// 	if (value > max) value = max;

	// 	setPeriod((p) => ({ ...p, value }));
	// };

	const changePeriodType = (type: Period["type"]) => {
		setPeriod((p) => {
			let newValue = p.value;
			const max = type === "monthly" ? MAX_MONTH_PERIOD : MAX_WEEK_PERIOD;
			if (newValue > max) newValue = max;
			if (newValue < 1) newValue = 1;
			return { type, value: newValue };
		});
	};

	// const totalSackedText = `${
	// 	period.type === "monthly" ? "Monthly" : "Weekly"
	// }. max ${
	// 	period.type === "monthly"
	// 		? `${MAX_MONTH_PERIOD} months`
	// 		: `${MAX_WEEK_PERIOD} weeks`
	// }`;

	const totalSackedText = `${
		period.type === "monthly" ? "Monthly" : "Weekly"
	}`;
	const totalSackedValue = deposit * members;

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
			}}
		>
			<div className="flex items-center justify-between gap-2.5">
				<Body bold className="shrink-0">
					$ {MIN}
				</Body>
				<Slider
					value={[deposit]}
					min={MIN}
					max={MAX}
					step={STEP}
					onValueChange={changeDeposit}
					showTooltip
					formatValue={(v) => `$ ${v.toLocaleString()}`}
				/>
				<Body bold className="shrink-0">
					$ {MAX}
				</Body>
			</div>
			<div className="mt-6 flex items-center justify-center gap-4 flex-col md:flex-row md:items-stretch">
				<InputCard
					title="Total Stacked"
					type="total"
					unit={totalSackedText}
					value={totalSackedValue}
					className="md:order-3 md:w-1/3"
				/>
				<div className="flex items-center justify-center gap-4 flex-col w-full sm:flex-row md:items-stretch md:w-2/3">
					<InputCard
						title="Number of Members"
						type="input"
						name="members"
						value={members}
						onChange={(v) => setMembers(Math.max(0, v as number))}
						unit="Members"
						className="md:w-1/2"
					/>
					<InputCard
						title="Time Period"
						type="input"
						name="period"
						// Use these in v2
						// value={period.value}
						// onChange={(v) => changePeriodValue(v as string)}
						value={members}
						onChange={() => {}}
						disabled
						unit={
							<TimePeriod
								type={period.type}
								onChange={changePeriodType}
							/>
						}
						max={
							period.type === "monthly"
								? MAX_MONTH_PERIOD
								: MAX_WEEK_PERIOD
						}
						className="md:w-1/2"
					/>
				</div>
			</div>
		</form>
	);
};

interface InputFieldCardProps {
	type: "input";
	name: string;
	onChange: (value: string | number) => void;
	max?: number;
	disabled?: boolean;
}

interface TotalCardProps {
	type: "total";
	name?: never;
	onChange?: never;
	max?: never;
	disabled?: never;
}

type CommonCardProps = {
	title: string;
	unit: ReactNode;
	value: number;
	className?: string;
};

type InputCardProps = (InputFieldCardProps | TotalCardProps) & CommonCardProps;

function InputCard({
	title,
	unit,
	type,
	name,
	value,
	onChange,
	max,
	className,
	disabled,
}: InputCardProps) {
	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const raw = e.target.value;
		// Allow empty or valid number input only
		if (raw === "" || /^\d+$/.test(raw)) {
			onChange?.(raw === "" ? "" : parseInt(raw, 10));
		}
	};

	return (
		<div
			className={`p-6 border flex flex-col items-center justify-center gap-2.5 w-full text-center ${className} ${
				type === "input"
					? "border-paper-2 bg-paper-0"
					: "border-blue-2 bg-blue-0"
			}`}
		>
			<Body bold>{title}</Body>
			{type === "input" ? (
				<input
					type="text"
					inputMode="numeric"
					pattern="[0-9]*"
					name={name}
					id={name}
					value={value}
					min="0"
					max={max}
					onChange={handleChange}
					disabled={disabled}
					className="text-surface-grey font-black pb-1 text-center border-b border-transparent focus:text-surface-ink focus:border-blue-1 outline-none"
				/>
			) : (
				<Body
					bold
					className="text-primary-blue text-[2.5rem] font-black break-all"
				>
					{formatUSD(value)}
				</Body>
			)}
			<Body bold className="text-surface-grey text-xs">
				{unit}
			</Body>
		</div>
	);
}

interface TimePeriodProps {
	onChange: (val: Period["type"]) => void;
	type: Period["type"];
}

function TimePeriod({ type, onChange }: TimePeriodProps) {
	return (
		<div className="flex items-center justify-center gap-1">
			<button
				type="button"
				className={`font-bold ${
					type === "weekly" ? "text-blue-2" : ""
				}`}
				onClick={() => onChange("weekly")}
			>
				Weeks
			</button>
			<div className="text-surface-grey">|</div>
			<button
				type="button"
				className={`font-bold ${
					type === "monthly" ? "text-blue-2" : ""
				}`}
				onClick={() => onChange("monthly")}
			>
				Months
			</button>
		</div>
	);
}

export default Deposit;
