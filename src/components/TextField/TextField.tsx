import React from 'react';
import './styles.scss';

interface Props {
    text: string;
    classname: string;
}

const TextField: React.FC<Props> = ({text, classname}) => {
    return (
        <div className={classname}>
            {text}
        </div>
    )
}

export default TextField;