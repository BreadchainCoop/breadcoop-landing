"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../Button/Button";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  List,
  X,
} from "@phosphor-icons/react/ssr";
import { useState, useEffect, useRef } from "react";
import { LiftedButton } from "@/components/LiftedButton";

// Solidarity Tool Item Component
interface SolidarityToolItemProps {
  id: string;
  logo: string;
  title: string;
  description: string;
  color: string;
  comingSoon?: boolean;
}

function SolidarityToolItem({
  id,
  logo,
  title,
  description,
  color,
  comingSoon,
}: SolidarityToolItemProps) {
  return (
    <Link href="#" className="block">
      <div
        className={`group/${id} flex py-1 px-[6px] items-center gap-4 w-full transition-all duration-300 border border-transparent hover:border-${color} relative cursor-pointer`}
      >
        <Image
          src={logo}
          alt="Logo"
          width={32}
          height={32}
          className="w-8 h-8 flex-shrink-0"
        />
        <div className="flex-grow">
          <div className="flex items-center gap-2">
            <div className="text-body-bold text-text-standard">{title}</div>
            {comingSoon && (
              <div className="text-body-bold text-primary-orange text-xs">
                Coming soon
              </div>
            )}
          </div>
          <div className="text-body text-surface-grey">{description}</div>
        </div>
        <ArrowRightIcon
          className={`w-6 h-6 text-${color} opacity-0 group-hover/${id}:opacity-100 transition-opacity duration-300 absolute right-2`}
        />
      </div>
    </Link>
  );
}

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const showDropdown = isDropdownOpen || isHovered;

  // Handle scroll to show/hide navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const wasScrolled = isScrolled;
      const newIsScrolled = scrollTop > 50;

      setIsScrolled(newIsScrolled);

      // Close dropdown when navbar disappears (scrolling back to top)
      if (wasScrolled && !newIsScrolled) {
        setIsDropdownOpen(false);
        setIsHovered(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

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
    <>
      <nav
        className={`fixed max-w-[1200px] mx-auto top-2 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-paper-main px-6 py-2 border border-paper-2 shadow-lg"
            : "bg-transparent px-6 py-4 border border-transparent shadow-none"
        }`}
      >
        <div className=" flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt="Bread Cooperative Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span
              className={`hidden md:block text-text-standard text-akz-bold leading-none transition-opacity duration-300 ${
                isScrolled ? " opacity-100" : " opacity-0"
              }`}
            >
              BREAD COOPERATIVE
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="group relative" ref={dropdownRef}>
              <div
                className="flex items-center gap-1 text-text-standard hover:text-primary-orange cursor-pointer py-1"
                onClick={toggleDropdown}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span className="text-body">Solidarity tools</span>
                {showDropdown ? (
                  <ArrowUpIcon className="w-4 h-4" />
                ) : (
                  <ArrowDownIcon className="w-4 h-4" />
                )}
              </div>

              {/* Dropdown Menu */}
              <div
                className={`fixed top-[72px] left-1/2 transform -translate-x-1/2 md:w-[717px] lg:w-[917px] max-w-[917px] w-[65vw] bg-paper-main border border-primary-orange shadow-lg transition-all duration-200 z-40 p-4 ${
                  showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="flex">
                  {/* First Column - 66% width */}
                  <div className="w-2/3">
                    <h4 className="text-akz font-[500] uppercase text-surface-grey mb-4">
                      Bread Solidarity Tools
                    </h4>

                    <div className="space-y-6  pe-6">
                      <SolidarityToolItem
                        id="item1"
                        logo="/logo.svg"
                        title="Solidarity fund"
                        description="Funding post-capitalism."
                        color="primary-orange"
                      />

                      <SolidarityToolItem
                        id="item2"
                        logo="/logo-blue.svg"
                        title="Savings"
                        description="Save money together."
                        color="primary-blue"
                        comingSoon={true}
                      />

                      <SolidarityToolItem
                        id="item3"
                        logo="/logo-green.svg"
                        title="Insurance"
                        description="Save money together."
                        color="primary-jade"
                        comingSoon={true}
                      />

                      <SolidarityToolItem
                        id="item4"
                        logo="/logo-stroke.svg"
                        title="I have a post-capitalist idea..."
                        description="Have a better idea? Share it."
                        color="surface-ink"
                      />
                    </div>
                  </div>

                  {/* Second Column - Orange box */}
                  <div className="w-1/3 bg-primary-orange relative">
                    <div className="absolute top-4 right-4">
                      <ArrowUpRightIcon className="w-6 h-6 text-text-standard" />
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-h2 leading-[48px] text-white">
                        What is $BREAD?
                      </div>
                      <div className="mt-4">
                        <Link
                          href="#"
                          className="text-body text-primary-blue underline"
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
              className="text-body text-text-standard hover:text-primary-orange"
            >
              Docs
            </Link>
            <Link
              href="#"
              className="text-body text-text-standard hover:text-primary-orange"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-body text-text-standard hover:text-primary-orange"
            >
              Contribute
            </Link>
          </div>

          {/* Right side buttons */}
          <div
            className={`flex items-center gap-4 transition-opacity duration-300 ${
              isScrolled ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Desktop: Visit App Button */}
            <div className="hidden md:block mt-1">
              <LiftedButton
                preset="primary"
                rightIcon={<ArrowUpRightIcon className="w-6 h-6" />}
                className="!py-2"
              >
                <span>Visit app</span>
              </LiftedButton>
            </div>

            {/* Mobile: Visit App Button */}
            <div className="md:hidden">
              <Button
                variant="primary"
                className="bg-primary-orange flex items-center gap-2"
              >
                <span>Visit app</span>
                <ArrowUpRightIcon className="w-6 h-6" />
              </Button>
            </div>

            {/* Mobile: Hamburger Menu */}
            <div className="md:hidden">
              <button
                className="text-primary-orange"
                onClick={toggleMobileMenu}
              >
                <List className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-paper-main z-50 md:hidden">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-paper-2">
              <Image
                src="/logo.svg"
                alt="Bread Cooperative Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex items-center gap-4">
                <LiftedButton
                  preset="primary"
                  rightIcon={<ArrowUpRightIcon className="w-6 h-6" />}
                  className="flex items-center gap-2"
                >
                  <span>Visit app</span>
                </LiftedButton>
                <button
                  className="text-primary-orange"
                  onClick={toggleMobileMenu}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Mobile Menu Content */}
            <div className="p-6 space-y-8">
              {/* Informational Banner */}
              <div className="bg-primary-orange rounded-none px-[20px] py-[10px] relative overflow-hidden h-[118px]">
                <div className="text-body-bold pt-8 text-[24px] text-paper-main">
                  What is $BREAD?
                </div>
                <Link
                  href="#"
                  className="text-body text-primary-blue underline"
                >
                  Read more in our documentation
                </Link>
                <div className="absolute top-4 right-4">
                  <ArrowUpRightIcon className="w-6 h-6 text-text-standard" />
                </div>
              </div>

              {/* Bottom Navigation Links */}
              <div className="space-y-4 p-2 ">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="text-body text-text-standard hover:text-primary-orange">
                    Solidarity tools
                  </span>
                  {isDropdownOpen ? (
                    <ArrowUpIcon className="w-4 h-4 text-text-standard" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4 text-text-standard" />
                  )}
                </div>

                {isDropdownOpen && (
                  <div className="pl-4 space-y-4">
                    <h4 className="text-h4 uppercase text-surface-grey mb-4">
                      BREAD SOLIDARITY TOOLS
                    </h4>

                    <div className="space-y-4">
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
                          <div className="text-body-bold text-text-standard">
                            Solidarity fund
                          </div>
                          <div className="text-body text-surface-grey">
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
                            <div className="text-body-bold text-text-standard">
                              Savings
                            </div>
                            <div className="text-body-bold text-primary-orange text-xs">
                              Coming soon
                            </div>
                          </div>
                          <div className="text-body text-surface-grey">
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
                            <div className="text-body-bold text-text-standard">
                              Insurance
                            </div>
                            <div className="text-body-bold text-primary-orange text-xs">
                              Coming soon
                            </div>
                          </div>
                          <div className="text-body text-surface-grey">
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
                          <div className="text-body-bold text-text-standard">
                            I have a post-capitalist idea...
                          </div>
                          <div className="text-body text-surface-grey">
                            Have a better idea? Share it.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <Link
                  href="#"
                  className="block text-body text-text-standard hover:text-primary-orange"
                >
                  Docs
                </Link>
                <Link
                  href="#"
                  className="block text-body text-text-standard hover:text-primary-orange"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="block text-body text-text-standard hover:text-primary-orange"
                >
                  Contribute
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      {isScrolled && <div className="h-[72px]" />}
    </>
  );
}
