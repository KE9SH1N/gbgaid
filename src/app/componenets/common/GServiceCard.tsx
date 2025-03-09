import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

interface GServiceCardProps {
	data: any;
}

const GServiceCard: React.FC<GServiceCardProps> = ({ data }) => {
	const IconComponent = data.icon;
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-worksans">
			{data.map((item: any) => (
				<div
					key={item.id}
					className="relative max-w-xs p-6 py-12 border border-gray-200 hover:bg-[#b4f1d22c] smooth-animation hover:cursor-pointer"
				>
					<span className="absolute inset-0 border-t-4 border-t-transparent hover:border-t-[#2c724f] transition-all duration-300"></span>
					<div className="mb-4 text-[#2c724f] text-3xl">
						<item.icon />
					</div>
					<h2 className="text-lg font-bold mb-2">{item.title}</h2>
					<p className="text-gray-600 mb-4">{item.description}</p>

					<Link
						href={item.linkUrl}
						className="text-black text-sm flex items-center gap-1 uppercase hover:text-[#1b4731] smooth-animation cursor-pointer"
					>
						{item.linkText}
						<span className="text-lg">
							<MdKeyboardArrowRight />
						</span>
					</Link>
				</div>
			))}
		</div>
	);
};

export default GServiceCard;
