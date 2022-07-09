import Head from "next/head";
import Link from "next/link";

import Header from "../components/header";
import ButtonLink from "../components/buttonLink";
import About from "../components/aboutComponent";
import Footer from "../components/footer";

import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Pizza Client</title>
                <meta name="description" content="A software for Hypixel - Minecraft 1.8.9" />
                <meta property="og:title" content="Pizza Client" />
            </Head>
            <Header page={1} />
            <main>
                <article className={styles.welcome}>
                    <div className={styles['welcoming-text']}>
                        <h1>Welcome to Pizza Client!</h1>
                        <p>Pizza Client is a Software primarily developed for the ever-famous Minecraft (1.8.9) server Hypixel!</p>
                        <div
                            className={styles.line}></div>
                        <div className={styles.btns}>
                            <div>

                                <ButtonLink text="Learn More" href="/about" />
                                <span className={styles['middle-text']}>or enjoy it right away</span>
                            </div>
                            <div>
                                <Link href="https://www.dropbox.com/s/c74hjezftebykqe/PizzaClient1.8.9-v2.3.0.jar?dl=1" className={styles['oilable only on pcdownload-btn']}><span className={styles["secondary-download"]}>Download</span></Link>
                                <span className={styles.disclaimer}>(available only on PC!)</span>

                            </div>
                        </div>
                    </div>
                </article>

                <article className={styles.benefits}>
                    <h1 className={styles.title}>What you will get with our Software</h1>
                    <p className={styles.subtitle}>Our team develops software with all their knowledge and skills</p>
                    <div className={styles.grid}>
                        <div className={styles['grid-item']}>
                            <div className={styles.icon}>
                                <i className="bi bi-pc-display"></i>
                            </div>
                            <div className={styles.info}>
                                <h1>Software</h1>
                                <p>Our team develops software with all their knowledge and skills</p>
                            </div>
                        </div>
                        <div className={styles['grid-item']}>
                            <div className={styles.icon}>
                                <i className="bi bi-controller"></i>
                            </div>
                            <div className={styles.info}>
                                <h1>Optimization</h1>
                                <p>Our product does not affect system performance during operation</p>
                            </div>
                        </div>
                        <div className={styles['grid-item']}>
                            <div className={styles.icon}>
                                <i className="bi bi-diagram-3"></i>
                            </div>
                            <div className={styles.info}>
                                <h1>Development process</h1>
                                <p>You can take an active part in the development by offering your ideas and other things</p>
                            </div>
                        </div>
                    </div>
                </article>
                <About />
                <figure className={styles['software-showcase']}>
                    <h1 className={styles.title}>Software showcase</h1>

                    <video controls>
                        <source src="showcase.mp4" />
                    </video>
                </figure>
            </main>
            <Footer />
        </>
    );
}