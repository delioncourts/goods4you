import Logo from '../../shared/ui/logo/Logo';

import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                <Logo className={styles.logo} />

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
                </ul>

            </div>
        </footer>
    )
}

export default Footer;