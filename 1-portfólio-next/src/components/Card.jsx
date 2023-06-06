import Link from 'next/link';
import styles from '../styles/Card.module.sass';
import { useEffect } from 'react';

export default function Card(props) {
    const link =
        props.title === '16-coooder-shop'
            ? 'https://coooder-shop.vercel.app/'
            : props.title === '17-coooder-users'
            ? 'https://coooder-users.vercel.app/'
            : props.link;

    return (
        <aside className={`${styles.container} ${props.projeto}`}>
            <div
                className={styles.content}
                style={{ backgroundImage: `url(${props.image})` }}
            >
                <h1 className={styles.titulo}>{props.title}</h1>
                <figure>
                    <figcaption>
                        <a href={`${link}`} target="_blank" rel="noreferrer">
                            <span className={styles.button}>Acessar</span>
                        </a>
                    </figcaption>
                </figure>
            </div>
        </aside>
    );
}
