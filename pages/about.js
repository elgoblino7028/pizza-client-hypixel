import Head from "next/head";

import styles from "../styles/About.module.css";

import Header from "../components/header";
import AboutComponent from "../components/aboutComponent";
import Footer from "../components/footer";

export default function About() {
    return (
        <>
            <Head>
                <title>About the Software - Pizza Client</title>
                <meta name="description" content="More about Pizza Client, Hypixel - Minecraft 1.8.9" />
                <meta property="og:title" content="About the Software - Pizza Client" />
            </Head>
            <Header page={2} />
            <div className={styles.about}>
                <AboutComponent />
                <video controls>
                    <source src="showcase.mp4" />
                </video>
            </div>
            <Footer />
        </>
    );
}