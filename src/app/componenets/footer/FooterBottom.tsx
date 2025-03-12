import {
	FaFacebookF,
	FaInstagram,
	FaPlay,
	FaRss,
	FaTwitter,
} from "react-icons/fa";
const FooterBottom = () => {
	return (
		<div className="ct-container w-full border-t border-gray-300 py-6 font-worksans">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4">
				{/* Left Section - Copyright */}
				<p className="text-gray-600 text-sm text-center md:text-left">
					Copyright ©2025 All rights reserved | This template is made with{" "}
					<span className="text-red-500">❤️</span> by{" "}
					<span className="font-bold">kensh1nTheme</span>
				</p>

				{/* Right Section - Social Icons */}
				<div className="flex gap-4 mt-4 md:mt-0">
					<a
						href="#"
						className="text-gray-500 hover:text-[#2c724f] transition smooth-animation-mid"
					>
						<FaTwitter />
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-[#2c724f] transition smooth-animation-mid"
					>
						<FaFacebookF />
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-[#2c724f] transition smooth-animation-mid"
					>
						<FaInstagram />
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-[#2c724f] transition smooth-animation-mid"
					>
						<FaRss />
					</a>
					<a
						href="#"
						className="text-gray-500 hover:text-[#2c724f] transition smooth-animation-mid"
					>
						<FaPlay />
					</a>
				</div>
			</div>
		</div>
	);
};

export default FooterBottom;
