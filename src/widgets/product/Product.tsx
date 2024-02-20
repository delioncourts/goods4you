
import { useState, useEffect } from 'react';
import { SINGLE_PRODUCT_URL } from './api/const';
import ProductCard from '../../entities/product-card/ProductCard';
import styles from './Product.module.css';

const Product = () => {
    let [data, setData] = useState<string[]>([])

    useEffect(() => {
        async function fetchData() {
            let response = await fetch(SINGLE_PRODUCT_URL)
            let responseJson = await response.json();
            setData([responseJson]);
            console.log(responseJson);
        }
        fetchData();
    }, []);

    return (
        <section className={styles.container}>
            {data.length > 0 ? data.map((element, index) => {
                return <ProductCard card={element} key={index} />
            }) : <div>Product loading... </div>}
        </section>
    )
}

export default Product;