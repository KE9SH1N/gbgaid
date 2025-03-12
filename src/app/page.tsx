import AboutConsulte from "./componenets/about/AboutConsulte";
import BrandServices from "./componenets/brand-services/BrandServices";
import FooterBottom from "./componenets/footer/FooterBottom";
import FooterTop from "./componenets/footer/FooterTop";
import NavigationTop from "./componenets/header/NavigationTop";
import HeroSlider from "./componenets/hero/HeroSlider";
import OurServices from "./componenets/our-services/OurServices";
import LatestProjects from "./componenets/projects/LatestProjects";
import Testimonials from "./componenets/testimonial/Testimonials";
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
			<OurServices />
			<FooterTop />
			<FooterBottom />
		</main>
	);
}
