import GButton from "./componenets/common/GButton";
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
		</main>
	);
}
