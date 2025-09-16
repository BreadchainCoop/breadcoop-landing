"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { SOLIDARITY_TOOLS } from "@/constants/solidarityTools";
import { LINKS } from "@/constants/links";

// Solidarity Tool Item Component
interface SolidarityToolItemProps {
  id: string;
  logo: string;
  title: string;
  shortDescription: string;
  color: string;
  comingSoon?: boolean;
  buttonClass?: string;
  colorOverrides?: {
    bg: string;
    hoverBg: string;
  };
  linkOverride?: string; // Override the default link behavior
  onNavigate?: () => void; // Callback for when navigation occurs
}

function SolidarityToolItem({
  id,
  logo,
  title,
  shortDescription,
  color,
  comingSoon,
  linkOverride,
  onNavigate,
}: SolidarityToolItemProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    if (!comingSoon) {
      // Call the navigation callback if provided (for mobile menu closing)
      if (onNavigate) {
        onNavigate();
      }
      // Don't prevent default - let the Link component handle navigation
      // router.push(`/${id}`);
    }
  };

  // Determine the href based on linkOverride, comingSoon, or default behavior
  const href = comingSoon ? "#" : linkOverride || `/${id}`;

  return (
    <Link
      href={href}
      className={`block ${comingSoon ? "pointer-events-none" : ""}`}
      onClick={handleClick}
      {...(linkOverride && !comingSoon
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <div
        className={`border-primary-orange group flex py-1 px-[6px] items-center gap-4 w-full transition-all duration-300 border border-transparent relative cursor-pointer ${
          color === "primary-orange"
            ? "active:border-primary-orange hover:border-primary-orange"
            : color === "primary-blue"
            ? "active:border-primary-blue hover:border-primary-blue"
            : color === "primary-jade"
            ? "active:border-primary-jade hover:border-primary-jade"
            : color === "surface-ink"
            ? "active:border-surface-ink hover:border-surface-ink"
            : ""
        }`}
        onMouseEnter={
          comingSoon
            ? undefined
            : (e) => {
                e.currentTarget
                  .querySelector(".arrow-icon")
                  ?.classList.add("opacity-100");
              }
        }
        onMouseLeave={
          comingSoon
            ? undefined
            : (e) => {
                e.currentTarget
                  .querySelector(".arrow-icon")
                  ?.classList.remove("opacity-100");
              }
        }
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
          <div className="text-body text-surface-grey">{shortDescription}</div>
        </div>
        <ArrowRightIcon
          className={`arrow-icon text-${color} w-6 h-6 opacity-0 transition-opacity duration-300 absolute right-2`}
        />
      </div>
    </Link>
  );
}

interface NavbarProps {
  static?: boolean;
}

export function Navbar({ static: isStatic = false }: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
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

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Restore body scroll
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Full width wrapper for static navbar at top */}
      {isStatic && (
        <div
          className={`w-full bg-paper-main transition-all duration-300 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="h-[72px]"></div>
        </div>
      )}

      {/* Single navbar that handles both static and dynamic modes */}
      <nav
        className={`max-w-[1200px] mx-auto z-50 transition-all duration-300 ${
          isStatic
            ? isScrolled
              ? "fixed xl:top-2 top-0 left-0 right-0 bg-paper-main px-6 py-2 border border-paper-2 shadow-lg"
              : "absolute top-0 left-0 right-0 bg-transparent px-6 py-4"
            : isScrolled
            ? "fixed xl:top-2 top-0 left-0 right-0 bg-paper-main px-6 py-2 xl:py-0 border border-paper-2 shadow-lg"
            : isNavbarHovered
            ? "fixed xl:top-2 top-0 left-0 right-0 bg-paper-main px-6 py-2 xl:py-0 border border-paper-2 shadow-lg"
            : "fixed xl:top-2 top-0 left-0 right-0 bg-transparent px-6 py-2 xl:py-0 border border-transparent shadow-none"
        }`}
        onMouseEnter={() => setIsNavbarHovered(true)}
        onMouseLeave={() => setIsNavbarHovered(false)}
      >
        <div className=" flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <Link className="flex items-center gap-2" href="/">
              <Image
                src="/logo.svg"
                alt="Bread Cooperative Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />

              <span
                className={`mt-1 hidden md:block text-text-standard text-akz-bold leading-none transition-opacity duration-300 ${
                  isStatic || isScrolled || isNavbarHovered
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              >
                BREAD COOPERATIVE
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div
            className={`hidden md:flex items-center gap-8 transition-opacity duration-300 ${
              isStatic || isScrolled || isNavbarHovered
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <div className="group relative" ref={dropdownRef}>
              <div
                className="flex items-center gap-1 text-text-standard hover:text-primary-orange cursor-pointer py-5"
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
                className={`fixed top-[74px] left-1/2 transform -translate-x-1/2 md:w-[717px] lg:w-[917px] max-w-[917px] w-[65vw] bg-paper-main border border-primary-orange shadow-lg transition-all duration-200 z-40 p-4 ${
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
                      {SOLIDARITY_TOOLS.map((tool) => (
                        <SolidarityToolItem key={tool.id} {...tool} />
                      ))}
                      <SolidarityToolItem
                        id="post-capitalist-idea"
                        logo="/logo-stroke.svg"
                        title="I have a post-capitalist idea..."
                        shortDescription="Have a better idea? Share it."
                        color="surface-ink"
                        linkOverride={LINKS.postCapitalistIdea}
                      />
                    </div>
                  </div>

                  {/* Second Column - Orange box */}
                  <Link
                    href={LINKS.docs + "/what-is-bread"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/3 bg-primary-orange relative overflow-hidden group/orange block"
                  >
                    <div className="absolute -left-15 opacity-20 top-1/2 transform -translate-y-1/2">
                      <Image
                        src="/logo-line-orange.svg"
                        alt=""
                        width={400}
                        height={400}
                        className="w-[400px] h-[400px]"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <ArrowUpRightIcon className="w-6 h-6 group-hover/orange:text-orange-0 text-text-standard" />
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="text-h2 leading-[48px] text-white">
                        What is $BREAD?
                      </div>
                      <div className="mt-4">
                        <span className="text-body text-primary-blue underline">
                          Read more in our documentation
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href={LINKS.docs}
              target="_blank"
              className="text-body text-text-standard hover:text-primary-orange"
            >
              Docs
            </Link>
            <Link
              href={LINKS.newsletter}
              target="_blank"
              className="text-body text-text-standard hover:text-primary-orange"
            >
              Blog
            </Link>
            <Link
              href={LINKS.contributorForm}
              className="text-body text-text-standard hover:text-primary-orange"
            >
              Contribute
            </Link>
          </div>

          {/* Right side buttons */}
          <div
            className={`flex items-center gap-4 transition-opacity duration-300 ${
              isStatic || isScrolled || isNavbarHovered
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            {/* Desktop: Visit App Button */}
            <div className="hidden md:block mt-1">
              <Link href={LINKS.solidarityFund} target="_blank">
                <LiftedButton
                  preset="primary"
                  rightIcon={<ArrowUpRightIcon />}
                  className="!py-2"
                >
                  <span>Visit app</span>
                </LiftedButton>
              </Link>
            </div>

            {/* Mobile: Visit App Button */}
            <div className="md:hidden">
              <LiftedButton
                preset="primary"
                rightIcon={<ArrowUpRightIcon />}
                className="bg-primary-orange h-[48px] flex items-center gap-2"
              >
                <span>Visit app</span>
              </LiftedButton>
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
          <div className="fixed inset-0 bg-paper-main z-50 md:hidden overflow-y-auto">
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between py-2 px-6 border border-paper-2">
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
                  rightIcon={<ArrowUpRightIcon />}
                  className="flex items-center gap-2 h-[48px]"
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
                  href={LINKS.docs + "/what-is-bread"}
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
                  onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                >
                  <span className="text-body text-text-standard hover:text-primary-orange">
                    Solidarity tools
                  </span>
                  {isMobileDropdownOpen ? (
                    <ArrowUpIcon className="w-4 h-4 text-text-standard" />
                  ) : (
                    <ArrowDownIcon className="w-4 h-4 text-text-standard" />
                  )}
                </div>

                {isMobileDropdownOpen && (
                  <div className="pl-4 space-y-4">
                    <h4 className="font-akz uppercase font-[500] text-surface-grey-2 mb-4">
                      BREAD SOLIDARITY TOOLS
                    </h4>

                    <div className="space-y-4">
                      {SOLIDARITY_TOOLS.map((tool) => (
                        <SolidarityToolItem
                          key={tool.id}
                          {...tool}
                          onNavigate={() => setIsMobileMenuOpen(false)}
                        />
                      ))}
                      <Link href={LINKS.postCapitalistIdea} target="_blank">
                        <SolidarityToolItem
                          id="post-capitalist-idea"
                          logo="/logo-stroke.svg"
                          title="I have a post-capitalist idea..."
                          shortDescription="Have a better idea? Share it."
                          color="surface-ink"
                          onNavigate={() => setIsMobileMenuOpen(false)}
                        />
                      </Link>
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
                  href={LINKS.contributorForm}
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
