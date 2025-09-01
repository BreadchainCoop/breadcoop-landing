"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { LiftedButton } from "@/components/LiftedButton";
import { CooperativeServices } from "@/components/CooperativeServices/CooperativeServices";
import { Subscribe } from "@/components/Subscribe/Subscribe";
import { SolidarityTools } from "@/components/SolidarityTools/SolidarityTools";
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CurrencyCircleDollarIcon,
} from "@phosphor-icons/react/ssr";
import Image from "next/image";

// Stats Section Component
function StatsSection() {
  const stats = [
    {
      number: "450,000",
      caption: "*1 $BREAD is always equal to 1 USD",
      title: "$BREAD in existence funding the future after capital",
    },
    {
      number: "6",
      caption: "",
      title: "Projects empowering each other",
    },
    {
      number: "40,000",
      caption: "",
      title: "Total $BREAD distributed since launch",
    },
  ];

  return (
    <div className="space-y-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`grid xl:grid-cols-2 gap-2 xl:gap-12 items-center ${
            index < stats.length - 1 ? "border-b border-orange-0 pb-12" : ""
          }`}
        >
          <div className="text-center xl:text-right">
            <h1 className="text-h1 text-surface-brown">{stat.number}</h1>
            {stat.caption && (
              <p className="text-caption text-text-standard pt-4">
                {stat.caption}
              </p>
            )}
          </div>
          <div className="px-12">
            <h5 className="text-h5 text-text-standard text-center xl:text-left mb-8">
              {stat.title}
            </h5>
            <div className="flex justify-center xl:justify-start">
              <LiftedButton
                preset="stroke"
                className="border border-surface-ink h-[32px]"
                rightIcon={<ArrowUpRightIcon className="text-primary-orange" />}
              >
                <span>View analytics</span>
              </LiftedButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Chips Section Component
function ChipsSection() {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="w-[150px] border border-text-standard py-2 shadow-sm flex items-center justify-center gap-2">
        <span className="text-body text-text-standard flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="$BREAD"
            width={24}
            height={24}
            className="w-[24px] h-[24px] inline"
          />
          1 BREAD
        </span>
      </div>
      <span className="text-body-bold text-text-standard">=</span>
      <div className="w-[150px] border border-text-standard py-2 shadow-sm flex items-center justify-center gap-2">
        <CurrencyCircleDollarIcon className="w-6 h-6 text-primary-orange" />
        <span className="text-body text-text-standard">1 USD</span>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* First Section - Dark Background */}
        <section className="relative bg-surface-ink">
          {/* Background Texture */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/grain-texture.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          {/* Content Container */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 xl:px-12">
            {/* Content - Full width with proper positioning */}
            <div className="w-full px-4 xl:px-6 py-20">
              <div className="max-w-[388px] xl:max-w-7xl mx-auto">
                {/* Title spans full width */}
                <h1 className="text-h1 pt-4 ">
                  WE BUILD THINGS FOR PEOPLE WHO CARE.
                </h1>

                {/* Two column layout for content and image */}
                <div className="grid grid-cols-2 gap-4 xl:gap-12 items-start">
                  {/* Left column - Text and buttons */}
                  <div id="LeftColumn" className="col-span-1">
                    <h2 className="text-h2 font-[400] text-[1.5rem] xl:text-[4rem] leading-[1.2] xl:leading-[64px] text-white my-4 xl:my-8 max-w-full xl:max-w-[519px]">
                      A worker collective building the crypto tools for
                      solidarity.
                    </h2>
                    <div className="flex flex-col xl:flex-row gap-4 xl:gap-6">
                      <LiftedButton
                        className="w-full xl:w-[200px]"
                        rightIcon={<ArrowUpRightIcon />}
                      >
                        <span>Visit app</span>
                      </LiftedButton>

                      <div className="hidden xl:block">
                        <LiftedButton
                          preset="secondary"
                          className="w-[200px] h-[56px]"
                          rightIcon={<ArrowRightIcon />}
                        >
                          <span>Our tools</span>
                        </LiftedButton>
                      </div>
                    </div>
                  </div>

                  {/* Right column - Image for mobile */}
                  <div className="col-span-1 relative -mr-8 xl:hidden">
                    <Image
                      src="/holding-baby.jpg"
                      alt="People caring for each other"
                      width={300}
                      height={355}
                      className="object-cover w-[300px] h-[355px] object-top rounded -mb-[114px]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Image - Desktop only */}
            <div className="hidden xl:block absolute right-0 bottom-0 mb-[-290px] w-[640px]">
              <Image
                src="/holding-baby.jpg"
                alt="People caring for each other"
                width={675}
                height={652}
                className="object-cover w-full h-[652px] object-top"
              />
            </div>
          </div>
        </section>

        {/* Second Section - Light Background */}
        <section className="bg-paper-main pb-20 xl:pt-76">
          <div className="max-w-[1280px] relative z-20 mx-auto xl:px-16">
            <div className="max-w-[388px] xl:max-w-7xl px-6 xl:mx-0 xl:mr-12 mx-auto">
              {/* Orange H1 - Right Aligned */}
              <div className="text-right mb-8">
                <h1 className="text-h1 text-primary-orange">
                  TECH-POWERED
                  <br />& OWNED BY WORKERS
                </h1>
              </div>

              {/* Bold Left Aligned Text */}
              <div className="mb-8 -mt-12 ms-4 xl:ms-0 xl:-mt-20 relative z-10">
                <h2 className="text-h2 text-text-standard mb-[-52px] xl:mb-0 w-3/4 xl:w-2/3">
                  We are building real tools for people to use—right now.
                </h2>
              </div>
              <div className="block xl:hidden relative">
                <Image
                  src="/hands.jpg"
                  alt="Hands reaching towards each other"
                  width={343}
                  height={216}
                  className="mx-auto object-cover object-bottom-left w-[343px] h-[216px]"
                />
              </div>
              {/* Content Section with Two Columns */}
              <div className="grid xl:grid-cols-2 gap-12  xl:pt-20 items-start">
                {/* Left Column - Content */}
                <div className="flex flex-col w-full pe-12">
                  <h4 className="hidden xl:block text-h4 text-text-standard mb-6">
                    The most powerful mission is the one where you act.
                  </h4>
                  <p className="text-body text-text-standard pt-4 xl:pt-0 mb-8">
                    Bread Cooperative is a collective federation of
                    decentralized cooperative projects looking to advance a
                    progressive vision for power and tech and its effect on
                    society. We aim to do this by building and utilizing what we
                    call solidarity primitives — development tools which help to
                    forge solidarity between individuals and collectives.
                  </p>
                  <LiftedButton
                    rightIcon={<ArrowUpRightIcon />}
                    className="w-full bg-primary-orange text-white flex items-center gap-2"
                  >
                    <span>Our manifest</span>
                  </LiftedButton>
                </div>

                {/* Right Column - Image Desktop Only */}
                <div className="hidden xl:block relative xl:-me-[112px]">
                  <Image
                    src="/hands.jpg"
                    alt="Hands reaching towards each other"
                    width={703}
                    height={412}
                    className="object-cover object-bottom-left w-full h-[412px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section - Stats */}
        <section className="bg-paper-main pb-20 xl:pt-20">
          <div className="max-w-[1280px] mx-auto px-4 xl:px-16">
            <div className="max-w-[388px] xl:max-w-7xl mx-auto">
              {/* Header with overlapping text */}
              <div className="mb-8 -mt-8">
                <h1 className="text-h1 text-primary-orange mb-4">
                  REAL <br />
                  PEOPLE
                </h1>
                <h2 className="text-h2 text-text-standard w-3/4 -mt-5 xl:-mt-12 text-right">
                  behind every number.
                </h2>
              </div>

              {/* Mission statement paragraph */}
              <p className="text-body text-text-standard mb-16 xl:w-5/9">
                Bread Cooperative is a collective federation of democratized
                cooperative projects looking to advance a progressive vision for
                power and tech and its effect on society. We aim to do this by
                building and utilizing educational solidarity practices —
                development roadmap to help to forge solidarity between
                individuals and collectives.
              </p>

              {/* Stats Sections */}
              <StatsSection />
            </div>
          </div>
        </section>

        <SolidarityTools />

        {/* Fifth Section - $BREAD How It Works */}
        <section className="bg-paper-main py-20">
          <div className="max-w-[1280px] mx-auto px-4 xl:px-16">
            <div className="max-w-[388px] xl:max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-8 xl:mb-16">
                <h1 className="text-h1 text-primary-orange mb-4">
                  $BREAD—HOW IT <br className="hidden xl:block" /> WORKS
                </h1>
                <h2 className="text-h2 text-text-standard  text-right me-12 -mt-5 xl:-mt-36">
                  The $BREAD we all <br />
                  share
                </h2>
              </div>

              {/* Two Column Layout */}
              <div className="grid xl:grid-cols-8 gap-12 items-start">
                {/* Left Column - Text and Buttons */}
                <div className="flex flex-col xl:ps-8 xl:col-span-3">
                  <p className="text-body text-text-standard mb-6">
                    BREAD is digital money with built in solidarity — it is our
                    first proven solidarity primitive and the foundation of our
                    tools.
                  </p>
                  <p className="text-body text-text-standard mb-8">
                    It is secured on the Gnosis Chain Network and is a digital
                    USD backed currency designed to share its profits.
                  </p>

                  {/* Chips and Text - Mobile */}
                  <div className="xl:hidden mb-6">
                    <ChipsSection />
                  </div>

                  {/* Stacked Buttons */}
                  <div className="flex flex-col gap-6">
                    <LiftedButton
                      preset="primary"
                      className="w-full bg-primary-orange text-white"
                    >
                      <span>Get $BREAD</span>
                    </LiftedButton>
                    <LiftedButton
                      preset="secondary"
                      className="w-full"
                      leftIcon={<BookOpenIcon />}
                    >
                      <span>Read more</span>
                    </LiftedButton>
                  </div>
                </div>

                {/* Right Column - SVG and Chips */}
                <div className="hidden xl:block relative xl:col-span-5">
                  {/* Large SVG */}
                  <div className="flex justify-center mb-8">
                    <Image
                      src="/logo-stroke-filled-orange.png"
                      alt="BREAD Logo"
                      width={286}
                      height={286}
                      className="w-[286px] h-[286px]"
                    />
                  </div>

                  {/* Chips and Text - Desktop */}
                  <div className="hidden xl:block">
                    <ChipsSection />
                  </div>

                  {/* Forever Text */}
                  <div className="hidden xl:block text-right me-12">
                    <h5 className="text-h5 text-text-standard">Forever.</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CooperativeServices />
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
}
