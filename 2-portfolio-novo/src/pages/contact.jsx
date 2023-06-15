import Layout from '@/components/Layout';
import TypeWrite from '@/components/animated/TypeWrite';
import React, { useState } from 'react';
import styles from '../styles/contact/contact.module.sass';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import {
    contextSendMessage,
    contextSetMessage,
} from '@/store/actions/contextActions';

const Contato = () => {
    const emailRegex = /\S+@\S+\.\S+/;
    const context = useSelector((state) => state.context);
    const dispatch = useDispatch();

    const [focus, setFocus] = useState('');
    const [message, setMessage] = useState({
        name: '',
        email: '',
        text: '',
    });
    const [textLength, setTextLength] = useState(0);

    const handleCopy = (email) => {
        if (!context.message.visible) {
            navigator.clipboard.writeText(email);
            dispatch(
                contextSetMessage({
                    text: `'${email}' copiado!`,
                    success: true,
                    error: false,
                    visible: true,
                })
            );
        }
    };

    const handleChange = (e, type) => {
        switch (type) {
            case 'user_name':
                if (e.target.value.trim()) {
                    e.target.classList.remove(styles.incorrect);
                    e.target.classList.add(styles.correct);
                    return setMessage({ ...message, name: e.target.value });
                } else {
                    e.target.classList.remove(styles.correct);
                    e.target.classList.add(styles.incorrect);
                    return setMessage({ ...message, name: '' });
                }
            case 'user_email':
                if (e.target.value.trim() && e.target.value.match(emailRegex)) {
                    e.target.classList.remove(styles.incorrect);
                    e.target.classList.add(styles.correct);
                    return setMessage({ ...message, email: e.target.value });
                } else {
                    e.target.classList.remove(styles.correct);
                    e.target.classList.add(styles.incorrect);
                    return setMessage({ ...message, email: e.target.value });
                }
            case 'user_text':
                if (e.target.value.trim()) {
                    setTextLength(e.target.value.length);
                    e.target.classList.remove(styles.incorrect);
                    e.target.classList.add(styles.correct);
                    return setMessage({ ...message, text: e.target.value });
                } else {
                    e.target.classList.remove(styles.correct);
                    e.target.classList.add(styles.incorrect);
                    setTextLength(0);
                    return setMessage({ ...message, text: '' });
                }

            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.name && message.email.match(emailRegex) && message.text) {
            dispatch(contextSendMessage(message, setMessage));
        } else {
            dispatch(
                contextSetMessage({
                    text: 'Verifique se os campos estão preenchidos corretamente.',
                    success: false,
                    error: true,
                    visible: true,
                })
            );
        }
    };

    return (
        <Layout title="Entrar em contato" contact>
            <TypeWrite
                idToFn="title_contact"
                text="Entre em contato comigo."
                nameClass={styles.title}
            />
            <section className={styles.contacts_content}>
                <h4 className="subtitle">Contatos</h4>
                <ul>
                    <li>
                        <p className={styles.whatsapp}>
                            <span>
                                <i className="fa-brands fa-whatsapp"></i>
                            </span>
                            <Link
                                href="https://api.whatsapp.com/send/?phone=5554999466790&text=Olá%20Anderson,%20estou%20entrando%20em%20contato%20pelo%20seu%20portfólio.&type=phone_number&app_absent=0"
                                target="_blank"
                            >
                                (54) 99946-6790
                            </Link>
                        </p>
                    </li>
                    <li>
                        <p className={styles.email}>
                            <span>
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <span
                                className={styles.copy}
                                onClick={() =>
                                    handleCopy('anderson@anderecc.dev.br')
                                }
                            >
                                anderson@anderecc.dev.br
                            </span>
                        </p>
                    </li>
                    <li>
                        <p className={styles.email}>
                            <span>
                                <i className="fa-solid fa-envelope"></i>
                            </span>

                            <span
                                className={styles.copy}
                                onClick={() =>
                                    handleCopy('andersondbl06@gmail.com')
                                }
                            >
                                andersondbl06@gmail.com
                            </span>
                        </p>
                    </li>
                    <li>
                        <p className={styles.linkedin}>
                            <span>
                                <i className="fa-brands fa-linkedin"></i>
                            </span>
                            <span className={styles.linkedin_link}>
                                <Link
                                    href="https://www.linkedin.com/in/andersondb06"
                                    target="_blank"
                                >
                                    @andersondb06
                                </Link>
                            </span>
                        </p>
                    </li>
                    <li>
                        <p className={styles.github}>
                            <span>
                                <i className="fa-brands fa-github"></i>
                            </span>
                            <span className={styles.github_link}>
                                <Link
                                    href="https://github.com/anderecc"
                                    target="_blank"
                                >
                                    @anderecc
                                </Link>
                            </span>
                        </p>
                    </li>
                </ul>
                <article className={styles.curriculum_container}>
                    <h4 className="subtitle">
                        Visualize ou baixe meu currículo
                    </h4>
                    <div>
                        <Link
                            className={styles.btn_curriculum}
                            href="/curriculum/CrAndersonDEV.pdf"
                            target="_blank"
                        >
                            Visualizar
                        </Link>
                        <Link
                            className={styles.btn_curriculum}
                            href="/curriculum/CrAndersonDEV.pdf"
                            download="CrAndersonDEV.pdf"
                            target="_blank"
                            onClick={() =>
                                dispatch(
                                    contextSetMessage({
                                        text: 'Documento baixado com sucesso.',
                                        success: true,
                                        error: false,
                                        visible: true,
                                    })
                                )
                            }
                        >
                            Baixar
                        </Link>
                    </div>
                </article>
            </section>
            <section className={styles.form_container}>
                <h4 className="subtitle">Envie uma mensagem</h4>
                <form action="POST" onSubmit={handleSubmit}>
                    <div className={styles.user_name_content}>
                        <label
                            htmlFor="user_name"
                            id="label_name"
                            className={`${styles.label_name} ${
                                focus === 'user_name' ? styles.focus : ''
                            } ${message.name !== '' ? styles.value : ''}`}
                        >
                            <input
                                type="text"
                                id="user_name"
                                className={styles.user_name}
                                onFocus={() => setFocus('user_name')}
                                onBlur={() => setFocus('')}
                                value={message.name}
                                onChange={(e) => handleChange(e, 'user_name')}
                            />
                        </label>
                    </div>
                    <div className={styles.user_email_content}>
                        <label
                            htmlFor="user_email"
                            className={`${styles.label_email} ${
                                focus === 'user_email' ? styles.focus : ''
                            } ${message.email !== '' ? styles.value : ''}`}
                        >
                            <input
                                type="email"
                                id="user_email"
                                className={styles.user_name}
                                onFocus={() => setFocus('user_email')}
                                onBlur={() => setFocus('')}
                                value={message.email}
                                onChange={(e) => handleChange(e, 'user_email')}
                            />
                        </label>
                    </div>
                    <div className={styles.user_text_content}>
                        <label
                            htmlFor="user_text"
                            className={`${styles.label_text} ${
                                focus === 'user_text' ? styles.focus : ''
                            } ${message.text !== '' ? styles.value : ''}`}
                        >
                            <textarea
                                className={styles.user_text}
                                name="user_text"
                                id="user_text"
                                maxLength={150}
                                onFocus={() => setFocus('user_text')}
                                onBlur={() => setFocus('')}
                                value={message.text}
                                onChange={(e) => handleChange(e, 'user_text')}
                            ></textarea>
                            <span className={styles.text_length}>
                                {textLength}/150
                            </span>
                        </label>
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Enviar"
                            className={styles.btn_submit}
                        />
                    </div>
                </form>
            </section>
        </Layout>
    );
};

export default Contato;
