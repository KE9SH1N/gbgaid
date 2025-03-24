"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import NavigationMenu from "../header/NavigationMenu";

const HeroSlider: React.FC = () => {
	return (
		<div className="relative group">
			{/* Navigation Menu */}
			<div className="absolute top-0 left-0 z-50 w-full">
				<NavigationMenu />
			</div>

			<Swiper
				modules={[Autoplay, Navigation]}
				loop={true}
				autoplay={{
					delay: 3000,
					disableOnInteraction: true,
					pauseOnMouseEnter: true,
				}}
				navigation={{ enabled: false }} // No navigation on mobile
				breakpoints={{
					1024: {
						navigation: { enabled: true }, // Show navigation only on large screens
					},
				}}
				className="mySwiper"
			>
				{[...Array(3)].map((_, index) => (
					<SwiperSlide key={index}>
						<div className="relative w-full h-[500px] md:h-[700px] lg:h-[900px] flex items-center justify-center bg-cover bg-center bg-no-repeat">
							<div className="absolute top-1/2 left-0 w-full z-40 -translate-y-1/2">
								<section className="relative font-worksans px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-16">
									<div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center">
										{/* Text Section */}
										<div className="lg:w-1/2 text-center lg:text-left">
											<p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest">
												Consulate Company
											</p>
											<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 leading-tight mt-2 sm:mt-4">
												Clever{" "}
												<span className="text-brandPrimaryColor font-bold">
													Investing
												</span>{" "}
												Make Your Money Grow
											</h1>
											<p className="mt-2 sm:mt-4 text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
												Capitalise on low-hanging fruit to identify a ballpark
												value-added activity to beta test. Override the digital
												divide with additional base clickthroughs.
											</p>
											<div className="mt-4 sm:mt-6">
												<button className="bg-brandPrimaryColor hover:bg-green-800 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 transition-all duration-500 ease-in-out">
													WORK WITH US
												</button>
											</div>
										</div>
									</div>
								</section>
							</div>
							<Link href="/" className="w-full h-full">
								<Image
									src="/images/hero/slider-1.webp"
									alt="slider image"
									fill
									priority
									className="object-contain sm:object-cover"
								/>
							</Link>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default HeroSlider;
