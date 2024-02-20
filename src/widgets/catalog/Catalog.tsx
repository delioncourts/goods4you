import styles from './Catalog.module.css';
import CategorySelection from '../../features/CategorySelection/CategorySelection';
import CategoryList from '../../features/CategoryList/CategoryList';
import ShowMore from '../../shared/ui/show-more/ShowMore';


const Catalog = () => {

    return (
        <section className={styles.container} id='catalog'>
            <h2 className={styles.title}>Catalog</h2>

            <div className={styles.content}>
                <CategorySelection />

                <div className={styles.category__list}>
                    <CategoryList />

                    <ShowMore />
                </div>
            </div>
        </section>
    )
}

export default Catalog;