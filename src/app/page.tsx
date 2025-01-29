import GButton from "./componenets/common/GButton";
import NavigationBar from "./componenets/header/NavigationBar";
import HeroSlider from "./componenets/hero/HeroSlider";
import CallToAction from "./componenets/util/CallToAction";

export default function Home() {
	return (
		<main>
			<NavigationBar />
			<HeroSlider />
			<CallToAction />
		</main>
	);
}
