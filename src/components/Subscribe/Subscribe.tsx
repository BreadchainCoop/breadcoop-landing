"use client";

import { LiftedButton, Body, Heading3 } from "@breadcoop/ui";
import { ArrowUpRightIcon } from "@phosphor-icons/react/ssr";
import { LINKS } from "@/constants/links";

export function Subscribe() {
  return (
    <section className="bg-paper-main py-10 xl:py-20">
      <div className="max-w-[1280px] mx-4 md:mx-auto px-4 xl:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <Heading3 className="mb-6">Subscribe, stay updated.</Heading3>
              <Body>
                Get all the Bread Cooperative updates right in your inbox.
              </Body>
            </div>

            {/* Right Column - Subscription Form */}
            <div className="space-y-4">
              <a
                href={LINKS.newsletter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LiftedButton
                  preset="primary"
                  width="full"
                  className="bg-primary-orange text-white"
                  rightIcon={<ArrowUpRightIcon className="w-6 h-6" />}
                >
                  <span>Subscribe to our newsletter</span>
                </LiftedButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
