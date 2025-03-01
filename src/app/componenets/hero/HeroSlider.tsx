"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import NavigationBar from "../header/NavigationBar";
import NavigationMenu from "../header/NavigationMenu";

const HeroSlider: React.FC = () => {
	return (
		<div className="relative group">
			<div className="absolute top-0 left-0 z-50 w-full">
				<NavigationMenu />
			</div>

			<Swiper
				navigation={true}
				modules={[Autoplay, Navigation]}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				className="mySwiper"
			>
				{[...Array(3)].map((_, index) => (
					<SwiperSlide key={index}>
						<div className="relative w-full h-[800px] flex items-center justify-center bg-cover bg-center bg-no-repeat">
							<div className=" absolute top-1/2 left-0 w-full z-40 -translate-y-1/2">
								<section className="relative font-worksans px-6 md:px-12 lg:px-20 py-20">
									<div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center">
										{/* Text Section */}
										<div className="lg:w-1/2 text-center lg:text-left">
											<p className="text-sm  text-gray-500 uppercase tracking-widest">
												Consulate Company
											</p>
											<h1 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight mt-4">
												Clever{" "}
												<span className="text-brandPrimaryColor font-bold">
													Investing
												</span>{" "}
												Make Your Money Grow
											</h1>
											<p className="mt-4 text-gray-600 text-sm leading-relaxed">
												Capitalise on low-hanging fruit to identify a ballpark
												value-added activity to beta test. Override the digital
												divide with additional base clickthroughs.
											</p>
											<div className="mt-6">
												<button className="bg-brandPrimaryColor hover:bg-green-800 text-white font-semibold py-3 px-6 transition-all duration-500 ease-in-out">
													WORK WITH US
												</button>
											</div>
										</div>
									</div>
								</section>
							</div>
							<Link href="/">
								<div className="w-full h-full">
									<Image
										src="/images/hero/slider-1.webp"
										alt="slider image"
										fill
										priority
										className="object-cover"
									/>
								</div>
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Navigation Buttons */}
			{/* <div className="swiper-button-next absolute left-4 top-1/2 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 hover:bg-brandPrimaryColor transition-opacity smooth-animation-mid cursor-pointer bg-[#CFD3D6] p-3">
				<MdKeyboardArrowLeft className="text-4xl text-backgroundedTextColor " />
			</div>

			<div className="swiper-button-prev absolute right-4 top-1/2 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 hover:bg-brandPrimaryColor transition-opacity smooth-animation-mid cursor-pointer bg-[#CFD3D6] p-3">
				<MdKeyboardArrowRight className="text-4xl text-backgroundedTextColor " />
			</div> */}
		</div>
	);
};

export default HeroSlider;
