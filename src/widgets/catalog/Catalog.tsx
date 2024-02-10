import styles from './Catalog.module.css';
import CategoryCard from '../../entities/category-card/CategoryCard';
import item_image from '../../shared/assets/images/catalog_item.jpg';

const Catalog = () => {

    return(
        <section>

<CategoryCard name="Nike Air Force 1 '07 QS" price="110 $" image={item_image}/>

        <div>
        <h2>Catalog</h2>

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


        <div>
            <div>
                <img src="#" alt="#"/>
<p>Nike Air Force 1 '07 QS</p>
<p>110 $ </p>
            </div>
        </div>

        </section>
    )
}

export default Catalog;