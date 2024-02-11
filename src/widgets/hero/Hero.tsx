import GoToShopping from '../../shared/ui/go-to-shopping/GoToShopping';

import styles from './Hero.module.css';

const Hero = () => {

    return (
        <section className={styles.hero}>

            <div className={styles.container}>
                <h1 className={styles.title}>Any products from famous brands <br /> with worldwide delivery</h1>
                <p className={styles.text}>We sell smartphones, laptops, clothes, shoes <br /> and many other products at low prices</p>

                <GoToShopping link={"#catalog"} />

            </div>
        </section>
    )
}

export default Hero;