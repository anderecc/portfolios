import renderTypeWrite from '@/functions/renderTypeWrite';
import React, { useEffect } from 'react';

const TypeWrite = (props) => {
    useEffect(() => {
        renderTypeWrite(props.idToFn, props.text);
    }, []);

    return (
        <h2
            className={`title type_write ${props.nameClass ?? ''}`}
            id={props.idToFn}
        ></h2>
    );
};

export default TypeWrite;
