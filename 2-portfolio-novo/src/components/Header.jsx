import React, { useState } from 'react';
import styles from '../styles/header.module.sass';
import Link from 'next/link';
import Letters from './animated/Letters';

const Header = (props) => {
    const [menu, setMenu] = useState(false);

    return (
        <header className={styles.container}>
            <div className={styles.fixed}>
                <Letters word="Anderson" redirect nameClass="letter_header" />
                <ul>
                    <li>
                        <Link
                            href="https://github.com/anderecc"
                            target="_blank"
                        >
                            <i className="fa-brands fa-github"></i>
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/andersondb06/"
                            target="_blank"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </Link>
                    </li>
                </ul>
                <div className={styles.btn_menu_container}>
                    <button
                        className={`${styles.btn_menu} ${
                            menu ? styles.open : ''
                        }`}
                        onClick={() => setMenu(!menu)}
                    >
                        <span></span>
                    </button>
                </div>
            </div>
            <nav
                className={`${styles.menu} ${
                    menu ? styles.menu_open : styles.menu_close
                }`}
            >
                <ul>
                    <li>
                        <Link
                            href="/"
                            className={props.home ? styles.page_on : ''}
                        >
                            Início
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className={props.about ? styles.page_on : ''}
                        >
                            Sobre mim
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className={props.projects ? styles.page_on : ''}
                        >
                            Projetos
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/contact"
                            className={props.contact ? styles.page_on : ''}
                        >
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
