import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaRegClock, FaRss } from "react-icons/fa";
import { FaRegCirclePlay, FaXTwitter } from "react-icons/fa6";
import { IoMdMail, IoMdPlayCircle } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const NavigationTop = () => {
	return (
		<div className="h-[125px] md:h-[100px] lg:h-[60px] bg-brandPrimaryColor ct-items-center">
			<div className="ct-container flex flex-col gap-y-3 md:flex-col md:items-center md:gap-y-4 lg:flex-row lg:ct-flex-between w-full text-white font-worksans">
				<ul className="flex flex-wrap text-center lg:w-[70%] ct-flex-center gap-1 lg:ct-flex-start lg:gap-x-5">
					<li className="ct-flex-center gap-x-2">
						<IoMdMail />
						<Link className="text-sm" href={"/"}>
							hello@consulte.co
						</Link>
					</li>
					<li className="ct-flex-center ml-5 md:ml-0 gap-x-2">
						<IoCall />
						<Link className="text-sm" href={"/"}>
							+1212-226-3126
						</Link>
					</li>
					<li className="ct-flex-center gap-x-2">
						<FaRegClock />
						<Link className="text-sm" href={"/"}>
							{" "}
							Mon - Sat: 8.00 - 17.00, Sunday Closed
						</Link>
					</li>
				</ul>
				<ul className="ct-flex-center lg:ct-flex-end lg:w-[30%] gap-x-5">
					<h4 className=" capitalize text-sm">our social</h4>
					<li className="ct-flex-center">
						<Link href={"/"}>
							<FaXTwitter className="text-sm" />
						</Link>
					</li>
					<li className="ct-flex-center">
						<Link href={"/"}>
							<FaFacebookF />
						</Link>
					</li>
					<li className="ct-flex-center">
						<Link href={"/"}>
							<FaInstagram />
						</Link>
					</li>
					<li className="ct-flex-center">
						<Link href={"/"}>
							<FaRss className="text-sm" />
						</Link>
					</li>
					<li className="ct-flex-center">
						<Link href={"/"}>
							<IoMdPlayCircle className="text-xl" />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavigationTop;
