import Layout from '@/components/Layout';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/home.module.sass';
import TypeWrite from '@/components/animated/TypeWrite';
import Stars from '@/components/widget/Stars';

const Home = () => {
    return (
        <Layout title="Portfólio Anderson" home>
            <section className={styles.intro_content}>
                <TypeWrite
                    nameClass={styles.title}
                    idToFn="title_home"
                    text="Olá, seja bem vindo <a> ao meu Portfólio."
                />
                <p>
                    Uma breve introdução sobre quem eu sou, em resumo, sou
                    apaixonado por tecnologia, apaixonado em resolver problemas
                    e criar soluções e na programação isso não falta. Tenho 21
                    anos, sou desenvolvedor {'"Full Stack"'} e faz mais de 1 ano
                    que estudo programação, me dedicando diariamente para
                    aprender algo novo e fixar os conhecimentos que já tenho.
                </p>
            </section>
            <section className={styles.skills_container}>
                <article className={styles.techs_content}>
                    <h3 className={`subtitle`}>
                        Linguagens que tenho conhecimento
                    </h3>
                    <ul>
                        <li>
                            <p className={styles.tech_name}>
                                <span>HTML</span>
                                <span>
                                    <img
                                        src="/images/technologies/html.svg"
                                        alt="html-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>CSS</span>
                                <span>
                                    <img
                                        src="/images/technologies/css.svg"
                                        alt="css-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>SASS/SCSS</span>
                                <span>
                                    <img
                                        src="/images/technologies/sass.svg"
                                        alt="sass-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>Tailwind CSS</span>
                                <span>
                                    <img
                                        src="/images/technologies/tailwind.svg"
                                        alt="tailwind-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="3" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>Bootstrap</span>
                                <span>
                                    <img
                                        src="/images/technologies/bootstrap.svg"
                                        alt="bootstrap-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="3" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>Javascript</span>
                                <span>
                                    <img
                                        src="/images/technologies/javascript.svg"
                                        alt="javascript-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>Typescript</span>
                                <span>
                                    <img
                                        src="/images/technologies/typescript.svg"
                                        alt="typescript-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="2" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>React</span>
                                <span>
                                    <img
                                        src="/images/technologies/react.svg"
                                        alt="react-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>Next.js</span>
                                <span>
                                    <img
                                        style={{
                                            backgroundColor: 'white',
                                            borderRadius: '50%',
                                        }}
                                        src="/images/technologies/nextjs.svg"
                                        alt="nextjs-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>Redux</span>
                                <span>
                                    <img
                                        src="/images/technologies/redux.svg"
                                        alt="redux-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>MongoDB</span>
                                <span>
                                    <img
                                        src="/images/technologies/mongodb.svg"
                                        alt="mongodb-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="4" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>Firebase</span>
                                <span>
                                    <img
                                        src="/images/technologies/firebase.svg"
                                        alt="firebase-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="4" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>MySQL</span>
                                <span>
                                    <img
                                        src="/images/technologies/mysql.svg"
                                        alt="mysql-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="3" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>Node.js</span>
                                <span>
                                    <img
                                        src="/images/technologies/node.svg"
                                        alt="node-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="4" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>Express</span>
                                <span>
                                    <img
                                        src="/images/technologies/express.svg"
                                        alt="express-svg"
                                    />
                                </span>
                            </p>
                            <Stars skill="3" />
                        </li>
                        <li>
                            <p className={styles.tech_name}>
                                <span>JWT</span>
                                <span>
                                    <img
                                        src="/images/technologies/jwt.svg"
                                        alt="jwt-svg"
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderRadius: '50%',
                                        }}
                                    />
                                </span>
                            </p>
                            <Stars skill="4" />
                        </li>
                    </ul>
                </article>
                <article className={styles.skills_content}>
                    <h3 className={`subtitle`}>Conhecimentos em</h3>
                    <ul>
                        <li>
                            <p className={styles.skills_text}>
                                Construção de {"API's"} rest/full
                            </p>
                            <Stars skill="4" />
                        </li>
                        <li>
                            <p className={styles.skills_text}>
                                Consumir dados de {"API's"}
                            </p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.skills_text}>HTML semântico</p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.skills_text}>Mobile first</p>
                            <Stars skill="5" />
                        </li>
                        <li>
                            <p className={styles.skills_text}>
                                Lógica/Lógica de programação
                            </p>
                            <Stars skill="4" />
                        </li>
                        <li>
                            <p className={styles.skills_text}>
                                Deploy em servidores e provedores
                            </p>
                            <Stars skill="3" />
                        </li>
                    </ul>
                </article>
                <article className={styles.curses_content}>
                    <h3 className={`subtitle`}>Cursos concluídos</h3>
                    <ul>
                        <li>
                            <p>
                                MySQL 8, por Hcode Treinamentos. (
                                <strong>8.5 horas no total</strong>)
                            </p>
                            <Link
                                target="_blank"
                                href="https://www.udemy.com/certificate/UC-77b591d7-5314-4e52-a240-7373ed80c9ae/"
                            >
                                Certificado
                            </Link>
                        </li>
                        <li>
                            <p>
                                Node.js, por Guia do Programador. (
                                <strong>50 horas no total</strong>)
                            </p>
                            <Link
                                target="_blank"
                                href="https://www.udemy.com/certificate/UC-06134f8b-38ce-435d-b387-f94540a1674f/"
                            >
                                Certificado
                            </Link>
                        </li>
                        <li>
                            <p>
                                Javascript Funcional e Reativo, por Leonardo
                                Moura Leitao. (
                                <strong>17 horas no total</strong>)
                            </p>
                            <Link
                                target="_blank"
                                href="https://www.udemy.com/certificate/UC-07b943da-4392-4fb1-8bbf-f7606a69a5c1/"
                            >
                                Certificado
                            </Link>
                        </li>
                        <li>
                            <p>
                                Javascript, por Hcode Treinamentos. (
                                <strong>38,5 horas no total</strong>)
                            </p>
                            <Link
                                target="_blank"
                                href="https://www.udemy.com/certificate/UC-c201d74b-6ff0-4445-b433-ac9b4618883e/"
                            >
                                Certificado
                            </Link>
                        </li>
                        <li>
                            <p>
                                React e Redux, por Leonardo Moura Leitao. (
                                <strong>54,5 horas no total</strong>)
                            </p>
                            <Link
                                target="_blank"
                                href="https://www.udemy.com/certificate/UC-0075e93e-db81-4423-8403-2ec34b56bcd6/"
                            >
                                Certificado
                            </Link>
                        </li>
                        <li>
                            <p>
                                Next.js e React, por Leonardo Moura Leitao. (
                                <strong>28,5 horas no total</strong>)
                            </p>
                            <Link
                                target="_blank"
                                href="https://www.udemy.com/certificate/UC-c6c563d8-d3af-469b-9191-24bba705e675/"
                            >
                                Certificado
                            </Link>
                        </li>
                        <li>
                            <p>
                                Algoritmo e Lógica de Programação, por Leonardo
                                Moura Leitao. (
                                <strong>18 horas no total</strong>)
                            </p>
                            <Link
                                target="_blank"
                                href="https://www.udemy.com/certificate/UC-b2f3524f-1d3e-4c0e-b81e-3983f30aea3f/"
                            >
                                Certificado
                            </Link>
                        </li>
                        <li>
                            <p>
                                SASS e SCSS do básico ao avançado, por Matheus
                                Battisti. (<strong>12,5 horas no total</strong>)
                            </p>
                            <Link
                                target="_blank"
                                href="https://www.udemy.com/certificate/UC-04a99e14-f7a5-4424-8e71-1116af7e36d1/"
                            >
                                Certificado
                            </Link>
                        </li>
                        <li>
                            <p>
                                HTML5, CSS3 e JS, por Daniel Tapias Morales. (
                                <strong>54,5 horas no total</strong>)
                            </p>
                            <Link
                                target="_blank"
                                href="https://www.udemy.com/certificate/UC-a442931f-f2e9-4102-98c9-7edff9b5db8f/"
                            >
                                Certificado
                            </Link>
                        </li>
                    </ul>
                </article>
            </section>
        </Layout>
    );
};

export default Home;
