import Link from "next/link";
import React from "react";

import styles from "../styles/Header.module.css";

import ButtonLink from "./buttonLink";

export default function Header({ page }) {
    const [active, setActive] = React.useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Pizza Client</Link>
            </div>
            <nav className={`${styles.nav} ${active ? styles.active : ""}`}>
                <ul>
                    <li className={page === 1 ? `${styles.active}` : null}><Link href="/">Home</Link></li>
                    <li className={page === 2 ? `${styles.active}` : null}><Link href="/about">About the Software</Link></li>
                    <li><ButtonLink text="Download" href="https://www.dropbox.com/s/9o1x4pq4tg8zoyj/Pizza%20Client%201.12.2%20v2.4.3.jar?dl=1" /></li>
                </ul>
            </nav>
            <div className={styles.burger} onClick={() => {
                setActive(!active); 
            }}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    );
}