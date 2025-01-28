import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
	src: "./fonts/WorkSans-VariableFont_wght.ttf",
	variable: "--font-work-sans",
	weight: "100 900",
});

const sacramento = localFont({
	src: "./fonts/Sacramento-Regular.ttf",
	variable: "--font-sacramento",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Consultix",
	description: "Template",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${sacramento.variable} ${workSans.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
