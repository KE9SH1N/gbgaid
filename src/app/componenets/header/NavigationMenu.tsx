import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";

const NavigationMenu = () => {
	return (
		<div className="bg-placeholderBg">
			<div className="ct-container h-[100px] ct-items-center ct-flex-between">
				<div className="ct-items-center gap-x-24">
					<Image
						src={"/images/brand/logo.webp"}
						width={175}
						height={80}
						alt={"brand logo"}
					/>
					<div className="hidden lg:flex">
						<ul className="flex space-x-10 font-worksans font-semibold uppercase">
							<Link href="/" className="hover:text-blue-500">
								<li>Home</li>
							</Link>
							<Link href="/about" className="hover:text-blue-500">
								<li>About</li>
							</Link>
							<Link href="/services" className="hover:text-blue-500">
								<li>Services</li>
							</Link>
							<Link href="/projects" className="hover:text-blue-500">
								<li>Projects</li>
							</Link>
							<Link href="/blog" className="hover:text-blue-500">
								<li>Blog</li>
							</Link>
							<Link href="/contact" className="hover:text-blue-500">
								<li>Contact</li>
							</Link>
						</ul>
					</div>
				</div>

				<button className="ct-flex-end gap-x-4">
					<CiSearch className="text-2xl font-bold" />
					<GiHamburgerMenu className="text-4xl lg:hidden" />
				</button>
			</div>
		</div>
	);
};

export default NavigationMenu;
