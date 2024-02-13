import { useState } from 'react';
import Accordion from '../../features/Accordion/Accordion';
import styles from './FAQ.module.css';

const faqList: { q: string, a: string }[] = [
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
        <section className={styles.faq}>
            <div className={styles.container}>

       
                <h2 className={styles.title}>FAQ</h2>

                <Accordion faqList={faqList} />
                </div>
     
        </section>
    )
}

export default FAQ;