import React from 'react';
import './styles.scss';

interface Props {
    text: string;
    landingPage?: boolean;
}

const Button: React.FC<Props> = ({text, landingPage}) => {
    return (
        <div>
            <button className={landingPage ? 'landingPageButton' : 'button'}>{text}</button>
        </div>
    )
}

export default Button;