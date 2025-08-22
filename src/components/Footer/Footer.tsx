import Image from "next/image";
import Link from "next/link";
import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  YoutubeLogoIcon,
  ChatCircleIcon,
  XLogoIcon,
  ShieldIcon,
  NotebookIcon,
  EnvelopeSimpleIcon,
  ArrowUpRightIcon,
} from "@phosphor-icons/react/ssr";

// Reusable Footer Link Component
function FooterLink({
  href,
  children,
  isExternal = false,
}: {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
}) {
  return (
    <Link
      href={href}
      className="text-surface-ink hover:text-paper-0 font-univers flex items-center gap-2"
    >
      {children}
      {isExternal && <ArrowUpRightIcon className="w-6 h-6 text-orange-0" />}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary-orange py-12">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-2 max-w-[311px]">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo-white.svg"
                alt="Bread Cooperative Logo"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="font-akzidenz mt-1 font-bold text-[24px] text-white">
                BREAD COOPERATIVE
              </span>
            </div>
            <p className="text-white font-univers mb-6">Solidarity forever.</p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <YoutubeLogoIcon className="w-5 h-5 text-surface-ink hover:text-paper-0 cursor-pointer" />
              <LinkedinLogoIcon className="w-5 h-5 text-surface-ink hover:text-paper-0 cursor-pointer" />
              <GithubLogoIcon className="w-5 h-5 text-surface-ink hover:text-paper-0 cursor-pointer" />
              <ChatCircleIcon className="w-5 h-5 text-surface-ink hover:text-paper-0 cursor-pointer" />
              <XLogoIcon className="w-5 h-5 text-surface-ink hover:text-paper-0 cursor-pointer" />
              <ShieldIcon className="w-5 h-5 text-surface-ink hover:text-paper-0 cursor-pointer" />
            </div>
          </div>

          {/* Cooperative Column */}
          <div>
            <h3 className="font-univers text-white text-lg mb-4">
              Cooperative
            </h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#">About us</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Documentation</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Blog</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Contribute</FooterLink>
              </li>
            </ul>
          </div>

          {/* Solidarity Tools Column */}
          <div>
            <h3 className="font-univers text-white text-lg mb-4">
              Solidarity tools
            </h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#">Solidarity Funds</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Savings</FooterLink>
              </li>
              <li>
                <FooterLink href="#">Insurance</FooterLink>
              </li>
              <li>
                <FooterLink href="#" isExternal>
                  Analytics
                </FooterLink>
              </li>
            </ul>
          </div>

          {/* Reach Out Column */}
          <div>
            <h3 className="font-univers text-white text-lg mb-4">Reach out</h3>
            <Link
              href="mailto:info@bread.coop"
              className="text-surface-ink hover:text-paper-0 font-univers flex items-center gap-2"
            >
              <EnvelopeSimpleIcon className="w-6 h-6 text-orange-0" />
              info@bread.coop
            </Link>
          </div>

          {/* Support Us Column */}
          <div>
            <h3 className="font-univers text-white text-lg mb-4">Support us</h3>
            <ul className="space-y-3">
              <li>
                <FooterLink href="#" isExternal>
                  Donate in crypto
                </FooterLink>
              </li>
              <li>
                <FooterLink href="#" isExternal>
                  Donate in fiat
                </FooterLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-orange-0 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white font-univers text-sm">
            Creative Commons ©BREAD Cooperative
          </p>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-white font-univers">All Rights Reserved</span>
            <span className="text-white">|</span>
            <Link
              href="#"
              className="text-orange-0 hover:text-paper-0 font-univers"
            >
              Terms and Conditions
            </Link>
            <span className="text-white">|</span>
            <Link
              href="#"
              className="text-orange-0 hover:text-paper-0 font-univers"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
