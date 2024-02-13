import { useState } from 'react';
import styles from './Accordion.module.css';
import AccordionItem from '../../entities/accordion-item/AccordionItem';

type TFaqItem = {
    q: string;
    a: string;
}

type TList = {
    elements: TFaqItem[];
};


const Accordion = ({ elements }: TList) => {
    const [openId, setId] = useState<number | null>(null);

    return (
        <ul className={styles.accordion}>
            {elements?.map((faqItem, id: number | null) => {
                return (
                    <AccordionItem
                        onClick={() => (id === openId ? setId(null) : setId(id))}
                        q={faqItem.q}
                        a={faqItem.q}
                        isOpen={id === openId}
                        key={id} />
                )
            })}
        </ul >
    )
}

export default Accordion;