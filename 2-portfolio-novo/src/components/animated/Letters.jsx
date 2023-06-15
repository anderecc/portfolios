import React, { useEffect, useState } from 'react';
import styles from '../../styles/animated/letters.module.sass';
import { useRouter } from 'next/router';

const Letters = (props) => {
    const word = props.word.split('');
    const { push } = useRouter();
    const [restartAnimation, setRestartAnimation] = useState(false);

    useEffect(() => {
        if (restartAnimation) {
            const elements = document.querySelectorAll(`.${props.nameClass}`);
            elements.forEach((element, index) => {
                element.classList.add(`animation_letter_${index}`);
            });
            setRestartAnimation(false);
        }
    }, [restartAnimation]);

    const renderWord = () => {
        return word.map((letter, index) => {
            return (
                <span
                    className={`title ${props.nameClass} animation_letter_${index}`}
                    key={index}
                    onAnimationEnd={async (e) => {
                        if (e.animationName.includes('restart')) {
                            if (
                                e.target.className.includes(
                                    `animation_letter_${word.length - 1}`
                                )
                            ) {
                                setRestartAnimation(true);
                            }
                            e.target.classList.remove(
                                `animation_letter_${index}`
                            );
                        }
                    }}
                >
                    {letter}
                </span>
            );
        });
    };

    return (
        <p
            className={`${styles.container}`}
            onClick={() => (props.redirect ? push('/') : false)}
        >
            {renderWord()}
        </p>
    );
};

export default Letters;
