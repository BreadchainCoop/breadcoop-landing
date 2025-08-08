"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";
import {
  ArrowDownIcon,
  ArrowSquareOutIcon,
  ArrowUpRightIcon,
  ArrowUpIcon,
} from "@phosphor-icons/react/ssr";
import { useState, useEffect, useRef } from "react";

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const showDropdown = isDropdownOpen || isHovered;

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-paper-0 border-b border-paper-2 px-6 py-4 relative">
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
          <div className="group relative" ref={dropdownRef}>
            <div
              className="flex items-center gap-1 text-text-standard hover:text-primary-orange cursor-pointer"
              onClick={toggleDropdown}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="font-univers">Solidarity tools</span>
              {showDropdown ? (
                <ArrowUpIcon className="w-4 h-4" />
              ) : (
                <ArrowDownIcon className="w-4 h-4" />
              )}
            </div>

            {/* Dropdown Menu */}
            <div
              className={`absolute top-full left-1/2 transform -translate-x-1/2 w-[75vw] bg-paper-main border border-primary-orange shadow-lg transition-all duration-200 z-50 p-4 ${
                showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="flex">
                {/* First Column - 66% width */}
                <div className="w-2/3 p-8">
                  <h3 className="font-akzidenz font-bold uppercase text-xl text-text-standard mb-6">
                    Bread Solidarity Tools
                  </h3>

                  <div className="space-y-6">
                    {/* Item 1 */}
                    <div className="flex items-center gap-4">
                      <Image
                        src="/logo.svg"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8 flex-shrink-0"
                      />
                      <div>
                        <div className="font-univers font-bold text-text-standard">
                          Solidarity fund
                        </div>
                        <div className="font-univers font-light text-surface-grey">
                          Funding post-capitalism.
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-4">
                      <Image
                        src="/logo-blue.svg"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8 flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-univers font-bold text-text-standard">
                            Savings
                          </div>
                          <div className="font-univers font-bold text-primary-orange text-xs">
                            Coming soon
                          </div>
                        </div>
                        <div className="font-univers font-light text-surface-grey">
                          Save money together.
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-4">
                      <Image
                        src="/logo-green.svg"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8 flex-shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="font-univers font-bold text-text-standard">
                            Insurance
                          </div>
                          <div className="font-univers font-bold text-primary-orange text-xs">
                            Coming soon
                          </div>
                        </div>
                        <div className="font-univers font-light text-surface-grey">
                          Save money together.
                        </div>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="flex items-center gap-4">
                      <Image
                        src="/logo-stroke.svg"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8 flex-shrink-0"
                      />
                      <div>
                        <div className="font-univers font-bold text-text-standard">
                          I have a post-capitalist idea...
                        </div>
                        <div className="font-univers font-light text-surface-grey">
                          Have a better idea? Share it.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Second Column - Orange box */}
                <div className="w-1/3 bg-primary-orange relative">
                  <div className="absolute top-4 right-4">
                    <ArrowUpRightIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="font-akzidenz font-black text-white text-5xl">
                      What is $BREAD?
                    </div>
                    <div className="mt-4">
                      <Link
                        href="#"
                        className="font-univers text-primary-blue underline text-base"
                      >
                        Read more in our documentation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
