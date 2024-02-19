import styles from './Header.module.css';

import Logo from '../../shared/ui/logo/Logo';

import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo className={styles.logo} />

                <nav className={styles.nav}>
                    <ul className={styles.links}>

                        <li>
                            <button
                                className={styles.link}
                                onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
                                Catalog
                            </button>
                        </li>
                        <li>
                            <button
                                className={styles.link}
                                onClick={() => document.getElementById('aboutus')?.scrollIntoView({ behavior: 'smooth' })}>
                                About us
                            </button>
                        </li>

                        <li>
                            <button
                                className={styles.link}
                                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                                Product selection
                            </button>
                        </li>
                        <li>
                            <button
                                className={styles.link}
                                onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}>
                                Our team
                            </button>
                        </li>
                        <li>
                            <button
                                className={styles.link}
                                onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>
                                FAQ
                            </button>
                        </li>
                        <li>
                            <Link to='/search' className={styles.link}>For staff</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;