import React, { useEffect, useState } from 'react';
import styles from '../../styles/widget/buttonToTop.module.sass';

const ButtonToTop = () => {
    const [btnVisible, setBtnVisible] = useState(false);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            if (
                document.body.scrollTop > 20 ||
                document.documentElement.scrollTop > 20
            ) {
                setBtnVisible(true);
            } else {
                setBtnVisible(false);
            }
        });
    }, []);

    const handleToTop = () => {
        document.documentElement.scrollIntoView({
            behavior: 'smooth',
            top: 0,
            // For Chrome, Firefox, IE and Opera
        });

        document.body.scrollIntoView({
            behavior: 'smooth',
            top: 0,
            // For Safari
        });
    };

    return (
        <>
            {btnVisible ? (
                <button className={styles.button} onClick={handleToTop}>
                    <i className="fa-brands fa-space-awesome"></i>
                </button>
            ) : (
                false
            )}
        </>
    );
};

export default ButtonToTop;
