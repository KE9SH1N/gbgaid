import GButton from "./componenets/common/GButton";
import NavigationBar from "./componenets/header/NavigationBar";

export default function Home() {
	return (
		<main>
			<NavigationBar />
			<h1 className=" font-worksans ct-responsive-text ">Hello World!</h1>
			<GButton buttonText="Daniel" className="" />
		</main>
	);
}
