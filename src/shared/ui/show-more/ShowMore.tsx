import styles from './ShowMore.module.css';

type TShowMore = {
    link: string;
}

const ShowMore = ({ link }: TShowMore) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={styles.button}>Show more</a>
    );
};


export default ShowMore;