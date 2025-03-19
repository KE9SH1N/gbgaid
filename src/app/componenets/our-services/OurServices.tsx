import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import GSectionHead from "../common/GSectionHead";
import Services from "./Services";

const OurServices = () => {
	return (
		<div className="w-full ct-container ct-flex-start flex-col my-5">
			<div className="w-full ct-flex-start lg:ct-flex-between lg:justify-center flex-col">
				<GSectionHead
					title="our services"
					subTitlePrimary="We Are"
					subTitleSecondary="Friendly & Profressional"
				/>
				<Link
					href="#"
					className="ct-flex-center font-worksans text-sm uppercase hover:text-[#1b4731]"
				>
					all experts
					<span className="text-lg mb-[1px]">
						<MdKeyboardArrowRight />
					</span>
				</Link>
			</div>

			<div className="w-full my-6">
				<Services />
			</div>
		</div>
	);
};

export default OurServices;
