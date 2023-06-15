import Layout from '@/components/Layout';
import TypeWrite from '@/components/animated/TypeWrite';
import renderProjects from '@/functions/renderProjects';
import React from 'react';
import styles from '../../styles/projects/topics.module.sass';
import projectsBasics from '@/data/projectsBasics';

const Basics = () => {
    return (
        <Layout title="Projetos Front End" projects>
            <section className={styles.title_container}>
                <TypeWrite
                    idToFn="title_projects"
                    text="Projetos Front End."
                    nameClass={styles.title}
                />
                <p>
                    Projetos básicos onde a intenção foi estudar e aprender
                    sobre HTML, CSS e SASS, focado no HTML semântico e na
                    responsividade.
                </p>
            </section>
            <section>
                <ul className={styles.projects_container}>
                    {renderProjects(projectsBasics, {
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

export default Basics;
