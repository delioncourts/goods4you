import clsx from 'clsx';
import styles from './AccordionItem.module.css';
import cross from '../../shared/assets/images/faq_plus.svg';

type TAccordionItem = {
    q: string;
    a: string;
    onClick: () => void;
    isOpen: boolean,
}
const AccordionItem = ({ q, a, onClick, isOpen }: TAccordionItem) => {

    return (
        <li className={styles.list}>
            <button className={styles.question} onClick={() => onClick()} type="button">

                {q}

                <img src={cross} alt="" className={clsx(styles.cross, isOpen && styles.rotate)} />

            </button>

            <div className={clsx(styles.collapse, isOpen && styles.open)}>
                <div className={styles.answer}>{a}</div>
            </div>
        </li>
    )
}

export default AccordionItem;