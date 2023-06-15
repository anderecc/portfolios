import Head from 'next/head';
import React from 'react';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import ButtonToTop from './widget/ButtonToTop';
import Message from './animated/Message';
import { useSelector } from 'react-redux';
import Loading from './animated/Loading';

const Layout = (props) => {
    const context = useSelector((state) => state.context);
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <Header
                home={props.home}
                about={props.about}
                projects={props.projects}
                contact={props.contact}
            />
            <Message />
            <Container projects={props.projects} contact={props.contact}>
                {props.children}
            </Container>
            {context.loading ? <Loading /> : false}
            <ButtonToTop />
            <Footer />
        </>
    );
};

export default Layout;
