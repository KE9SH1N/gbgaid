import React from "react";

interface GInputProps {
	label?: string;
	htmlFor?: string;
	placeholder?: string;
	type?: "text" | "password" | "email" | "number";
	inputMode?:
		| "numeric"
		| "text"
		| "email"
		| "numeric"
		| "search"
		| "tel"
		| "url"
		| "none"
		| "decimal";
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	labelClassName?: string;
	inputClassName?: string;
	id?: string;
	required?: boolean;
	readOnly?: boolean;
	disabled?: boolean;
	autoFocus?: boolean;
	name?: string;
	maxLength?: number;
	minLength?: number;
	pattern?: string;
	autoComplete?: string;
	step?: number;
	min?: number;
	max?: number;
	ariaLabel?: string;
	spellCheck?: boolean;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
	children?: React.ReactNode;
	title?: string;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	inputRef?: React.RefObject<HTMLInputElement>;
}

const GInput: React.FC<GInputProps> = ({
	label,
	htmlFor,
	placeholder,
	type = "",
	inputMode,
	value,
	onChange,
	labelClassName = "",
	inputClassName = "",
	id,
	required = false,
	readOnly = false,
	disabled = false,
	autoFocus = false,
	name,
	maxLength,
	minLength,
	pattern,
	autoComplete,
	step,
	min,
	max,
	ariaLabel,
	spellCheck = true,
	onBlur,
	onFocus,
	children,
	title,
	onKeyDown,
	inputRef,
}) => {
	return (
		<div className={`w-full relative`}>
			{label && (
				<label
					htmlFor={id}
					className={`text-sm capitalize ${labelClassName} font-medium`}
				>
					{label} {required && <span className="text-red-700">*</span>}
				</label>
			)}
			<input
				id={id}
				name={name}
				type={type}
				inputMode={inputMode}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				required={required}
				readOnly={readOnly}
				disabled={disabled}
				autoFocus={autoFocus}
				maxLength={maxLength}
				minLength={minLength}
				pattern={pattern}
				autoComplete={autoComplete}
				step={step}
				min={min}
				max={max}
				aria-label={ariaLabel}
				spellCheck={spellCheck}
				onBlur={onBlur}
				onFocus={onFocus}
				className={`${inputClassName} text-sm outline-none placeholder:text-xs pl-3 `}
				title={title}
				onKeyDown={onKeyDown}
				ref={inputRef}
			/>
			{children}
		</div>
	);
};

export default GInput;
