import Image from "next/image";
import {
	GithubLogoIcon,
	LinkedinLogoIcon,
	YoutubeLogoIcon,
	DiscordLogoIcon,
	XLogoIcon,
	EnvelopeSimpleIcon,
	ArrowUpRightIcon,
} from "@phosphor-icons/react/ssr";
import { Body, Logo } from "@breadcoop/ui";
import { SOLIDARITY_TOOLS } from "@/constants/solidarityTools";
import { LINKS } from "@/constants/links";

function SocialIcons({ className = "" }: { className?: string }) {
	return (
		<div
			className={`flex items-center justify-center md:justify-start gap-5 pb-6 md:pb-0 ${className}`}
		>
			<a href={LINKS.youtube} className="block">
				<YoutubeLogoIcon className="w-6 h-6 text-surface-ink" />
			</a>
			<a href={LINKS.linkedin} className="block">
				<LinkedinLogoIcon className="w-6 h-6 text-surface-ink" />
			</a>
			<a
				href={LINKS.github}
				target="_blank"
				rel="noopener noreferrer"
				className="block"
			>
				<GithubLogoIcon className="w-6 h-6 text-surface-ink" />
			</a>
			<a href={LINKS.discord} className="block">
				<DiscordLogoIcon className="w-6 h-6 text-surface-ink" />
			</a>
			<a href={LINKS.twitter} className="block">
				<XLogoIcon className="w-6 h-6 text-surface-ink" />
			</a>
			<a href={LINKS.newsletter} className="block">
				<Image
					src="/paragraph.png"
					alt="Paragraph icon"
					width={24}
					height={24}
					className="p-0.75 w-5 h-5 text-surface-ink"
				/>
			</a>
			<a href={LINKS.farcaster} className="block">
				<Image
					src="/farcaster-icon.png"
					alt="Farcaser icon"
					width={24}
					height={24}
					className="p-0.75 w-5 h-5 text-surface-ink"
				/>
			</a>
		</div>
	);
}

interface FooterLinkProps extends Pick<FooterProps, "mode"> {
	href: string;
	children: React.ReactNode;
	isExternal?: boolean;
}

function FooterLink({
	href,
	children,
	isExternal = false,
	mode,
}: FooterLinkProps) {
	const isDisabled = !href || href.trim() === "";

	if (isDisabled) {
		return (
			<Body className="text-surface-ink font-breadBody flex items-center gap-2 opacity-50 ">
				{children}
			</Body>
		);
	}

	return (
		<a
			href={href}
			target={isExternal ? "_blank" : "_self"}
			rel={isExternal ? "noopener noreferrer" : ""}
			className={`font-breadBody flex items-center gap-2 ${
				mode === "colored" ? "text-surface-ink hover:text-paper-0" : ""
			}`}
		>
			{children}
			{isExternal && (
				<ArrowUpRightIcon className="w-6 h-6 text-orange-0" />
			)}
		</a>
	);
}

interface FooterProps {
	className?: string;
	topClassName?: string;
	infoClassName?: string;
	mode?: "colored" | "transparent";
}

