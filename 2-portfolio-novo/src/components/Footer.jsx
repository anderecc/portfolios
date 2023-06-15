import React from 'react';
import styles from '../styles/footer.module.sass';

const Footer = () => {
    return (
        <footer className={styles.container}>
            <p>
                {'->'} <strong>Anderson, the anderecc.</strong> {'<-'}
            </p>
        </footer>
    );
};

export default Footer;
