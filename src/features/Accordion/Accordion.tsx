import { useState } from 'react';
import styles from './Accordion.module.css';
import AccordionItem from '../../entities/accordion-item/AccordionItem';

interface MyObject {

    a: string;
    q: string;
}

interface MyExactData {
    [key: string]: MyObject;
}


const Accordion = ({ faqList }: any) => {
    const [openId, setId] = useState(null);

    return (
        <ul className={styles.accordion}>
            {faqList?.map((faqItem: any, id: any) => {
                return (
                <AccordionItem 
                onClick={() => (id === openId ? setId(null) : setId(id))}
                faqItem={faqItem} 
                isOpen={id === openId} 
                key={id}/>
                )
            })}
        </ul >
    )
}

export default Accordion;