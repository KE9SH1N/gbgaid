import AboutConsulte from "./componenets/about/AboutConsulte";
import BrandServices from "./componenets/brand-services/BrandServices";
import GButton from "./componenets/common/GButton";
import GSectionHead from "./componenets/common/GSectionHead";
import NavigationBar from "./componenets/header/NavigationBar";
import NavigationTop from "./componenets/header/NavigationTop";
import HeroSlider from "./componenets/hero/HeroSlider";
import LatestProjects from "./componenets/projects/LatestProjects";
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
		</main>
	);
}
