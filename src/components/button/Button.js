import React from 'react';
import './button.css';

const buttonStyles = [
    'btn--default',
    'btn--navbar',
    'btn--people-remove',
    'btn--people-clear',
    'btn--tours',
    'btn--refresh',
    'btn--read-more',
    'btn--gallery',
    'btn--gallery-random',
    'btn--duck-category',
    'btn--movie-submit',
    'btn--movie-edit',
    'btn--movie-delete',
    'btn--movie-clear'
]

const buttonSizes = [
    'btn--small',
    'btn--medium',
    'btn--large'
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
