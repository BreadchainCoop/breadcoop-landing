"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import clsx from "clsx";
import { Body } from "@breadcoop/ui";

export function Slider({
	className,
	defaultValue,
	value,
	min = 0,
	max = 100,
	showTooltip = true,
	formatValue = (val) => `$${val.toLocaleString()}`,
	...props
}: React.ComponentProps<typeof SliderPrimitive.Root> & {
	showTooltip?: boolean;
	formatValue?: (value: number) => string;
}) {
	const _values = React.useMemo(
		() =>
			Array.isArray(value)
				? value
				: Array.isArray(defaultValue)
				? defaultValue
				: [min, max],
		[value, defaultValue, min, max]
	);

	return (
		<SliderPrimitive.Root
			data-slot="slider"
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			className={clsx(
				"relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
				className
			)}
			{...props}
		>
			<SliderPrimitive.Track
				data-slot="slider-track"
				className={clsx(
					"bg-paper-2 relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
				)}
			>
				<SliderPrimitive.Range
					data-slot="slider-range"
					className={clsx(
						"bg-primary-blue absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
					)}
				/>
			</SliderPrimitive.Track>
			{Array.from({ length: _values.length }, (_, index) => (
				<SliderPrimitive.Thumb
					data-slot="slider-thumb"
					key={index}
					className="relative block size-6 shrink-0 rounded-full border bg-blue-1 shadow-sm transition-[color,box-shadow] focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
				>
					{showTooltip && (
						<div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
							<Body className="border border-surface-ink py-1 px-4 bg-paper-main">{formatValue(_values[index])}</Body>
						</div>
					)}
				</SliderPrimitive.Thumb>
			))}
		</SliderPrimitive.Root>
	);
}
