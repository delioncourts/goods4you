import QuizCard from '../../entities/quiz-card/QuizCard';

import styles from './QuizList.module.css';

const QuizList = () => {

    return (
        <article className={styles.list}>
            <QuizCard label="sneakers" />
            <QuizCard label="sneakers" />
            <QuizCard label="sneakers" />
            <QuizCard label="sneakers" />
            <QuizCard label="sneakers" />
            <QuizCard label="sneakers" />
        </article>
    )
}

export default QuizList;