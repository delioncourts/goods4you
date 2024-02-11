import CategoryCard from '../../entities/category-card/CategoryCard';

import item_image from '../../shared/assets/images/catalog_item.jpg'

import styles from './CategoryList.module.css';

const CategoryList = () => {

    return (
        <ul className={styles.list}>
            <CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image} id={1} />
            <CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image} id={2} />
            <CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image} id={3} />
            <CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image} id={4} />
            <CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image} id={5} />
            <CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image} id={6} />
            <CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image} id={7} />
            <CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image} id={8} />
            <CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image} id={9} />
        </ul>
    )
}

export default CategoryList;