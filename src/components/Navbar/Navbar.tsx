import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";
import { ArrowDownIcon, ArrowSquareOutIcon } from "@phosphor-icons/react/ssr";

export function Navbar() {
  return (
    <nav className="bg-paper-0 border-b border-paper-2 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="Bread Cooperative Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
          <span className="font-inter font-bold text-[40px] text-text-standard leading-none">
            BREAD COOPERATIVE
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-1 text-text-standard hover:text-primary-orange cursor-pointer">
            <span className="font-univers">Solidarity tools</span>
            <ArrowDownIcon className="w-4 h-4" />
          </div>
          <Link
            href="#"
            className="font-univers text-text-standard hover:text-primary-orange"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="font-univers text-text-standard hover:text-primary-orange"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="font-univers text-text-standard hover:text-primary-orange"
          >
            Contribute
          </Link>
        </div>

        {/* Visit App Button */}
        <Button
          variant="primary"
          className="bg-primary-orange flex items-center gap-2"
        >
          <span>Visit app</span>
          <ArrowSquareOutIcon className="w-4 h-4" />
        </Button>
      </div>
    </nav>
  );
}
