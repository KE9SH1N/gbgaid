import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";

interface ServiceItemProps {
	serviceData: {
		id: number;
		image: string;
		name: string;
		designation: string;
	}[];
}

const ServiceItem: React.FC<ServiceItemProps> = ({ serviceData }) => {
	return (
		<div className="ct-flex-start gap-x-5">
			{serviceData.map((service) => (
				<div
					key={service?.id}
					className="w-full font-worksans ct-flex-start flex-col"
				>
					<div className="relative min-w-[330px] h-[394px] overflow-hidden group rounded">
						<Image
							src={service?.image}
							alt="team 1"
							fill
							className="w-full object-cover cursor-pointer group-hover:scale-105 smooth-animation-mid"
						/>

						<div className="absolute inset-0 bg-[#3a584f] bg-opacity-0 group-hover:bg-opacity-30 rounded smooth-animation-mid cursor-pointer"></div>

						<div className="absolute ct-flex-center bottom-4 -right-full bg-white min-w-40 py-3 rounded-[4px] flex gap-3 smooth-animation-mid group-hover:right-4">
							<Link href="#" className="text-white text-xl hover:text-gray-300">
								<FaTwitter className="text-gray-500 text-md" />
							</Link>
							<Link href="#" className="text-white text-xl hover:text-gray-300">
								<RiFacebookFill className="text-gray-500 text-md" />
							</Link>
							<Link href="#" className="text-white text-xl hover:text-gray-300">
								<IoLogoInstagram className="text-gray-500 text-md" />
							</Link>
							<Link href="#" className="text-white text-xl hover:text-gray-300">
								<FaLinkedin className="text-gray-500 text-md" />
							</Link>
						</div>
					</div>
					<div className="w-full mt-6">
						<h2 className="font-semibold text-2xl">{service?.name}</h2>
						<p className="text-sm text-[#666666]">{service?.designation}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ServiceItem;
