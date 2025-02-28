import styles from './ProjectCard.module.css'
import chat from '../assets/chat.png'


export default function ProjectCard(props) {
    return (
        <div className={styles['main-container']}>
            <a href={props.link} style={{ textDecoration: 'none' }}>
                <h1>{props.title}</h1>
            </a>
            <img src={props.img} width={500} className={styles['image']} />
            <h4>{props.desc}</h4>
        </div>
    )

}

