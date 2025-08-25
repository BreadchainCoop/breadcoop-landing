"use client";

import { LiftedButton } from "@/components/LiftedButton";
import { HandPeaceIcon } from "@phosphor-icons/react/ssr";

export function Subscribe() {
  return (
    <section className="bg-paper-main py-20">
      <div className="max-w-[1280px] mx-auto px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-h2 text-text-standard mb-6">
                Subscribe, stay updated.
              </h2>
              <p className="text-body text-text-standard">
                Receive updates on the latest features, partnerships and new
                crypto leftist initiatives.
              </p>
            </div>

            {/* Right Column - Subscription Form */}
            <div className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-paper-main border border-orange-2 rounded-none text-body text-surface-grey focus:outline-none focus:border-primary-orange -translate-x-1 -translate-y-1"
              />
              <LiftedButton
                preset="primary"
                width="full"
                className="bg-primary-orange text-white"
                leftIcon={<HandPeaceIcon className="w-6 h-6" />}
              >
                <span>Subscribe</span>
              </LiftedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
