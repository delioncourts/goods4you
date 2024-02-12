import styles from './FAQ.module.css';

const FAQ = () => {

    return(
        <section className={styles.faq}>
            <div className={styles.container}>
        <h2>FAQ</h2>

        <p>Question 1</p>
        <p>Long answer to the first question</p>

        <p>Question 2</p>
        <p>Long answer to the second question</p>
        </div>
        </section>
    )
}

export default FAQ;