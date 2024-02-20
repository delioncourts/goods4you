import { useState } from "react";
import styles from './SearchForm.module.css';

const SearchForm = () => {
    const [request, setRequest] = useState('');

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


        </section>
    )
}

export default SearchForm;