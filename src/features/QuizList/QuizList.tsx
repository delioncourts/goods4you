import CategoryCard from '../../entities/category-card/CategoryCard';
import QuizCard from '../../entities/quiz-card/QuizCard';

import item_image from '../../shared/assets/images/catalog_item.jpg'

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