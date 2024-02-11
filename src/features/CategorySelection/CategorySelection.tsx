import Reset from '../../shared/ui/reset/Reset';
import Apply from '../../shared/ui/apply/Apply';
import styles from './CategorySelection.module.css';

const CategorySelection = () => {

    return (
        <div className={styles.selection}>
            <h3 className={styles.title}>Selection <br /> by parameters</h3>
            <p className={styles.text}>Category</p>


            <form action="" method="get" className={styles.form}>

                <ul className={styles.category__list}>
                    <li className={styles.category__item}>smartphones</li>
                    <li className={styles.category__item}>laptops</li>
                    <li className={styles.category__item}>sneakers</li>
                    <li className={styles.category__item}>sneakers</li>
                    <li className={styles.category__item}>sneakers</li>
                    <li className={styles.category__item}>sneakers</li>
                    <li className={styles.category__item}>sneakers</li>
                    <li className={styles.category__item}>sneakers</li>
                </ul>

                <div className={styles.buttons}>
                <Apply />
                <Reset />
                </div>
            </form>


        </div>
    )
}

export default CategorySelection;



