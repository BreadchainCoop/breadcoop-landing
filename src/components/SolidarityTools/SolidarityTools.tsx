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
        "A shared fund for funding community projects. Known for helping BERKO and funding the local labor capital.",
      color: "text-orange-2",
      buttonClass: "bg-primary-orange text-white",
      logo: "/logo-line-orange.svg",
      show: !hiddenColumns.includes("solidarity-fund"),
    },
    {
      id: "savings",
      title: "Savings",
      description: "Save for your next purchase together with your friends.",
      color: "text-primary-blue",
      buttonClass: "",
      colorOverrides: {
        bg: "--color-primary-blue",
        hoverBg: "--color-blue-2",
      },
      logo: "/logo-line-blue.svg",
      show: !hiddenColumns.includes("savings"),
    },
    {
      id: "mutuals",
      title: "Mutuals",
      description:
        "Save for each other for when times are rough. Both money together and your in-return in case something.",
      color: "text-primary-jade",
      buttonClass: "",
      colorOverrides: {
        bg: "--color-primary-jade",
        hoverBg: "--color-jade-2",
      },
      logo: "/logo-line-green.svg",
      show: !hiddenColumns.includes("mutuals"),
    },
  ];

  // Filter to only show visible columns
  const visibleColumns = allColumns.filter((column) => column.show);
  const gridCols =
    visibleColumns.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

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
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Column - Image */}
            <div className="hidden xl:block -mt-50">
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
              <h2 className="text-h2 text-[48px] leading-[38px] xl:text-[80px] xl:leading-[63px] text-right xl:text-left text-orange-2 mb-8">
                THIS IS WHAT SOLIDARITY LOOKS LIKE
              </h2>
              <ul className="text-paper-0 xl:w-2/3 ms-6 list-disc">
                <li className="text-body">A community that never gives up</li>
                <li className="text-body">Tools that are open to use</li>
                <li className="text-body">
                  A way to be of service but also to keep building a compelling
                  user experience
                </li>
                <li className="text-body">
                  The way to save money together with others
                </li>
                <li className="text-body">
                  Cover of health (often with BERKO) for when times are rough.
                </li>
              </ul>
            </div>
          </div>

          {/* Second Row - Dynamic Columns */}
          <div className={`grid gap-12 ${gridCols} items-stretch`}>
            {visibleColumns.map((column, index) => (
              <div
                key={column.id}
                className={`relative xl:w-full flex flex-col h-full justify-between ${
                  index % 2 === 1 ? "pl-24 xl:pl-0" : "pr-24 xl:pr-0"
                }`}
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
                    width="full"
                    colorOverrides={column.colorOverrides}
                  >
                    <span>Learn more</span>
                  </LiftedButton>
                </div>

                <div className="hidden xl:block absolute -top-18 right-0 -z-10">
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
