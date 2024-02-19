
import styles from './QuizCard.module.css';
import Checkbox from '../../shared/ui/checkbox/Checkbox';
type TTeamCard = {
    label: string;
}

const QuizCard = ({ label }: TTeamCard) => {

    return (
        <article className={styles.card}>
            <Checkbox label={label} />
        </article>
    )
}

export default QuizCard;