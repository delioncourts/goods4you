import { Link } from 'react-router-dom';


import styles from './not-found-404.module.css';

const NotFound404 = () => {

    return (
        <section className={styles.component}>
            <h1 className={styles.header}>404</h1>
            <p>It's not you, it's us</p>
            <Link to='/'>Go back on main page</Link>
        </section>
    )
}

export default NotFound404;