import styles from './Quiz.module.css';

const Quiz = () => {

    return (
        <section>
            <h2>We will select the perfect product for you</h2>
            <p>Answer three questions and we will send you a catalog with the most suitable products for you.</p>
            <h3>What type of product are you considering?</h3>

            <div>

                <img src="#" alt="#" className={styles.img} />


                <input type="checkbox" id="scales" name="scales" checked />
            </div>

            <p>1 of 3</p>

            <button>Next step</button>
        </section>
    )
}

export default Quiz;