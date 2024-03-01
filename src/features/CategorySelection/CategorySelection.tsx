import { useState, useEffect } from 'react';
import Reset from '../../shared/ui/reset/Reset';
import Apply from '../../shared/ui/apply/Apply';
import styles from './CategorySelection.module.css';
import { PRODUCTS_CATEGORIES_URL } from './api/const';

const CategorySelection = () => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        fetch(PRODUCTS_CATEGORIES_URL)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div className={styles.selection}>
            <h3 className={styles.title}>Selection <br /> by parameters</h3>
            <p className={styles.text}>Category</p>


            <form action="" method="get" className={styles.form}>

                <ul className={styles.category__list}>
                    {products.map((item, index) => (
                        <li className={styles.category__item} key={index} value={item}>{item}</li>
                    ))}
                </ul>

                <div className={styles.buttons}>
                    <Apply/>
                    <Reset />
                </div>
            </form>


        </div>
    )
}

export default CategorySelection;



