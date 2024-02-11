
import styles from './QuizCard.module.css';

type TTeamCard = {
    name: string;
    title: string;
    image: string;
}

const QuizCard = ({ name, title, image }: TTeamCard) => {

    return (
        <article className={styles.image_wrap}>
            <img className={styles.image} src={image} alt={`Team member ${name}`} />

            <div className={styles.image_description}>
                <p className={styles.text_name}>{name}</p>
                <p className={styles.text_title}>{title}</p>
            </div>
        </article>
    )
}

export default QuizCard;