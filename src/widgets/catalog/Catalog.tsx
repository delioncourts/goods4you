import styles from './Catalog.module.css';
import CategoryCard from '../../entities/category-card/CategoryCard';
import CategoryList from '../../features/CategoryList/CategoryList';
import item_image from '../../shared/assets/images/catalog_item.jpg';

const Catalog = () => {

    return(
        <section className={styles.container}>
 <h2 className={styles.title}>Catalog</h2>

<div className={styles.content}>

<div className={styles.category__list}>
<CategoryList />

</div>

</div>

        <div>

        <h3>Selection by parameters</h3>
        <p>Category</p>

        <ul>
            <li>smartphones</li>
            <li>laptops</li>
            <li>sneakers</li>
            <li>sneakers</li>
            <li>sneakers</li>
            <li>sneakers</li>
            <li>sneakers</li>
            <li>sneakers</li>
        </ul>

        <button>Apply</button>
        <button>Reset</button>

        </div>



        </section>
    )
}

export default Catalog;