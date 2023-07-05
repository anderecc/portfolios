import Layout from '@/components/Layout';
import TypeWrite from '@/components/animated/TypeWrite';
import React from 'react';
import styles from '../../styles/projects/projects.module.sass';
import Link from 'next/link';
import Card from '@/components/widget/Card';

const Projetos = () => {
    return (
        <Layout title="Projetos" projects>
            <TypeWrite
                idToFn="title_projects"
                text="Acesse meus projetos."
                nameClass={styles.title}
            />
            <section className={styles.links_container}>
                <ul>
                    <li>
                        <span>
                            <i className="fa-solid fa-star"></i>
                        </span>
                        <Link href="./projects/fullstack">
                            Projetos Full Stack
                        </Link>
                    </li>
                    <li>
                        <span>
                            <i className="fa-solid fa-star"></i>
                        </span>
                        <Link href="./projects/frontend">
                            Projetos Front End
                        </Link>
                    </li>

                    <li>
                        <span>
                            <i className="fa-solid fa-star"></i>
                        </span>
                        <Link href="./projects/basics">
                            Projetos básicos (js, html, css/sass)
                        </Link>
                    </li>
                </ul>
            </section>
            <section className={styles.projects_container}>
                <h3 className="subtitle">Alguns projetos</h3>
                <ul>
                    <li>
                        <Card
                            link="https://recboy.vercel.app"
                            name="recboy"
                            img="principals/recboy"
                            techs="html sass javascript nextjs redux mongodb jwt"
                        />
                    </li>
                    <li>
                        <Card
                            link="https://locpet.vercel.app"
                            name="locpet"
                            img="principals/locpet"
                            techs="html sass javascript nextjs redux firebase jwt"
                        />
                    </li>
                    <li>
                        <Card
                            link="https://coooder-shop.vercel.app/"
                            name="shop"
                            img="principals/cooodershop"
                            techs="html sass javascript react firebase"
                        />
                    </li>
                    <li>
                        <Card
                            link="https://coooder-users.vercel.app/"
                            name="users"
                            img="principals/coooderusers"
                            techs="html sass javascript react redux firebase"
                        />
                    </li>
                    <li>
                        <Card
                            link="https://projetos-react-anderecc.vercel.app/11-calculator"
                            name="calculadora"
                            img="principals/calculadora"
                            techs="html sass javascript react"
                        />
                    </li>
                    <li>
                        <Card
                            link="https://anderecc.github.io/projetos-javascript/37-dropbox/index.html"
                            name="dropbox"
                            img="principals/dropbox"
                            techs="html css bootstrap javascript firebase"
                        />
                    </li>
                </ul>
            </section>
        </Layout>
    );
};

export default Projetos;
