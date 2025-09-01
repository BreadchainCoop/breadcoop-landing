"use client";

import { LiftedButton } from "@/components/LiftedButton";
import { ArrowUpRightIcon, HandPeaceIcon } from "@phosphor-icons/react/ssr";
import Image from "next/image";

export function CooperativeServices() {
  return (
    <section>
      <div className="w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Column - Join the Cooperative */}
          <div className="bg-paper-2 py-6 xl:py-24 px-5 flex flex-col h-full relative overflow-hidden">
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
            <div className="xl:max-w-[640px] mx-auto">
              <div className="flex-grow relative z-10">
                <h3 className="text-h3 text-primary-orange mb-6">
                  JOIN THE
                  <br />
                  COOPERATIVE.
                </h3>
                <p className="text-body text-text-standard mb-8">
                  We are always open to workers that want to work together in
                  building the tools that can bring us together and build a
                  future after capital.
                </p>
              </div>
              <LiftedButton
                preset="primary"
                width="full"
                className="bg-primary-orange text-white"
                leftIcon={<HandPeaceIcon className="w-6 h-6" />}
              >
                <span>Contribute and join</span>
              </LiftedButton>
            </div>
          </div>

          {/* Right Column - Build with You */}
          <div className="bg-surface-brown py-6 xl:py-24 px-5 xl:px-8 2xl:px-12 flex flex-col h-full relative overflow-hidden">
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
            <div className="flex-grow relative z-10">
              <h3 className="text-h3 text-paper-main mb-6">
                WE CAN BUILD
                <br />
                WITH YOU.
              </h3>
              <p className="text-body text-paper-main mb-8">
                Sourdough Systems is our organization where we offer our work to
                the world. We can build powerful digital tools.
              </p>
            </div>
            <LiftedButton
              preset="primary"
              width="full"
              className="bg-primary-orange text-white"
              rightIcon={<ArrowUpRightIcon />}
            >
              <span>Explore our services</span>
            </LiftedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
