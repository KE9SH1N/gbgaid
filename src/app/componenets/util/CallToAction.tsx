import React from "react";

const CallToAction = () => {
	return (
		<div className="bg-cta-background-image bg-cover bg-center bg-no-repeat flex items-center justify-center ">
			<div className="ct-container md:ct-flex-start md:flex-col lg:flex-row lg:ct-flex-between w-full font-worksans py-[75px] text-white">
				<div>
					<h3 className="sm:text-[26px] md:text-3xl lg:text-[26px] xl:text-3xl ">
						<span>Book an appoitment quickly?</span>

						<span className="font-bold md:ml-4">Call us now!</span>
					</h3>

					<p className="text-base leading-6 mt-2">
						We prodive a dedicated support 24/7 for any your question
					</p>
				</div>
				<p className="sm:text-[36px] md:text-5xl lg:text-[42px] xl:text-5xl font-bold mt-4">
					+0962-58-58-258
				</p>
			</div>
		</div>
	);
};

export default CallToAction;
