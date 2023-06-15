import React from 'react';
import styles from '../../styles/animated/loading.module.sass';
import Letters from './Letters';

const Loading = () => {
    return (
        <div className={styles.container}>
            <Letters word="Enviando" nameClass="text_loading" />
        </div>
    );
};

export default Loading;
