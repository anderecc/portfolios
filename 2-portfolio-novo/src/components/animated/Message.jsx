import React from 'react';
import styles from '../../styles/animated/message.module.sass';
import { useSelector } from 'react-redux';

const Message = () => {
    const context = useSelector((state) => state.context);
    return (
        <div
            className={`${styles.container} ${
                context.message.visible ? styles.show : styles.hidden
            } ${
                context.message.success
                    ? styles.success
                    : context.message.error
                    ? styles.error
                    : ''
            }`}
        >
            <p className={`${styles.message} `}>{context.message.text}</p>
        </div>
    );
};

export default Message;
