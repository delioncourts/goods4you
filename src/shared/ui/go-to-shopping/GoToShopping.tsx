import styles from './GoToShopping.module.css';

type TGoToShopping = {
    link: string;
}

const GoToShopping = ({ link }: TGoToShopping) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>Go to shopping</a>
    );
};


export default GoToShopping;