import ServiceItem from "./common/ServiceItem";

const Services = () => {
	const serviceData = [
		{
			id: 1,
			image: "/images/services/team-1.webp",
			name: "Edward Eric Jr",
			designation: "Business & Financial Expert",
		},
		{
			id: 2,
			image: "/images/services/team-2.webp",
			name: "Tom Holland",
			designation: "Logistic & Communication Expert",
		},
		{
			id: 3,
			image: "/images/services/team-3.webp",
			name: "Laura Erakovic",
			designation: "Consumer Market Expert",
		},
	];

	return (
		<div className="w-full">
			<ServiceItem serviceData={serviceData} />
		</div>
	);
};

export default Services;
