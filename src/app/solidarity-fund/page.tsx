"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { LiftedButton } from "@/components/LiftedButton";
import { CooperativeServices } from "@/components/CooperativeServices/CooperativeServices";
import { Subscribe } from "@/components/Subscribe/Subscribe";
import { SolidarityTools } from "@/components/SolidarityTools/SolidarityTools";
import { ArrowUpRightIcon, UserPlusIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";

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
    id: "labordao",
    name: "LaborDAO",
    description: "A DAO for workers organizing in web3 and beyond.",
    image: "/banner_labordao.png",
    websiteUrl: "#",
    karmagapUrl: "#",
  },
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
    description:
      "(TBD) Global network driving the Regenerative Finance movement.",
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
      {/* Project Image */}
      <div className="w-full aspect-square mb-4 border border-paper-2 bg-white flex items-center justify-center">
        <Image
          src={project.image}
          alt={`${project.name} logo`}
          width={180}
          height={180}
          className="object-contain"
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
            className="border border-surface-ink h-8"
            rightIcon={
              <ArrowUpRightIcon className="text-primary-orange w-6 h-6" />
            }
          >
            <span>Website</span>
          </LiftedButton>
          <div className="h-4"></div>
          <LiftedButton
            preset="stroke"
            className="border border-surface-ink h-8"
            rightIcon={
              <ArrowUpRightIcon className="text-primary-orange w-6 h-6" />
            }
          >
            <span>KarmaGAP</span>
          </LiftedButton>
        </div>
      </div>
    </div>
  );
}

export default function SolidarityFund() {
  return (
    <div className="min-h-screen bg-paper-main flex flex-col">
      <Navbar static={true} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-paper-main min-h-screen flex items-center">
          {/* Content Container */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-12 w-full">
            <div className="w-full px-6 py-20">
              <div className="max-w-7xl mx-auto">
                {/* Overlapping Text Layout */}
                <div className="relative mb-16">
                  {/* H1 Text */}
                  <h1 className="text-h1 text-primary-orange mb-4">
                    SOLIDARITY FUND
                  </h1>

                  {/* H2 Text - Overlapping */}
                  <h2 className="text-h2 text-text-standard -mt-8 ml-8">
                    Funding post-capitalism together
                  </h2>
                </div>

                {/* Body Text and Button */}
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Left column - Text and button */}
                  <div>
                    <p className="text-body text-text-standard mb-8 max-w-[519px]">
                      A shared fund for funding community projects. Known for
                      helping BERKO and funding the local labor capital. Join us
                      in building a future where communities support each other
                      through mutual aid and solidarity.
                    </p>
                    <LiftedButton
                      className="w-[200px] h-[56px] bg-primary-orange text-white"
                      rightIcon={<ArrowUpRightIcon className="w-6 h-6" />}
                    >
                      <span>Visit app</span>
                    </LiftedButton>
                  </div>

                  {/* Right column - Image */}
                  <div className="relative">
                    <Image
                      src="/hands.jpg"
                      alt="Hands reaching towards each other in solidarity"
                      width={600}
                      height={400}
                      className="object-cover w-full h-[400px] object-bottom-left"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="bg-paper-main py-2">
          <div className="max-w-[1280px] mx-auto px-12">
            <div className="max-w-7xl mx-auto">
              {/* Section Title */}
              <h2 className="text-h2 text-text-standard text-center mb-16">
                The impact of solidarity
              </h2>

              {/* Statistics Grid */}
              <div className="grid md:grid-cols-3 gap-12 mb-20">
                <div className="text-center flex flex-col">
                  <div className="text-h1 flex text-primary-orange mb-4 items-end justify-center">
                    50,000{" "}
                    <span className="text-h5 text-primary-orange">USD</span>
                  </div>
                  <div className="text-h5 text-text-standard">
                    Funded annually
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-h1 text-primary-orange mb-4">6</div>
                  <p className="text-h5 text-text-standard">
                    Projects supported
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-h1 text-primary-orange mb-4">478</div>
                  <div className="text-h5 text-text-standard">Users</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-paper-main py-20">
          <div className="max-w-[1280px] mx-auto px-12">
            <div className="max-w-7xl mx-auto">
              {/* Header with overlapping text */}
              <div className="relative mb-8">
                <h2 className="text-h3 text-primary-orange">HOW IT WORKS</h2>
                <h3 className="text-h2 text-text-standard -mt-8 ms-[80px] text-right w-3/4 ">
                  Work together to fund <br />
                  what matters most.
                </h3>
              </div>

              {/* Body Text */}
              <p className="text-body text-text-standard mb-8 max-w-2xl">
                Some sample copy for a little introduction to the token etc etc.
                Breadchain Cooperative is a collective federation of
                decentralized cooperative projects looking to advance a
                progressive vision for blockchain and its effect on society.
              </p>

              {/* Buttons */}
              <div className="flex gap-6 mb-16">
                <LiftedButton
                  className="w-[200px] h-[56px] bg-primary-orange text-white"
                  rightIcon={<ArrowUpRightIcon className="w-6 h-6" />}
                >
                  <span>Visit app</span>
                </LiftedButton>
                <LiftedButton
                  preset="secondary"
                  rightIcon={<ArrowUpRightIcon className="w-6 h-6" />}
                >
                  <span>Learn more about $BREAD</span>
                </LiftedButton>
              </div>

              {/* Solidarity Diagram */}
              <div className="flex justify-center">
                <Image
                  src="/solidarity-diagram.png"
                  alt="BREAD Solidarity Fund flowchart showing how users stake xDAI and $BREAD, which generates yield distributed equally and through voting to various projects"
                  width={800}
                  height={600}
                  className="object-contain w-full max-w-4xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="bg-paper-main py-20">
          <div className="max-w-[1280px] mx-auto px-12">
            <div className="max-w-7xl mx-auto">
              {/* Header with overlapping text */}
              <div className="relative mb-16">
                <h2 className="text-h3 text-primary-orange text-right">
                  POST-CAPITALIST
                  <br />
                  PROJECTS WE FUND
                </h2>
                <h3 className="text-h2 text-text-standard ms-12 -mt-7">
                  A network of friends
                </h3>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-5 gap-8 mb-16">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>

              {/* Call to Action */}
              <div className="text-center">
                <p className="text-body text-text-standard mb-8">
                  Each project is carefully selected and held to the core values
                  and mission of the Bread Cooperative network.
                </p>
                <LiftedButton
                  className="bg-primary-orange text-white"
                  leftIcon={<UserPlusIcon className="w-6 h-6" />}
                >
                  <span>Become a member project</span>
                </LiftedButton>
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
        <div className="bg-paper-main h-24"></div>

        {/* Cooperative and Services Section */}
        <CooperativeServices />

        {/* Subscribe Section */}
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
}
