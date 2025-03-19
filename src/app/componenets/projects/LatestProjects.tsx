import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import GSectionHead from "../common/GSectionHead";
import Projects from "./Projects";
import ProjectsForMobile from "./ProjectsForMobile";

const LatestProjects = () => {
	return (
		<div>
			<div className="w-full ct-container ct-flex-start flex-col lg:flex-row lg:ct-flex-between justify-center">
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

			<div className="hidden lg:flex">
				<Projects />
			</div>
			<div className="md:hidden">
				<ProjectsForMobile />
			</div>
		</div>
	);
};

export default LatestProjects;