export function Footer({
	className = "",
	topClassName = "",
	infoClassName = "",
	mode = "colored",
}: FooterProps) {
	return (
		<footer
			className={`px-4 py-12 ${
				mode === "colored"
					? "bg-primary-orange text-white"
					: "bg-transparent text-surface-ink"
			} ${className}`}
		>
			<div
				className={`mb-8 max-w-79.5 mx-auto md:max-w-7xl xl:flex xl:gap-4 ${topClassName}`}
			>
				<div
					className={`md:flex md:items-center md:justify-between md:mb-8 xl:flex-col xl:w-full xl:max-w-max ${infoClassName}`}
				>
					<div className="flex flex-col items-center md:items-start mb-4 md:mb-0 xl:mb-6">
						<div className="flex uppercase text-2xl  items-center gap-3 mb-2">
							<Logo
								text="Bread Cooperative"
								size={23}
								color={mode === "colored" ? "white" : undefined}
							/>
						</div>
						<p className="font-breadBody text-center md:text-left">
							Solidarity forever.
						</p>
					</div>

					{/* Social Icons */}
					<div className="mb-4 xl:w-full">
						<SocialIcons className="xl:gap-4" />
					</div>
				</div>
				<div className="flex flex-col gap-4 md:flex-row md:justify-between xl:w-full xl:max-w-212 xl:ml-auto">
					{/* Cooperative Column */}
					<div className="w-full">
						<Body
							className={`text-lg mb-4 ${
								mode === "transparent" ? "text-[#EA5817]" : ""
							}`}
						>
							Cooperative
						</Body>
						<ul className="space-y-3">
							<li>
								<FooterLink mode={mode} href={LINKS.docs}>
									Documentation
								</FooterLink>
							</li>
							<li>
								<FooterLink mode={mode} href={LINKS.newsletter}>
									Blog
								</FooterLink>
							</li>
							<li>
								<FooterLink
									mode={mode}
									href={LINKS.contributorForm}
								>
									Contribute
								</FooterLink>
							</li>
						</ul>
					</div>

					{/* Solidarity Tools Column */}
					<div className="w-full">
						<Body
							className={`text-lg mb-4 ${
								mode === "transparent" ? "text-[#EA5817]" : ""
							}`}
						>
							Solidarity tools
						</Body>
						<ul className="space-y-3">
							{SOLIDARITY_TOOLS.map((tool) => (
								<li key={tool.id}>
									<FooterLink
										href={tool.webLink || ""}
										isExternal={!tool.comingSoon}
									>
										{tool.title}
									</FooterLink>
								</li>
							))}
						</ul>
					</div>

					{/* Reach Out Column */}
					<div className="w-full">
						<Body
							className={`text-lg mb-4 ${
								mode === "transparent" ? "text-[#EA5817]" : ""
							}`}
						>
							Reach out
						</Body>
						{/* <Link
              href="mailto:contact@bread.coop"
              className="text-surface-ink hover:text-paper-0 font-breadBody flex items-center gap-2"
            >
              <EnvelopeSimpleIcon className="w-6 h-6 text-orange-0" />
              contact@bread.coop
            </Link> */}
						<a
							href="mailto:contact@bread.coop"
							className={`font-breadBody flex items-center gap-2 ${
								mode === "colored"
									? "text-surface-ink hover:text-paper-0"
									: ""
							}`}
						>
							<EnvelopeSimpleIcon className="w-6 h-6 text-orange-0" />
							contact@bread.coop
						</a>
					</div>

					{/* Support Us Column */}
					<div className="w-full">
						<Body
							className={`text-lg mb-4 ${
								mode === "transparent" ? "text-[#EA5817]" : ""
							}`}
						>
							Support us
						</Body>
						<ul className="space-y-3">
							<li>
								<FooterLink
									mode={mode}
									href={LINKS.giveth}
									isExternal
								>
									Donate in crypto
								</FooterLink>
							</li>
							<li>
								<FooterLink
									mode={mode}
									href={LINKS.openCollective}
									isExternal
								>
									Donate in fiat
								</FooterLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="border-t border-orange-0 pt-6 flex flex-col justify-between items-center gap-4 md:flex-row md:mx-auto md:max-w-7xl">
				<Body className="text-sm">
					Creative Commons ©BREAD Cooperative
				</Body>
				<div className="flex items-center gap-4">
					<Body className="text-sm">All Rights Reserved</Body>
					{/* TODO: Add terms and conditions and privacy policy #10 */}
					{/* <span className="text-white">|</span>
						<a
							href="#"
							className="text-orange-0 hover:text-paper-0 font-breadBody"
						>
							Terms and Conditions
						</a>
						<span className="text-white">|</span>
						<a
							href="#"
							className="text-orange-0 hover:text-paper-0 font-breadBody"
						>
							Privacy Policy
						</a> */}
				</div>
			</div>
		</footer>
	);
}
