"use client";
import { FaQuoteRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonials = [
	{
		name: "Ryan Betthalyn",
		role: "Director at Chobham Manor",
		text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus. Lorem ipsum Dolor tusima olatiup.",
	},
	{
		name: "Bobs Hanley",
		role: "Director at Spotify",
		text: "Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus. Lorem ipsum Dolor tusima olatiup.",
	},
	{
		name: "Alice Johnson",
		role: "CEO at TechCorp",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at magna at nulla gravida semper.",
	},
	{
		name: "John Doe",
		role: "Manager at Business Inc.",
		text: "Suspendisse potenti. Fusce commodo, metus a iaculis scelerisque, justo risus vehicula sapien, a luctus justo sapien vel eros.",
	},
];

export default function Testimonials() {
	return (
		<section className="ct-container bg-white font-worksans">
			<div className="relative w-full mx-auto">
				<Swiper
					modules={[Autoplay]}
					spaceBetween={20}
					slidesPerView={2}
					// navigation
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					loop
					breakpoints={{
						0: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
					}}
				>
					{testimonials.map((testimonial, index) => (
						<SwiperSlide key={index}>
							<div className="border min-h-[200px]  p-6 rounded shadow-sm bg-white">
								<p className="text-gray-600">{testimonial.text}</p>
								<div className="mt-4 flex items-center justify-between">
									<div>
										<h3 className="font-bold text-gray-900">
											{testimonial.name}
										</h3>
										<p className="text-gray-500 text-sm">{testimonial.role}</p>
									</div>
									<FaQuoteRight className="text-green-700 text-2xl" />
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}
