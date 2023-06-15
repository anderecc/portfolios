import Card from '@/components/widget/Card';
import { useState } from 'react';

export default function renderProjects(data, classes) {
    const [visible, setVisible] = useState('');

    return data?.map((project, index) => {
        return (
            <li
                key={index}
                className={`${classes.li} ${
                    index % 2 === 0 ? classes.even : classes.odd
                }`}
            >
                <Card
                    name={project.name}
                    img={project.image}
                    link={project.url}
                    techs={project.techs}
                />
                <div
                    className={`${classes.div} ${
                        visible === index ? classes.show : ''
                    }`}
                >
                    <button
                        className={classes.btn}
                        onClick={() =>
                            visible === index
                                ? setVisible('')
                                : setVisible(index)
                        }
                    >
                        {visible === index ? 'Fechar sobre' : 'Abrir sobre'}
                    </button>
                    <p className={classes.p}>{project.about}</p>
                </div>
            </li>
        );
    });
}
