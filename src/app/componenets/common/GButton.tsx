import React from "react";

interface GButtonProps {
	buttonText?: string;
	className?: string;
	onClick?: () => void;
	children?: React.ReactNode;
}

const GButton: React.FC<GButtonProps> = ({
	buttonText,
	className,
	onClick,
	children,
}) => {
	return (
		<button onClick={onClick} className={`${className || ""}`}>
			<span className=" capitalize">{buttonText}</span>
			{children}
		</button>
	);
};

export default GButton;
