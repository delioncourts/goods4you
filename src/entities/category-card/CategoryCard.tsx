
import styles from './CategoryCard.module.css';
import image from '../../shared/assets/images/catalog_item.jpg';

type CategoryCardProps = {
    name: string;
    price: string;
    image: string;
}

const CategoryCard = ({name, price, image}: CategoryCardProps) => {

    return (
        <div>
            <img src={image} alt={name} className={styles.image} />
            <p className={styles.title}>{name}</p>
            <p className={styles.price}>{price}</p>

        </div>
    )
}

export default CategoryCard;