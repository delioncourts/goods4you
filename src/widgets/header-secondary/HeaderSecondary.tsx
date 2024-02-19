import { Link } from 'react-router-dom';

import styles from './HeaderSecondary.module.css';

import Logo from '../../shared/ui/logo/Logo';

const HeaderSecondary = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Logo className={styles.logo} />


                <Link to="/" className={styles.link}>Back to site</Link>
            </div>
        </header>
    )
}

export default HeaderSecondary;