import Image from "next/image";

const ProjectsForMobile = () => {
	return (
		<div className="w-full c-container bg-red-400 my-6">
			<div className="ct-flex-start flex-col w-full gap-x-1">
				<div className="w-full relative overflow-hidden group">
					<Image
						src={"/images/projects/2.webp"}
						alt="project image 2"
						width={477}
						height={477}
						className="object-cover"
					/>
				</div>
				<div className="w-full relative overflow-hidden group">
					<Image
						src={"/images/projects/3.webp"}
						alt="project image 3"
						width={477}
						height={477}
						className="object-cover"
					/>
				</div>

				<div className="w-full relative overflow-hidden group">
					<Image
						src={"/images/projects/4.webp"}
						alt="project image 3"
						width={960}
						height={474}
						className="object-cover"
					/>
				</div>
				<div className="w-full relative overflow-hidden group">
					<Image
						src={"/images/projects/1.webp"}
						alt="project image 3"
						width={477}
						height={477}
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default ProjectsForMobile;
