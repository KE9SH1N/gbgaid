"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import GInput from "../common/GInput";
const FooterTop = () => {
	return (
		<div className="bg-white py-12 font-worksans">
			<div className="ct-container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
				{/* Company Info */}
				<div>
					<h2 className="text-3xl font-bold">
						CONSUL<span className="text-gray-500 font-normal">TIX</span>
					</h2>
					<p className="text-sm text-[#999999] mt-4 uppercase">
						CALL US DIRECTLY
					</p>
					<p className="text-2xl text-[#000000] hover:text-[#0052e7] smooth-animation-mid mt-2 cursor-pointer">
						+1 212-226-3126
					</p>
					<p className="text-gray-500">Hello@Consulte.Co</p>
				</div>

				{/* Company Links */}
				<div>
					<h3 className="font-semibold text-xl mb-4">Company</h3>
					<ul className="text-gray-500 text-sm space-y-2">
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">About Us</Link>
						</li>
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">Team</Link>
						</li>
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">Careers</Link>
						</li>
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">Investors</Link>
						</li>
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">Contact Us</Link>
						</li>
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">Offices</Link>
						</li>
					</ul>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="font-semibold text-xl mb-4">Quick Links</h3>
					<ul className="text-gray-500 text-sm space-y-2">
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">FAQs</Link>
						</li>
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">Support</Link>
						</li>
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">Sitemap</Link>
						</li>
						<li className="hover:text-[#2c724f] smooth-animation-mid capitalize">
							<Link href="">Community</Link>
						</li>
					</ul>
				</div>

				{/* Newsletter */}
				<div>
					<h3 className="font-semibold text-xl mb-4">Our Newsletter</h3>
					<p className="text-gray-500 text-sm mb-4">
						Subscribe to our newsletter and we will inform you about latest
						updates and offers
					</p>
					<div className="relative">
						<GInput
							type="email"
							placeholder="Email Address..."
							inputClassName="w-full p-3 pl-5 border rounded-[2px] pr-10 text-gray-600 placeholder:text-base bg-[#f7f7f7] border-gray-300 focus:border-[#2c724f] focus:ring-[#2c724f] outline-none smooth-animation-mid"
						></GInput>

						<button className="absolute right-3 top-4 text-gray-500 ">
							<FaArrowRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FooterTop;
