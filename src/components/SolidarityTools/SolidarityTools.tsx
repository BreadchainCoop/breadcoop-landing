"use client";

import { LiftedButton } from "@/components/LiftedButton";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";

interface SolidarityToolsProps {
  hiddenColumns?: string[];
}

export function SolidarityTools({ hiddenColumns = [] }: SolidarityToolsProps) {
  // Define all available columns
  const allColumns = [
    {
      id: "solidarity-fund",
      title: "Solidarity Fund",
      description:
        "Community coming together to fund what matters to us. Bake $BREAD and support projects you believe in.",
      color: "text-orange-2",
      buttonClass: "bg-primary-orange text-white",
      logo: "/logo-line-orange.svg",
      show: !hiddenColumns.includes("solidarity-fund"),
      comingSoon: false,
    },
    {
      id: "stacks",
      title: "Stacks",
      description: "Financial goals. Achieved together.",
      color: "text-primary-blue",
      buttonClass: "",
      colorOverrides: {
        bg: "--color-primary-blue",
        hoverBg: "--color-blue-2",
      },
      logo: "/logo-line-blue.svg",
      show: !hiddenColumns.includes("stacks"),
      comingSoon: true,
    },
    {
      id: "safety-net",
      title: "Safety Net",
      description:
        "Collective support guides us through crisis. Build emergency funds with people you trust.",
      color: "text-primary-jade",
      buttonClass: "",
      colorOverrides: {
        bg: "--color-primary-jade",
        hoverBg: "--color-jade-2",
      },
      logo: "/logo-line-green.svg",
      show: !hiddenColumns.includes("safety-net"),
      comingSoon: true,
    },
  ];

  // Filter to only show visible columns
  const visibleColumns = allColumns.filter((column) => column.show);
  const gridCols =
    visibleColumns.length === 3 ? "xl:grid-cols-3" : "xl:grid-cols-2";

  return (
    <section className="relative bg-surface-ink">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <Image src="/grain-texture.jpg" alt="" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 xl:px-16 py-10">
        <div className="max-w-7xl mx-auto">
          {/* First Row - Two Columns */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-10 xl:mb-20">
            {/* Left Column - Image */}
            <div className="hidden md:block md:-mt-40 xl:-mt-50">
              <Image
                src="/hands-2.jpg"
                alt="People working together"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Right Column - Text and Bullet List */}
            <div>
              <h3 className="text-h3 text-right md:text-left  xl:text-right xl:text-left text-orange-2 mb-8">
                THIS IS WHAT SOLIDARITY LOOKS LIKE
              </h3>
              <p className="xl:w-2/3 pe-7">
                Mutual aid that works. Savings that grow together. Emergency
                funds controlled by the community. Real financial tools that put
                people before profit. Support your friends with $BREAD.
              </p>
            </div>
          </div>

          {/* Second Row - Dynamic Columns */}
          <div
            className={`md:max-w-[700px] mx-auto xl:max-w-7xl md:mt-42 xl:mt-0 grid gap-12 ${gridCols} items-stretch`}
          >
            {visibleColumns.map((column, index) => (
              <div
                key={column.id}
                className={`relative xl:w-full md:w-[340px] flex flex-col h-full justify-between ${
                  index % 2 === 1 ? "pl-24 xl:pl-0" : "pr-24 xl:pr-0"
                } ${index % 2 === 1 ? "md:ml-auto" : ""}`}
              >
                <div>
                  <h2 className={`text-h2 ${column.color} mb-4`}>
                    {column.title}
                  </h2>
                  <p className="text-body text-white mb-6">
                    {column.description}
                  </p>
                </div>

                <div className="">
                  <LiftedButton
                    rightIcon={<ArrowUpRightIcon />}
                    className={`${column.buttonClass}`}
                    disabled={column.comingSoon}
                    colorOverrides={column.colorOverrides}
                  >
                    <span>
                      {column.comingSoon ? "Coming soon" : "Learn more"}
                    </span>
                  </LiftedButton>
                </div>

                <div className="hidden md:block absolute -top-18 right-0 -z-10">
                  <Image
                    src={column.logo}
                    alt="Logo"
                    width={140}
                    height={140}
                    className="w-45 h-45"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
