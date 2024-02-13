import NextStep from '../../shared/ui/next-step/NextStep';
import QuizList from '../../features/QuizList/QuizList';
import styles from './Quiz.module.css';

const Quiz = () => {

    return (
        <section className={styles.quiz}>

            <div className={styles.container}>

                <div className={styles.quiz_content}>
                    <h2 className={styles.heading}>We will select the perfect product for you</h2>
                    <p className={styles.subtitle}>Answer three questions and we will send you a catalog with the most suitable products for you.</p>
                    <h3 className={styles.question}>What type of product are you considering?</h3>

                    <div>
                        <QuizList />

                    </div>

                    <div className={styles.bottom}>
                        <p className={styles.counter}>1 of 3</p>
                        <NextStep />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quiz;