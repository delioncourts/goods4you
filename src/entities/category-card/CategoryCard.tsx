
import styles from './CategoryCard.module.css';

type CategoryCardProps = {
    name: string;
    price: string;
    image: string;
    id: string | number;
}

const CategoryCard = ({name, price, image, id }: CategoryCardProps) => {

    return (
        <li className={styles.card} key={id}>
            <img src={image} alt={name} className={styles.image} />
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>{price}</p>
        </li>
    )
}

export default CategoryCard;