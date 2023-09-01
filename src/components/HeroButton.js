import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary','btn--outline','btn--normal'];
const SIZES = ['btn--medium','btn--large'];

export const HeroButton = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    btnLink,
}) => {
     const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

     return(
        <Link to={btnLink} className='btn-mobile'>
            <button 
            className={`btn_2 ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} 
            type={type} >
                {children}
            </button>
        </Link>
     );
};
 
