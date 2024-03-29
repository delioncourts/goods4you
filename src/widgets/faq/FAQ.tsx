import Accordion from '../../features/Accordion/Accordion';
import styles from './FAQ.module.css';


const faqList = [
    {
        q: "Question 1",
        a: "Long answer to the first question"
    },
    {
        q: "Question 2",
        a: "Long answer to the second question"
    },
]

const FAQ = () => {

    return (
        <section className={styles.faq} id="faq">
            <div className={styles.container}>


                <h2 className={styles.title}>FAQ</h2>

                <Accordion elements={faqList} />
            </div>

        </section>
    )
}

export default FAQ;