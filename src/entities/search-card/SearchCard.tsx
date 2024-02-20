
import styles from './SearchCard.module.css';
import image from '../../shared/assets/images/catalog_item.jpg';


type Card = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}

interface SearchCard {
    card: Card | any;
}

const SearchCard: React.FC<SearchCard> = ({ card }) => {
    const { title, price, id } = card;

    return (
        <li className={styles.card} key={id}>
            <img src={image} alt={title} className={styles.image} />
            <p className={styles.title}>{title}</p>
            <p className={styles.price}>{price}</p>
        </li>
    )
}

export default SearchCard;