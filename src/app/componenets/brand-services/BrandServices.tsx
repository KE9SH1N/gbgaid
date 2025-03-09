import React from "react";
import GServiceCard from "../common/GServiceCard";

import {
	PiChalkboardBold,
	PiTrendUpBold,
	PiShieldCheckBold,
	PiHouseBold,
	PiStampBold,
	PiCurrencyDollarBold,
	PiShoppingCartBold,
	PiTruckBold,
} from "react-icons/pi";
import { LuTv } from "react-icons/lu";
import { FaArrowTrendUp, FaStamp, FaTruckDroplet } from "react-icons/fa6";
import { TfiShield } from "react-icons/tfi";
import { IoHomeOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { TiShoppingCart } from "react-icons/ti";

const data = [
	{
		id: 1,
		icon: LuTv,
		title: "Strategy",
		description: "Thought leadership pass the clap hackathon wearables.",
		linkText: "More",
		linkUrl: "#",
	},
	{
		id: 2,
		icon: FaArrowTrendUp,
		title: "Financial",
		description: "Platform omnichannel click thought leadership pivot",
		linkText: "More",
		linkUrl: "#",
	},
	{
		id: 3,
		icon: TfiShield,
		title: "Insurance",
		description: "Disrupt taste makers help council emerging.",
		linkText: "More",
		linkUrl: "#",
	},
	{
		id: 4,
		icon: IoHomeOutline,
		title: "Estate",
		description: "Mobile ready proprietary dedication intuitive",
		linkText: "More",
		linkUrl: "#",
	},
	{
		id: 5,
		icon: FaStamp,
		title: "Audit & Evaluation",
		description: "Thought leadership pass the clap hackathon wearables.",
		linkText: "More",
		linkUrl: "#",
	},
	{
		id: 6,
		icon: BsCurrencyDollar,
		title: "Taxes & Efficiency",
		description: "Disrupt taste makers help council emerging.",
		linkText: "More",
		linkUrl: "#",
	},
	{
		id: 7,
		icon: TiShoppingCart,
		title: "Consumer Market",
		description: "Mobile ready proprietary dedication intuitive",
		linkText: "More",
		linkUrl: "#",
	},
	{
		id: 8,
		icon: FaTruckDroplet,
		title: "Logistic",
		description: "Platform omnichannel click thought leadership pivot",
		linkText: "More",
		linkUrl: "#",
	},
];
const BrandServices = () => {
	return (
		<div className="ct-container mb-6">
			<GServiceCard data={data} />
		</div>
	);
};

export default BrandServices;
