"use client";

import { LiftedButton } from "@/components/LiftedButton";
import { LINKS } from "@/constants/links";
import { ArrowUpRightIcon, HandPeaceIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import Link from "next/link";

export function CooperativeServices() {
  return (
    <section>
      <div className="w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Column - Join the Cooperative */}
          <div className="bg-paper-2 py-6 xl:py-24 px-4 flex flex-col h-full relative overflow-hidden">
            {/* Background Logo */}
            <div className="absolute -left-40 top-1/2 transform -translate-y-1/2">
              <Image
                src="/logo-line-orange.svg"
                alt=""
                width={400}
                height={400}
                className="w-[400px] h-[400px]"
              />
            </div>
            <div className="max-w-[360px] md:max-w-[640px] xl:max-w-[640px] mx-auto flex flex-col h-full">
              <div className="flex-grow relative z-10">
                <h3 className="text-h3 text-primary-orange mb-6">
                  JOIN THE
                  <br />
                  COOPERATIVE<span className="hidden md:inline">.</span>
                </h3>
                <p className="text-body text-text-standard mb-8">
                  Bring your skills, your questions, and your perspective.
                  We&apos;re stronger when people from all walks of life unite
                  for a common cause.
                </p>
              </div>
              <div className="mt-auto">
                <Link
                  href={LINKS.contributorForm}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LiftedButton
                    preset="primary"
                    width="full"
                    className="bg-primary-orange text-white"
                    leftIcon={<HandPeaceIcon className="w-6 h-6" />}
                  >
                    <span>Sign up to contribute</span>
                  </LiftedButton>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Build with You */}
          <div className="bg-surface-brown py-6 xl:py-24 px-4 xl:px-8 2xl:px-12 flex flex-col h-full relative overflow-hidden">
            {/* Background Logo */}
            <div className="absolute -left-30 top-1/2 transform -translate-y-1/2">
              <Image
                src="/sourdough-systems-logo.svg"
                alt=""
                width={400}
                height={400}
                className="w-[400px] h-[400px]"
              />
            </div>
            <div className="max-w-[360px] md:max-w-[640px] xl:max-w-[640px] mx-auto flex flex-col h-full">
              <div className="flex-grow relative z-10">
                <h3 className="text-h3 text-paper-main mb-6">
                  WE CAN BUILD
                  <br />
                  WITH YOU<span className="hidden md:inline">.</span>
                </h3>
                <p className="text-body text-paper-main mb-8">
                  Sourdough Systems is our full service web3 development studio
                  where we build applications with others.
                </p>
              </div>
              <div className="mt-auto">
                <Link target="_blank" href={LINKS.sourdoughSystems}>
                  <LiftedButton
                    preset="primary"
                    width="full"
                    className="bg-primary-orange text-white"
                    rightIcon={<ArrowUpRightIcon />}
                  >
                    <span>Explore our services</span>
                  </LiftedButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
