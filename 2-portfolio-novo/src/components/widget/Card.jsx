import React from 'react';
import styles from '../../styles/widget/card.module.sass';
import Link from 'next/link';

const Card = (props) => {
    const renderTechs = () => {
        const arrTechs = props.techs.split(' ');
        return arrTechs.map((tech, index) => {
            return (
                <span key={index}>
                    <img
                        src={`/images/technologies/${tech}.svg`}
                        alt={`${tech}_image`}
                        className={tech === 'nextjs' ? styles.nextjs : ''}
                    />
                </span>
            );
        });
    };

    return (
        <article className={styles.container}>
            <div
                className={styles.card_image}
                style={{
                    backgroundImage: `url('/images/${props.img}.png') `,
                }}
            ></div>
            <div className={styles.content}>
                <h5>{props.name}</h5>
                <p className={styles.techs_container}>{renderTechs()}</p>
                <Link href={props.link} target="_blank" className={styles.link}>
                    Acessar
                </Link>
            </div>
        </article>
    );
};

export default Card;
