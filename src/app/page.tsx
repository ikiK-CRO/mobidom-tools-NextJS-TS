import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className={[styles.header, styles.center].join(" ")}>
        <h1>Hello, Index/Login page!</h1>
        <Link href="/indexpage">Log in</Link>
      </div>
    </div >
  );
}
