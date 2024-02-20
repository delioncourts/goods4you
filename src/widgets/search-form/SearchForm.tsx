import { useState, useEffect } from "react";
import styles from './SearchForm.module.css';
import { SEARCH_AND_SKIP_URL } from './api/const';
import SearchCard from "../../entities/search-card/SearchCard";
import ShowMore from "../../shared/ui/show-more/ShowMore";


const SearchForm = () => {
    const [request, setRequest] = useState('');
    const [products, setProducts] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);
    const [cardsPerPage] = useState(9);

    fetch(SEARCH_AND_SKIP_URL)
        .then((res) => res.json())
        .then((data) => {
            data && data.products
            setProducts(data.products);
            setLoading(false);
        })

    return (
        <section className={styles.container}>
            <h1 className={styles.heading}>All products</h1>

            <form className={styles.form} noValidate>
                <input className={styles.search_input}
                    type="text"
                    name="request"
                    placeholder="Search by title"
                    required />
                <button
                    className={styles.button}
                    type="submit"
                    aria-label="search products">
                    Search
                </button>
            </form>


            <div className={styles.list}>
                {loading ? <p>Products is loading, please wait</p> :
                    products.map((product) => (
                        <SearchCard card={product} />
                    ))
                }
            </div>

            <ShowMore />
        </section>
    )
}

export default SearchForm;