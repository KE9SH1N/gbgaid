"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const HeroSlider: React.FC = () => {
	return (
		<div className="relative group">
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
						<div className="relative w-full h-[100vh] flex items-center justify-center bg-cover bg-center bg-no-repeat">
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
