import GButton from "./componenets/common/GButton";
import NavigationTop from "./componenets/header/NavigationTop";

export default function Home() {
	return (
		<main>
			<NavigationTop />
			<h1 className=" font-worksans ct-responsive-text ">Hello World!</h1>
			<GButton buttonText="Daniel" className="" />
		</main>
	);
}
