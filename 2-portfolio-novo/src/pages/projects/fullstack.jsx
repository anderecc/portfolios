import Layout from '@/components/Layout';
import TypeWrite from '@/components/animated/TypeWrite';
import projectsFullStack from '@/data/projectsFullStack';
import renderProjects from '@/functions/renderProjects';
import React from 'react';
import styles from '../../styles/projects/topics.module.sass';

const FullStack = () => {
    return (
        <Layout title="Projetos Full Stack" projects>
            <section className={styles.title_container}>
                <TypeWrite
                    idToFn="title_projects"
                    text="Projetos Full Stack."
                    nameClass={styles.title}
                />
                <p>
                    Projetos em que utilizei alguma base de dados, construí uma
                    API, com Back End e Front End.
                </p>
                <p>
                    Para testar e entrar em alguma aplicação basta criar uma
                    conta, pode ser email falso. <br />
                    <span>Exemplo: anderson@teste.com</span>
                </p>
            </section>
            <section>
                <ul className={styles.projects_container}>
                    {renderProjects(projectsFullStack, {
                        p: styles.text_about,
                        li: styles.project_content,
                        btn: styles.btn_about,
                        div: styles.about_container,
                        show: styles.show_about,
                        even: styles.even,
                        odd: styles.odd,
                    })}
                </ul>
            </section>
        </Layout>
    );
};

export default FullStack;
