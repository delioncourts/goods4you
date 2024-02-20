import HeaderSecondary from '../../widgets/header-secondary/HeaderSecondary';
import Product from '../../widgets/product/Product';
import styles from './ProductPage.module.css';

const ProductPage = () => {

    return (
        <section className={styles.component}>
            <HeaderSecondary />
            <Product />
        </section>
    )
}

export default ProductPage;