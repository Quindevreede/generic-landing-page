import React from "react";
import "./button.css";

const buttonStyles = [
    "btn--default",
    "btn--navbar",
    "btn--list",
    "btn--tours",
    "btn--refresh",
    "btn--read-more",
    "btn--gallery",
    "btn--top10-category"
]

const buttonSizes = [
    "btn--small",
    "btn--medium",
    "btn--large"
]

function Button({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    disabled
}) {

    const checkButtonStyle = buttonStyles.includes(buttonStyle)
        ? buttonStyle
        : buttonStyles[0];

    const checkButtonSize = buttonSizes.includes(buttonSize)
        ? buttonSize
        : buttonSizes[0];


    return (
        <button
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
