"use client";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const logos = [
	"/images/brand/logo/1.webp",
	"/images/brand/logo/3.webp",
	"/images/brand/logo/4.webp",
	"/images/brand/logo/5.webp",
	"/images/brand/logo/1.webp",
	"/images/brand/logo/3.webp",
	"/images/brand/logo/4.webp",
	"/images/brand/logo/5.webp",
];
const BrandList = () => {
	return (
		<div className="w-full py-5 ct-container font-worksans">
			<Swiper
				modules={[Autoplay]}
				spaceBetween={50}
				slidesPerView={5}
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				loop={true}
				className="w-full"
				breakpoints={{
					640: { slidesPerView: 2 },
					768: { slidesPerView: 3 },
					1024: { slidesPerView: 5 },
				}}
			>
				{logos.map((logo, index) => (
					<SwiperSlide key={index} className="flex justify-center">
						<img
							src={logo}
							alt={`logo-${index}`}
							className="h-16 w-auto opacity-60 grayscale hover:grayscale-0 smooth-animation-mid cursor-pointer"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default BrandList;
