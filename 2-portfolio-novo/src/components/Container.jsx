import React from 'react';
import styles from '../styles/container.module.sass';

const Container = (props) => {
    return (
        <main
            className={`${styles.content} ${
                props.projects
                    ? styles.projects
                    : props.contact
                    ? styles.contact
                    : ''
            }`}
        >
            {props.children}
        </main>
    );
};

export default Container;
