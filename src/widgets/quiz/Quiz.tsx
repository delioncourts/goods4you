import styles from './Quiz.module.css';

const Quiz = () => {

    return (
        <section>
            <h2 className={styles.heading}>We will select the perfect product for you</h2>
            <p className={styles.subtitle}>Answer three questions and we will send you a catalog with the most suitable products for you.</p>
            <h3 className={styles.question}>What type of product are you considering?</h3>

            <div>

                <img src="#" alt="#" className={styles.img} />


                <input type="checkbox" id="scales" name="scales" checked />
            </div>

            <p className={styles.counter}>1 of 3</p>

            <button>Next step</button>
        </section>
    )
}

export default Quiz;