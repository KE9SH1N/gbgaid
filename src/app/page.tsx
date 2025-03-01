import AboutConsulte from "./componenets/about/AboutConsulte";
import GButton from "./componenets/common/GButton";
import GSectionHead from "./componenets/common/GSectionHead";
import NavigationBar from "./componenets/header/NavigationBar";
import NavigationTop from "./componenets/header/NavigationTop";
import HeroSlider from "./componenets/hero/HeroSlider";
import CallToAction from "./componenets/util/CallToAction";

export default function Home() {
	return (
		<main>
			{/* <NavigationBar /> */}
			<NavigationTop />
			<HeroSlider />
			<CallToAction />
			<AboutConsulte />
			<GSectionHead />
		</main>
	);
}
