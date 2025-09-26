"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { LiftedButton } from "@/components/LiftedButton";
import { CooperativeServices } from "@/components/CooperativeServices/CooperativeServices";
import { Subscribe } from "@/components/Subscribe/Subscribe";
import { SolidarityTools } from "@/components/SolidarityTools/SolidarityTools";
import { LINKS } from "@/constants/links";
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  BookOpenIcon,
  CurrencyCircleDollarIcon,
} from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";
import { useBreadchainProjects } from "@/hooks/use-breadchain-projects";
import { useTotalBread } from "@/hooks/use-total-bread";
import { formatSupply } from "@/util/formatter";

// Stats Section Component
function StatsSection() {
  const projects = useBreadchainProjects();
  const totalBread = useTotalBread();

  const stats = [
    {
      number: "100K+",
      caption: "",
      title: "People in our network",
      buttonText: "",
      buttonLink: "",
    },
    {
      number: projects.data ? projects.data.length : projects.error ? 8 : "...",
      caption: "",
      title: "Projects empowering each other",
      buttonText: "View projects",
      buttonLink: "/solidarity-fund#projects",
    },
    {
      number: totalBread.data
        ? formatSupply(totalBread.data)
        : totalBread.error
        ? "43,000+"
        : "...",
      numberText: "USD",
      caption: "",
      title: "Total distributed towards solidarity since launch",
      buttonText: "View analytics",
      buttonLink: LINKS.dashboard,
    },
  ];

  return (
    <div className="space-y-12">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`grid md:grid-cols-2 gap-2 md:gap-12 items-center ${
            index < stats.length - 1 ? "border-b border-orange-0" : ""
          }`}
        >
          <div className="text-center md:text-right">
            <h1 className="text-h1 md:pb-12  text-surface-brown">
              {stat.number} <span className="text-h5 ">{stat.numberText}</span>
            </h1>
            {stat.caption && (
              <p className="text-caption text-text-standard pt-4">
                {stat.caption}
              </p>
            )}
          </div>
          <div className="px-12">
            <h5 className="text-h5 text-text-standard text-center md:text-left mb-8">
              {stat.title}
            </h5>
            {stat.buttonText && (
              <div className="flex justify-center pb-12 md:justify-start">
                {stat.buttonLink ? (
                  <a
                    href={stat.buttonLink}
                    {...(stat.buttonLink.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <LiftedButton
                      preset="stroke"
                      className="border border-surface-ink h-[32px]"
                      rightIcon={
                        <ArrowUpRightIcon className="text-primary-orange" />
                      }
                    >
                      <span>{stat.buttonText}</span>
                    </LiftedButton>
                  </a>
                ) : (
                  <LiftedButton
                    preset="stroke"
                    className="border border-surface-ink h-[32px]"
                    rightIcon={
                      <ArrowUpRightIcon className="text-primary-orange" />
                    }
                  >
                    <span>{stat.buttonText}</span>
                  </LiftedButton>
                )}
              </div>
            )}
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
      <div className="w-[40%] border border-text-standard py-2 shadow-sm flex items-center justify-center gap-2">
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
      <div className="w-[40%] border border-text-standard py-2 shadow-sm flex items-center justify-center gap-2">
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
            <div className="w-full px-4 xl:px-4 py-20">
              <div className="max-w-[388px] md:max-w-[768px] xl:max-w-7xl mx-auto">
                {/* Title spans full width */}
                <h1 className="text-h1 pt-4 uppercase text-paper-main">
                  Financial tools today. Solidarity forever.
                </h1>

                {/* Two column layout for content and image */}
                <div className="grid grid-cols-2 gap-4 xl:gap-12 items-start">
                  {/* Left column - Text and buttons */}
                  <div id="LeftColumn" className="col-span-1">
                    <h3 className="text-h3 font-[400] xl:text-[4rem] xl:leading-[64px] text-paper-main my-4 xl:my-8 max-w-full xl:max-w-[519px]">
                      We are a worker collective building technology to go far,
                      together.
                    </h3>
                    <div className="flex flex-col md:flex-row gap-4 xl:gap-6">
                      <a
                        href={LINKS.solidarityFund}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LiftedButton
                          className="w-full md:w-[200px]"
                          rightIcon={<ArrowUpRightIcon />}
                        >
                          <span>Visit app</span>
                        </LiftedButton>
                      </a>
                      <div className="hidden md:block">
                        <LiftedButton
                          preset="secondary"
                          className="w-full md:w-[200px] h-[56px]"
                          rightIcon={<ArrowRightIcon />}
                          scrollTo="solidarity-tools"
                        >
                          <span>Our tools</span>
                        </LiftedButton>
                      </div>
                    </div>
                  </div>

                  {/* Right column - Image for mobile */}
                  <div className="col-span-1 relative -mr-8 md:hidden">
                    <Image
                      src="/holding-baby.jpg"
                      alt="People caring for each other"
                      width={300}
                      height={355}
                      className="object-cover w-[300px] h-[355px] object-top rounded -mb-[114px]"
                    />
                  </div>

                  {/* Right column - Image for tablet */}
                  <div className="col-span-1 relative ml-12 hidden md:block xl:hidden">
                    <Image
                      src="/holding-baby.jpg"
                      alt="People caring for each other"
                      width={400}
                      height={455}
                      className="object-cover w-[400px] h-[455px] object-top rounded -mb-[214px]"
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
        <section className="relative ">
          <div>
            <div className="hidden md:block absolute top-0 left-0">
              <Image
                src="/logo-filled-orange-alt.svg"
                alt=""
                width={660}
                height={660}
                className="w-[330px] h-[330px] xl:w-[660px] xl:h-[660px]"
              />
            </div>
          </div>
        </section>
        {/* Second Section - Light Background */}
        <section className="bg-paper-main pb-20 md:pt-45 xl:pt-76">
          <div className="max-w-[1280px] relative z-20 mx-auto xl:px-16">
            <div className="max-w-[388px] md:max-w-[768px] xl:max-w-7xl px-6 xl:mx-0 xl:mr-12 mx-auto">
              {/* Orange H1 - Right Aligned */}
              <div className="text-right mb-8 relative">
                <h1 className="text-h1 uppercase text-primary-orange relative z-10">
                  Powered &
                  <br />
                  owned by workers
                </h1>
              </div>

              {/* Bold Left Aligned Text */}
              <div className="mb-8 -mt-12 ms-4 xl:ms-0 xl:-mt-18 relative z-10">
                <h3 className="text-h3 text-text-standard mb-[-52px] xl:mb-0 w-3/4 xl:w-7/8">
                  We&apos;re here to show what a worker-owned future can look
                  like
                </h3>
              </div>
              <div className="block md:hidden relative">
                <Image
                  src="/hands.jpg"
                  alt="Hands reaching towards each other"
                  width={343}
                  height={216}
                  className="mx-auto object-cover object-bottom-left w-[343px] h-[216px]"
                />
              </div>
              {/* Content Section with Two Columns */}
              <div className="grid md:grid-cols-2 gap-12  xl:pt-20 items-start">
                {/* Left Column - Content */}
                <div className="flex flex-col w-full pr-12 md:pr-0 md:pt-12 xl:pt-12 xl:pt-0">
                  <h4 className="hidden md:block text-h4 text-text-standard mb-6">
                    The most powerful mission is the one where you act.
                  </h4>
                  <p className="text-body text-text-standard pt-4 xl:pt-0 mb-8">
                    Bread Cooperative builds tools that put working people
                    first. We want to put in place a future where technology
                    serves as a means of empowerment, not a tool for fear and
                    control.
                  </p>
                  <Link
                    href={LINKS.docsManifesto}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LiftedButton
                      rightIcon={<ArrowUpRightIcon />}
                      className="w-full bg-primary-orange text-white flex items-center gap-2"
                    >
                      <span>Our manifesto</span>
                    </LiftedButton>
                  </Link>
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

                {/* Right Column - Image Tablet Only */}
                <div className="hidden md:block xl:hidden mt-18 relative">
                  <Image
                    src="/hands.jpg"
                    alt="Hands reaching towards each other"
                    width={373}
                    height={220}
                    className="object-cover object-bottom-left w-full h-[220px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third Section - Stats */}
        <section className="bg-paper-main pb-20 xl:pb-50 xl:pt-20">
          <div className="max-w-[1280px] mx-auto px-4 xl:px-16">
            <div className="max-w-[388px] md:max-w-[768px] xl:max-w-7xl mx-auto">
              {/* Header with overlapping text */}
              <div className="mb-8 md:mb-16 -mt-8">
                <h1 className="text-h1 uppercase text-primary-orange mb-4">
                  A global <br />
                  community
                </h1>
                <h3 className="text-h3 text-text-standard w-3/4 -mt-5 md:-mt-9 xl:-mt-12 xl:ml-4 text-right">
                  United by solidarity
                </h3>
              </div>

              {/* Stats Sections */}
              <StatsSection />
            </div>
          </div>
        </section>

        <section id="solidarity-tools">
          <SolidarityTools />
        </section>

        {/* Fifth Section - $BREAD How It Works */}
        <section className="bg-paper-main py-20">
          <div className="max-w-[1280px] mx-auto px-4 xl:px-16">
            <div className="max-w-[360px] md:max-w-[768px] xl:max-w-7xl mx-auto">
              {/* Header */}
              <div className="mb-8 xl:mb-16">
                <h1 className="text-h1 uppercase text-primary-orange mb-4">
                  $Bread&mdash;How it <br className="hidden xl:block" /> works
                </h1>
                <div className="flex justify-end">
                  <h3 className="text-h3 text-text-standard xl:w-2/3 text-right me-12 -mt-5 xl:pl-18 xl:-mt-36">
                    Spreading support and solidarity
                  </h3>
                </div>
              </div>

              {/* Two Column Layout */}
              <div className="grid md:grid-cols-8 md:gap-1 xl:gap-12 items-start">
                {/* Left Column - Text and Buttons */}
                <div className="flex flex-col md:ps-8 md:col-span-3">
                  <p className="text-body text-text-standard mb-6">
                    $BREAD reflects the solidarity in our community. Anyone can
                    bake $BREAD. All $BREAD holders contribute to the future we
                    can put in place. Digital money, built for mutual aid.
                  </p>
                  <p className="text-body text-text-standard mb-8">
                    $BREAD is our engine for a worker-owned future built on
                    resilient infrastructure.
                  </p>

                  {/* Chips and Text - Mobile */}
                  <div className="md:hidden mb-6 -ml-1">
                    <ChipsSection />
                  </div>

                  {/* Stacked Buttons */}
                  <div className="flex flex-col gap-6">
                    <Link
                      href={LINKS.solidarityFund}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiftedButton
                        preset="primary"
                        width="full"
                        className="bg-primary-orange text-white"
                      >
                        <span>Get $BREAD</span>
                      </LiftedButton>
                    </Link>
                    <Link
                      href={LINKS.docsBreadToken}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LiftedButton
                        preset="secondary"
                        width="full"
                        leftIcon={<BookOpenIcon />}
                      >
                        <span>Read more</span>
                      </LiftedButton>
                    </Link>
                  </div>
                </div>

                {/* Right Column - SVG and Chips */}
                <div className="hidden md:block relative md:col-span-5">
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
                  <div className="hidden md:mt-18 xl:mt-0 md:block">
                    <ChipsSection />
                  </div>

                  {/* Forever Text */}
                  <div className="hidden md:block text-right me-12">
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
