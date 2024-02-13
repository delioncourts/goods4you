import { useState, useRef } from 'react';
import clsx from 'clsx';
import styles from './AccordionItem.module.css';
import cross from '../../shared/assets/images/faq_plus.svg';

const AccordionItem = ({ faqItem, onClick, isOpen }: any) => {

    return (
        <li className={styles.list}>
            <button className={styles.question} onClick={() => onClick()} type="button">

                {faqItem.q}

                <img src={cross} alt="" className={clsx(styles.cross, isOpen && styles.rotate)} />

            </button>

            <div className={clsx(styles.collapse, isOpen && styles.open)}>
                <div className={styles.answer}>{faqItem.a}</div>
            </div>
        </li>
    )
}

export default AccordionItem;