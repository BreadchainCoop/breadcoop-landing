"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { LiftedButton } from "@/components/LiftedButton";
import { CooperativeServices } from "@/components/CooperativeServices/CooperativeServices";
import { Subscribe } from "@/components/Subscribe/Subscribe";
import { SolidarityTools } from "@/components/SolidarityTools/SolidarityTools";
import { ArrowUpRightIcon, UserPlusIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";

// Project data interface
interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  websiteUrl: string;
  karmagapUrl: string;
}

// Project data
const projects: Project[] = [
  {
    id: "crypto-commons",
    name: "Crypto Commons Association",
    description: "Organizations focused on new cultural inquiries.",
    image: "/banner_cca.png",
    websiteUrl: "#",
    karmagapUrl: "#",
  },
  {
    id: "symbiota",
    name: "Symbiota",
    description: "Organizations dedicated to cultural innovation.",
    image: "/banner_symbiota.png",
    websiteUrl: "#",
    karmagapUrl: "#",
  },
  {
    id: "citizen-wallet",
    name: "Citizen Wallet",
    description: "Open source tools for Web3 community currencies.",
    image: "/banner_citizenwallet.png",
    websiteUrl: "#",
    karmagapUrl: "#",
  },
  {
    id: "regen-coordination",
    name: "Regen Coordination",
    description: "Supporting regenerative initiatives globally.",
    image: "/banner_refidao.png",
    websiteUrl: "#",
    karmagapUrl: "#",
  },
];

