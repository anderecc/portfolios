import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card';
import Content from '../../components/Content';
import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import Loading from '../../components/Loading';
import { AppContext } from '../../context';
import styles from '../../styles/Projetos.module.sass';

export default function Projetos(props) {
    let { state, handleLoading } = useContext(AppContext);

    return (
        <Layout page={'projetos'} title={'Projetos'}>
            {state.loading ? (
                <Loading letras="Projetos" />
            ) : (
                <Content>
                    <p className={styles.text}>Acesse: </p>
                    <Link href={'/projetos/projetos-Javascript'}>
                        <a className={styles.link}>Projetos com Javascript</a>
                    </Link>
                    <Link href={'/projetos/projetos-React'}>
                        <a className={styles.link}>Projetos com React</a>
                    </Link>
                    <Link href={'/projetos/projetos-Html-Css-Sass'}>
                        <a className={styles.link}>
                            Projetos com Html, Css e Sass
                        </a>
                    </Link>
                    <div className={styles.container}>
                        <h3 className={styles.title}>
                            Esses são alguns de meus projetos
                        </h3>
                        <div className={styles.content}>
                            <Card
                                title="Coooder Shop"
                                link="https://coooder-shop.vercel.app/"
                                image="/images/projetos-react/16-coooder-shop.png"
                            />
                            <Card
                                title="Coooder Users"
                                link="https://coooder-users.vercel.app/"
                                image="/images/projetos-react/17-coooder-users.png"
                            />
                            <Card
                                title="Calculator"
                                link="https://projetos-react-psi.vercel.app/11-calculator"
                                image="/images/projetos-react/11-calculator.png"
                            />
                            <Card
                                title="Menu-restaurant"
                                link="https://projetos-react-psi.vercel.app/6-menu-restaurant"
                                image="/images/projetos-react/6-menu-restaurant.png"
                            />
                            <Card
                                title="Cocktails"
                                link="https://projetos-react-psi.vercel.app/14-cocktails"
                                image="/images/projetos-react/14-cocktails.png"
                            />
                            <Card
                                title="Fylo-landing-page"
                                link="https://anderecc.github.io/projetos-html-css-sass/9-fylo-landing-page/index.html"
                                image="/images/projetos-html-css-sass/9-fylo-landing-page.png"
                            />
                            <Card
                                title="Electrum-ecommerce"
                                link="https://anderecc.github.io/projetos-html-css-sass/12-electrum-ecommerce/index.html"
                                image="/images/projetos-html-css-sass/12-electrum-ecommerce.png"
                            />
                            <Card
                                title="Potions-shop"
                                link="https://anderecc.github.io/projetos-javascript/30-potions-shop/"
                                image="/images/projetos-javascript/30-potions-shop.png"
                            />
                            <Card
                                title="Sneaker-ecommerce"
                                link="https://anderecc.github.io/projetos-javascript/34-sneaker-ecommerce/public/index.html"
                                image="/images/projetos-javascript/34-sneaker-ecommerce.png"
                            />
                        </div>
                    </div>
                </Content>
            )}
        </Layout>
    );
}
