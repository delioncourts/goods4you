import { useState } from 'react';
import styles from './Accordion.module.css';
import AccordionItem from '../../entities/accordion-item/AccordionItem';


const Accordion = ({ faqList }: any) => {
    const [openId, setId] = useState(null);

    return (
        <ul className={styles.accordion}>
            {faqList?.map((faqItem: any, id: | null ) => {
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