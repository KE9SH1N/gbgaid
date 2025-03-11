import React from "react";
import GSectionHead from "../common/GSectionHead";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";

const LatestProjects = () => {
	return (
		<div>
			<div className="w-full ct-container ct-flex-between justify-center">
				<GSectionHead
					title="latest projects"
					subTitlePrimary="See Our"
					subTitleSecondary="Successful Businesses"
				/>
				<Link
					href="#"
					className="ct-flex-center font-worksans text-sm uppercase hover:text-[#1b4731]"
				>
					all Cases
					<span className="text-lg mb-[1px]">
						<MdKeyboardArrowRight />
					</span>
				</Link>
			</div>

			<div className="w-full ct-flex-start font-worksans gap-x-1 h-[750px]">
				<div className="w-[50%] ct-flex-start flex-col h-full gap-y-1">
					<div className="ct-flex-start w-full h-[50%] gap-x-1">
						<div className="w-[50%] h-full relative">
							<Image
								src={"/images/projects/2.webp"}
								alt="project image 2"
								fill
								className="object-cover"
							/>
						</div>
						<div className="w-[50%] h-full relative">
							<Image
								src={"/images/projects/3.webp"}
								alt="project image 3"
								fill
								className="object-cover"
							/>
						</div>
					</div>
					<div className="w-full h-[50%] relative">
						<Image
							src={"/images/projects/4.webp"}
							alt="project image 4"
							fill
							className="object-cover"
						/>
					</div>
				</div>
				<div className=" w-[50%] h-full relative">
					<Image
						src={"/images/projects/1.webp"}
						alt="project image 1"
						fill
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default LatestProjects;