// Project Card Component
interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Mobile Layout - Three Columns */}
      <div className="lg:hidden grid grid-cols-3 gap-4 items-start">
        {/* First Column - Logo Image */}
        <div className="w-[104px] h-[104px] xl:w-full xl:h-full aspect-square border border-paper-2 bg-white flex items-center justify-center">
          <Image
            src={project.image}
            alt={`${project.name} logo`}
            width={80}
            height={80}
            className="object-contain w-20 h-20 grayscale"
          />
        </div>

        {/* Second Column - Name and Buttons */}
        <div className="col-span-2 flex flex-col justify-end xl:h-full h-[104px]">
          <h4 className="text-h4 text-text-standard font-bold mb-4 xl:mb-2">
            {project.name}
          </h4>
          <p className="hidden xl:block text-body text-text-standard mb-4 text-sm">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="space-y-[1px] md:space-y-2">
            <LiftedButton
              preset="stroke"
              className="border border-surface-ink  h-[32px] text-sm  h-[32px]"
              rightIcon={
                <ArrowUpRightIcon className="text-primary-orange w-4 h-4" />
              }
            >
              <span>Website</span>
            </LiftedButton>
            <div className="hidden md:block">
              <LiftedButton
                preset="stroke"
                className="border border-surface-ink  h-[32px] text-sm"
                rightIcon={
                  <ArrowUpRightIcon className="text-primary-orange w-4 h-4" />
                }
              >
                <span>KarmaGAP</span>
              </LiftedButton>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Original Single Column */}
      <div className="hidden lg:flex flex-col h-full">
        {/* Project Image */}
        <div className="w-full aspect-square mb-4 border border-paper-2 bg-white flex items-center justify-center">
          <Image
            src={project.image}
            alt={`${project.name} logo`}
            width={180}
            height={180}
            className="object-contain grayscale"
          />
        </div>

        {/* Project Info */}
        <div className="flex flex-col flex-1">
          <h4 className="text-h4 text-text-standard font-bold mb-2">
            {project.name}
          </h4>
          <p className="text-body text-text-standard mb-4 flex-1">
            {project.description}
          </p>

          {/* Buttons */}
          <div className="mt-8">
            <LiftedButton
              preset="stroke"
              className="border border-surface-ink  h-[32px]"
              rightIcon={<ArrowUpRightIcon className="text-primary-orange" />}
            >
              <span>Website</span>
            </LiftedButton>
            <div className="h-4"></div>
            <LiftedButton
              preset="stroke"
              className="border border-surface-ink  h-[32px]"
              rightIcon={<ArrowUpRightIcon className="text-primary-orange" />}
            >
              <span>KarmaGAP</span>
            </LiftedButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SolidarityFund() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper-main flex flex-col">
      <Navbar static={true} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-paper-main flex items-center">
          {/* Content Container */}
          <div className="relative max-w-[1280px] mx-auto xl:px-12 w-full">
            <div className="w-full px-6 py-6 xl:py-20">
              <div className="max-w-7xl mx-auto">
                {/* Overlapping Text Layout */}
                <div className="xl:mb-16">
                  {/* H1 Text */}
                  <div className="relative z-20">
                    {" "}
                    <h1 className="text-h1 relative z-20 uppercase text-primary-orange mb-6">
                      The <br /> solidarity <br className="block md:hidden" />{" "}
                      fund
                    </h1>
                    <div className="block md:hidden relative">
                      <Image
                        src="/hands.jpg"
                        alt="Hands reaching towards each other"
                        width={304}
                        height={184}
                        className="ml-auto object-cover z-10 -mr-12 -mt-13 object-bottom-left w-[304px] h-[184px]"
                      />
                    </div>
                    {/* H2 Text - Overlapping */}
                    <h2 className="text-h2 relative z-30 text-text-standard mt-3 mb-8 xl:mb-0 xl:-mt-11">
                      Give without giving.*
                    </h2>
                  </div>
                </div>

                {/* Body Text and Button */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 xl:gap-12 items-start">
                  {/* Left column - Text and button (1/3) */}
                  <div className="xl:col-span-1 xl:max-w-[386px] md:col-span-1">
                    <p className="text-body text-text-standard mb-8 ">
                      The fund supporting work that matters.
                      <br />
                      <br /> Mint $BREAD and vote for the future you wish to
                      see. This is what a real democratic economy can look like.
                    </p>
                    <p className="text-caption text-text-standard mb-8">
                      *This is a community fund, not an investment vehicle.
                      Built for solidarity, not speculation
                    </p>
                    <LiftedButton
                      className="w-[200px] h-[56px] bg-primary-orange text-white"
                      rightIcon={<ArrowUpRightIcon />}
                      width="full"
                    >
                      <span>Visit solidarity fund</span>
                    </LiftedButton>
                  </div>

                  {/* Right column - Image (2/3) */}
                  <div className="xl:col-span-2 relative z-10 md:col-span-1">
                    <div className="hidden xl:block">
                      <Image
                        src="/hands.jpg"
                        alt="Hands reaching towards each other in solidarity"
                        width={836}
                        height={562}
                        className=" object-cover w-[836px] h-[562px] -mt-32 ml-22 object-bottom-left "
                      />
                    </div>
                    <div className="hidden md:block xl:hidden">
                      <Image
                        src="/hands.jpg"
                        alt="Hands reaching towards each other in solidarity"
                        width={532}
                        height={358}
                        className=" ml-auto object-cover w-[532px] h-[358px]  -mt-42 object-bottom-left "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="bg-paper-main py-2 mt-16 xl:mt-0">
          <div className="max-w-[1280px] mx-auto px-12">
            <div className="max-w-7xl mx-auto">
              {/* Section Title */}
              <h2 className="text-h2 text-text-standard text-center mb-16">
                The impact of solidarity
              </h2>

              {/* Statistics Grid */}
              <div className="grid md:grid-cols-3 gap-12 mb-10">
                <div className="text-center text-text-standard flex flex-col">
                  <div className="text-h1 flex mb-4 items-end text-surface-brown justify-center">
                    50,000 <span className="text-h5 ">USD</span>
                  </div>
                  <div className="text-h5 text-text-standard">
                    Total distributed
                    <p className="text-caption text-text-standard">
                      Since the launch of the fund
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-h1 text-surface-brown mb-4">6</div>
                  <p className="text-h5 text-text-standard">
                    Projects supported
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-h1 text-surface-brown mb-4">450,000</div>
                  <div className="text-h5 text-text-standard">
                    $BREAD in existence
                    <p className="text-caption text-text-standard">
                      * 1 $BREAD is always equal to 1 USD
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <a href={"#"} target="_blank" rel="noopener noreferrer">
                  <LiftedButton
                    preset="stroke"
                    className="border border-surface-ink h-[32px]"
                    rightIcon={
                      <ArrowUpRightIcon className="text-primary-orange" />
                    }
                  >
                    <span>View analytics</span>
                  </LiftedButton>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-paper-main mt-16 xl:mt-0 xl:py-20">
          <div className="max-w-[1280px] mx-auto px-12">
            <div className="max-w-7xl mx-auto">
              {/* Header with overlapping text */}
              <div className="relative mb-8">
                <h2 className="text-h3 text-primary-orange">
                  HOW IT <br className="block xl:hidden" /> WORKS
                </h2>
                <h3 className="text-h2 text-text-standard -mt-3 xl:-mt-8 ms-[80px] text-left xl:text-right w-3/4 ">
                  Come together to fund <br className="hidden xl:block" />
                  what matters most.
                </h3>
              </div>

              {/* Body Text */}
              <p className="text-body text-text-standard xl:mb-8 xl:max-w-[386px]">
                What you know as minting, we call baking.
                <br />
                <br />
                Baking $BREAD is your first step into our solidarity network.
                Your funds generate yield, and you decide which member
                organisation receives it. The more $BREAD baked, the greater our
                capacity to address the needs of real people, everywhere.
              </p>

              {/* Solidarity Diagram Mobile */}
              <div className="block md:hidden flex mb-4 justify-center">
                <Image
                  src="/solidarity-diagram-vertical.png"
                  alt="BREAD Solidarity Fund flowchart showing how users stake xDAI and $BREAD, which generates yield distributed equally and through voting to various projects"
                  width={800}
                  height={600}
                  className="object-contain w-full max-w-4xl"
                />
              </div>

              {/* Buttons */}
              <div className="block md:flex gap-6 mb-16">
                <LiftedButton
                  className="bg-primary-orange xl:mt-0 text-white"
                  rightIcon={<ArrowUpRightIcon />}
                  width="mobile-full"
                >
                  <span>Visit solidarity fund</span>
                </LiftedButton>
                <span className="block xl:hidden h-8"></span>
                <LiftedButton
                  preset="secondary"
                  width="mobile-full"
                  rightIcon={<ArrowUpRightIcon />}
                >
                  <span>Learn more about $BREAD</span>
                </LiftedButton>
              </div>

              {/* Solidarity Diagram Desktop */}
              <div className="hidden md:block flex justify-center">
                <Image
                  src="/solidarity-diagram.svg"
                  alt="BREAD Solidarity Fund flowchart showing how users stake xDAI and $BREAD, which generates yield distributed equally and through voting to various projects"
                  width={800}
                  height={600}
                  className="object-contain w-full xl:-mt-40"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="bg-paper-main py-4 md:py-25">
          <div className="max-w-[1280px] mx-auto px-4 xl:px-12">
            <div className="max-w-7xl mx-auto">
              {/* Header with overlapping text */}
              <div className="relative mb-16">
                <h2 className="text-h3 uppercase text-primary-orange text-right">
                  The bread solidarity <br /> fund network
                </h2>
                <h3 className="text-h2 text-text-standard ms-12 xl:-mt-7">
                  A community of friends
                </h3>
              </div>

              {/* Projects Grid */}
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ${
                  projects.length === 1
                    ? "lg:grid-cols-1"
                    : projects.length === 2
                    ? "lg:grid-cols-2"
                    : projects.length === 3
                    ? "lg:grid-cols-3"
                    : projects.length === 4
                    ? "lg:grid-cols-4"
                    : projects.length === 5
                    ? "lg:grid-cols-5"
                    : "lg:grid-cols-6"
                }`}
              >
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-left xl:text-left max-w-2xl mx-auto">
                <p className="text-body text-text-standard mb-8">
                  Each project is carefully selected and held to the core values
                  and mission of the Bread Cooperative Solidarity Fund network.
                </p>
                <div className="flex flex-col xl:flex-row gap-4 justify-center">
                  <LiftedButton
                    preset="primary"
                    width="mobile-full"
                    leftIcon={<UserPlusIcon />}
                  >
                    <span>Become a member project</span>
                  </LiftedButton>
                  <LiftedButton
                    preset="secondary"
                    width="mobile-full"
                    rightIcon={<ArrowUpRightIcon />}
                  >
                    <span>Project requirements</span>
                  </LiftedButton>
                </div>
                <p className="text-caption mt-4 text-text-standard">
                  *Member projects are carefully selected. Sign ups are not
                  guaranteed memberships
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Solidarity Tools Section */}
        <SolidarityTools hiddenColumns={["solidarity-fund"]} />
        <div className="block md:hidden bg-paper-main h-24"></div>

        {/* Cooperative and Services Section */}
        <CooperativeServices />

        {/* Subscribe Section */}
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
}
