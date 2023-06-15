import React from 'react';
import styles from '../../styles/widget/stars.module.sass';

const Stars = (props) => {
    const renderStars = () => {
        const stars = [
            'fa-regular fa-star',
            'fa-regular fa-star',
            'fa-regular fa-star',
            'fa-regular fa-star',
            'fa-regular fa-star',
        ];

        for (let index = 0; index < props.skill; index++) {
            stars[index] = 'fa-solid fa-star';
        }

        return stars.map((star, index) => {
            return (
                <span key={index} style={{ color: '#f0ce4e' }}>
                    <i className={star}></i>
                </span>
            );
        });
    };

    return (
        <div>
            <p className={styles.stars_content}>{renderStars()}</p>
        </div>
    );
};

export default Stars;
