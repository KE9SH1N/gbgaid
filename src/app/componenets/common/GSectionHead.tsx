import React from "react";

interface GSectionHeadProps {
	title?: string;
	subTitlePrimary?: string;
	subTitleSecondary?: string;
}

const GSectionHead: React.FC<GSectionHeadProps> = ({
	title,
	subTitlePrimary,
	subTitleSecondary,
}) => {
	return (
		<div>
			<div className="font-worksans my-12">
				<p className="text-sm uppercase tracking-widest text-gray-500">
					{title}
				</p>
				<h2 className="text-3xl font-light text-black mt-6">
					<span className="font-bold text-[48px] text-brandPrimaryColor">
						{subTitlePrimary}
					</span>
					<span className="text-[48px]">&nbsp;{subTitleSecondary}</span>
				</h2>
			</div>
		</div>
	);
};

export default GSectionHead;
