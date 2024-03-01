import styles from './ShowMore.module.css';

type TShowMore = {
    link: string;
}

const ShowMore = () => {
    return (
        <button type="button" className={styles.button}>Show more</button>
    );
};


export default ShowMore;