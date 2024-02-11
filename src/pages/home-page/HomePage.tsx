import About from "../../widgets/about/About";
import Catalog from "../../widgets/catalog/Catalog";
import FAQ from "../../widgets/faq/FAQ";
import Footer from "../../widgets/footer/Footer";
import Header from "../../widgets/header/Header";
import Hero from "../../widgets/hero/Hero";
import Quiz from "../../widgets/quiz/Quiz";
import Team from "../../widgets/team/Team";

import styles from './HomePage.module.css';

const HomePage = () => {

    return (
        <>
            <Header />
            <main className={styles.main}>
            <Hero />
            <Catalog />
            <Team />
            </main>
            {/* 
        <Catalog />
        <About />
        <Quiz />
        <Team />
        <FAQ />
        <Footer />
    */}
        </>
    )
}

export default HomePage;