import styles from './About.module.css';


const About = () => {

    return(
        <section className={styles.about}>
       <h2 className={styles.heading}>About us</h2>

       <p className={styles.text}>Every day a person has a choice what to spend his money on. Stores and websites offer an endless list of products. <br />
        But we will help you make the right choice!</p>

        <div className="logo with -"></div>

        <img src="#" alt="#" className={styles.img} />
        </section>
    )
}

export default About;