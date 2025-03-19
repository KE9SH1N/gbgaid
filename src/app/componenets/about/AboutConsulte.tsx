import Image from "next/image";

const AboutConsulte = () => {
	return (
		<div className="ct-container border-b border-gray-500">
			<div className="ct-flex-start flex-col lg:flex-row lg:ct-flex-between my-6 lg:my-24 relative">
				<div className="w-full lg:w-[50%]">
					<Image
						src={"/images/home-about.webp"}
						alt="about consulte"
						width={500}
						height={500}
						className="object-cover"
					/>
				</div>
				<section className="w-full lg:w-[50%]">
					<div className="w-full font-worksans">
						{/* Small Heading */}
						<h3 className="text-sm uppercase tracking-widest text-gray-500">
							About Consulte
						</h3>

						{/* Main Heading */}
						<h2 className="text-3xl md:text-5xl font-light text-gray-900 mt-2">
							Leading{" "}
							<span className="font-bold text-green-700">
								Financial Consulting
							</span>{" "}
							Company
						</h2>

						{/* Paragraphs */}
						<p className="text-gray-600 mt-6 leading-relaxed">
							Consulte is located in the former rectory of St. Peter’s Episcopal
							Church. Over our 14-year history, we have treated patients from
							over 114 different countries in the world. In 2010, we imposed
							geographical restrictions for the first time. Existing patients
							were not affected by this change, but new patients are now.
						</p>

						<p className="text-gray-600 mt-4 leading-relaxed">
							We have compiled an extensive list of other area clinics and
							health resources, so that when someone calls from outside of our
							geographical area.
						</p>
					</div>
					{/* Signature Section */}
					<div className="mt-10">
						<p className="text-gray-500 text-lg">Daniel</p>
						<p className="text-black font-worksans text-sm">DANIEL JR</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AboutConsulte;
