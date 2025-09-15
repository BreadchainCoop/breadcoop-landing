"use client";

import { LiftedButton } from "@/components/LiftedButton";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { getVisibleSolidarityTools } from "@/constants/solidarityTools";

interface SolidarityToolsProps {
  hiddenColumns?: string[];
}

// Helper function to map color values to Tailwind text classes
function getTextColorClass(color: string): string {
  switch (color) {
    case "primary-orange":
      return "text-primary-orange";
    case "primary-blue":
      return "text-primary-blue";
    case "primary-jade":
      return "text-primary-jade";
    case "surface-ink":
      return "text-surface-ink";
    default:
      return "text-text-standard";
  }
}

export function SolidarityTools({ hiddenColumns = [] }: SolidarityToolsProps) {
  // Get visible columns from constants
  const visibleColumns = getVisibleSolidarityTools(hiddenColumns);
  const gridCols =
    visibleColumns.length === 3 ? "xl:grid-cols-3" : "xl:grid-cols-2";

  return (
    <section className="relative bg-surface-ink">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <Image src="/grain-texture.jpg" alt="" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 xl:px-8 xl:px-16 py-10">
        <div className="max-w-7xl mx-auto">
          {/* First Row - Two Columns */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-10 xl:mb-20">
            {/* Left Column - Image (hidden when there are hidden columns) */}
            {hiddenColumns.length === 0 && (
              <div className="hidden md:block md:-mt-40 xl:-mt-50">
                <Image
                  src="/hands-2.jpg"
                  alt="People working together"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            )}

            {/* Text Columns */}
            {hiddenColumns.length > 0 ? (
              <>
                {/* H3 Column */}
                <div>
                  <h3 className="text-h3 text-right md:text-left xl:text-right text-orange-2 xl:mb-8">
                    OUR OTHER SOLIDARITY TOOLS
                  </h3>
                </div>
                {/* P Column */}
                <div>
                  <p className="xl:w-2/3 pe-7 text-white">
                    Mutual aid that works. Savings that grow together. Emergency
                    funds controlled by the community. Real financial tools that
                    put people before profit. Support your friends with $BREAD.
                  </p>
                </div>
              </>
            ) : (
              /* Right Column - Text and Bullet List (original layout) */
              <div>
                <h3 className="text-h3 text-right md:text-left xl:text-right text-orange-2 mb-8">
                  THIS IS WHAT SOLIDARITY LOOKS LIKE
                </h3>
                <p className="xl:w-2/3 pe-7 text-white">
                  Mutual aid that works. Savings that grow together. Emergency
                  funds controlled by the community. Real financial tools that
                  put people before profit. Support your friends with $BREAD.
                </p>
              </div>
            )}
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
                  <h2
                    className={`text-h2 ${getTextColorClass(
                      column.color
                    )} mb-4`}
                  >
                    {column.title}
                  </h2>
                  <p className="text-body text-white mb-6">
                    {column.description}
                  </p>
                </div>

                <div className="">
                  {column.comingSoon ? (
                    <LiftedButton
                      rightIcon={<ArrowUpRightIcon />}
                      className={`${column.buttonClass}`}
                      disabled={column.comingSoon}
                      colorOverrides={column.colorOverrides}
                    >
                      <span>Coming soon</span>
                    </LiftedButton>
                  ) : (
                    <Link href={`/${column.id}`}>
                      <LiftedButton
                        rightIcon={<ArrowUpRightIcon />}
                        className={`${column.buttonClass}`}
                        colorOverrides={column.colorOverrides}
                      >
                        <span>Learn more</span>
                      </LiftedButton>
                    </Link>
                  )}
                </div>

                <div className="hidden md:block absolute -top-18 right-0 -z-10">
                  <Image
                    src={column.lineLogo}
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
