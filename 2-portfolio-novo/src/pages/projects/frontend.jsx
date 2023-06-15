import Layout from '@/components/Layout';
import TypeWrite from '@/components/animated/TypeWrite';
import projectsFrontEnd from '@/data/projectsFrontEnd';
import renderProjects from '@/functions/renderProjects';
import React from 'react';
import styles from '../../styles/projects/topics.module.sass';

const FrontEnd = () => {
    return (
        <Layout title="Projetos Front End" projects>
            <section className={styles.title_container}>
                <TypeWrite
                    idToFn="title_projects"
                    text="Projetos Front End."
                    nameClass={styles.title}
                />
                <p>
                    Projetos somente Front End onde não utilizei ou construí uma
                    API/Back End, alguns foram utilizados {`API's`} de
                    terceiros.
                </p>
            </section>
            <section>
                <ul className={styles.projects_container}>
                    {renderProjects(projectsFrontEnd, {
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

export default FrontEnd;
