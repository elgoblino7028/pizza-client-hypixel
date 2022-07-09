import Link from "next/link";
import styles from "../styles/ButtonLink.module.css";

export default function ButtonLink(props) {
    return <Link href={props.href}><button className={styles.btn}>{props.text}</button></Link>
}