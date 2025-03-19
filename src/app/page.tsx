import AboutConsulte from "./componenets/about/AboutConsulte";
import BrandList from "./componenets/brand-services/BrandList";
import BrandServices from "./componenets/brand-services/BrandServices";
import Footer from "./componenets/footer/Footer";
import NavigationTop from "./componenets/header/NavigationTop";
import HeroSlider from "./componenets/hero/HeroSlider";
import OurServices from "./componenets/our-services/OurServices";
import LatestProjects from "./componenets/projects/LatestProjects";
import Testimonials from "./componenets/testimonial/Testimonials";
import TestimonialSlider from "./componenets/testimonial/TestimonialSlider";
import CallToAction from "./componenets/util/CallToAction";

export default function Home() {
	return (
		<main>
			{/* <NavigationBar /> */}
			<NavigationTop />
			<HeroSlider />
			<CallToAction />
			<AboutConsulte />
			<BrandServices />
			<LatestProjects />
			<Testimonials />
			<TestimonialSlider />
			<OurServices />
			<BrandList />
			<Footer />
		</main>
	);
}
