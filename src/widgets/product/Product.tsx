
import { useState, useEffect } from 'react';
import { SINGLE_PRODUCT_URL } from './api/const';
import ProductCard from '../../entities/product-card/ProductCard';
import styles from './Product.module.css';

const Product = () => {
    const [data, setData] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(SINGLE_PRODUCT_URL)
            let responseJson = await response.json();
            setData([responseJson]);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <section className={styles.container}>
            {loading ? <p>Product is loading, please wait</p> :
                data.map((element, index) => {
                    return <ProductCard card={element} key={index} />
                })
            }
        </section>
    )
}

export default Product;