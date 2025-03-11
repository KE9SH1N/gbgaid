import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import GSectionHead from "../common/GSectionHead";

const OurServices = () => {
	return (
		<div className="w-full ct-container ct-flex-between justify-center">
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
	);
};

export default OurServices;
