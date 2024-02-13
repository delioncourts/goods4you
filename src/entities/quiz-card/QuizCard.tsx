
import styles from './QuizCard.module.css';
import photo from '../../shared/assets/images/quiz_item.jpg';
import Checkbox from '../../shared/ui/checkbox/Checkbox';
type TTeamCard = {
    label: string;
}

const QuizCard = ({ label }: TTeamCard) => {

    return (
        <article className={styles.card}>
            <img src={photo} alt="" className={styles.image} />
            <Checkbox label={label} />
        </article>
    )
}

export default QuizCard;