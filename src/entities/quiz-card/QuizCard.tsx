
import styles from './QuizCard.module.css';

type TTeamCard = {
    name: string;
    title: string;
    image: string;
}

const QuizCard = ({ name, title, image }: TTeamCard) => {

    return (
        <article className={styles.car}>

        </article>
    )
}

export default QuizCard;