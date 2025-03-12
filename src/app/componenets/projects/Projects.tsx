import Image from "next/image";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";

const Projects = () => {
	return (
		<div className="w-full ct-flex-start font-worksans gap-x-1 h-[750px]">
			<div className="w-[50%] ct-flex-start flex-col h-full gap-y-1">
				<div className="ct-flex-start w-full h-[50%] gap-x-1">
					<div className="w-[50%] h-full relative overflow-hidden group">
						<Image
							src={"/images/projects/2.webp"}
							alt="project image 2"
							fill
							className="object-cover"
						/>
						<div className=" text-white absolute left-0 bottom-0 overflow-hidden flex items-start justify-center flex-col text-center h-0 group-hover:h-[25%] w-full bg-[#2c724f] transition-all duration-700">
							<div className="w-full ct-flex-between px-5">
								<Link href={"/"}>
									<p className="ct-flex-start flex-col ">
										<span className="text-xl">WOTa Money Save</span>
										<span className=" text-sm">Finance, Consulting</span>
									</p>
								</Link>
								<Link href="/">
									<SlArrowRight className="text-5xl" />
								</Link>
							</div>
						</div>
					</div>
					<div className="w-[50%] h-full relative overflow-hidden group">
						<Image
							src={"/images/projects/3.webp"}
							alt="project image 3"
							fill
							className="object-cover"
						/>
						<div className=" text-white absolute left-0 bottom-0 overflow-hidden flex items-start justify-center flex-col text-center h-0 group-hover:h-[25%] w-full bg-[#2c724f] transition-all duration-700">
							<div className="w-full ct-flex-between px-5">
								<Link href={"/"}>
									<p className="ct-flex-start flex-col ">
										<span className="text-xl">WOTa Money Save</span>
										<span className=" text-sm">Finance, Consulting</span>
									</p>
								</Link>
								<Link href="/">
									<SlArrowRight className="text-5xl" />
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full h-[50%] relative overflow-hidden group">
					<Image
						src={"/images/projects/4.webp"}
						alt="project image 4"
						fill
						className="object-cover"
					/>
					<div className=" text-white absolute left-0 bottom-0 overflow-hidden flex items-start justify-center flex-col text-center h-0 group-hover:h-[25%] w-full bg-[#2c724f] transition-all duration-700">
						<div className="w-full ct-flex-between px-5">
							<Link href={"/"}>
								<p className="ct-flex-start flex-col ">
									<span className="text-xl">WOTa Money Save</span>
									<span className=" text-sm">Finance, Consulting</span>
								</p>
							</Link>
							<Link href="/">
								<SlArrowRight className="text-5xl" />
							</Link>
						</div>
					</div>
				</div>
			</div>
			<div className=" w-[50%] h-full relative overflow-hidden group">
				<Image
					src={"/images/projects/1.webp"}
					alt="project image 1"
					fill
					className="object-cover"
				/>
				<div className=" text-white absolute left-0 bottom-0 overflow-hidden flex items-start justify-center flex-col text-center h-0 group-hover:h-[15%] w-full bg-[#2c724f] transition-all duration-700">
					<div className="w-full ct-flex-between px-5">
						<Link href={"/"}>
							<p className="ct-flex-start flex-col ">
								<span className="text-xl">WOTa Money Save</span>
								<span className=" text-sm">Finance, Consulting</span>
							</p>
						</Link>
						<Link href="/">
							<SlArrowRight className="text-5xl" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
