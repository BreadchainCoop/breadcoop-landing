import Image from "next/image";
import Link from "next/link";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
  ChatCircleIcon,
  XIcon,
  ShieldIcon,
  NotebookIcon,
  EnvelopeIcon,
} from "@phosphor-icons/react/ssr";

export function Footer() {
  return (
    <footer className="bg-paper-0 border-t border-paper-2 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.svg"
                alt="Bread Cooperative Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-akzidenz font-bold text-xl text-text-standard">
                BREAD COOPERATIVE
              </span>
            </div>
            <p className="text-surface-grey font-univers mb-6">
              Solidarity forever.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <YoutubeLogoIcon className="w-5 h-5 text-surface-grey hover:text-text-standard cursor-pointer" />
              <LinkedinLogoIcon className="w-5 h-5 text-surface-grey hover:text-text-standard cursor-pointer" />
              <GithubLogoIcon className="w-5 h-5 text-surface-grey hover:text-text-standard cursor-pointer" />
              <ChatCircleIcon className="w-5 h-5 text-surface-grey hover:text-text-standard cursor-pointer" />
              <XIcon className="w-5 h-5 text-surface-grey hover:text-text-standard cursor-pointer" />
              <ShieldIcon className="w-5 h-5 text-surface-grey hover:text-text-standard cursor-pointer" />
              <NotebookIcon className="w-5 h-5 text-surface-grey hover:text-text-standard cursor-pointer" />
            </div>
          </div>

          {/* Cooperative Column */}
          <div>
            <h3 className="font-akzidenz font-bold text-primary-orange text-lg mb-4">
              Cooperative
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-surface-grey hover:text-text-standard font-univers"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-surface-grey hover:text-text-standard font-univers"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-surface-grey hover:text-text-standard font-univers"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-surface-grey hover:text-text-standard font-univers"
                >
                  Contribute
                </Link>
              </li>
            </ul>
          </div>

          {/* Solidarity Tools Column */}
          <div>
            <h3 className="font-akzidenz font-bold text-primary-orange text-lg mb-4">
              Solidarity tools
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-surface-grey hover:text-text-standard font-univers"
                >
                  Solidarity Funds
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-surface-grey hover:text-text-standard font-univers"
                >
                  Savings
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-surface-grey hover:text-text-standard font-univers"
                >
                  Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Reach Out Column */}
          <div>
            <h3 className="font-akzidenz font-bold text-primary-orange text-lg mb-4">
              Reach out
            </h3>
            <Link
              href="mailto:info@bread.coop"
              className="text-surface-grey hover:text-text-standard font-univers flex items-center gap-2"
            >
              <EnvelopeIcon className="w-5 h-5" />
              info@bread.coop
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-paper-2 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-surface-grey font-univers text-sm">
            Copyright ©BREAD Cooperative
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-surface-grey font-univers">
              All Rights Reserved
            </span>
            <span className="text-surface-grey">|</span>
            <Link
              href="#"
              className="text-primary-orange hover:text-orange-1 font-univers"
            >
              Terms and Conditions
            </Link>
            <span className="text-surface-grey">|</span>
            <Link
              href="#"
              className="text-primary-orange hover:text-orange-1 font-univers"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
