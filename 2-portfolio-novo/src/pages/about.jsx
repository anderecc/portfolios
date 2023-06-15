import Layout from '@/components/Layout';
import TypeWrite from '@/components/animated/TypeWrite';
import React from 'react';
import styles from '../styles/about/about.module.sass';

const About = () => {
    return (
        <Layout title="Sobre mim" about>
            <section>
                <article className={styles.about_content}>
                    <TypeWrite
                        idToFn="title_about"
                        text="Quem eu sou?"
                        nameClass={styles.title}
                    />
                    <p>
                        Me chamo Anderson, tenho 21 anos e sou desenvolvedor
                        {' "Full Stack"'}, comecei a estudar programação porque
                        sempre tive muita curiosidade em saber como é feito e
                        como funcionam as {'"coisas"'}. Sou uma pessoa muito
                        ativa, não gosto de ficar com dúvidas, sempre busco
                        aprender algo novo, tanto na areá de programação quanto
                        conhecimentos gerais. Sempre tento ajudar as pessoas ao
                        meu redor com algo que agregue em suas vidas, estou
                        sempre atento em identificar algum problema e já achar
                        uma solução para o mesmo.
                    </p>
                    <p>
                        Sou uma pessoa muito calma e isso me ajuda muito em tudo
                        no dia a dia, me considero uma pessoa muito racional
                        então sempre tento ver todos os lados do que acontece.
                        Sou bastante simpático, raramente tenho alguma desavença
                        com alguém e tenho muita facilidade em me adaptar com
                        pessoas, trabalhos, em aprender e ensinar (quando está
                        ao meu alcance).
                    </p>
                </article>
                <article className={styles.skills_content}>
                    <h3 className="subtitle">
                        Habilidades e competências pessoais
                    </h3>
                    <ul>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Boa comunicação em geral
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Postura profissional, passando confiança e
                                credibilidade
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Proatividade, iniciativa e independência na
                                realização das tarefas
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Muito positivo em geral
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Inteligência emocional para lidar com os
                                desafios diários
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Capacidade de liderança e tomada de decisões
                                assertivas
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Cordialidade e simpatia no trato com as pessoas
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Disposição para o aprendizado e aprimoramento
                                contínuos
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Flexibilidade para aprender e lidar com novas
                                tecnologias
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Raciocínio apurado
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Lógica em geral apurada
                            </p>
                        </li>
                        <li>
                            <p>
                                <span>
                                    <i
                                        className="fa-solid fa-star"
                                        style={{ color: '#f0ce4e' }}
                                    ></i>
                                </span>
                                Racional, cauteloso, responsável, dedicado e
                                educado
                            </p>
                        </li>
                    </ul>
                </article>
            </section>
        </Layout>
    );
};

export default About;
