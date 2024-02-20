import { useState, useEffect } from "react";
import styles from './SearchForm.module.css';
import { SEARCH_AND_SKIP_URL } from './api/const';
import SearchCard from "../../entities/search-card/SearchCard";

const SearchForm = () => {
    const [request, setRequest] = useState('');
    const [products, setProducts] = useState<string[]>([]);

    fetch(SEARCH_AND_SKIP_URL)
        .then((res) => res.json())
        .then((data) => {
            data && data.products
            setProducts(data.products);
        })

    return (
        <section className={styles.container}>
            <h1>All products</h1>

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
                {products.length > 0
                    ? products.map((product) => (
                            <SearchCard card={product} />
                        )) : (
                        <p>Products is loading</p>
                    )}

            </div>
        </section>
    )
}

export default SearchForm;