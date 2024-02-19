import styles from './About.module.css';
import photo from '../../shared/assets/images/aboutus_photo.png';
import cite from '../../shared/assets/images/cite.svg';

const About = () => {

    return (
        <section className={styles.about} id='aboutus'>
            <div className={styles.container}>
                <div className={styles.text_content}>
                    <h2 className={styles.heading}>About us</h2>

                    <p className={styles.text}>Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products. <br />
                        But we will help you make the right choice!</p>

                    <img src={cite} alt="Good4You quote" className={styles.cite} />
                </div>
                <img src={photo} alt="man in orange socks" className={styles.img} />
            </div>
        </section>
    )
}

export default About;